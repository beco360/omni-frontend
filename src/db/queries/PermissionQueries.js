/** Dependencies */
const models = require("../models");
const logger = require("../../utils/logger");

function findAll() {
  models.Permission.find()
    .then(data => {
      return data;
    })
    .catch(err => {
      logger.info(err);
    });
}

function findById(id) {
  models.Permission.findById(id)
    .then(data => {
      return data;
    })
    .catch(error => {
      logger.info(error);
    });
}

function findByName(name) {
  models.Permission.findOne(name)
    .then(data => {
      return data;
    })
    .catch(error => {
      logger.info(error);
    });
}

module.exports = {
  findAll,
  findById,
  findByName
};
