const Camping = require('../models/campingModel');

const campingController = {};

campingController.listAll = (req, res) => {
  Camping.find()
    .then((campings) => res.send(campings))
    .catch(() => res.sendStatus(400));
};

campingController.getById = (req, res) => {
  const id = req.params.id;
  Camping.findById(id)
    .then((campings) => res.send(campings))
    .catch(() => res.sendStatus(400));
};

campingController.submit = (req, res) => {
  const data = req.body;
  if (!data) {
    res.sendStatus(400);
  }
  new Camping(data).save()
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(400));
};

campingController.edit = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  if(!id || !data) {
    res.sendStatus(400);
  }
  Camping.findByIdAndUpdate(id, data)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
};

campingController.remove = (req, res) => {
  const id = req.params.id;
  Camping.findByIdAndRemove(id)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
};

module.exports = campingController;