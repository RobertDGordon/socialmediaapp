const express = require('express')
const router = express.Router()

// display all posts
router.get('/posts', (req, res)=>{
  res.status(200).json( {result: 'List the users main feed'})
})

module.exports = router;