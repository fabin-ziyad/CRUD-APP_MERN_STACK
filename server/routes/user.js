const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");
router.post("/create", userController.createUser);
router.post("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);
router.post("/get/:id", userController.getUser);
router.post("/getUsers", userController.getAllUsers)
module.exports = router;
