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
    // var clusterNumber = 1;  // Temp placeholder for cluster number, pls replace this. second heatmap
    var clusterNumber = req.query.clusterNumber;
    getRecommendedSuburbs(clusterNumber, res);
  });

router.get('/getAllListings/', (req, res) => {
    getAllListings(res);
  });

router.get('/getCluster/', (req, res) => {
    // var clusterNumber = 1;  // Temp placeholder for cluster number, pls replace this
    var clusterNumber = req.query.clusterNumber;
    getCluster(clusterNumber, res);
  });

router.get('/getImgs/', (req, res) => {
    var listingID = req.query.listingID;
    getImgs(listingID, res);
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
      `SELECT DISTINCT CAST(suburb AS VARCHAR(MAX)) as name, COUNT(id) as suburb_listing_count
      FROM [dbo].[big_property] 
      WHERE [cluster_num] = ${clusterNumber}
      GROUP BY CAST(suburb AS VARCHAR(MAX));`,
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

function getAllListings(res){
  console.log('Query DB: Get All Listings in all Clusters')

  const request = new Request(
    `SELECT id, price, bedrooms, cluster_num
    FROM [dbo].[big_property] 
    WHERE [cluster_num] IS NOT NULL;`,
    (err, rowCount) => {
      if (err) {
          console.error(err.message);
        } else {
          console.log(`${rowCount} row(s) returned`);
        }
  });
  
  var allListings = [];
    request.on("row", columns => {
          var listing = {};
          columns.forEach((column) => {
            if (column.value === null) {
                console.log('NULL');
            } else {
                listing[column.metadata.colName] = column.value;
            }
        });
        console.log(listing);
        allListings.push(listing);
    });

  connection.execSql(request);

  request.on('requestCompleted', function () {
      res.send(allListings); // Return listings
  });
}

function getCluster(clusterNumber, res){
  console.log('Query DB: Get Cluster Listings')

  const request = new Request(
    `SELECT *
    FROM [dbo].[big_property] 
    WHERE [cluster_num] = ${clusterNumber};`,
    (err, rowCount) => {
      if (err) {
          console.error(err.message);
        } else {
          console.log(`${rowCount} row(s) returned`);
        }
  });

  var clusters = [];
  request.on("row", columns => {
        var cluster = {};
        columns.forEach((column) => {
          if (column.value === null) {
              console.log('NULL');
          } else {
              cluster[column.metadata.colName] = column.value;
          }
      });
      console.log(cluster);
      clusters.push(cluster);
  });
  
  connection.execSql(request);

  request.on('requestCompleted', function () {
      res.send(clusters); // Return cluster listings
  });
}

function getImgs(listingID, res){
  console.log('Query DB: Get Cluster Listings')

  const request = new Request(
    `SELECT DISTINCT CAST(link AS VARCHAR(MAX))
    FROM dbo.big_property_images
    WHERE id = ${listingID};`,
    (err, rowCount) => {
      if (err) {
          console.error(err.message);
        } else {
          console.log(`${rowCount} row(s) returned`);
        }
  });

  var imgs = [];
  request.on("row", columns => {
        var img = {};
        columns.forEach((column) => {
          if (column.value === null) {
              console.log('NULL');
          } else {
              img[column.metadata.colName] = column.value;
          }
      });
      console.log(img);
      imgs.push(img);
  });
  
  connection.execSql(request);

  request.on('requestCompleted', function () {
      res.send(imgs); // Return cluster listings
  });
}

module.exports = router;
