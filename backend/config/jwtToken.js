const jwt = require("jsonwebtoken");
 const generateToken = (id) => {
  return jwt.sign({ id }, "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ", { expiresIn: "1d" });
// return id
};

module.exports = { generateToken };