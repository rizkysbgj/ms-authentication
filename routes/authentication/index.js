const express = require('express');
const router = express.Router();
const { loginHandler } = require('./handler')

router.post(
  '/login', 
  loginHandler
);

module.exports = router;