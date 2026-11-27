const Canvas = require('../models/canvasModel');

//Get all canvases for a User
const getAllCanvases = async (req, res) => {
    try {
        const { email } = req.email;

        const User = mongoose.model('User');
        const canvases = await User.getAllCanvases(email);

        return res.status(200).json({
            message: "Canvases fetched successfully",
            canvases
        });
    }
    catch(error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
  getAllCanvases
}