import express from 'express'

const router = express.Router()

// http://localhost:5000/posts
router.get('/', (req, res) => {
  res.status(200).send({ message: 'This works!' })
})

export default router
