import { configureStore } from '@reduxjs/toolkit'
import portfolioSlice from './slice/portfolioSlice'

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch