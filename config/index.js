require('dotenv').config();

const config = {
  database: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME
  },
  security: {
    secretKey: process.env.SECURITY_SECRET_KEY
  }
}

module.exports = config;
