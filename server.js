"use strict";

const express = require("express");
const app = express();
const port = 8080; //If port 5500 is in use, Live Server checks for the next available port to use
app.use(express.static("./public")); //Static files are files that are going to be on the front-end
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process");
});