import 'dotenv/config'
import { verifyEnv } from './utils/verifyEnv'

verifyEnv()

import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { sign } from 'jsonwebtoken'
import { User } from '@prisma/client'

import { prisma } from './lib/prisma'
import { auth } from './lib/firebase'
import { JwtConfig } from './@config/jwt'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/auth', async (request, response) => {
  const { token: signInToken } = request.body

  const gUser = await auth.verifyIdToken(signInToken)

  if (!gUser.email) {
    return response.status(400).json({ error: 'Invalid Account Type' })
  }

  let user: User | null

  user = await prisma.user.findFirst({
    where: {
      email: gUser.email
    }
  })

  if (!user) {
    user = await prisma.user.create({
      data: {
        displayName: gUser.name,
        email: gUser.email
      }
    })
  }

  const { key } = JwtConfig

  const token = sign({}, key, { subject: String(user.id) })

  return response.json({
    user,
    token
  })
})

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
  console.log(`server on *:${PORT}`)
})
