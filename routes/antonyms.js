var express = require('express');
var router = express.Router();

/* GET antonyms listing. */
router.get('/', function(req, res, next) {
  antonym = getAntonyms(req.query.phrase);
  var output = {
    phrases: [
      { phrase: req.query.phrase, antonym: (antonym === req.query.phrase)? '' : antonym }
    ]
  };
  res.send(JSON.stringify(output));
});

function getAntonyms(word){
  return word
    .replace('暑い', '寒い')
    .replace('お腹すいた', '満腹')
    .replace('赤の他人', '白い恋人')
    .replace('ノーブラ', 'イエスパンティー')
    .replace('やせ我慢', 'デブ大暴れ')
    .replace('おかあさんといっしょ', 'お父さんは別居')
    .replace('じゃがりこ', 'ポテロング')
    .replace('くじら12号', 'もぐら75号')
    .replace('倍返しだ！', 'ねえねえ半分こしよ')
    .replace('おーいお茶', 'いえーいコーラ！');
}

module.exports = router;
