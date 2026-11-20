const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  console.log("We received a request on Register Route");
  const sampleData = {
    message : "Hello World"
  }
  res.json(sampleData);
});

module.exports = router;

//express is the Express module we imported
//Router() is a method provided by Express
