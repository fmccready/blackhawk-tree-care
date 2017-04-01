console.log(process.env.PORT);
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));
/*
app.use('/assets', express.static('dist/assets'));
app.all('/inline.js', (req, res) =>{
    res.status(200).sendFile(__dirname + '/dist/inline.js');
});
app.all('/main.bundle.js', (req, res) => {
    res.status(200).sendFile(__dirname + '/dist/main.bundle.js');
});
app.all('/inline.map', (req, res) => {
    res.status(200).sendFile(__dirname + '/dist/inline.map');
});
app.all('/main.map', (req, res) => {
    res.status(200).sendFile(__dirname + '/dist/main.map');
});
app.all('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/dist/index.html');
});
*/

app.listen(process.env.PORT || 3000);
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;