const assetName = [
    '<img id="texture" src="./img/texture.png" />',
    `<img id="ground" src="./img/ground.jpg" />`,
    `<img id="sky" src="./img/sky.jpg" />`,
    `<img id="box_img" src="../img/Box.PNG" />`,
    `<img id="circle_img" src="../img/Circle.PNG" />`,
    `<img id="cylinder_img" src="../img/Cylinder.PNG" />`,
    `<img id="dodecahedron_img" src="../img/dodecahedron.PNG" />`,
    `<img id="sphere_img" src="../img/sphere.PNG" />`,
    `<img id="triangle_img" src="../img/triangle.PNG" />`,
];

const assetComponent = assetName.map((item) => item + " ");
// const assetComponent = `${texture} ${ground} ${sky} ${box}`;

document.getElementById("assets").innerHTML = assetComponent;