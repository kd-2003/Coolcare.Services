const Booking = require('../models/Booking');

const createBooking = async (req, res) => {
  const { customerName, mobileNumber, address, serviceType, preferredDate, customerEmail } = req.body;
  const booking = new Booking({ customerName, mobileNumber, address, serviceType, preferredDate, customerEmail });
  const createdBooking = await booking.save();
  res.status(201).json(createdBooking);
};

const getBookings = async (req, res) => {
  const bookings = await Booking.find({}).sort({ createdAt: -1 });
  res.json(bookings);
};

const getBookingById = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (booking) {
    res.json(booking);
  } else {
    res.status(404).json({ message: 'Booking not found' });
  }
};

const updateBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  booking.customerName = req.body.customerName || booking.customerName;
  booking.mobileNumber = req.body.mobileNumber || booking.mobileNumber;
  booking.address = req.body.address || booking.address;
  booking.serviceType = req.body.serviceType || booking.serviceType;
  booking.preferredDate = req.body.preferredDate || booking.preferredDate;
  booking.status = req.body.status || booking.status;

  const updatedBooking = await booking.save();
  res.json(updatedBooking);
};

const deleteBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  await booking.remove();
  res.json({ message: 'Booking removed' });
};

module.exports = { createBooking, getBookings, getBookingById, updateBooking, deleteBooking };
