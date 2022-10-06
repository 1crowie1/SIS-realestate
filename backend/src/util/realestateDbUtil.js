const { Connection, Request } = require("tedious");

    /* 
  //Use Azure VM Managed Identity to connect to the SQL database
  const config = {
      server: process.env["db_server"],
      authentication: {
          type: 'azure-active-directory-msi-vm',
      },
      options: {
          database: process.env["db_database"],
          encrypt: true,
          port: 1433
      }
  };
  //Use Azure App Service Managed Identity to connect to the SQL database
  const config = {
      server: process.env["db_server"],
      authentication: {
          type: 'azure-active-directory-msi-app-service',
      },
      options: {
          database: process.env["db_database"],
          encrypt: true,
          port: 1433
      }
  });
*/
SAMPLE_QUERY = `SELECT TOP (100) [postcode]
,[name]
FROM [dbo].[suburb]`;

class RealestateDbUtil {
    constructor() {
        this.config = {
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

        this.connection = new Connection(config);

        // Attempt to connect and execute queries if connection goes through
        this.connection.on(
            "connect", 
            (err) => {
            if (err) {
                    console.error(err.message);
                } else {
                    queryDatabase();
                }
            }
        );
        
        this.connection.connect();
    }

    sampleQuery() {
        this.query(SAMPLE_QUERY);
    }

    queryDatabase(query) {
        console.log('Query DB info')

        const request = new Request(
            query,
            (err, rowCount) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log(`${rowCount} row(s) returned`);
                }
            }
        );

        request.on(
            "row", 
            columns => {
                columns.forEach(
                    (column) => {
                        console.log("%s\t%s", column.metadata.colName, column.value);
                    }
                );
            }
        );

        connection.execSql(request);
    }
}

module.exports = RealestateDbUtil
