import CAM_VAL from "../constant/cameraIdConst.js";
import MENU_VAL from "../constant/menu.js";
import getElementPos from "../Tool/getElementPosition.js";
let isMenuOpen = false;
const itemList = [
	"https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
	"https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
];

window.addEventListener("keydown", function (e) {
	if (e.key === "Escape" || e.key === "Esc") {
		// Todo create a box front of the user
		isMenuOpen = !isMenuOpen;
		popUpMenu(isMenuOpen);
	}
});

const createMenu = (name) => {
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
		select_item.setAttribute("src", itemList[index]);
		select_item.setAttribute("height", "1");
		select_item.setAttribute("width", "1");
		select_item.setAttribute("position", `${spacing_row} ${spacing_col} 0.14`);

		spacing_row += 2;
		menu.appendChild(select_item);
	}
	return menu;
};

const addClickAbleToMenuItems = () => {
	for (let index = 0; index < itemList.length; index++) {
		document
			.querySelector(`#a-plane-${index.toString()}`)
			.addEventListener("click", function () {
				console.log(`I was clicked!!! ${index.toString()}`);
			});
	}
};

const popUpMenu = (isMenuOpen) => {
	const menuName = MENU_VAL.id;
	if (isMenuOpen) {
		const { xPos, yPos, zPos } = getElementPos(CAM_VAL.MIDDLE_CIRCLE);
		const menu = createMenu(menuName);
		menu.setAttribute("position", `${xPos} ${yPos} ${zPos - 4}`);
		scene.appendChild(menu);
		addClickAbleToMenuItems();
		// document.querySelector("#a-plane-0").addEventListener("click", function () {
		// 	// this.setAttribute("material", "color", "red");
		// 	console.log("I was clicked!");
		// });
	} else if (!isMenuOpen) {
		//MENU_VAL.id
		const removeMenu = document.getElementById(menuName);
		removeMenu.parentNode.removeChild(removeMenu);
	}
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
