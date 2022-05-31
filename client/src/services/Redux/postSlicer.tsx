import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormI } from '../../interface/posts'

const initialState: FormI[] = []

export const postSlice = createSlice({
  name: 'postSlicer',
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<[FormI]>) => {
      return [...action.payload]
    },
    likePosts: (state) => {
      state
    },
    createPost: (state, action: PayloadAction<FormI>) => {
      return [...state, action.payload]
    },
    updatePost: (state, action: PayloadAction<FormI>) => {
      state
    },
    deletePost: (state, action: PayloadAction<FormI>) => {
      state
    },
  },
})

// Action creators are generated for each case reducer function
export const { getPosts, likePosts, createPost, updatePost, deletePost } =
  postSlice.actions

export default postSlice.reducer
