const express = require('express')
const router = express.Router()

const feedController = require('../controllers/feedController'); //import feed controller

// display all posts http://localhost:3000/feed/posts
router.get('/posts', (req, res)=>{
  feedController.getPosts(req, res) //route traffic to getPosts controller
})

// get a post a post by id http://localhost:3000/feed/posts/4
router.get('/posts/:id', (req, res) => {
  feedController.getPostById(req, res) //route traffic with :id to getPostsById controller
})

// get a post a post by id http://localhost:3000/feed/posts/title/:title
router.get('/posts/title/:title', (req, res) => {
  feedController.getPostByTitle(req, res) //route traffic with :title to getPostsByTitle controller
})


//route to create a post http://localhost:3000/feed/posts/add
router.post('/posts/add', (req, res) => {
  feedController.addPost(req, res)
})

module.exports = router;