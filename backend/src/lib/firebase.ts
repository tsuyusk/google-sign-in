import admin from 'firebase-admin'
import { getAuth } from 'firebase-admin/auth'
import { firebaseCredentials } from '../@config/firebase-credentials'

admin.initializeApp({
  credential: admin.credential.cert(firebaseCredentials as any)
})

export const auth = getAuth()
