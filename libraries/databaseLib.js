const postsData = require("../data/postsData.js") //import postsData
const posts  = postsData.posts //extract posts from import


//this is an example library that pretends it connects to a database
class Database {
  constructor(){
    this.id = Date.now()
  }

  #log = (value) => {
    console.log(`[Database: ${this.id}]: ${value}`)
  }
  
  //returns all posts
  posts(){
    this.#log("all")
    return posts
  }

  //returns post by id
  postsById(id){
    this.#log(id)
    const result = posts.filter((post) => {
      if(post.id === id){
        return post
      }
    })
    return result
  }

}

module.exports = Database;