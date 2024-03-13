const express = require("express");
const authcontrollers = require("../controllers/auth-controllers");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.route("/").get(authcontrollers.home);

router
  .route("/register", [
    body("name", "enter valid name").isLength({ min: 5 }),
    body("email", "enter valid email").isEmail(),
    body("password", "enter valid password and atleast 5 character").isLength({
      min: 5,
    }),
  ])
  .post(authcontrollers.register);

router
  .route("/login", [
    body("email", "enter valid email").isEmail(),
    body("password", "enter valid password and atleast 5 character").exists(),
  ])
  .post(authcontrollers.login);

module.exports = router;
