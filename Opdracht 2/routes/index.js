var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/index', { title: 'Booky' });
});

/* GET detail page. */
// router.get('/:stringparam', function(req, res, next) {
//   res.render('detail', { title: req.params.stringparam,
//   body: 'Dit is de body'});
// });

// router.get('/*', function(req, res, next) {
//   res.render('404', { title: req.params.stringparam,
//   body: 'Page not found!'});
// });





module.exports = router;
