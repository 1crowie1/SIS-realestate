const { Connection, Request } = require("tedious");

const config = require('../config/db');

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

connection.connect();

function queryDatabase() {
  console.log('Query DB info')

  const request = new Request(
  `SELECT TOP (100) [postcode]
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

function getAllSuburbs(){
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
        columns.forEach(column => {
          console.log("%s\t%s", column.metadata.colName, column.value);
        });
      });
  
    connection.execSql(request);
}

function getPopularSuburbs(){
  const request = new Request(
    `SELECT suburb, count(*) AS count FROM [dbo].[suburb] GROUP BY suburb order by count desc;`,
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
