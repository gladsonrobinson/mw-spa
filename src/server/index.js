"use strict";

const express = require("express");
import router from "./routes/index";
import config from "./config";

import mongoose from "mongoose";
mongoose.Promise = require("bluebird");

// Connect to MongoDB
console.log(config.MONGO.uri, config.MONGO.options);
mongoose.connect(config.MONGO.uri, config.MONGO.options);
mongoose.connection.on("error", function(err) {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1); // eslint-disable-line no-process-exit
});

const app = express();

app.use(express.static("dist"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", router);

app.listen(config.PORT || 8080, () =>
  console.log(`Listening on port ${config.PORT || 8080}!`)
);
