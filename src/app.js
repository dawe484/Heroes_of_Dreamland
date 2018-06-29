'use strict';

const express = require('express');
// const path = require('path');
// const expressHandlebars = require('express-handlebars');
// const expressSession = require('express-session');
// const expressValidator = require('express-validator');
// const passport = require('passport');
// const mongoose = require('mongoose');
// const helmet = require('helmet');

// Init App
let app = express();

// // Set connection to the database
// let databaseOption = {
//   server: {
//     socketOptions: {
//       keepAlive: 300000,
//       connectTimeoutMS: 30000
//     }
//   },
//   replset: {
//     socketOptions: {
//       keepAlive: 300000,
//       connectTimeoutMS: 30000
//     }
//   }
// };

// mongoose.connect('mongodb://localhost:27017/hod_db', databaseOption)
//   .then(() => {
//     // eslint-disable-next-line no-console
//     console.log('Database successfully connected.\n---------------------------------------');
//   }, (err) => {
//     // eslint-disable-next-line no-console
//     console.error('Database not connected.\n' + err.message);
//     process.exit();
//   });

// // View Engine
// app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', expressHandlebars({
//   defaultLayout: 'layout',
//   helpers: {
//     toLowerCase: function (str) {
//       return str.toLowerCase();
//     }
//   }
// }));
// app.set('view engine', 'hbs');

// // Express Validator
// app.use(expressValidator({
//   errorFormatter: (param, msg, value) => {
//     let namespace = param.split('.');
//     let root = namespace.shift();
//     let formParam = root;

//     while (namespace.length) {
//       formParam += '[' + namespace.shift() + ']';
//     }

//     return {
//       param: formParam,
//       msg: msg,
//       value: value
//     };
//   }
// }));

// Set Port
app.set('port', (process.env.PORT || 4000));
// eslint-disable-next-line
let server = app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('---------------------------------------\n' +
    'Web server is running in ' + app.get('env') + ' on port ' + app.get('port') +
    '\nPress Ctrl-C to terminate.');
  // + "\n---------------------------------------");
});

module.exports = app;
