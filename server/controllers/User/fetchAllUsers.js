const User = require("../../models/User");
const validate = require("../../utils/validate");

module.exports = async (req, res) => {
  try {
    const { search, filter } = req.body;

    let query = {};

    if (search) {
      query = {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
          { phone: { $regex: search, $options: "i" } },
        ],
      };
    }

    let sortQuery = {};
    if (filter === "LastModified") {
      sortQuery = { updatedAt: -1 };
    } else if (filter === "LastInserted") {
      sortQuery = { createdAt: -1 };
    } else if (filter === "AtoZ") {
      sortQuery = { name: 1 };
    } else if (filter === "ZtoA") {
      sortQuery = { name: -1 };
    }

    const users = await User.find(query).sort(sortQuery);

    if (users.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Users fetched successfully",
        data: users,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
