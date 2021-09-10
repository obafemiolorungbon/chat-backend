const express = require("express");
const router = express.Router();
const centrifugo = require("../centrifugo");
const createToken = require("../lib/createToken");
const decodeToken = require("../lib/decodeJwt");

// When user auth token (to connect to centrifugo) expires, centrifugo client will send a post request to this route
// automatically to refresh. If anonymous is alllowed on the server, then just return an empty string as that will do
// else, check for their authorization key, extract their id or name from their and use it to create a new token for them
// return data in the format {token:<TOKEN>} and they are automaticallly reconnected to the server

router.get("/refresh", async (req, res, next) => {
  // create an asssign a new token to the client to use for connecting to centrifuge
  //user not auth
  if (!req.headers.authorization) {
    return res.status(401).json({
      status: "Failed",
      message: "No Authethication Provided, and Anonymous not allowed",
    });
  }
  // if user auth, retrieve their name and include it in the claim and sign them a new jwt
  const token = req.headers.authorization;
  // decode their auth token and pull their name or id from it
  const id = await decodeToken(token, centrifugo.jwt_secret);
  // pull the neccesary info to sign token
  const { userID, user, userName } = id;
  //set expiry time of clientconnection to centrifugo to 1 day before refresh
  let expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 1);
  // sign the new token with hmac_secret from the centrifugo
  const claims = {
    sub: user,
    info: userID,
    exp: expiryDate,
    info: userName,
  };
  const newToken = await createToken(claims, centrifugo.token);
  // send the new token to enable user reconnect to centrifugo
  console.log(newToken);
  res.status(200).json({
    token: newToken,
  });
});

module.exports = router;
