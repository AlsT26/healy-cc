const mysql = require("mysql");

// import mysql
// const dbPool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "demo_api",
// });

// dbPool.getConnection((err, connection) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//   } else {
//     connection.release();
//     console.log("Connected to the database");
//   }
// });

// module.exports = dbPool.promise();

// -------------------------------
const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo_api",
});

dbConnection.connect((error) => {
  if (error) {
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (error.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (error.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  } else {
    console.log("Database connected");
  }
});

module.exports = { dbConnection };
