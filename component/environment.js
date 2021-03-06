import CAM from "../constant/cameraIdConst.js";

// left hand
const leftHand = document.createElement("a-entity");
leftHand.setAttribute("sphere-collider", "objects: a-box");
leftHand.setAttribute("super-hands", true);
leftHand.setAttribute("hand-controls", "hand: left");

// right hand
const rightHand = document.createElement("a-entity");
rightHand.setAttribute("sphere-collider", "objects: a-box");
rightHand.setAttribute("super-hands", true);
rightHand.setAttribute("hand-controls", "hand: right");

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
// const camRig = document.createElement("a-entity");
// camRig.setAttribute("id", CAM.CAMERA_RIG);

// const camera = document.createElement("a-entity");
// camera.setAttribute("id", CAM.CAMERA);
// camera.setAttribute("look-controls", "");
// camera.setAttribute("wasd-controls", "");
// camera.setAttribute("camera", "true");
// camera.setAttribute("position", "0 1.7 0");

// const cursor = document.createElement("a-cursor");
// cursor.setAttribute("id", CAM.CURSOR);

// camera.appendChild(cursor);
// camRig.appendChild(camera);

// add to screen
scene.appendChild(leftHand);
scene.appendChild(rightHand);
scene.appendChild(floor);
// scene.appendChild(upperPart);
// s