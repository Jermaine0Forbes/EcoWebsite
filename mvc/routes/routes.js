var express = require("express");
var route = express.Router();
var home = require("../controllers/home");



route.get("/", home.page);

route.get('/400', function(req,res){
    res.status(400).send();
})


module.exports = route;
