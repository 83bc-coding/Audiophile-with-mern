const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { fileURLToPath } = require("url");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
idUser:{
  type: String,
  required: true,
},
	products:[],
    
	 
    
 
  grandTotal
: {
    type: String,
    required: true,
   },

   INCLUDED:  {
    type: String,
    required: true,}
  ,
  
 
  city:{
    type: String,
    required: true,
  },

  country:{
    type: String,
    required: true,
  },
  zipCode:{
    type: String,
    required: true,
  },
  address:{
    type: String,
    required: true,
  },  
  email:{
    type: String,
    required: true,
  },  
  phone:{
    type: String,
    required: true,
  }

   

},
{
  timestamps: true,
}
 );








 const Order = mongoose.model("Order", orderSchema);

module.exports = Order