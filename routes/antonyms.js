var express = require('express');
var router = express.Router();
var mongo = require('mongoose');
var Antonym = require('../app/models/antonym');
// mongo.connect('mongodb://localhost/antonym-api');
mongo.connect('mongodb://heroku_0s34pk8q:g28vicht7vd0a8j66dq6ai7kds@ds139267.mlab.com:39267/heroku_0s34pk8q');

router
  .get('/', function(req, res, next) {
    Antonym.find({}, function(err, antonyms) {
        res.render('antonym', {
          antonyms: antonyms
      });
    }).sort({ position: 'asc' })
  })
  .post('/', function(req, res, next) {
    Antonym.create({
      phrase : req.param('phrase'),
      antonym : req.param('antonym'),
      position : req.param('position') || 0
    }, function(err) {
      if (err) {
        Antonym.find({}, function(error, antonyms) {
          res.render('antonym', {
            antonyms: antonyms,
            message: err.message
          });
        }).sort({ position: 'asc' })
      } else {
        res.redirect('/antonyms');
      }
    });
  })
  .get('/init', function(req, res, next) {
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
    for(var key in table) {
      console.info(key);
      console.info(Antonym.findOneAndUpdate(
        { phrase: key },
        { $set: { antonym: table[key] } },
        { new: true, upsert: true }
      ));
    }
    res.send('Init Completed.')
  });

module.exports = router;
