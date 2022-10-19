var express = require('express');
const { Connection, Request } = require("tedious");
var router = express.Router();

const config = require('../config/db');

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connection Established")
  }
});

connection.connect();

app.get('/getRecommendedSuburbs/', (req, res) => {
    // TO DO: Calculate cluster number based on request params
    
    var clusterNumber = 1;  // Temp placeholder for cluster number, pls replace this. 
  
    // cluster number - second heatmap
    // count of listing per suburbs
    // suburb names
  
    // get the recommenced suburb from harrison and then query the db for the count of the recommendations
    res.send({ recommendedSuburbs: recommendationMockData.recommendedSuburbs,  });
  });
  
  
  app.get('/feelingLucky/', (req, res) => {
    // Mock data
  
    // same as recommended suburb with a random cluster number
    // based on max cluster number
    // The below data will be based of random calculated properties so we will make a random selection of recommendations
    res.send({ body: properties });
  });
  