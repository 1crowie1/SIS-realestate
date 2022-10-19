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
