// server.js

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client.html');
});

var count = 1;
var msgArr = [];

io.on('connection', function(socket){

  msgArr.forEach(function(r){    
    io.to(socket.id).emit('receive message', r);
  })

  // console.log('user connected : ' , socket.id);
  var name = "user" + count++;
  io.to(socket.id).emit('change name', name);

  socket.on('disconnect', function(){
    console.log('user disconnected : ' , socket.id);
  });

  socket.on('send message', function(name, text){
    var msg = name + ' : ' + text;
    msgArr.push(msg);
    io.emit('receive message', msg);
  });

});

http.listen(3000, function(){
  console.log('server on!');
})

