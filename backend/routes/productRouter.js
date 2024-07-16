const {createProduct,getProductOfCategory,getProduct,getProductLike} = require('../controller/producCtrl')
const express = require("express");
 
const router = express.Router();
const cros =require("cors")
router.options('/add-product',cros())
router.post("/add-product", cros(), createProduct);


router.options("/category/:name",cros())
router.get("/category/:name", cros(), getProductOfCategory);

router.options("/:id",cros())
router.get("/:id", cros(), getProduct);

router.options("/like/3",cros())
router.get("/like/3", cros(), getProductLike);

module.exports = router;