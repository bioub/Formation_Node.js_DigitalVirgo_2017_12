const service = require('../models/contact-mongoose');

exports.list = async (req, res, next) => {
  try {
    const contacts = await service.getList(); // Service Layer
    res.json(contacts);
  }
  catch (err) {
    console.log(err);
  }
};

exports.show = async (req, res, next) => {
  const contact = await service.getById(req.params.id); // Service Layer
  if (!contact) {
    req.notFoundReason = `Contact ${req.params.id} not found`;
    return next();
  }
  res.json(contact);
};

exports.delete = async (req, res, next) => {
  const contact = await service.deleteById(req.params.id); // Service Layer
  if (!contact) {
    req.notFoundReason = `Contact ${req.params.id} not found`;
    return next();
  }
  res.json(contact);
};

exports.add = async (req, res, next) => {
  const contact = await service.create(req.body); // Service Layer
  res.statusCode = 201;
  res.json(contact);
};
