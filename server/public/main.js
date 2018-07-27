//this is front end code
const socket = io("http://localhost:4000");
//localtunnel 을 쓰려면 요기 꺼 변경해야함!

/*
const createNewMessageFake = () => {
  console.log("emmiting event");
  socket.emit("new message", "i love my life");
};
*/
/*
setInterval(createNewMessageFake, 1500);
*/

const form = document.querySelector("form");
const input = form.querySelector("input");
const messages = document.querySelector("ul");

const addMessage = (text, mine) => {
  const message = document.createElement("li");
  message.innerHTML = text;
  messages.appendChild(message);
  message.classList.add(mine ? "mine" : "yours");
};

const handleSubmit = event => {
  event.preventDefault();
  console.log(input.value);
  const message = input.value;
  socket.emit("new message sent", {
    message
    //same as message:message
  });
  input.value = "";
  addMessage(message, true);
};

socket.on("new message notification", data => {
  const { message } = data;
  console.log(message);
  addMessage(message, false);
});

form.addEventListener("submit", handleSubmit);
// setInterval(() => socket.emit("fuck"), 2000);

// socket.on("pong", () => {
//   console.log("pong");
// });
//ping is reserved word
