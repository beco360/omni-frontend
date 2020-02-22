/** Dependencies */
const socketIO = require("socket.io");
const logger = require("./utils/logger");

module.exports = function(server) {
  logger.info("SocketIO setup succesfully");
  const io = socketIO(server);

  io.on("connection", socket => {
    socket.on("connect", () => {
      logger.info("New socket connected");
    });

    socket.on("connect_failed", () => {
      logger.info("Error estableciendo conexión con el socket");
    });

    socket.on('new-chat', data => {
      
    })
    // Get sockets connected
    // io.sockets.clients().server.engine.clientsCount
    // Object.keys(io.sockets.clients().connected).length
  });
};
