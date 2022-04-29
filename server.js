const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


// Socket.io

const io = require('socket.io')(http);
// import scoket.io

io.on('connection', (socket) => {
    console.log('Connection Established..');
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
    })
})
