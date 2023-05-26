const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// server connection

io.on("connection", (socket) => {
  console.log("a user connected");

  // send data to server

  // setTimeout(() => {
  //   socket.send('Data send to server to client');
  // },10000)

  // containous sending data to server

  setInterval(() => {
    let date = new Date();
    let time = date.getTime();
    socket.emit('myEvent',time);
  }, 100);

// receive data from form 

socket.on('message',function(msg){
  console.log(msg)
} )



  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on :3000");
});
