const Camping = require('../models/campingModel');

const campingController = {};

campingController.listAll = (req, res) => {
  const state = req.query.state;
  const city = req.query.city;

  if (state && city) {
    console.log(`Finding campings by state [${state}] and city [${city}]`);

    Camping.find({
      'location.state': { $regex: state, $options: 'i' },
      'location.city': { $regex: city, $options: 'i' }
    })
      .then((campings) => res.send(campings))
      .catch(() => res.sendStatus(400));

    return;
  }

  if (state) {
    console.log(`Finding campings by state [${state}]`);

    Camping.find({ 'location.state': { $regex: state, $options: 'i' } })
      .then((campings) => res.send(campings))
      .catch(() => res.sendStatus(400));

    return;
  }

  if (city) {
    console.log(`Finding campings by city [${city}]`);

    Camping.find({ 'location.city': { $regex: city, $options: 'i' } })
      .then((campings) => res.send(campings))
      .catch(() => res.sendStatus(400));

    return;
  }

  console.log('Finding all');

  Camping.find()
    .then((campings) => res.send(campings))
    .catch(() => res.sendStatus(400));
};

campingController.getById = (req, res) => {
  const id = req.params.id;

  console.log(`Finding camping by ID [${id}]`);

  Camping.findById(id)
    .then((campings) => res.send(campings))
    .catch(() => res.sendStatus(400));
};

campingController.submit = (req, res) => {
  const data = req.body;

  console.log('Submitting camping');

  if (!data) {
    console.log('Empty body');
    res.sendStatus(400);
    return;
  }

  new Camping(data).save()
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(400));
};

campingController.edit = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  console.log(`Editing camping with ID [${id}]`);

  if (!id || !data) {
    console.log('Empty body or ID');
    res.sendStatus(400);
    return;
  }

  Camping.findByIdAndUpdate(id, data)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
};

campingController.remove = (req, res) => {
  const id = req.params.id;

  console.log(`Removing camping with ID [${id}]`);

  Camping.findByIdAndRemove(id)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
};

module.exports = campingController;