var express = require('express');
var router = express.Router();

/* GET antonyms listing. */
router.get('/', function(req, res, next) {
  start = (new Date()).getTime();
  antonym = convertAntonym(req.query.phrase);
  time = ((new Date()).getTime() - start) / 1000;
  var output = {
    phrases: [{
      phrase: req.query.phrase,
      antonym: (antonym === req.query.phrase)? '' : antonym,
      time: time,
    }]
  };
  res.send(JSON.stringify(output));
});

var convertAntonym = function() {
  var table = {
    '暑い' : '寒い',
    'お腹すいた' : '満腹',
    '赤の他人' : '白い恋人',
    'ノーブラ' : 'イエスパンティー',
    'やせ我慢' : 'デブ大暴れ',
    'おかあさんといっしょ' : 'お父さんは別居',
    'じゃがりこ' : 'ポテロング',
    'くじら12号' : 'もぐら75号',
    '倍返しだ！' : 'ねえねえ半分こしよ',
    'おーいお茶' : 'いえーいコーラ！',
  };
  var needle = new RegExp('(' + Object.keys(table).join('|') + ')', 'g');
  function replacer(c) { console.info(c);return table[c]; }
  return function(phrase) { return phrase.replace(needle, replacer); };
}();


module.exports = router;
