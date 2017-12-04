// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");

// MYSQL
// Create the connection information for the sql database
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,

//     // Your username
//     user: "test",

//     // Your password
//     password: "test123",
//     database: "restaurantDB"
// });

// // Connection
// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("connection success at port: " + PORT);
//     makeReservation();
// });

// Sets up the Express App
// =============================================================

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var customer = [{
    customer: "Roy",
    number: 5555555555,
    email: "roy@gmail.com",
    id: 21
}];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Create New Characters - takes in JSON input
app.post("/reserve", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newCustomer = req.body;
    newCustomer.customer = newCustomer.name.replace(/\s+/g, "").toLowerCase();

    console.log(newCustomer);

    characters.push(newCustomer);

    res.json(newCustomer);
});

// MYSQL
// function makeReservation(input) {
//     var customer = [{
//         name: "name",
//         number: "number",
//         email: "email",
//         id: "unique_id"
//     }];
//     var query = "SELECT * FROM customer";
//     connection.query(query, function (err, res) {
//         if (err) throw err;
//         console.log(res);
//     });
// }

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});