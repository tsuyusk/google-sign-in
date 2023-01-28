import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { JwtConfig } from '../@config/jwt'

export async function authRequired(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const header = request.headers.authorization
  if (!header) {
    throw new Error('Missing header')
  }

  const [, token] = header?.split(' ')

  const { key } = JwtConfig

  try {
    const decoded = verify(token, key)

    const { sub } = decoded

    if (typeof sub !== 'string') {
      throw new Error()
    }

    request.user = {
      id: sub
    }

    return next()
  } catch (error) {
    throw new Error('Auth Error')
  }
}
