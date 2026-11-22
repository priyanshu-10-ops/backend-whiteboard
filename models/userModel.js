const mongoose = require('mongoose'); //Import Mongoose
const bcrypt = require('bcrypt'); //Import brcrypt for password hashing
const validator = require('validator'); //Import validator for email and password validation

//Create Schema
const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },

  email: { 
    type: String, 
    required: true, 
    unique: true 
  },

  password: { 
    type: String, 
    required: true,
    required: true
  }
}, {
  timestamps: true,
  collection: 'users'
});


// Define static methods: register(), getUsers(), login()
// Receive the user's name, email and password.
// Create a new user document.
// Save that document in MongoDB.
// Return the newly created user.


userSchema.statics.register = async function (name, email, password) {
  try {

    // 1. Check if email is valid
    if (!validator.isEmail(email)) {
      throw new Error('Please enter a valid email');
    }

    // 2. Check password strength
    if (!validator.isStrongPassword(password)) {
      throw new Error('Password is not strong enough');
    }

    // 3. Generate salt (10 rounds)
    const salt = await bcrypt.genSalt(10);

    // 4. Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // 5. Create a new user with the hashed password
    const user = new this({
      name,
      email,
      password: hashedPassword
    });

    // 6. Save user in database
    const newUser = await user.save();

    return newUser;

  } catch (error) {
    throw new Error('Error registering user: ' + error.message);
  }
};


userSchema.statics.getUsers = async function (){
  try{
    const users = await this.find();
    return users;
  }
  catch (error) {
    throw new Error('Error getting Users' + error.message);
  }
}

userSchema.statics.login = async function (email, password){
  try{
    const user = await this.findOne({email, password});
    if(!user){
      throw new Error('Invalid Login Credentials');
    }
    return user;
  } 
  catch (error){
    throw new Error('Error Logging in ' + error.message);  
  }
}


//Create a model
const User = mongoose.model('User', userSchema);

//Export model
module.exports = User; 
//'User' can be called inside a controller and all the three functions can be used. const User = require('../models/userModel');


// Why Model? 
// Model gives us the ability to interact with the MongoDB collection. Schema defines what a document should look like