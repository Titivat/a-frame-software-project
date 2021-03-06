const lightBulb = document.createElement("a-entity");
lightBulb.setAttribute("id", "Hue1");
// lightBulb.setAttribute("gltf-model", "#lightbulb");
lightBulb.setAttribute(
    "gltf-model",
    "https://raw.githubusercontent.com/Titivat/a-frame-software-project/main/Assets/3dObject/Lightbulb.gltf"
);
//lightBulb.setAttribute("dragndrop", "");
lightBulb.setAttribute("lightbulb", "");
lightBulb.setAttribute(
	"light",
	"type: point; intensity: 1; distance: 100; decay: 0"
);
lightBulb.setAttribute("position", "-1.4 4.11 1.6");
lightBulb.setAttribute("rotation", "0 0 180");
lightBulb.setAttribute("scale", "0.001 0.001 0.001");
lightBulb.setAttribute("color", "#4CC3D9");
scene.appendChild(lightBulb);