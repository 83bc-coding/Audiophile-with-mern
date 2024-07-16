const express = require("express");
const mongoose = require("mongoose");
 const authRouter = require("./routes/userRouter");
const authProduct = require("./routes/productRouter")
const authCart = require("./routes/cartRouter")
const app = express(); 
mongoose.connect("mongodb://localhost:27017/").then(() => {
    console.log("connected successfully");
}).catch((error) => {
    console.log("error with connecting with the DB ", error);
});
app.use(express.json());
app.use("/api/user", authRouter);
app.use("/api/product", authProduct);
app.use("/api/order", authCart);

app.listen(5000, () => {
	console.log("I am listening in port 5000");
});