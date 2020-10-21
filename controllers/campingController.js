const campingController = {};

campingController.listAll = (req, res) => {
  res.status(200).send('Success!!!');
};

campingController.getById = (req, res) => {
  res.status(200).send('Success!!!');
};

campingController.submit = (req, res) => {
  res.status(201).send('Success!!!');
};

campingController.edit = (req, res) => {
  res.status(200).send('Success!!!');
};

campingController.remove = (req, res) => {
  res.status(200).send('Success!!!');
};

module.exports = campingController;