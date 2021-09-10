const jwt = require("jsonwebtoken");
module.exports = async (claims, secret) => {
  claims.exp = Math.floor(Date.now() / 1000) + 60 * 60;
  return new Promise((resolve, reject) => {
    jwt.sign(claims, secret, (err, data) => {
      if (err) {
        console.log("error");
        reject("Error Occured", err);
      }
      resolve(data);
    });
  });
};
