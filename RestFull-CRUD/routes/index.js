var express = require('express');
var router = express.Router();
const sql = require('mssql');
var createError = require('http-errors');

const config = {
  user: 'malizia.fabio',  //Vostro user name
  password: 'scuola2019*', //Vostra password
  server: "213.140.22.237",  //Stringa di connessione
  database: 'fmClashRoyale', //(Nome del DB)
}


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', )
});


module.exports = router;
