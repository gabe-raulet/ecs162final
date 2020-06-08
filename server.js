
const express = require("express");
const sql = require("sqlite3").verbose();
const path = require("path");
const bodyParser = require('body-parser');

const LostAndFoundDB = new sql.Database("LostAndFound.db");

let cmd = " SELECT name FROM sqlite_master WHERE type ='table' AND name='LAFTable' ";
LostAndFoundDB.get(cmd, function(err, val) {
    if (val == undefined) {
        console.log("No database file - creating one");
        createLostAndFoundDB();
    } else {
        console.log("Database file found");
    }
});

function createLostAndFoundDB() {
    // const cmd = 'CREATE TABLE LAFTable ( ItemID INTEGER PRIMARY KEY, ItemType TEXT, Title TEXT, Category TEXT, Description TEXT, PhotoURL TEXT, Date TEXT, Time TEXT, Location TEXT)';
    const cmd = 'CREATE TABLE LAFTable ( ItemType TEXT, Title TEXT, Category TEXT, Description TEXT, PhotoURL TEXT, Date TEXT, Time TEXT, Location TEXT)';
    LostAndFoundDB.run(cmd, function(err, val) {
        if (err) {
            console.log("Database creation failure", err.message);
        } else {
            console.log("Created database");
        }
    });
}

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get("/", function(request, response) {
    response.sendFile(__dirname + '/public/Screen1.html');
});

app.get("/Screen2", function(request, response) {
    response.sendFile(__dirname + '/public/Screen2.html');
});

app.get("/Screen3", function(request, response) {
    response.sendFile(__dirname + '/public/Screen3.html');
});

app.get("/Screen4", function(request, response) {
    response.sendFile(path.join(__dirname, '/public/Screen4.html'));
});



app.post("/newItem", function(request, response) {
    console.log("Server received", request.body);
    let cmd = "INSERT INTO LAFTable (ItemType, Title, Category, Description, Date, Time, Location) VALUES (?,?,?,?,?,?,?)";
    LostAndFoundDB.run(cmd, "Found", request.body.title, request.body.category, request.body.description, request.body.date, request.body.time, request.body.location, function(err) {
        if (err) {
            console.log("There was an error inserting into the database");
            console.log(err.message);
        } else {
            console.log("Item successfully inserted into the database");
        }
    });
});

var listener = app.listen(3000, function() {
    console.log("Your app is listening on port " + listener.address().port);
});


