const express = require("express");
const authcontrollers = require("../controllers/auth-controllers");
const { body, validationResult } = require("express-validator");
const validate=require('../middlewares/validate-middleware');
const signupSchema = require("../validators/auth-validator");
const router = express.Router();

router.route("/").get(authcontrollers.home);

router
  .route("/register").post(validate(signupSchema),authcontrollers.register);

router
  .route("/login").post(authcontrollers.login);

module.exports = router;
