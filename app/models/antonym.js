var mongo = require('mongoose');

var antonymSchema = new mongo.Schema({
  phrase: { type: String, required: true, unique: true },
  antonym: { type: String, required: true },
  position: { type: Number, default: 0 }
});

module.exports = mongo.model('Antonym', antonymSchema);
