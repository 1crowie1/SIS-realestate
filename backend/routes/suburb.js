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

// Get all suburbs
router.get('/', function(req, res, next) {
    console.log('Query DB: Get Popular Suburbs')

    const request = new Request(
        `SELECT [name] FROM [dbo].[suburb] GROUP BY [name] ;`,
        (err, rowCount) => {
                  if (err) {
                    console.error(err.message);
                  } else {
                    console.log(`${rowCount} row(s) returned`);
                  }
            });
        
            var suburbsList = [];
            request.on("row", columns => {
                  var suburb = {};
                  columns.forEach((column) => {
                    if (column.value === null) {
                        console.log('NULL');
                    } else {
                        suburb[column.metadata.colName] = column.value;
                    }
                    console.log(suburb)
                });
                suburbsList.push(suburb);
            });
            
            connection.execSql(request);

    request.on('requestCompleted', function () {
        res.send(suburbsList); // Return all suburbs
    });
});

router.get('/getPopularSuburbs', function(req,res,next){
    console.log('Query DB: Get Popular Suburbs')

    const request = new Request(
      `SELECT SUBSTRING([suburb], 0, 25) AS name, COUNT(id) AS suburb_listing_count FROM [dbo].[big_property] GROUP BY SUBSTRING([suburb], 0, 25) ORDER BY suburb_listing_count desc;`,
      (err, rowCount) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log(`${rowCount} row(s) returned`);
          }
    });

    var popularSuburbs = [];
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
        popularSuburbs.push(suburb);
    });
    
    connection.execSql(request);

    request.on('requestCompleted', function () {
        res.send(popularSuburbs); // Return popular suburbs
    });
    
})

// ENDPOINT NOT WORKING - some issue with the query?? @Anesu
router.get('/suburbBreakdown/', function(req, res, next) {

    var suburbName = req.suburbName;

    console.log('Query DB: Get Suburn Breakdown')

    const request = new Request(
      `SELECT SUBSTRING([suburb], 0, 25) AS name, COUNT(id) AS suburb_listing_count 
      FROM [dbo].[big_property] 
      WHERE name = ${suburbName} 
      GROUP BY SUBSTRING([suburb], 0, 25);`,
      (err, rowCount) => {
          if (err) {
            console.error(err.message);
          } else if(rowCount !== 1){
            console.log(`More than one result returned for suburb`);
          }else{
            console.log("Suburb Details found");
          }
    });

    var suburb = {};
    request.on("row", columns => {
          columns.forEach((column) => {
            if (column.value === null) {
                console.log('NULL');
            } else {
                suburb[column.metadata.colName] = column.value;
            }
        });
        console.log(suburb);
    });
    
    connection.execSql(request);

    request.on('requestCompleted', function () {
        res.send(suburb); // Return suburb breakdown
    });

});

module.exports = router;
