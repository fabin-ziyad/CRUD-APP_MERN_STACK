const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const jwt = require("./utils/auth/verify");
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: [
//       "https://crud-app-mern-stack-4w8a.vercel.app",
//       "http://localhost:3000",
//       "https://crud-app-mern-stack-4w8a-git-master-fabin-ziyad.vercel.app",
//     ],
//   })
// );
app.use(cors({
    origin: '*'
}));
app.use("/user", jwt.verify, userRoutes);
app.use("/auth", authRoutes);
app.get("/", function (req, res) {
  res.send("Hello World!");
});
module.exports = app;
