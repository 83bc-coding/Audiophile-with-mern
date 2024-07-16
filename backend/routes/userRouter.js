const {createUser,loginUserCtrl} =require('../controller/userCon')
const express = require("express");
const router = express.Router();
const cros =require("cors")
router.options('/register',cros())

router.options('/login',cros())
router.post("/register",cros(),  createUser);
router.post("/login", cros(),loginUserCtrl);


module.exports = router;