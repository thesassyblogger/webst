// server/index.js
const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

const users = {};

io.on("connection", (socket) => {
    let currentRoom = "general";

    socket.on("join-room", (room) => {
        socket.join(room);
        currentRoom = room;
    });

    socket.on("leave-room", (room) => {
        socket.leave(room);
    });

    socket.on("chat-message", ({ room, message, username, timestamp }) => {
        const msgData = {
            message,
            username,
            timestamp,
            fromSelf: false
        };
        socket.to(room).emit("chat-message", msgData);

        // Emit self-message separately to style it differently
        socket.emit("chat-message", { ...msgData, fromSelf: true });
    });

    socket.on("typing", ({ room, username }) => {
        socket.to(room).emit("typing", username);
    });

    socket.on("stop-typing", (room) => {
        socket.to(room).emit("stop-typing");
    });
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
