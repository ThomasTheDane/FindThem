var express = require('express');
var Firebase = require('firebase');

var app = express();
app.use("/styles", express.static(__dirname + "/styles"));
app.use("/scripts", express.static(__dirname + "/scripts"));
app.use("/views", express.static(__dirname + "/views"));
var server = require('http').createServer(app);
var sys = require('sys');

var port = process.env.PORT || 3000;
server.listen(port);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/views/index.html');
});

app.get('/game/:gameName', function (req, res){
  sys.log("showing / ");
  res.sendfile(__dirname + '/views/game.html');
});

app.post('/newGame', function(req, res){
  sys.log('starting new game');
  
});

//app.post("/*", function(req, res){
//  sys.log('catch all post');
//  res.send('catch all');
//})

app.get('/headshots/:selector/:numberRequested', function(req, res){
  var selector = req.params.selector;
  var numberRequested = req.params.numberRequested;
  sys.log("requested " + numberRequested + " headshots with selector " + selector);

  var myRootRef = new Firebase('https://https://findthem.firebaseio.com//');
  myRootRef.set("hello world!");

  res.sendfile(__dirname + '/views/game.html');
});
