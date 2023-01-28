import { useCallback } from 'react'
import { getAuth, signInWithPopup } from 'firebase/auth'

import { app, authProvider } from '../../firebase/app'
import { AuthUser, signIn } from '../../redux/features/user/user-slice'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

export function SignIn() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const handleSignIn = useCallback(async () => {
    const auth = getAuth(app)

    const result = await signInWithPopup(auth, authProvider)
    const gUser = result.user as AuthUser

    dispatch(
      signIn(gUser),
    )
  }, [dispatch])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-800">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md transition-all duration-150 cursor-pointer hover:bg-blue-700"
        onClick={handleSignIn}
      >
        Sign In With Google
      </button>
    </div>
  )
}

