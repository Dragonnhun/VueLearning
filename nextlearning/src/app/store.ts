import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import darkModeReducer from '../features/darkMode/darkModeSlice'
import interfaceReducer from '../features/interface/interfaceSlice'
import userDataReducer from '../features/userData/userDataSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      darkMode: darkModeReducer,
      interface: interfaceReducer,
      userData: userDataReducer
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
