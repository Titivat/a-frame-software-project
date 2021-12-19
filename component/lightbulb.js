const lightBulb = document.createElement("a-entity");
lightBulb.setAttribute("id", "IAmLight");
// lightBulb.setAttribute("gltf-model", "#lightbulb");
lightBulb.setAttribute("gltf-model", "https://cdn.aframe.io/examples/ar/models/reticle/reticle.gltf");
lightBulb.setAttribute("dragndrop", "");
lightBulb.setAttribute("lightbulb", "");
lightBulb.setAttribute(
    "light",
    "type: point; intensity: 1; distance: 100; decay: 0"
);
lightBulb.setAttribute("position", "0 2 0");
lightBulb.setAttribute("scale", "1 1 1");
lightBulb.setAttribute("color", "#4CC3D9");
scene.appendChild(lightBulb);