const express = require('express')
const router = express.Router()

const feedController = require('../controllers/feedController'); //import feed controller

// display all posts
router.get('/posts', (req, res)=>{
  feedController.getPosts(req, res) //route traffic to getPosts controller
})

router.get('/posts/:id', (req, res) => {
  feedController.getPostById(req, res) //route traffic with :id to getPostsById controller
})

router.post('/posts/add', (req, res) => {
  feedController.addPost(req, res)
})

module.exports = router;