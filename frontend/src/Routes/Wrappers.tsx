import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getIsLoggedIn } from '../redux/features/user/user-slice'

interface WrapperProps {
  children: React.ReactNode
}

export function NonSignedInOnly({ children }: WrapperProps) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();

  if (isLoggedIn) {
    return <Navigate to="/home" state={{ from: location }} />
  }

  return (
    <>
      {children}
    </>
  )
}

export function SignedInOnly({ children }: WrapperProps) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />
  }

  return (
    <>
      {children}
    </>
  )
}
