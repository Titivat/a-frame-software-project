
const texture = `<img id="texture" src="./img/texture.png" />`
const ground = `<img id="ground" src="./img/ground.jpg" />`
const sky = `<img id="sky" src="./img/sky.jpg" />`
const text_img = `<img id="page1" crossorigin="anonymous" src="https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj"/>`

const assetComponent = `${texture} ${ground} ${sky} ${text_img}`

document.getElementById("assets").innerHTML = assetComponent;