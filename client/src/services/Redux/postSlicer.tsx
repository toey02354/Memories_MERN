import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormI } from '../../interface/posts'
import Axios from '../../api/Axios'

const initialState: FormI[] = []

export const postSlice = createSlice({
  name: 'postSlicer',
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<[FormI]>) => {
      console.log('Store updated, Get All Posts')
      return [...action.payload]
    },
    likePosts: (state) => {
      state
    },
    createPost: (state, action: PayloadAction<FormI>) => {
      console.log('Store updated, Create A Post')
      return [...state, action.payload]
    },
    updatePost: (state, action: PayloadAction<FormI>) => {
      return state.map((state) =>
        state._id === action.payload._id ? action.payload : state
      )
    },
    deletePost: (state, action: PayloadAction<FormI>) => {
      return state.filter((state) => state._id !== action.payload._id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { getPosts, likePosts, createPost, updatePost, deletePost } =
  postSlice.actions

export default postSlice.reducer
