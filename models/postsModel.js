const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
  title: {
    type: String,          // The name must be a string
    required: true,        // This field is mandatory
    trim: true,            // Removes extra spaces from the name
    maxLength: 200
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  numberOfLikes: {
    type: Number,
    default: 0
  },  
},
{
  timestamps: true,
  collection: 'test'
}
);

//Creating static methods 
//'this' keyword is required when we write the keyword function
postSchema.statics.createPost = async function(title, content){
  try{  
    const post = new this({
      title,
      content
    });
    return post.save();
  }
  catch (error){
    throw new Error('Error creating posts: ' + error.message);
  }
}
//We are teaching the future Model how to create and save a Post

postSchema.statics.getPosts = async function (title, content){
  try{
    return this.find();
  }
  catch (error) {
     throw new Error ('Error getting new posts: '+error.message);
  }
}
//We are teaching the future Model how to retrieve Posts

const postsModel = mongoose.model('Posts', postsSchema); //Mongoose creates a Model using this Schema
module.exports = postsModel;