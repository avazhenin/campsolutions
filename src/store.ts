import { configureStore } from '@reduxjs/toolkit'
import { baseSlice } from './store/main';
import { themeSlice } from './store/theme';
// ...

const store = configureStore({
  reducer: {
    [baseSlice.name]: baseSlice.reducer,
    [themeSlice.name]: themeSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;