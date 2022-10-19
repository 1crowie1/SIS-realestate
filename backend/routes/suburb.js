var express = require('express');
const { Connection, Request } = require("tedious");
var router = express.Router();

const config = require('../config/db');

const connection = new Connection(config);
var suburbs = [];

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connection Established")
    getAllSuburbs();
  }
});

connection.connect();

function getAllSuburbs(){

    console.log('Query DB: Get All Suburbs')

    const request = new Request(
      `SELECT suburb, AVG(price) AS average_price FROM [dbo].[suburb] GROUP BY suburb;`,
      (err, rowCount) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log(`${rowCount} row(s) returned`);
          }
    });

    request.on("row", columns => {
          var suburb = {};
          columns.forEach((column) => {
            if (column.value === null) {
                console.log('NULL');
            } else {
                suburb[column.metadata.colName] = column.value;
            }
        });
        suburbs.push(entry);
    });
    
    connection.execSql(request);
}

// Get all suburbs
router.get('/', function(req, res, next) {
    res.send(suburbs); // Return all suburbs
});

router.get('/getPopularSuburbs', function(req,res,next){
    res.send(suburbs); // Return all suburbs
})

module.exports = router;
