// public/client.js
const socket = io();

const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("message");
const usernameInput = document.getElementById("username");
const roomSelect = document.getElementById("room");
const chatBox = document.getElementById("chat-box");
const typingIndicator = document.getElementById("typing-indicator");

let currentRoom = roomSelect.value;
let typingTimeout;

// Join initial room
socket.emit("join-room", currentRoom);

// Change room
roomSelect.addEventListener("change", () => {
    const newRoom = roomSelect.value;
    socket.emit("leave-room", currentRoom);
    socket.emit("join-room", newRoom);
    currentRoom = newRoom;
    chatBox.innerHTML = "";
});

// Send message
sendBtn.addEventListener("click", () => {
    const message = messageInput.value.trim();
    const username = usernameInput.value.trim() || "Anonymous";

    if (message) {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        socket.emit("chat-message", { room: currentRoom, message, username, timestamp });
        messageInput.value = "";
    }
});

// Typing event
messageInput.addEventListener("input", () => {
    socket.emit("typing", { room: currentRoom, username: usernameInput.value.trim() });
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
        socket.emit("stop-typing", currentRoom);
    }, 1000);
});

// Receive message
socket.on("chat-message", (data) => {
    const { message, username, timestamp, fromSelf } = data;
    const p = document.createElement("p");
    p.classList.add("chat-message", fromSelf ? "from-self" : "from-other");
    p.innerText = `${username}: ${message} (${timestamp})`;
    chatBox.appendChild(p);
    chatBox.scrollTop = chatBox.scrollHeight;
});

// Typing indicator
socket.on("typing", (username) => {
    typingIndicator.innerText = `${username} is typing...`;
});

socket.on("stop-typing", () => {
    typingIndicator.innerText = "";
});
