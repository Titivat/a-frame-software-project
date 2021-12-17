import CAM_VAL from "../constant/cameraIdConst.js";
import MENU_VAL from "../constant/menu.js";
import getElementPos from "../Tool/getElementPosition.js";
let isMenuOpen = false;
const itemList = [
	{
		img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
		shape: "a-box",
	},
	{
		img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
		shape: "a-sphere",
	},
	{
		img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
		shape: "a-cylinder",
	},
	{
		img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
		shape: "a-circle",
	},
	{
		img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
		shape: "a-triangle",
	},
	{
		img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
		shape: "a-dodecahedron",
	},
	{
		img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
		shape: "a-box",
	},
	{
		img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
		shape: "a-box",
	},
	{
		img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
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

const API_PATH_NAME = "https://reqres.in";
async function postData(url = "", data = {}) {
	// Default options are marked with *
	const response = await fetch(`${API_PATH_NAME}${url}`, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

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
	// menu.setAttribute("material", "opacity: 0.0; transparent: true");
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
		select_item.setAttribute("position", `${spacing_row} ${spacing_col} 0.14`);

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
	createObject.setAttribute("hoverable", "");
	createObject.setAttribute("grabbable", "");
	createObject.setAttribute("stretchable", "");
	createObject.setAttribute("draggable", "");
	createObject.setAttribute("dropppable", "");
	createObject.setAttribute("color", `tomato`);
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
