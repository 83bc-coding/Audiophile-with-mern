const asyncHandler = require("express-async-handler");
const User = require("../models/users");
const { generateToken } = require("../config/jwtToken");
const { generateRefreshToken } = require("../config/refrechtoken");

 const createUser = asyncHandler(async (req, res) => {
 const {email} = req.body
 
  const g = await User.findOne({email:email})
 if(!g){
 
    const newUser = await User.create(req.body);
    const refreshToken = await generateRefreshToken(newUser._id);
    const updateuser = await User.findByIdAndUpdate(
      newUser.id,
        {
          refreshToken: refreshToken,
        },
        { new: true }
      );

     res.json(updateuser);
}else{
    throw new Error("User Already Exists");

}

})










// Login a user
const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findUser = await User.findOne({ email });
if(findUser && (await findUser.isPasswordMatched(password))){
          const refreshToken = await generateRefreshToken(findUser._id);
            const updateuser = await User.findByIdAndUpdate(
                findUser.id,
                {
                  refreshToken: refreshToken,
                },
                { new: true }
              );
              res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    maxAge: 72 * 60 * 60 * 1000,
                  });  res.json({
                        _id: findUser?._id,
                        name: findUser?.name,
                         email: findUser?.email,
                        mobile: findUser?.mobile,
                        token: generateToken(findUser?._id),
                      });

}  else {
      throw new Error("Invalid Credentials");
    }



  });
  






  JSON.stringify( createUser);
  JSON.stringify( loginUserCtrl);










module.exports = {createUser,loginUserCtrl};