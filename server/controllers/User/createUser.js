const User = require("../../models/User");
const {validateRequiredFields} = require("../../utils/validate");

module.exports = async (req, res) => {
  try {
    const requiredFields = ["email", "name", "phone"];
    const validationError = await validateRequiredFields(req, res, requiredFields);
    if (validationError) {
      return validationError;
    }
    const { name, email, phone } = req.body;
    const newUser = new User({
      name,
      email,
      phone,
    });
    
    if (newUser && newUser !== undefined) {
      newUser.save();
      res.status(200).json({
        success: true,
        message: "User Added successfully",
        data: newUser,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Unable Add at this moment",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
