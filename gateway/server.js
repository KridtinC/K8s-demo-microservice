// var mysql = require("mysql");
var http = require("http");
const express = require("express");
const app = express();
const port = process.env.PORT || 5004;
const bodyParser = require("body-parser");
const request = require('request')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/gateway/plus', (req, res) => {
    console.log('plus-gateway')
    console.log(req.body)
    options = {
        url: 'http://service1:5000/service1/plus',
        method: 'POST',
        json: {
            param1: req.body['param1'],
            param2: req.body['param2']
        }
    }
    api_request(res, options)
})

app.post('/gateway/multiply', (req, res) => {
    console.log('multiply-gateway')
    options = {
        url: 'http://service2:5001/service2/multiply',
        method: 'POST',
        json: {
            param1: req.body['param1'],
            param2: req.body['param2']
        }
    }
    api_request(res, options)
})

app.post('/gateway/minus', (req, res) => {
    console.log('minus-gateway')
    options = {
        url: 'http://service3:5002/service3/minus',
        method: 'POST',
        json: {
            param1: req.body['param1'],
            param2: req.body['param2']
        }
    }
    api_request(res, options)
})

app.post('/gateway/divide', (req, res) => {
    console.log('divide-gateway')
    options = {
        url: 'http://service4:5003/service4/divide',
        method: 'POST',
        json: {
            param1: req.body['param1'],
            param2: req.body['param2']
        }
    }
    api_request(res, options)
})

function api_request(res, options){
    request.post(options, function (error, response, body) {
        try {
            return res.send({ result: body['result'] })
        } catch (err) {
            res.send({ "error": error })
            console.log(err)
        }
    })
}

app.get('/', function (req, res, next) {
    res.send("Gateway");
});

app.listen(port, () => console.log(`Listening on port ${port}`));