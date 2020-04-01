var express = require('express');
var router = express.Router();
const sql = require('mssql');
var createError = require('http-errors');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', )
});


module.exports = router;
