// var mysql = require("mysql");
var http = require("http");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const bodyParser = require("body-parser");
const request = require('request')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const config = require("./config.js");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: config.database.user,
//   password: config.database.password,
//   database: "sds",
//   port: "3306",
//   dateStrings: true
// });

// connection.connect();

app.post('/service2/plus', (req, res) => {
    console.log('plus-server2')
    result = {
        result: req.body['param1'] + req.body['param2']
    }
    return res.send(result)
})

app.post('/service2/multiply', (req, res) => {
    console.log('multiply-server2')
    options = {
        url: 'http://127.0.0.1:5000/service1/multiply',
        method: 'POST',
        json: {
            param1: req.body['param1'],
            param2: req.body['param2']
        }
    }
    request.post(options, function(error, response, body) {
        return res.send({result: body['result']})
      })
})

app.get('/', function (req, res, next) {
    res.send("Service2");
});

app.listen(port, () => console.log(`Listening on port ${port}`));