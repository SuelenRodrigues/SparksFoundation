const express = require('express');


const app = express();

app.set("view engine", "ejs"); 
app.use(express.static("public"));

app.get('/', function(req,res){
	res.render('index');
});

let port = process.env.PORT;

if (port == null || port == "") {
  port = 8000;
}
app.listen(port, ()=> console.log("Running...", port));