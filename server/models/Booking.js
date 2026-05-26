const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema(
  {
    customerName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    address: { type: String, required: true },
    serviceType: { type: String, required: true },
    preferredDate: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Assigned', 'Completed'], default: 'Pending' },
    customerEmail: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
