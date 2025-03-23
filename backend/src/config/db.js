const { Pool } = require("pg");
require("dotenv").config();

// Create a connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Middleware to attach DB connection to `req.app.locals.db`
const attachDB = (req, res, next) => {
  req.app.locals.db = pool;
  next();
};

// Test DB connection
const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log(" Database connected successfully.");
    client.release(); // Release the client
  } catch (error) {
    console.error(" Database connection error:", error);
  }
};

module.exports = { pool, connectDB, attachDB };
