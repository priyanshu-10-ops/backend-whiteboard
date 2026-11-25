const {registerUser, loginUser, getUserProfile} = require('../controllers/userController'); 
//destructuring registerUser from an object exported by userController.js

const router = require('express').Router();
router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/profile', getUserProfile);

module.exports = router;