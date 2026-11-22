//Business Logic

const postsModel = require('../models/postModel');
const Posts = require('../models/postModel');

const createPost = async (req, res) => {
  try{
    const {title, content} = req.body;
    const newPost = await Posts.createPost(title, content);
    res.status(201).json(newPost);
  }
  catch (error) {
    res.status(500).json({error: error.message});
  }
}

const getPosts = async (req, res) => {
  try{
    const posts = await Posts.getPosts();
    res.status(200).json(posts);
  }
  catch (error){
    res.status(500).json({error: error.message});
  }
}

//passing as objects
module.exports = {
  createPost,
  getPosts
}
