import mongoose from 'mongoose'
import PostMessage from '../models/postsMessage.js'

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    console.log('Get Posts')
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
    console.log('Created a Post')
    res.status(201).json(newPost)
  } catch (err) {
    res.status(409).json({ message: err.message })
  }
}
export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  const post = req.body
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).message('No Post with that id')
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  })
  console.log('Update a Post')
  res.json(updatedPost)
}

export const deletePost = async (req, res) => {
  const { id: _id } = req.params
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).message('No Post with that id')
  }
  console.log('Delete a Post')
  const updatedPost = await PostMessage.findByIdAndDelete(_id)
  res.json(updatedPost)
}
