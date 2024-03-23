require("dotenv").config();

const config = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_TEST,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    //  service di docker
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: 5439,
  },

  docker: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: 5439,
  },
};
console.log (config)

module.exports = config;
