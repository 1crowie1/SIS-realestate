// require('dotenv').config();
const heatmap = require('./src/data/mock_data/SuburbHeatMap.js');
const recommendationMockData  = require('./src/data/mock_data/SuburbRecommendations.js');
const properties = require('./src/data/mock_data/CalculatedProperties.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 6000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/getAllSuburbs/', (req, res) => {
  // Mock data

  //getting suburbs
  getAllSuburbs()
  .then((heatmap) => {
    res.send(heatmap);
    console.log("All suburbs grabbed successfully!");
  })
  .catch((error) => {
      res.send('THERE WAS A PROBLEM GETTING DATA');
      console.error("Error grabbing suburbs: ", error);
  });

  res.send({ body: heatmap });
});

app.get('/getPopularSuburbs', (req, res) => {
  // Mock data

  //definition of popular??
// 100 users
  // number of listing
  // number of recommendations

  getPopularSuburbs()
  .then((popularSuburbs) => {
    res.send(popularSuburbs);
    console.log("All popularSuburbs grabbed successfully!");
  })
  .catch((error) => {
      res.send('THERE WAS A PROBLEM GETTING DATA');
      console.error("Error grabbing popularSuburbs: ", error);
  });
});

app.get('/getRecommendedSuburbs/', (req, res) => {
  // Mock data


  // get the recommenced suburb from harrison and then query the db for the count of the recommendations
  res.send({ recommendedSuburbs: recommendationMockData.recommendedSuburbs,  });
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
