const express = require("express");
const router = express.Router();
const {
  loginAuth,
  getUserProfile,
  updateUserProfile,
  registerUser,
  logoutUser,
} = require("../controllers/user.controller.js");


const {protect} = require('../middlewares/auth.middleware.js')


router.post("/register", registerUser);
router.post("/login", loginAuth);
router.post("/logout", logoutUser);
router.get("/profile",protect, getUserProfile);
router.put("/update-profile",protect, updateUserProfile);


module.exports = router;
