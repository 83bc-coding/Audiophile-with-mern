const {createOrder} =require('../controller/cartCtrl')
const express = require("express");
const router = express.Router();
const cros =require("cors")
 
router.options('/neworder',cros())
 router.post("/neworder", cros(),createOrder);


module.exports = router;