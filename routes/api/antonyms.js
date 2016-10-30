var express = require('express');
var router = express.Router();
var Antonym = require('../../app/models/antonym');
var start = (new Date()).getTime();

router.get('/', function(req, res, next) {
  Antonym.find({}, function(err, antonyms) {
    var table = {};
    for(var i = 0; i < antonyms.length; i++) {
      table[antonyms[i].phrase] = antonyms[i].antonym;
    }
    var phrase = req.query.phrase;
    var antonym = '';
    if(table.length > 0) {
      var replacer = function(c) { return table[c]; }
      var needle = new RegExp('(' + Object.keys(table).join('|') + ')', 'g');
      antonym = phrase.replace(needle, replacer);
    }

    var output = {
      phrases: [{
        phrase: req.query.phrase,
        antonym: (antonym === phrase)? '' : antonym,
        time: ((new Date()).getTime() - start) / 1000,
      }]
    };
    res.send(JSON.stringify(output));
  }).sort({ position: 'asc' });
});

module.exports = router;
