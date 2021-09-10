const express = require("express");
const router = express.Router();
const request = require("node-fetch");
const centrifugo = require("../centrifugo");
// logic for routing goes here

router.get("/", (req, res, next) => {
  res.send({ success: true });
});
router.post("/", async (req, res) => {
  // When the client sends a post request to this route, the backend plugin then
  // contacts the centrifugo server, sending along the payload from the client
  await request(centrifugo.url, {
    method: "POST",
    url: centrifugo.url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `apikey ${centrifugo.apiKey}`,
    },
    body: JSON.stringify({
      method: "publish",
      params: {
        channel: "myChat",
        data: { message: req.body.message, user: req.body.user },
      },
    }),
  })
    .then(async (response) => console.log(await response.json()))
    .catch((error) => console.log(`error occcured ${error.message}`));
  // if request to publish above passes, then send create token and send to user that
  // will allow them auth and subscribe to the room on centrifugo otherwise, tell them
  //that the channel coudnt be created at this time
  res.status(200).json({ status: true, message: "Response Dispatched" });
});

module.exports = router;
