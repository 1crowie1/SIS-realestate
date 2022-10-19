// require('dotenv').config();
const heatmap = require('./src/data/mock_data/SuburbHeatMap.js');
const recommendationMockData  = require('./src/data/mock_data/SuburbRecommendations.js');
const properties = require('./src/data/mock_data/CalculatedProperties.js');
const express = require('express');
const { suburbs } = require('./src/data/mock_data/SuburbHeatMap.js');
const app = express();



app.get('/getRecommendedSuburbs/', (req, res) => {
  // Mock data

  // cluster number - second heatmap
  // count of listing per suburbs
  // suburb names

  // get the recommenced suburb from harrison and then query the db for the count of the recommendations
  res.send({ recommendedSuburbs: recommendationMockData.recommendedSuburbs,  });
});

app.get('/calculateNearestProperties/', (req, res) => {
  // Mock data
  // data below will use some recommendations from the calculator to get the properties from the DBSCAN model
  res.send({ body: properties });
});


app.get('/feelingLucky/', (req, res) => {
  // Mock data

  // same as recommended suburb with a random cluster number
  // based on max cluster number
  // The below data will be based of random calculated properties so we will make a random selection of recommendations
  res.send({ body: properties });
});

