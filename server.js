const { Server } = require("socket.io");
const http = require("http");

const httpServer = http.createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*", // Allow requests from all origins
    methods: ["GET", "POST", "OPTIONS"], // Allow these HTTP methods
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
