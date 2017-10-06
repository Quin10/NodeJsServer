var http = require('http');
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.post('/', urlencodedParser, (req, res) =>{
        res.status(200).end();
        console.log(req.body);
        var reqBody = req.body;
        res.send("GOOD");
    
});

var port = 8009;
app.listen(port);
console.log('Listening on port',port);
