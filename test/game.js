//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
process.env.PORT = 8081;

var mongoose = require('mongoose');
var Game = require('../controllers/models/game');

//Require the devDependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Game', function() {
  beforeEach(function(done) {
    Game.remove({}, function(err) {
      done();
    });
  });
  /*
   * Test the /POST route
   */
   describe('/POST game', function() {
     it('it should POST a new game', function(done) {
       var game = {
         player1: 'Nico',
         player2: 'Duque'
       };
       chai.request(server)
        .post('/api/game')
        .send(game)
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('New Game Started!');
          res.body.game.should.have.property('gameId');
          res.body.game.should.have.property('moves');
          res.body.game.should.have.property('players');
          res.body.game.players.should.have.property('player1').eql('Nico');
          res.body.game.players.should.have.property('player2').eql('Duque');
          done();
        });
     }); //it should POST a game
   }); // /POST
});
