// var mysql = require("mysql");
var http = require("http");
const express = require("express");
const app = express();
const port = process.env.PORT || 5002;
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

app.post('/service3/minus', (req, res) => {
    console.log('minus-server3')
    options = {
        url: 'http://192.168.99.92:5003/service4/minus',
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

app.post('/service3/divide', (req, res) => {
    console.log('divide-server3')
    result = {
        result: req.body['param1'] / req.body['param2']
    }
    return res.send(result)
})

app.get('/', function (req, res, next) {
    res.send("Service3");
});

app.listen(port, () => console.log(`Listening on port ${port}`));