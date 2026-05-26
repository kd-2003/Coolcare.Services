const express = require('express');
const { getCustomers } = require('../controllers/customerController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, adminOnly, getCustomers);

module.exports = router;
