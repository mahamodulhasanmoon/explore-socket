const express = require('express');
const app = express();
const {Server}= require('socket.io');
const http = require('http');
const server = http.createServer(app);
app.get('/', (_req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const io = new Server(server)

io.on('connection',(socket)=>{
    console.log(' user connected');
})

server.listen(3000, () => {
  console.log('listening on :3000');
});