var mongoose = require('../../services/dbAccessService');
var Schema = mongoose.Schema;

var GameSchema = new Schema({

});

module.exports = mongoose.model('Game', GameSchema);
