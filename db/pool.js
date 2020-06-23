const { Pool } = require("pg");
const dbConfig = require("../keys");

const pool = new Pool(dbConfig);

module.exports = pool;
