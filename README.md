# 🧠 Real-Time Chat App

A modern, responsive real-time chat application built using **Node.js**, **Express**, and **Socket.IO**, deployed on **Google App Engine**. This project demonstrates event-based communication using **WebSockets**, along with robust cloud deployment and agile project tracking via **Jira**.

---

## 🌐 Live Demo

[🚀 View the App on Google Cloud](https://rugged-coil-318610.nn.r.appspot.com)

---

## 📌 Features

- ✅ Real-time chat with WebSocket (Socket.IO)
- ✅ Room-based communication (join, leave, general)
- ✅ Typing indicators & message delivery events
- ✅ User-specific message formatting (self vs others)
- ✅ Responsive frontend with vanilla JS
- ✅ Deployed using Google Cloud App Engine (Standard Environment)
- ✅ Agile development managed with a **Jira Scrum Board**

---

## 💻 Tech Stack

| Layer          | Technology                     |
|----------------|--------------------------------|
| Frontend       | HTML, CSS, JavaScript          |
| Backend        | Node.js, Express.js            |
| Realtime Comm. | Socket.IO (WebSockets)         |
| Deployment     | Google Cloud App Engine (GCP)  |
| Version Control| Git & GitHub                   |
| Project Mgmt   | Jira (Scrum Board)             |

---

## 📁 Folder Structure

/webst
│
├── app.yaml # App Engine config
├── index.js # Main server file (Express + Socket.IO)
├── package.json # Project metadata & dependencies
├── public/ # Frontend assets
│ ├── index.html
│ ├── client.js
│ └── style.css

==
---

## 🚀 Deployment: Google Cloud

The app is deployed on **Google App Engine (Standard Environment)** with the following config:

```yaml
runtime: nodejs20
entrypoint: node index.js
instance_class: F1
env_variables:
  NODE_ENV: 'production'
automatic_scaling:
  max_instances: 2
Deployment steps:

-
gcloud app deploy
gcloud app browse'

🔄 WebSocket Events
Event Name	Description
join-room	Join a specific chat room
leave-room	Leave a room
chat-message	Broadcast message to room
typing	Show "user is typing" status
stop-typing	Hide typing indicator

📋 Project Management: Jira Scrum Board
This project was planned, tracked, and completed using a Jira Scrum Board. Tasks were broken into:

🧠 Feature Development (UI, Socket Events)

🧪 Testing & Debugging

🌩️ Deployment & Configuration

🧼 Bug Fixing & Refactoring


📦 Installation
bash
Copy
Edit
git clone https://github.com/your-username/webst.git
cd webst
npm install
node index.js
Then visit http://localhost:9000 in your browser.

🤝 Contributions
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

👤 Author
Mansi Patel
2nd Year CS Student | University of Regina
📍 Regina, SK | 🇮🇳 Originally from Mumbai
📧 mansip140904@gmail.com









Tools



