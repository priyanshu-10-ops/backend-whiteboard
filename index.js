require('dotenv').config();

//Using express
const express = require('express');
const app = express();
const cors  = require('cors');

const userRoute = require('./routes/userRoute'); //For userModel
const canvasRoute= require('./routes/canvasRoute'); 

//Examples
const userRoutes = require('./routes/userRoutes');  //route
const postRoutes = require('./routes/postRoutes');  //route
const registerRoutes = require('./routes/registerRoutes');
const connectToDatabase = require('./db');

app.use(cors());
connectToDatabase();  

app.use(express.json());
app.use('api/user', userRoute);
app.use('api/canvases', canvasRoute);

//Examples
app.use('/users', userRoutes);  // '/users' we customised it
app.use('/posts', postRoutes);
app.use('/register', registerRoutes);

app.listen(3030, ()=>{
  console.log('Server is running on http://localhost:3030');
});


//Gyaan
// index.js (The Base Paths & Rules): Defines the main resource categories (/users and /posts), attaches your middleware rule (middlewareToAddHellorWorldText), and opens port 3030 to the outside world.

// userRoute.js & postRoute.js (The Actions): Define what actually happens when someone hits those paths with a GET or POST request, and what exact response (res.send(...)) gets exposed back to the caller.



// Using Middlewares
// function middlewareToAddHellorWorldText(req, res, next){
//   res.customData = 'This sentence was added using Middleware!\n';
//   next();
// }

// function authenticate(req, res, next){
//   res.statusCode = 401;
//   res.write('Authentication Failed!');
//   res.end();
// }

// app.use('/users', middlewareToAddHellorWorldText, userRoutes);
// app.use('/posts', authenticate, postRoutes);



//Without Using Middlewares
// app.use('/users', userRoutes);
// app.use('/posts', postRoutes);
// //A must to start the server  
// app.listen(3030, () => {
//   console.log('Server is running on https://localhost:3030');
// });





//Without using Routes
// app.get('/', (req,res) => {
//   res.send("Got a GET request form User");
// });

// app.post('/', (req, res)=>{
//   res.send('Got a POST request from User');
// });

// app.listen(3030, () => {
//   console.log('Server is running on http://localhost:3030');
// });





// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   console.log("Got a new request");
//   res.end("Hi there!"); 
// });  
// //Created server object
// //callback function passed to create server. 

// server.listen(3030, 'localhost', ()=>{
//   console.log("Server is listening on PORT 3030");
// });