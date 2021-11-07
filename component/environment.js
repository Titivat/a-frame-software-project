const scene = document.querySelector("a-scene");

// ground
const floor = document.createElement("a-plane");
floor.setAttribute("normal-map", "#ground");
floor.setAttribute("rotation", "-90 0 0");
floor.setAttribute("color", "#999999");
floor.setAttribute("scale", "10000 10000 1");
floor.setAttribute("repeat", "5000 5000");
floor.setAttribute("src", "#ground");

// sky
const upperPart = document.createElement("a-sky");
upperPart.setAttribute("src", "#sky");
upperPart.setAttribute("rotation", "0 64 0");

// camera
const camRig = document.createElement("a-entity");
camRig.setAttribute("id", "rig");

const insideCamRig = document.createElement("a-entity");
insideCamRig.setAttribute("id", "camera");
insideCamRig.setAttribute("look-controls", "");
insideCamRig.setAttribute("wasd-controls", "");
insideCamRig.setAttribute("camera", "true");
insideCamRig.setAttribute("position", "0 2 0");

const cursor = document.createElement("a-cursor");
cursor.setAttribute("id", "cursor");

insideCamRig.appendChild(cursor);
camRig.appendChild(insideCamRig);

// add to screen
scene.appendChild(floor);
scene.appendChild(upperPart);
scene.appendChild(camRig);
