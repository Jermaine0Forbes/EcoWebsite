var express = require("express");
var route = express.Router();
var home = require("../controllers/home");
var login = require("../controllers/login");



route.get("/", home.page);

route.post("/api/login",login.page);

route.post("/api/register",login.register);

route.get('/400', function(req,res){
    res.status(400).send('You are in some shit');
})


module.exports = route;
