const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const createToken = require("../lib/createToken");
const centrifugo = require("../centrifugo");
// logic for routing goes here

// Ideally, this is simulating Zc_core and we will just assign an authorization token to the user when they
// visit this route, this will be asked when they will be refreshed
router.get("/", async (_, res) => {
  // create a token with the user name, id and other info.
  const userData = {
    userID: uuidv4(),
    user: "Mark",
    userName: "Mark Essien",
  };
  const token = await createToken(userData, centrifugo.jwt_secret);
  console.log("Auth");
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJNYXJrIiwiZXhwIjoxNjMxODMyMzQ0fQ.1EskK_HfyvLWBY0RBi-QuprFYf1LXoYzM5uZR0s3g4k";
  // create an asssign a new token to the client to use for connecting to centrifuge
  // they can then save the token inside localStorage and use it when making calls to the API
  res.status(200).json({ success: true, data: { token, user: userData } });
});

module.exports = router;
