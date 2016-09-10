var config    = require('config');
var mongoose  = require('mongoose');
var options   = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
};

mongoose.connect(config.DBHost, options);
module.exports = mongoose;
