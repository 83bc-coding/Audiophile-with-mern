const asyncHandler = require("express-async-handler");
const Product =require("../models/productModul")


const createProduct = asyncHandler(async (req, res) => {
     console.log("requessssssssssssssssssss");

     //check the data receive
      console.log("dataaaaaaaaaaaaaa");
     
       const name = req.body.name;
      const description = req.body.description;
      const quntity = req.body.quntity;
      const price = req.body.price;
       const category = req.body.category;
      const [imageProduct] =    req.files["imageProduct"];
      const [imageGallery] =  await req.files["imageGallery"];
      const foundProduct = await Product.findOne({ name });
//       if(!foundProduct){
// res.send("kfj")
//           const product = await Product.create({
// name,
// description,
// quntity,
// price,
// category,
// imageGallery,
// imageProduct
//           })
//           const savedProduct = await product.save();
//           res.status(200).json({
//                success: true,
//                message: `Product has been added successfully !`,
//                product: savedProduct
//              });
//              res.json(product )
//      }else{
//           res.status(552).json({
//                success: true,
//                message: `Product exists !`,
//                product: savedProduct
//              });
//      }

 
 




//     if(g || images.length === 0){
//         throw new Error("this product find or images =0 A");

   
   
//    }else{
//     const newProduct = await Product.create(req.body);
//     res.json(newProduct);

   
//    }
   
   })







   const getProductOfCategory = asyncHandler(async (req, res) => {
 
      const { name } = req.params;
      
      const foundProduct = await Product.find({ category:name });

      res.send(foundProduct)
})

const getProduct= asyncHandler(async (req, res) => {
 
      const { id } = req.params;
      
      const foundProduct = await Product.find({ id:id });

      res.json(foundProduct)
})

const getProductLike= asyncHandler(async (req, res) => {
 
 
      const foundProduct = await Product.aggregate([{ $sample: { size: 3 } }]);
      res.json(foundProduct);
})















   JSON.stringify( createProduct,);
//    JSON.stringify( getProductLike,);










   module.exports = {createProduct,getProductOfCategory,getProduct,getProductLike};