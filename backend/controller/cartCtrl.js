const asyncHandler = require("express-async-handler");
const Oreder =require("../models/cartModul")


const createOrder = asyncHandler(async (req, res) => {

    //check the data receive
     
    const newUser = await Oreder.create(req.body);
res.json(newUser)
 
  
  })

  module.exports = {createOrder};
