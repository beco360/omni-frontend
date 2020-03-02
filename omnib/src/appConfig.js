/** Dependencies */
const express = require("express");
const app = express();
const path = require('path');
const logger = require("./utils/logger");
const morgan = require("morgan");
const passport = require("passport");
const session = require('express-session');
const flash = require('connect-flash');

/** Settings */
app.set("PORT", process.env.PORT || 3000);

/** Middlewares */
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json
app.use(
  morgan(
    'HTTP/:http-version :method :url :status :res[content-length] - :response-time ms ":referrer" ":user-agent"',
    { stream: logger.stream }
  )
); // Listen petitions HTTP
app.use(express.static(path.join(__dirname, 'dist'))); // Static folder
app.use(express.static(path.join(__dirname, 'public'))); // Static folder
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: false
})); // Config session
app.use(passport.initialize());
app.use(passport.session());

/** Routes */
//app.use("", require("./routes/indexRouter"));
app.use('/api/auth', require('./routes/authRouter'));

module.exports = app;
