var express = require('express');
var fs = require('fs');
var md =require('markdown-it')('commonmark');

var app = express();
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res){
	res.render('index');
});



app.listen(3000, function () {
  console.log('hipblog is happening now!');
});

