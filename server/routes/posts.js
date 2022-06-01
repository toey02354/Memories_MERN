import express from 'express'
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
} from '../controllers/posts.js'

const router = express.Router()

// http://localhost:5000/posts
router.get('/', getPosts)
router.post('/', createPosts)
router.patch('/update/:id', updatePost)
router.delete('/delete/:id', deletePost)

export default router
