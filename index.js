//Main entry point//
require("dotenv").config()
const express = require("express");
const winston = require("winston")// a better way to log your errors
const path = require("path");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const fs = require("fs");


const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_LINK || "localhost:3000",
  })
);

//configures winston to log your errors to file named error.log
winston.add(new winston.transports.File({filename:"errors.log"}))
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

module.exports = app
