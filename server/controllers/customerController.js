const User = require('../models/User');

const getCustomers = async (req, res) => {
  const customers = await User.find({ role: 'customer' }).select('-password');
  res.json(customers);
};

module.exports = { getCustomers };
