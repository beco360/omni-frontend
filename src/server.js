/** Dependencies */
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const logger = require("./utils/logger");
const morgan = require("morgan");

/** Config */
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static("public"));
app.use(
  morgan(
    'HTTP/:http-version :method :url :status :res[content-length] - :response-time ms ":referrer" ":user-agent"',
    { stream: logger.stream }
  )
); // Listen petitions HTTP

app.set("PORT", process.env.PORT || 3000);

/** Routes */
app.use("", require("./routes/indexRouter"));

/** Start the server */
const server = app.listen(app.get("PORT"), () => {
  logger.info(`Listen on ${process.env.HOST}`);
});
