/** Dependencies */
const logger = require("./utils/logger");

const app = require("./appConfig");
const initSocketIO = require("./sockets");
const initDatabase = require("./db");

/** Start the server */
(
  async function () {
    const server = await app.listen(app.get("PORT"), () => {
      logger.info(`Listen on ${process.env.HOST}`);
    });
    
    initSocketIO(server);
    initDatabase();
  }
)();