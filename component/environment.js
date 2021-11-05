const scene = document.querySelector("a-scene");
const floor = document.createElement("a-plane");
floor.setAttribute("normal-map", "#ground");
floor.setAttribute("rotation", "-90 0 0");
floor.setAttribute("color", "#999999");
floor.setAttribute("scale", "10000 10000 1");
floor.setAttribute("repeat", "5000 5000");
floor.setAttribute("src", "#ground");

const upperPart = document.createElement("a-sky");
upperPart.setAttribute("src", "#sky");
upperPart.setAttribute("rotation", "0 64 0");

scene.appendChild(floor);
scene.appendChild(upperPart);
