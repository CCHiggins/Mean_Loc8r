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
  if (req.params && req.params.locationid) {
    Loc
      .findById(req.params.locationid)
      .exec((err, location) => {
        if (!location) {
          res
            .status(404)
            .json({
              "message": "locationid not found"
            });
          return;
        } else if (err) {
          res
            .status(404)
            .json(err);
          return;
        }
        res
          .status(200)
          .json(location);
      });
  } else {
    res
      .status(404)
      .json({
        "message": "No locationid in request"
      });
  }
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
