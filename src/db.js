const mongoose = require("mongoose");
const logger = require("./utils/logger");
var db = null;

module.exports = function setupDatabase() {
  if (!db) {
    try {
      db = mongoose.connect(
        `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      );
    } catch (error) {
      logger.alert(error);
    }
  }

  mongoose.connection.on("error", err => {
    logger.error(err);
  });
  
  return db;
};
