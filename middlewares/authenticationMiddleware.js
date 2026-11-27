const jwt = require('jsonwebtoken');
const user = require('../models/userModel');

const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY; 

//Get canvases for a User
router.get

exports.authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    
    if (!token) return res.status(401).json({ error: "Access Denied: No Token Provided" });

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), SECRET_KEY);
        req.email = decoded.email;
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid Token" });
    }
};

module.exports = authMiddleware;
