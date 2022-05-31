import mongoose from 'mongoose'
import PostMessage from '../models/postsMessage.js'

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    res.status(200).json(postMessages)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const createPosts = async (req, res) => {
  const post = req.body
  const newPost = new PostMessage(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (err) {
    res.status(409).json({ message: err.message })
  }
}
export const updatePost = async (req, res) => {
  const { id: _id } = req.param
  const post = res.body
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).message('No Post with that id')
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  })
  res.status(200).json(updatedPost)
}
export const deletePost = async (req, res) => {
  const { id: _id } = req.param
  const post = res.body
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).message('No Post with that id')
  }
  const updatedPost = await PostMessage.findByIdAndDelete(_id, post, {
    new: true,
  })
  res.status(200).json(updatedPost)
}
