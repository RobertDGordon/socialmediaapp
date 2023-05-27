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

  //add post
  addPost(data){
    this.#log(data.title)
    const newId = `${posts.length + 1}` //creates a new id based on the length of the array, set as string
    const newUrl = data.imgUrl ? data.imgUrl : "https://placehold.co/400x300" //ternary statement, if data.imgUrl, then use first block, else use second block
    const newPost = {
      id: newId, //sets the id to newId
      ...data, //uses spread operator to "spread" data key/value pairs into a new object
      imgUrl: newUrl, //add the new image url
    }

    posts.push(newPost) //push newPost into the array
    return posts.length //return the length of the new array
  }

}

module.exports = Database;