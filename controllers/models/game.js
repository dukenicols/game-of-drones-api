var mongoose = require('../../services/dbAccessService');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  gameId: String,
  players: { player1: String, player2: String },
  moves: [{
    number: Number,
    player1: String,
    player2: String,
    winner: String
  }],
  completed: Boolean,
  overallWinner: String
});

module.exports = mongoose.model('Game', GameSchema);
