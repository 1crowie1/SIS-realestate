var express = require('express');
const { Connection, Request } = require("tedious");
var router = express.Router();

const config = require('../config/db');

const connection = new Connection(config);
var suburbsList = [];
// var popularSuburbs = [];

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connection Established")
    // getAllSuburbs();
    // getPopularSuburbs();
  }
});

connection.connect();

function getAllSuburbs(){

    console.log('Query DB: Get All Suburbs')
    const request = new Request(
        `SELECT [name] FROM [dbo].[suburb] GROUP BY [name] ;`,
        (err, rowCount) => {
                  if (err) {
                    console.error(err.message);
                  } else {
                    console.log(`${rowCount} row(s) returned`);
                  }
            });
        
            // var suburbs = [];
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
                suburbs.push(suburb);
            });
            
            connection.execSql(request);

}

function getPopularSuburbs(){

    console.log('Query DB: Get Popular Suburbs')

    const request = new Request(
      `SELECT [name], count(*) AS count FROM [dbo].[suburb] GROUP BY [name] order by count desc;`,
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
        popularSuburbs.push(entry);
    });
    
    connection.execSql(request);

    return popularSuburbs;
}

// Get all suburbs
router.get('/', function(req, res, next) {
    getAllSuburbs();
    res.send(suburbs); // Return all suburbs
});

router.get('/getPopularSuburbs', function(req,res,next){
    res.send(getPopularSuburbs()); // Return popular suburbs
})

module.exports = router;
