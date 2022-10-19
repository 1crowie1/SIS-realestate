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
    getRecommendedSuburbs(clusterNumber, res);
  });
  
  
router.get('/feelingLucky/', (req, res) => {
  
    var maxClusterNumber = 1
    // based on max cluster number
    const request = new Request(
        `SELECT MAX([cluster_num])  
        FROM [dbo].[big_property]`,
        (err, rowCount) => {
            if (err) {
                console.error(err.message);
              } else if(rowCount !== 1){
                console.log(`More than one result returned for max value`);
              }else{
                console.log("Max cluster number found");
              }
    });

    console.log(request);

    request.on("row", columns => {
        columns.forEach((column) => {
          if (column.value === null) {
              console.log('NULL');
          } else {
              maxClusterNumber = column.value;
              console.log("max",maxClusterNumber)
          }
      });
    });

    connection.execSql(request);

    var clusterNumber = Math.floor(Math.random() * (maxClusterNumber - 1 + 1) + 1)
    console.log("clusternum", clusterNumber);
    request.on('requestCompleted', function () {
        getRecommendedSuburbs(clusterNumber, res); // Return recommended suburbs
    });
  });

function getRecommendedSuburbs(clusterNumber, res){
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
}
  
module.exports = router;
