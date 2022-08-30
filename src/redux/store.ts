import { configureStore } from '@reduxjs/toolkit'

import cards from './cards/slice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: { cards }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();