const express = require('express');
const {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require('../controllers/bookingController');
const { protect, adminOnly, technicianOnly } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', createBooking);
router.get('/', protect, (req, res, next) => {
  if (req.user.role === 'admin' || req.user.role === 'technician') {
    return next();
  }
  res.status(403).json({ message: 'Access denied' });
}, getBookings);
router.get('/:id', protect, (req, res, next) => {
  if (req.user.role === 'admin' || req.user.role === 'technician') {
    return next();
  }
  res.status(403).json({ message: 'Access denied' });
}, getBookingById);
router.put('/:id', protect, adminOnly, updateBooking);
router.delete('/:id', protect, adminOnly, deleteBooking);

module.exports = router;
