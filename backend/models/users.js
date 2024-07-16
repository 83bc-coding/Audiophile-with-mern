const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const Schema = mongoose.Schema;
const userleSchema = new Schema({

	name:{
    type: String,
    required: true,
  },
    
	email:{
    type: String,
    required: true,
    unique: true,
  },
    
	password:  {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },

  refreshToken: {
        type: String,
      },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,

},
{
  timestamps: true,
}
 );













 
 userleSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userleSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userleSchema.methods.createPasswordResetToken = async function () {
  const resettoken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resettoken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 10 minutes
  return resettoken;
};


 
  








  
const User = mongoose.model("User", userleSchema);

module.exports = User