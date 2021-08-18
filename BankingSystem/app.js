const express = require('express');
const route = require('./route');
const path = require('path')

const server = express();

server.set("view engine", 'ejs');

server.use(express.static("public"));

server.set('views', path.join(__dirname, 'src/views'));
server.use(express.urlencoded({extended: true}));

server.use(route); //express, use file route

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

server.listen(port, ()=> console.log("Running...", port));