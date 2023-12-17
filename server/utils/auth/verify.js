const jwt = require("jsonwebtoken");
const User = require("../../models/User")
module.exports = {
  verify: async function (req, res, next) {
    if (req.headers && req.headers.authorization) {
      try {
        let receivedIdToken = req.headers.authorization;
        receivedIdToken = receivedIdToken.split(" ")[1];
        let decodedToken = await jwt.verify(receivedIdToken, process.env.SECRETKEY);
        if (decodedToken && decodedToken.user) {
            req.token = { ...decodedToken, user: decodedToken.user, name: decodedToken.name };
            req.user = await User.findById(decodedToken.user);
        }
        next();
      } catch (err) {
        console.log(err);
       
        return res.status(400).json({
          ...err,
          message: "Failed to authenticate token!",
        });
      }
    } else {
      return res.status(400).json({
        message: "Failed to authenticate token!",
      });
    }
  },
};
