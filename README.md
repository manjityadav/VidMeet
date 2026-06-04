# 🎥 VidMeet

A full-stack real-time video conferencing application built using React, Node.js, Socket.IO, and WebRTC.

VidMeet enables users to connect through real-time video calls, exchange instant messages, and share their screens seamlessly for meetings, interviews, online classes, and collaboration.

## 🚀 Live Demo

🌐 https://vidmeet-1-2y6p.onrender.com

---

## ✨ Features

- 📹 Real-time Video Calling using WebRTC
- 💬 Instant Messaging with Socket.IO
- 🖥️ Screen Sharing
- 🎤 Mute / Unmute Microphone
- 📷 Enable / Disable Camera
- 👥 Room-Based Meeting System
- ⚡ Fast Peer-to-Peer Connection
- 🔄 Real-Time Signaling with Socket.IO
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Context API
- JavaScript (ES6+)
- CSS3
- Socket.IO Client

### Backend
- Node.js
- Express.js
- Socket.IO

### Real-Time Communication
- WebRTC
- STUN Servers
- ICE Candidates
- SDP Offer / Answer

---

## 📂 Project Structure

```bash
vidmeet/
│
├── frontend/
│   ├── src/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── utils/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   │
│   └── package.json
│
└── README.md
```

---

## 🔄 Application Workflow

### 1. User Joins a Room
- User enters a room ID.
- Frontend connects to the Socket.IO server.

### 2. Signaling Process
- Socket.IO exchanges signaling data between users.
- SDP Offer and SDP Answer are transmitted.

### 3. ICE Candidate Exchange
- ICE candidates are shared through the signaling server.
- Best network path is discovered.

### 4. Peer Connection Established
- WebRTC creates a direct peer-to-peer connection.
- Audio and video streams are exchanged.

### 5. Real-Time Chat
- Messages are sent using Socket.IO.
- Participants receive messages instantly.

### 6. Screen Sharing
- User selects a screen, tab, or window.
- Screen stream replaces camera stream.
- Remote participants can view the shared screen in real time.

---

## 📸 Screenshots

Create a folder named `screenshots` in the project root.

```bash
screenshots/
├── home.png
├── video-call.png
├── chat.png
└── screen-share.png
```

Example:

```md
![Home](screenshots/home.png)

![Video Call](screenshots/video-call.png)

![Chat](screenshots/chat.png)

![Screen Share](screenshots/screen-share.png)
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/manjityadav/vidmeet.git
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Install Backend Dependencies

```bash
cd ../backend
npm install
```

---

## ▶️ Running Locally

### Start Backend

```bash
npm start
```

### Start Frontend

```bash
npm run dev
```

Frontend:

```bash
http://localhost:5173
```

Backend:

```bash
http://localhost:5000
```

---

## 🌟 Future Enhancements

- Group Video Calling
- Meeting Recording
- Authentication & Authorization
- File Sharing
- Chat Persistence
- Meeting Scheduling
- Virtual Backgrounds
- Emoji Reactions

---

## 👨‍💻 Author

**Manjeet Kumar Yadav**

GitHub: https://github.com/manjityadav

Live Project: https://vidmeet-1-2y6p.onrender.com

---

⭐ If you found this project useful, consider giving it a star.
