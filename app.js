const express = require("express");
const faker = require('faker');
const app = express()
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var randomEmail = faker.internet.email();

app.get("/", function(req, res) {
   res.render("index.html", {email:randomEmail}); 
});

app.get("/history", function(req, res) {
   res.render("history.html", {email:randomEmail}); 
});

app.get("/how", function(req, res) {
   res.render("how.html", {email:randomEmail});  
});

app.get("/volatility", function(req, res) {
   res.render("volatility.html", {email:randomEmail});  
});


//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});