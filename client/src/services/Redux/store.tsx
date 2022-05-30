import { configureStore } from '@reduxjs/toolkit'
import postSlicer from './postSlicer'

const store = configureStore({
  reducer: { posts: postSlicer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
