var express = require('express');
const { Connection, Request } = require("tedious");
var router = express.Router();

const config = require('../config/db');
// Import Files
var GeoJSON = require('.././data/suburb-nsw.json');

var suburbArray = [];

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

// GET all suburbs with average Price
// Send GeoJSON Formatted.
router.get('/', function(req, res, next) {
    console.log('Query DB: Suburb Average Prices')

    const request = new Request(
    `SELECT SUBSTRING([suburb], 0, 25) AS suburb_name, AVG(price) AS suburb_price, COUNT(id) AS suburb_listing
    FROM [dbo].[big_property] 
    WHERE PRICE IS NOT NULL 
    GROUP BY SUBSTRING([suburb], 0, 25)
    ORDER BY SUBSTRING([suburb], 0, 25)`,
    (err, rowCount) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(`${rowCount} row(s) returned`);
        }
    });

    var suburbDataJSON = [];
    request.on("row", (columns) => {
        var entry = {};
        columns.forEach((column) => {
            if (column.value === null) {
                console.log('NULL');
            } else {
                entry[column.metadata.colName] = column.value;
            }
        });
        suburbDataJSON.push(entry);
    });

    connection.execSql(request);

    request.on('requestCompleted', function () {
        // Set GeoJSON to Include Suburb Name and Average Price;
        GeoJSON.features.forEach(function(res, index) { 
            var suburb_price = suburbDataJSON.filter(function(suburb) { if ((suburb.suburb_name).toUpperCase() == res.properties.nsw_loca_2) {return suburb } }); //
            // console.log((suburbDataJSON[74].suburb_name).toUpperCase() + " " + res.properties.nsw_loca_2);
            if (!isNullorEmpty(suburb_price[0])) { // Ultimo is Equal to Ultimo then update GEO JSON with average price
                console.log(" Suburb Name: " + suburb_price[0].suburb_name + " | Price: " + suburb_price[0].suburb_price + " | Listing: " + suburb_price[0].suburb_listing);
                res.properties.price = suburb_price[0].suburb_price; // 1001
                res.properties.listing = suburb_price[0].suburb_listing; // 1001
            } else {
                res.properties.price = 0;
                res.properties.listing = 0;
            }
        });
        GeoJSON.updated = new Date();
        res.send(GeoJSON); // Export GeoJSON
    });
});

module.exports = router;

function isNullorEmpty(strVal) {
    return (strVal == null || strVal == '' || strVal == 'null' || strVal == undefined || strVal == 'undefined' || strVal == '- None -');
}
