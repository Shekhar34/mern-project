const express = require('express');
const authcontrollers=require("../controllers/auth-controllers")
const router = express.Router();

router.route('/').get(authcontrollers.home);

router.route('/register').post(authcontrollers.register);

module.exports = router;
