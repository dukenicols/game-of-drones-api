module.exports = function(router) {
  var Game = require('../models/game');
  var utils = require('../../services/utils')();

  router.route('/game')
    .post(function(req, res) {
      var game = new Game();
      game.gameId = utils.makeId();
      game.players.player1 = req.body.player1;
      game.players.player2 = req.body.player2;

      game.save(function(err) {
        if(err) {
          res.json(err);
        }
        res.json({ message: 'New Game Started!', game});
      });
    });
}
