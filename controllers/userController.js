const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

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

    // Generate JWT token
    const token = jwt.sign(
      {
        email: user.email //payload
      },
      process.env.JWT_SECRET,
    );

    // Return successful response
    res.status(200).json({
      message: "Login successful",
      token: token,
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

const getUserProfile = async (req, res) => {
  try {
    // 1. Extract token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        message: "Authorization token required"
      });
    }

    // 2. Extract the actual JWT (remove 'Bearer ')
    const token = authHeader.split(' ')[1];

    // 3. Verify and decode the JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Extract email from decoded token
    const email = decoded.email;

    // 5. Fetch user profile using email
    const user = await userModel.getUser(email);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // 6. Return user profile
    return res.status(200).json({
      message: "User profile fetched successfully",
      user
    });

  }
  catch (error) {
    return res.status(401).json({
      message: error.message
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile
}

//This means we're exporting an object containing a property called registerUser
//Multiple objects can come using comma

//Equivalent to this
// module.exports = {
//     registerUser: registerUser
// };