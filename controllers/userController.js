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


const loginUser = async (req, res) => {
  try {
    // Extract email and password
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Authenticate user through model method
    const user = await userModel.login(email, password);

    // Return successful response
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
      }
    });

  } catch (error) {
    res.status(401).json({
      message: error.message
    });
  }
};



module.exports = {
  registerUser,
  loginUser
}

//This means we're exporting an object containing a property called registerUser
//Multiple objects can come using comma

//Equivalent to this
// module.exports = {
//     registerUser: registerUser
// };