/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
require("dotenv").config();

// eslint-disable-next-line no-undef
module.exports.development = {
  dialect: "mysql",
  seederStorage: "sequelize",
  url: process.env.DB_URI
};