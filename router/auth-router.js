const express = require('express');
const authcontrollers=require("../controllers/auth-controllers")
const router = express.Router();

router.route("/").get(authcontrollers.home);

router.route('/register').get(authcontrollers.register);

module.exports=router;