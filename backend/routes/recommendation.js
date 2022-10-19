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

router.get('/getRecommendedSuburbs/', (req, res) => {
    // TO DO: Calculate cluster number based on request params
    
    var clusterNumber = 1;  // Temp placeholder for cluster number, pls replace this. second heatmap

    console.log('Query DB: Get Recommended Suburbs')

    const request = new Request(
      `SELECT SUBSTRING([suburb], 0, 25) AS name, COUNT(id) AS suburb_listing_count 
      FROM [dbo].[big_property] 
      WHERE [cluster_num] = ${clusterNumber}
      GROUP BY SUBSTRING([suburb], 0, 25) 
      ORDER BY suburb_listing_count desc;`,
      (err, rowCount) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log(`${rowCount} row(s) returned`);
          }
    });

    var recommendedSuburbs = [];
    request.on("row", columns => {
          var suburb = {};
          columns.forEach((column) => {
            if (column.value === null) {
                console.log('NULL');
            } else {
                suburb[column.metadata.colName] = column.value;
            }
        });
        console.log(suburb);
        recommendedSuburbs.push(suburb);
    });
    
    connection.execSql(request);

    request.on('requestCompleted', function () {
        res.send(recommendedSuburbs); // Return recommended suburbs
    });
  });
  
  
// router.get('/feelingLucky/', (req, res) => {
//     // Mock data
  
//     // same as recommended suburb with a random cluster number
//     // based on max cluster number
//     // The below data will be based of random calculated properties so we will make a random selection of recommendations
//     res.send({ body: properties });
//   });
  
module.exports = router;
