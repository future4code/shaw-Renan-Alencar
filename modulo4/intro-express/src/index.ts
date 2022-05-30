import express from "express";
import cors from "cors";
import {Users, Posts} from './data'

const app = express();

app.use(express.json());
app.use(cors());

// 1.
app.get("/", (req, res) => {          
  res.send("Hello")
})


// 2.
app.get("/users", (req, res) => {          
  const allUsers = Users.map((user) => {
    return user
  })
  res.send(allUsers)
})

// 5.
app.get("/posts", (req, res) => {          
  const allPosts = Posts.map((post) => {
    return post
  })
  res.send(allPosts)
})

// 8.
app.get("/posts/:userId", (req, res) => {      
  
  const userId = req.params.userId;

  const postUser = Posts.filter((post) => {
    return post.userId === parseInt(userId)
  })
  res.send(postUser)
})

// Desafios

// 9.

app.delete("/posts/:id", (req, res) => {      
  
  const userId = req.params.id;

  const deletePosts = Posts.filter((post) => {
    return post.id !== parseInt(userId)
  })
  res.send(deletePosts)
})

// 10. 
app.delete("/users/:id", (req, res) => {      
  
  const id = req.params.id;

  const deleteUser = Users.filter((user) => {
    return user.id !== parseInt(id)
  })
  res.send(deleteUser)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});