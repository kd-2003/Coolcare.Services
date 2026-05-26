const express = require('express');
const { getReviews, createReview } = require('../controllers/reviewController');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getReviews);
router.post('/', protect, adminOnly, createReview);

module.exports = router;
