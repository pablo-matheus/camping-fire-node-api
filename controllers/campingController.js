const Camping = require('../models/campingModel');

const campingController = {};

campingController.listAll = (req, res) => {
  if (req.query.state && req.query.city) {
    Camping.find({ 'location.state': req.query.state, 'location.city': req.query.city })
      .then((campings) => res.send(campings))
      .catch(() => res.sendStatus(400));
    return console.log(`Finding by state [${req.query.state}] and city [${req.query.city}]`);
  }
  if (req.query.state) {
    Camping.find({ 'location.state': req.query.state })
      .then((campings) => res.send(campings))
      .catch(() => res.sendStatus(400));
    return console.log(`Finding by state [${req.query.state}]`);
  }
  if (req.query.city) {
    Camping.find({ 'location.city': req.query.city })
      .then((campings) => res.send(campings))
      .catch(() => res.sendStatus(400));
    return console.log(`Finding by city [${req.query.city}]`);
  }
  Camping.find()
    .then((campings) => res.send(campings))
    .catch(() => res.sendStatus(400));
  return console.log('Finding all');
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