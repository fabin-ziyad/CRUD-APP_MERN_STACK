const User = require("../../models/User");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user && user !== undefined && user !== null) {
      return res.status(200).json({
        success: true,
        message: "User Fetched successfully",
        data: user,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User Not Found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
