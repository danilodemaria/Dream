const express = require('express');
const router = express.Router();

router.use('/property', require('./property'));

module.exports = router;
