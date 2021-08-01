'use strict';

const dotenv = require('dotenv');
dotenv.config();

const config = {
  env: process.env.NODE_ENV,
  port: process.env.USE_PORT,
  region: process.env.REGION,
}
module.exports = config;
