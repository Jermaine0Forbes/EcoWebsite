
var express = require('express');
var body = require('body-parser');
var cookie = require('cookie-parser');
var jucks = require('nunjucks');
var path = require('path');
var app = express();
var routes = require('./mvc/routes/routes');
var ip = '10.132.38.18';
var cors = require("cors");
var port = process.env.PORT || 3001;
var views = path.join(__dirname,'mvc','views');
require('dotenv').config();

jucks.configure(views,{
    throwOnUndefined:true,
    express:app,

})


app.engine('html',jucks.render);
app.set('view engine', 'html');
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(body.json());
app.use(body.urlencoded({extended:true}));
app.use(cookie());

app.use('/', routes);
app.use(function(req,res,next){
	if(res.status(404)){
	  res.render('error/400');
	}

    next();
});

app.use(function(err,req,res,next){
      if(res.status(500)){
    	  var title = err;
        res.render('error/500',{errTitle:title});
    }else if(res.status(502)){
        res.render('error/500',{errTitle:502});
    }else if(res.status(503)){
        res.render('error/500',{errTitle:503});
    }
})


app.listen(port, ip, function(){
    var n = process.env.NODE;
    const code = require('crypto').randomBytes(64).toString('hex');
    console.log("node connected to "+port);
    console.log("node environment is in "+n)
    // console.log(code);
})
