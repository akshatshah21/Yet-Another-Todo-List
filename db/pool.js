const { Pool } = require("pg");
const dbConfig = require("../keys");

const pool = new Pool(dbConfig);
console.log("Connected to DB");
module.exports = pool;
