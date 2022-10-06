require('dotenv').config();
const heatmap = require('./src/data/mock_data/SuburbHeatMap.js');
const recommendationMockData  = require('./src/data/mock_data/SuburbRecommendations.js');
const properties = require('./src/data/mock_data/CalculatedProperties.js');
const express = require('express');
const app = express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/getAllSuburbs/', (req, res) => {
  // Mock data
  res.send({ body: heatmap });
});

app.get('/getPopularSuburbs', (req, res) => {
  // Mock data
  res.send({ body: recommendationMockData.popularSuburbs });
});

app.get('/getRecommendedSuburbs/', (req, res) => {
  // Mock data
  res.send({ body: recommendationMockData.recommendedSuburbs });
});

app.get('/calculateNearestProperties/', (req, res) => {
  // Mock data
  // data below will use some recommendations from the calculator to get the properties from the DBSCAN model
  res.send({ body: properties });
});

app.get('/suburbBreakdown/', (req, res) => {
  // Mock data
  res.send({ body: recommendationMockData.popularSuburbs });
});

app.get('/feelingLucky/', (req, res) => {
  // Mock data
  // The below data will be based of random calculated properties so we will make a random selection of recommendations
  res.send({ body: properties });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
