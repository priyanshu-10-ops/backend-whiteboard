//Handler
const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
  res.send(res.customData + 'Hello World from User Route');
});

router.post('/', (req, res) => {
  res.send('Got a post request from the User');
});


//Export Router
module.exports = router;