const express = require("express");
const passport = require("passport");

const { check } = require("express-validator");
const { registerController } = require("../Controller/Auth/Register");
const { loginController } = require("../Controller/Auth/Login");
const { authUserProfile } = require("../Controller/Auth/AuthUser");
const { getDashboard } = require("../Controller/Auth/getDashboard");

const router = express.Router();

// Auth Routes
router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
    check("email", "Email is required").not().isEmpty(),
  ],
  registerController
);
router.post(
  "/login",
  [
    check("password", "Password is required").not().isEmpty(),
    check("email", "Email is required").not().isEmpty(),
  ],
  loginController
);

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  authUserProfile
);
router.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  getDashboard
);

module.exports = router;
