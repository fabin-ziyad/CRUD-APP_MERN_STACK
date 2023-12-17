const User = require("../../models/User");
const { validateRequiredFields } = require("../../utils/validate");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = async (req, res) => {
  try {
    const requiredFields = ["email", "password"];
    const validationError = await validateRequiredFields(
      req,
      res,
      requiredFields
    );
    if (validationError) {
      return validationError;
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user && user == null && user == undefined) {
      res.status(400).json({
        success: false,
        message: "User not found with this email",
      });
    } else {
      const matchPassword = await bcrypt.compare(password, user.password);
      if (matchPassword && matchPassword !== undefined) {
        const token = jwt.sign(
          { user: user._id, name: user.name },
          process.env.SECRETKEY,
          { expiresIn: "6h" }
        );
        res.status(200).json({
          success: true,
          message: "Login Successfull",
          token: token,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Password doesn't match with records",
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};
