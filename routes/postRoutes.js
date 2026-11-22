//Handler
const express = require('express');
const {createPost, getPosts} = require('../controllers/postController'); 
//destructure objects
const router = express.Router(); 

router.get('/', (req, res) => {
  getPosts(req, res);
});

router.post('/', (req, res) => {
  createPosts(req, res);
});


//Export Router
module.exports = router;