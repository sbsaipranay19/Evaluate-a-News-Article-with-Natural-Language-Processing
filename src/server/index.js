var path = require('path')
const cors = require('cors')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
var aylien = require("aylien_textapi");

const dotenv = require('dotenv');
dotenv.config();

let projectData = {};

var textApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post("/api", (req, res) => {
    const text = req.body;
    console.log("Request to '/api' endpoint", text);
    textApi.sentiment(text, (error, result, remaining) => {
        if (error) 
            console.log(error);
        console.log("Response and Requests available",result,
            remaining);
        res.send(result);
    });
});

const port = 8081;
  
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App listening on port 8081!')
})

