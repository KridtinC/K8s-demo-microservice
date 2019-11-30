// var mysql = require("mysql");
var http = require("http");
const express = require("express");
const app = express();
const port = process.env.PORT || 5003;
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

app.post('/service4/minus', (req, res) => {
    console.log('minus-server4')
    result = {
        result: req.body['param1'] - req.body['param2']
    }
    return res.send(result)
})

app.post('/service4/divide', (req, res) => {
    console.log('divide-server4')
    options = {
        url: 'http://127.0.0.1:5002/service3/divide',
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
    res.send("Service4");
});

app.listen(port, () => console.log(`Listening on port ${port}`));