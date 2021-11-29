import CAM_VAL from "../constant/cameraIdConst.js";
import MENU_VAL from "../constant/menu.js";
import getElementPos from "../Tool/getElementPosition.js";
let isMenuOpen = false;

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
	menu.setAttribute("height", "5");
	menu.setAttribute("width", "5");
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
	const menuName = MENU_VAL.id
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
