const Service = require('../models/Service');

const getServices = async (req, res) => {
  const services = await Service.find({}).sort({ createdAt: -1 });
  res.json(services);
};

const createService = async (req, res) => {
  const { serviceName, description, price, image } = req.body;
  const service = new Service({ serviceName, description, price, image });
  const createdService = await service.save();
  res.status(201).json(createdService);
};

const updateService = async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    return res.status(404).json({ message: 'Service not found' });
  }

  service.serviceName = req.body.serviceName || service.serviceName;
  service.description = req.body.description || service.description;
  service.price = req.body.price || service.price;
  service.image = req.body.image || service.image;

  const updatedService = await service.save();
  res.json(updatedService);
};

const deleteService = async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    return res.status(404).json({ message: 'Service not found' });
  }

  await service.remove();
  res.json({ message: 'Service removed' });
};

module.exports = { getServices, createService, updateService, deleteService };
