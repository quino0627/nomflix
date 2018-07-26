console.log("hello~!");
console.log("nodemon is like parcel, for backend");
console.log("nodemon is backend of webpack dev server");

const express = require("express"),
  socketIO = require("socket.io"),
  http = require("http"),
  path = require("path"),
  logger = require("morgan"),
  app = express(),
  server = http.createServer(app);

const PORT = 4000;
const handleListening = () => {
  console.log(`Server Running on port http://localhost:${PORT}`);
};

app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
server.listen(PORT, handleListening);
