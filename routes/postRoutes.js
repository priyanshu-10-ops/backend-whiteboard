//Handler
const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
  res.send('Hello World from POST');
});

router.post('/', (req, res) => {
  res.send('Got a POST request from POST');
});


//Export Router
module.exports = router;