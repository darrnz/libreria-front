// require('dotenv').config();
// const bodyParser   = require('body-parser');
// const cookieParser = require('cookie-parser');
// const express      = require('express');
// const mongoose     = require('mongoose');
// const logger       = require('morgan');
// const path         = require('path');
// require('./config/db.config');

// const app = express();
// require('./confing/session.config')(app)

// Middleware Setup
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// Express View engine setup
// app.use(require('node-sass-middleware')({
//   src:  path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   sourceMap: true
// }));

// default value for title local
// app.locals.title = 'LibreriaX';
// const book = require('./routes/books.route');

// app.use('/', book);

// module.exports = app;