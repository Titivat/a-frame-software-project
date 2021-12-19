const assetName = [
	'<img id="texture" src="./img/texture.png" />',
	`<img id="ground" src="./img/ground.jpg" />`,
	`<img id="sky" src="./img/sky.jpg" />`,
	`<img id="box" src="../img/Box.PNG" />`,
	`<img id="circle" src="../img/Circle.PNG" />`,
	`<img id="cylinder" src="../img/Cylinder.PNG" />`,
	`<img id="dodecahedron" src="../img/dodecahedron.PNG" />`,
	`<img id="sphere" src="../img/sphere.PNG" />`,
	`<img id="triangle" src="../img/triangle.PNG" />`,
];

const assetComponent = assetName.map((item) => item + " ");
// const assetComponent = `${texture} ${ground} ${sky} ${box}`;

document.getElementById("assets").innerHTML = assetComponent;
