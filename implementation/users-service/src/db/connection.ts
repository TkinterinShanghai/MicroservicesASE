import { Sequelize } from "sequelize";

const DB_URI = process.env.DB_URI;

const sequelize = new Sequelize(DB_URI, {
  dialectOptions: {
    charset: "utf8",
    multipleStatements: true,
  },
  logging: false,
});

export default sequelize