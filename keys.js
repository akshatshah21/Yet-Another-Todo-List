const dbConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

// For local database
/* const dbConfig = {
  user: "YOUR_USERNAME",
  password: "YOUR_PASSWORD",
  database: "DB_NAME",
  host: "localhost",
  port: 5432,
}; */

module.exports = dbConfig;
