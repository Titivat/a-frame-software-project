import CAM_VAL from "../constant/cameraIdConst.js";
import MENU_VAL from "../constant/menu.js";
import getElementPos from "../Tool/getElementPosition.js";
let isMenuOpen = false;
const itemList = ["a-box", "a-box", "a-box", "a-box", "a-box", "a-box", "a-box", "a-box", "a-box"];

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

	let spacing_row = -2
	// 2
	let spacing_col = 2
	itemList.forEach((item, index) => {
		if( index % 3 === 0 && index !== 0){
			console.log(`index: ${index}`)
			spacing_row = -2
			spacing_col -= 1.5
		}

		const select_item = document.createElement(item);
		select_item.setAttribute("id", `${item}-${index.toString()}`);
		select_item.setAttribute("color", "red");
		select_item.setAttribute("depth", "0.5");
		select_item.setAttribute("height", "1");
		select_item.setAttribute("width", "1");
		select_item.setAttribute("position", `${spacing_row} ${spacing_col} 0.14`);

		spacing_row += 2

		menu.appendChild(select_item);
	});
	return menu;
};

const popUpMenu = (isMenuOpen) => {
	const menuName = MENU_VAL.id;
	if (isMenuOpen) {
		const { xPos, yPos, zPos } = getElementPos(CAM_VAL.MIDDLE_CIRCLE);
		const menu = createMenu(menuName);
		menu.setAttribute("position", `${xPos} ${yPos} ${zPos - 4}`);
		scene.appendChild(menu);
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
