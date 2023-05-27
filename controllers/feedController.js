const Database = require("../libraries/databaseLib")

const db = new Database()

//function to get all posts
const getPosts = (req, res) =>{
  const data = db.posts() //calls database to get all posts
  res.status(200).json({ result: data })//sets status code to 200 and returns the result
}

//function to get post by id

const getPostById = (req, res) => {
  const id = req.params.id //extract id from params
  const data = db.postsById(id)

  if(data.length > 0){ //if result exists, return result
    res.status(200).json({ result: data })
  }else { //else result does note exist, return error 404
    res.status(404).json({ error: `Post ${id} not found`})
  }
  
}

module.exports = {
  getPosts,
  getPostById
}