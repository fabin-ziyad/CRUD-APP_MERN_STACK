const User = require("../../models/User");
const {validateRequiredFields} = require("../../utils/validate");
const bcrypt = require("bcrypt");
module.exports = async (req, res) => {
    try {
    const requiredFields = [
      "email",
      "name",
      "password",
      "phone",
      "gender",
      "city",
      "state",
    ];
    const validationError = await validateRequiredFields(req, res, requiredFields);
    if (validationError) {
      return validationError;
    }
    const { name, email, password, phone, age, gender, city, state } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      phone,
      gender,
      city,
      state,
      password: hashPassword, //for now im directly storing pass to db
    });
    if (newUser && newUser !== undefined) {
      newUser.save();
      res.status(200).json({
        status: true,
        message: "User Registered successfully",
        data: newUser,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Unable Register at this moment",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};
