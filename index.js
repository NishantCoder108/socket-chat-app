const express = require("express");

const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io")
const io = new Server(server);


app.get("/", (req, res) => {
    // res.send("<h1> Hello World </h1>")
    res.sendFile(__dirname + '/index.html')
})


{/*io.on("connection", (socket) => {
    console.log(" a user connected")

    socket.on("chat message", (msg) => {
        console.log("message :" + msg)
    })
    socket.on("disconnect", () => {
        console.log('user disconnected');
    })


    io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
})*/}

//Broadcasting
io.on("connection",(socket) =>{
    // socket.broadcast.emit("hi")

    socket.on("chat message",(msg) =>{
        io.emit('chat message',msg)
    })
})

server.listen(3000, () => {
    console.log("Listening on *:3000")
})