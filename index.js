//Main entry point//
require("dotenv").config();
const express = require("express");
const winston = require("winston"); // a better way to log your errors
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { auth, refresh, api } = require("./routes/index");
const app = express();
app.use(cors());

// createToken(claims, centriInfo.token);
//configures winston to log your errors to file named error.log
winston.add(new winston.transports.File({ filename: "errors.log" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/client", api);
app.use("/centrifuge", refresh);
app.use("/auth", auth);
module.exports = app;
