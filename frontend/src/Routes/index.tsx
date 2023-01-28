import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { Home } from '../pages/Home'
import { NonSignedInOnly, SignedInOnly } from './Wrappers'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NonSignedInOnly>
        <SignIn />
      </NonSignedInOnly>
    ),
  },
  {
    path: "/home",
    element: (
      <SignedInOnly>
        <Home />
      </SignedInOnly>
    ),
  },
])

export function Routes() {
  return (
    <RouterProvider router={router} />
  )
}
