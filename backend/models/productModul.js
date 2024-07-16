const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { fileURLToPath } = require("url");
const Schema = mongoose.Schema;

const productSchema = new Schema({
id:{
  type: Number,
  required: true,
},
	name:{
    type: String,
    required: true,
 
  },
    
	description:{
    type: String,
    required: true,
  },
    
	price:  {
    type: String,
    required: true,
  },
  quntity: {
    type: String,
    required: true,
   },

  imageProduct:[  {
    type: String,
    required: true,}]
  ,
  
  imageGallery:[
  {  type:String,
    required: true,}]
  ,
  category:{
    type: String,
    required: true,
  }

   

},
{
  timestamps: true,
}
 );








 const Product = mongoose.model("Product", productSchema);

module.exports = Product