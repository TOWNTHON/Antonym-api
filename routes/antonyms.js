var express = require('express');
var router = express.Router();

/* GET antonyms listing. */
router.get('/', function(req, res, next) {
  antonym = getAntonyms(req.query.phrase);
  var output = {
    phrases: [
      { phrase: req.query.phrase, antonym: antonym }
    ]
  };
  res.send(JSON.stringify(output));
});

function getAntonyms(word){
  word = word.replace('暑い', '寒い');
  word = word.replace('お腹すいた', '満腹');
  word = word.replace('赤の他人', '白い恋人');
  word = word.replace('ノーブラ', 'イエスパンティー');
  word = word.replace('やせ我慢', 'デブ大暴れ');
  word = word.replace('おかあさんといっしょ', 'お父さんは別居');
  word = word.replace('じゃがりこ', 'ポテロング');
  word = word.replace('くじら12号', 'もぐら75号');
  word = word.replace('倍返しだ！', 'ねえねえ半分こしよ');
  word = word.replace('おーいお茶', 'いえーいコーラ！');
  return word;
}

module.exports = router;
