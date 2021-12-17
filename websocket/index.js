// const WebSocket = require("ws");

const PORT = 1337;
const ws = new WebSocket(`ws://localhost:${PORT}`);

ws.onopen = function () {
	ws.send("Connected from AFrame");
};

ws.onmessage = function (evt) {
	var received_msg = evt.data;
	console.log("Message is received...");
	console.log(received_msg);
	// alert("Message is received...");
};

ws.onclose = function () {
	// websocket is closed.
	alert("Connection is closed...");
};
