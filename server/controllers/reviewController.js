const Review = require('../models/Review');

const getReviews = async (req, res) => {
  const reviews = await Review.find({}).sort({ createdAt: -1 });
  res.json(reviews);
};

const createReview = async (req, res) => {
  const { customerName, rating, comment } = req.body;
  const review = new Review({ customerName, rating, comment });
  const createdReview = await review.save();
  res.status(201).json(createdReview);
};

module.exports = { getReviews, createReview };
