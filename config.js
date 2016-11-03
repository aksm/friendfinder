// var dotenv = require("dotenv");
// dotenv.load();
module.exports = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  databaseURL: process.env.FB_DATABASEURL,
  storageBucket: process.env.FB_STORAGEBUCKET,
};