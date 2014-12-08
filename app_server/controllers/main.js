//var express = require('express');
//var router = express.Router();
//
///* GET home page. */
//router.get('/', function(req, res) {
//    res.render('index', { title: 'Express' });
//});
//
//module.exports = router;

// TODO:  See if there is a better way to wrap and expose this
/* GET home page. */
module.exports.index = function(req, res) {
    res.render('index', { title: 'Express' });
};