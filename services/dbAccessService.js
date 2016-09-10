var config    = require('config');
var mongoose  = require('mongoose');
require('dotenv').config();

var DB_CREDENTIALS = process.env.DB_USER + ':' + process.env.DB_PASS;
if (process.env.NODE_ENV === 'test') {
  DB_CREDENTIALS = process.env.DB_USER_TEST + ':' + process.env.DB_PASS_TEST;
}

var DB_HOST = process.env.DB_SUBDOMAIN + '.' + config.DB.host + ':' + process.env.DB_PORT;
var DB_NAME = process.env.NODE_ENV === 'test' ? process.env.DB_NAME_TEST : process.env.DB_NAME;

var DB_STRING = config.DB.driver + '://' + DB_CREDENTIALS + '@' + DB_HOST + '/' + DB_NAME;

var options   = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
};

mongoose.connect(DB_STRING, options);
module.exports = mongoose;
