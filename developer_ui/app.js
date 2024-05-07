const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

io.on('connection', function (socket) {
    socket.emit('example message 1', { hello: 'world 1' });

    socket.on('example message 2', function (data) {
        console.log(data);
    });
});

server.listen(8000, () => {
    console.log('listening on *:8000');
});

app.use(express.static('src'));