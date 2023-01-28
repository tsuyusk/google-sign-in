import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './features/user/user-slice'
import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: [thunkMiddleware]
})

type GetStateType = typeof store.getState

export type RootState = ReturnType<GetStateType>
