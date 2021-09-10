const jwt = require("jsonwebtoken");
module.exports = async (token, secret) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        console.log("Error occured while trying to decode Jwt");
        reject("Failed");
      }
      resolve(decoded);
    });
  });
};
