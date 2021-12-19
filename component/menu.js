import CAM_VAL from "../constant/cameraIdConst.js";
import MENU_VAL from "../constant/menu.js";
import getElementPos from "../Tool/getElementPosition.js";
let isMenuOpen = false;
const itemList = [
	{
		img: "#box",
		shape: "a-box",
	},
	{
		img: "#sphere",
		shape: "a-sphere",
	},
	{
		img: "#cylinder",
		shape: "a-cylinder",
	},
	{
		img: "#circle",
		shape: "a-circle",
	},
	{
		img: "#triangle",
		shape: "a-triangle",
	},
	{
		img: "#dodecahedron",
		shape: "a-dodecahedron",
	},
	{
		img: "#box",
		shape: "a-box",
	},
	{
		img: "#box",
		shape: "a-box",
	},
	{
		img: "#box",
		shape: "a-box",
	},
];

window.addEventListener("keydown", function (e) {
	if (e.key === "Escape" || e.key === "Esc") {
		// Todo create a box front of the user
		isMenuOpen = !isMenuOpen;
		popUpMenu(isMenuOpen);
	}
});

const popUpMenu = (isMenuOpen) => {
	const menuName = MENU_VAL.id;
	if (isMenuOpen) {
		const { xPos, yPos, zPos } = getElementPos(CAM_VAL.MIDDLE_CIRCLE);
		const menu = createMenu(menuName);
		menu.setAttribute("position", `${xPos} ${yPos} ${zPos - 4}`);
		scene.appendChild(menu);
		// addClickAbleToMenuItems();
	} else if (!isMenuOpen) {
		//MENU_VAL.id
		const removeMenu = document.getElementById(menuName);
		removeMenu.parentNode.removeChild(removeMenu);
	}
};

const createMenu = (name) => {
	const { xPos, yPos, zPos } = getElementPos(CAM_VAL.MIDDLE_CIRCLE);
	const menu = document.createElement("a-plane");
	menu.setAttribute("id", name);
	menu.setAttribute("color", "yellow");
	menu.setAttribute("material", "opacity: 0.0; transparent: true");
	menu.setAttribute("height", "5");
	menu.setAttribute("width", "5");

	let spacing_row = -2;
	let spacing_col = 2;
	for (let index = 0; index < itemList.length; index++) {
		if (index % 3 === 0 && index !== 0) {
			spacing_row = -2;
			spacing_col -= 1.5;
		}

		const select_item = document.createElement("a-plane");
		select_item.setAttribute("id", `a-plane-${index.toString()}`);
		select_item.setAttribute("src", itemList[index].img);
		select_item.setAttribute("height", "1");
		select_item.setAttribute("width", "1");
		select_item.setAttribute(
			"position",
			`${spacing_row} ${spacing_col + 0.3} 0.14`
		);

		select_item.addEventListener("click", function () {
			// const createObject = createItemObject(
			// 	`create-object-${index.toString()}`,
			// 	`https://cdn.aframe.io/examples/ar/models/reticle/reticle.gltf`
			// );
			const createObject = createBox(
				`create-object-${index.toString()}`,
				itemList[index].shape
			);
			createObject.addEventListener("click", function () {
				// console.log("I am from menu");
			});
			createObject.setAttribute("position", `${xPos} 2 ${zPos - 2}`);
			scene.appendChild(createObject);
		});
		spacing_row += 2;
		menu.appendChild(select_item);
	}
	return menu;
};

const createItemObject = (id, modelLink) => {
	const createObject = document.createElement("a-entity");
	createObject.setAttribute("id", id);
	createObject.setAttribute("gltf-model", modelLink);
	createObject.setAttribute("dragndrop", "");
	createObject.setAttribute("response-type", `arraybuffer`);
	createObject.setAttribute("crossorigin", `anonymous`);
	return createObject;
};

// option
const createBox = (id, shape) => {
	const createObject = document.createElement(shape);
	createObject.setAttribute("id", id);
	createObject.setAttribute("dragndrop", "");
	createObject.setAttribute("height", `1`);
	createObject.setAttribute("width", `1`);
	createObject.setAttribute("color", `#4CC3D9`);
	return createObject;
};

const stickPopup = (isMenuOpen) => {
	const menuName = MENU_VAL.id;
	if (isMenuOpen) {
		const addToCursor = document.getElementById(CAM_VAL.CURSOR);
		const menu = createMenu(menuName);
		menu.setAttribute("position", "0 0 -6");
		addToCursor.appendChild(menu);
	} else if (!isMenuOpen) {
		const removeMenu = document.getElementById(menuName);
		removeMenu.parentNode.removeChild(removeMenu);
	}
};
