var express = require('express');
var router = express.Router();
var Antonym = require('../app/models/antonym');

router
  .get('/:id', function(req, res, next) {
    Antonym.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) {
        res.send({'error': 'An error has occurred - ' + err});
      } else {
        console.log('Success: ' + result + ' document(s) deleted');
        res.redirect('/antonyms');
      }
    });
  });

module.exports = router;
