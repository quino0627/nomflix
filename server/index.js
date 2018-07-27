console.log("hello~!");
console.log("nodemon is like parcel, for backend");
console.log("nodemon is backend of webpack dev server");

const express = require("express"),
  socketIO = require("socket.io"),
  http = require("http"),
  path = require("path"),
  logger = require("morgan"),
  app = express(),
  server = http.createServer(app),
  io = socketIO(server);

const PORT = 4000;

const handleSocketConnect = socket => {
  //console.log(`socket with the id ${socket.id} connected`);
  socket.on("new message sent", data => {
    //io.emit("pong");
    console.log(data);
    socket.broadcast.emit("new message notification", data);
    //everybody send!
  });
  //new message는 프런트와 백이 똑같아야 한다.
};

const handleListening = () => {
  console.log(`Server Running on port http://localhost:${PORT}`);
};
server.listen(PORT, handleListening);
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
io.on("connection", handleSocketConnect);
