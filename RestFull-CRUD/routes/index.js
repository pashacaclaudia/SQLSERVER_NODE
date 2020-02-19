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
    sql.connect(config, err => {
        if (err) console.log(err);  // ... error check  

        // Query
        let sqlRequest = new sql.Request();  //Oggetto che serve a creare le query
        sqlRequest.query('select * from dbo.[cr-unit-attributes]', (err, result) => {
            if (err) console.log(err); // ... error checks
            res.render('truppe', result);  //Invio il risultato
        });
    });
  

});


module.exports = router;
