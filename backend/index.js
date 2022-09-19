require('dotenv').config();
const recommendationMockData  = require('./src/data/mock_data/recommendations.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 6000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/getAllSuburbs/', (req, res) => {
  // Mock data
  res.send({ body: {} });
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
  res.send({ body: {} });
});

app.get('/suburbBreakdown/', (req, res) => {
  // Mock data
  res.send({ body: {} });
});

app.get('/feelingLucky/', (req, res) => {
  // Mock data
  res.send({ body: {} });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
