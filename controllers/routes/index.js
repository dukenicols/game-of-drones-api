module.exports = function(router) {
  // Middleware for enabling CORS
  router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
  router.get('/', function(req, res) {
      res.json({ message: 'hooray! welcome to our api!' });
  });

  require('./game')(router);
}
