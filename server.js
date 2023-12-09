const { Server } = require("socket.io");
const http = require("http");

const httpServer = http.createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("mkx", (msg) => {
    console.log("Message received:", msg);
    io.emit("mkx", msg);
  });
});

const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => {
  console.log(`Socket.io server running on port ${PORT}`);
});
