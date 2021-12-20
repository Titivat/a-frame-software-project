const lightBulb = document.createElement("a-entity");
lightBulb.setAttribute("id", "Hue1");
// lightBulb.setAttribute("gltf-model", "#lightbulb");
lightBulb.setAttribute(
    "gltf-model",
    "https://raw.githubusercontent.com/Titivat/a-frame-software-project/main/Assets/3dObject/Lightbulb.gltf"
);
//lightBulb.setAttribute("dragndrop", "");
lightBulb.setAttribute("lightbulb", "");
lightBulb.setAttribute("position", "0 4 0");
lightBulb.setAttribute("rotation", "180 0 0");
lightBulb.setAttribute("scale", "0.001 0.001 0.001");
lightBulb.setAttribute("color", "#4CC3D9");
scene.appendChild(lightBulb);