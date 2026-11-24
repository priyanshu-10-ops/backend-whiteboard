const {registerUser, loginUser} = require('../controllers/userController'); 
//destructuring registerUser from an object exported by userController.js

const router = require('express').Router();
router.post('/register', registerUser);

router.post('/login', loginUser);

module.exports = router;