var express = require('express');
var router = express.Router();
const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "sis-realestate-admin", // update me
      password: "Anesu-Chakaingesu1" // update me
    },
    type: "default"
  },
  server: "sis-realestate.database.windows.net", // update me
  options: {
    database: "SIS-realestate", //update me
    encrypt: true
  }
};
const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    // queryDatabase();
    suburbsWithAverages();
  }
});
connection.connect();

function queryDatabase() {
  console.log('Query DB info')

  const request = new Request(
  `SELECT TOP (5) [postcode]
  ,[name]
  FROM [dbo].[suburb]`,
  (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
  });

  request.on("row", columns => {
      columns.forEach(column => {
        console.log("%s\t%s", column.metadata.colName, column.value);
      });
    });

  connection.execSql(request);
}

var suburbArray = new Array();
function suburbsWithAverages(){
  console.log('Suburb With Averages: Query DB')

  const request = new Request(
  `SELECT SUBSTRING([suburb], 0, 100), AVG(price) 
  FROM [dbo].[big_property] 
  WHERE PRICE IS NOT NULL 
  GROUP BY SUBSTRING([suburb], 0, 100)
  ORDER BY SUBSTRING([suburb], 0, 100)`,
  (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
  });

  request.on("row", columns => {
    columns.forEach(column => {
      suburbArray.push({name: column.metadata.colName, value: column.value});
    });
  });

  connection.execSql(request);

  return suburbArray;
}

// GET home page.
router.get('/', function(req, res, next) {
  res.send(suburbsWithAverages());
});

module.exports = router;