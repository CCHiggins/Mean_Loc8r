const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsCreate = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

const locationsListByDistance = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

const locationsReadOne = function (req, res) {
  Loc
    .findById(req.params.locationid)
    .exec((err, location) => {
      res
        .status(200)
        .json(location);
    });
};

const locationsUpdateOne = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

const locationsDeleteOne = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
  locationsListByDistance,
  locationsCreate,
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
};
