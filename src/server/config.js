const dotenv = require("dotenv");

const environment = process.env.NODE_ENV || "development";
environment === "development"
  ? dotenv.config({ path: ".env.dev" })
  : dotenv.config();

/* All the config and specific to developemnt and prodection goes here. */

var config = {
  development: {
    PORT: process.env.PORT,
    MONGO: {
      uri: process.env.MONGO_URI,
      options: { useNewUrlParser: true, useCreateIndex: true }
    }
  },
  production: {
    PORT: process.env.PORT,
    MONGO: {
      uri: process.env.MONGO_URI,
      options: { useNewUrlParser: true, useCreateIndex: true }
    }
  }
};

module.exports = config[environment];
