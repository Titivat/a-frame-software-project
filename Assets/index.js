
const texture = `<img id="texture" src="./img/texture.png" />`
const ground = `<img id="ground" src="./img/ground.jpg" />`
const sky = `<img id="sky" src="./img/sky.jpg" />`

const assetComponent = `${texture} ${ground} ${sky}`

document.getElementById("assets").innerHTML = assetComponent;