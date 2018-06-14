
var mysql = require("mysql");

//Initialize connection configuration
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "elle_db"
});

//open db connection
con.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

module.exports = con;