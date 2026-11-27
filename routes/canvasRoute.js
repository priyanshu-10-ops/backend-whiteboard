const express = require('express');
const {getAllCanvases} = require('../controllers/canvasController');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

//Create a router
const router = express.Router();

//Get all canvases for a User
router.get('/canvas', authenticationMiddleware, getAllCanvases);