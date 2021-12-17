// const WebSocket = require("ws");
const PORT = 1337;
const ws = new WebSocket(`ws://localhost:${PORT}`);

ws.onopen = function () {
	const data = JSON.stringify({ status: "first", id: "something" });
	ws.send(data);
};

ws.onmessage = function (evt) {
	var received_msg = evt.data;
	const incomingData = JSON.parse(received_msg);
	if (incomingData.type === "first-connect") {
		for (let item of incomingData.response) {
			const { x, y, z } = item.position;
			const newItem = document.createElement("a-entity");
			newItem.setAttribute("id", item.id);
			newItem.setAttribute("gltf-model", item.modelLink);
			newItem.setAttribute("dragndrop", "");
			newItem.setAttribute("response-type", `arraybuffer`);
			newItem.setAttribute("crossorigin", `anonymous`);
			newItem.setAttribute("position", `${x} ${y} ${z}`);
			console.log(newItem.getAttribute("position"));
			scene.appendChild(newItem);
		}
		const data = JSON.stringify({ status: "finish-populate", id: "something" });
		ws.send(data);
	} else if (incomingData.type === "refresh") {
		for (let item of incomingData.response) {
			const { x, y, z } = item.position;
			const newItem = document.getElementById(item.id);
			newItem.setAttribute("position", `${x} ${y} ${z}`);
			console.log(newItem.getAttribute("position"));
			scene.appendChild(newItem);
		}
	}
};

ws.onclose = function () {
	// alert("Connection is closed...");
};
