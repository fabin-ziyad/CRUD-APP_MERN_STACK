const User = require("../../models/User");
const { validateRequiredFields } = require("../../utils/validate");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const requiredFields = [
      "email",
      "name",
      "phone",
      "gender",
      "city",
      "state",
    ];

    const validationError = await validateRequiredFields(
      req,
      res,
      requiredFields
    );
    if (validationError) {
      return validationError;
    }

    const { name, email, phone, gender, city, state } = req.body;

    // Fetch the user by ID
    const userToUpdate = await User.findById(id);

    if (!userToUpdate) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update specific fields and 'updatedAt' field
    userToUpdate.name = name;
    userToUpdate.email = email;
    userToUpdate.phone = phone;
    userToUpdate.gender = gender;
    userToUpdate.city = city;
    userToUpdate.state = state;
    userToUpdate.updatedAt = new Date();

    // Save the updated user
    const updatedUser = await userToUpdate.save();
    if (updatedUser) {
      return res.status(200).json({
        success: true,
        message: "User Updated Successfully",
        data: updatedUser,
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Failed to Update",
      });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      status: false,
      message: "Internal server error while updating user",
    });
  }
};
