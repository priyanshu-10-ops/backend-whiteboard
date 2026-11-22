const userModel = require('../models/userModel');

const registerUser = async(req, res) => {
  try{
    const {name, email, password} = req.body;
    const newUser = await userModel.register(name, email, password);
    res.status(201).json(newUser); //201- Created
  }
  catch (error){
    res.status(400).json({message: error.message});
  }
}

module.exports = {
  registerUser
}

//This means we're exporting an object containing a property called registerUser
//Multiple objects can come using comma

//Equivalent to this
// module.exports = {
//     registerUser: registerUser
// };