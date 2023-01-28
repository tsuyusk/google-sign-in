import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { User as FirebaseUser } from 'firebase/auth'
import { api } from '../../../services/api'

interface User {
  id: number
  email: string
  displayName: string
}

interface InitialState {
  user: User | null
  token: string | null
  isLoggedIn: boolean
}

function getInitialState(): InitialState {
  const user = localStorage.getItem('@/GAuth/user')
  const token = localStorage.getItem('@/GAuth/token')

  const isLoggedIn = !!user && !!token

  return {
    user: user ? JSON.parse(user) : null,
    token: token ? JSON.parse(token) : null,
    isLoggedIn
  }
}

const initialState = getInitialState()

export interface AuthUser extends FirebaseUser {
  accessToken: string
}

export const signIn = createAsyncThunk(
  'user/signIn',
  async (userData: AuthUser) => {
    const response = await api.post('/auth', {
      token: userData.accessToken
    })

    return response.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOff: state => {
      localStorage.removeItem('@/GAuth/user')
      localStorage.removeItem('@/GAuth/token')

      state.user = null
      state.token = null
      state.isLoggedIn = false
    }
  },
  extraReducers: builder => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      const { token, user } = action.payload

      const bearerToken = `Bearer ${token}`
      api.defaults.headers.authorization = bearerToken

      localStorage.setItem('@/GAuth/user', JSON.stringify(user))
      localStorage.setItem('@/GAuth/token', JSON.stringify(token))

      state.user = user
      state.isLoggedIn = true
    })
  }
})

interface State {
  user: InitialState
}

export const getUser = (state: State) => state.user.user
export const getIsLoggedIn = (state: State) => state.user.isLoggedIn

export const { signOff } = userSlice.actions
export const userReducer = userSlice.reducer
