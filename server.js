
const express = require("express");
const sql = require("sqlite3").verbose();

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
    const cmd = 'CREATE TABLE LAFTable ( ItemID INTEGER PRIMARY KEY, ItemType TEXT, Title TEXT, Category TEXT, Description TEXT, PhotoURL TEXT, Date TEXT, Time TEXT, Location TEXT)';
    LostAndFoundDB.run(cmd, function(err, val) {
        if (err) {
            console.log("Database creation failure", err.message);
        } else {
            console.log("Created database");
        }
    });
}

const app = express();
