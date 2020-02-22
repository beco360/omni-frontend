/** Dependencies */
const mongoose = require("mongoose");
const logger = require("../utils/logger");

/** Global variables */
var db = null; // Singleton

module.exports = function setupDatabase() {
  if (!db) {
    try {
      db = mongoose.connect(
        `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
        {
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      );
      logger.info("Database connected successfully");
    } catch (error) {
      logger.alert(`Database connection failed: ${err}`);
    }
  }

  /** Escucha los errores posteriores a que se establecio la conexión */
  mongoose.connection.on("error", err => {
    logger.error(`Error on database: ${err}`);
  });

  return db;
};
