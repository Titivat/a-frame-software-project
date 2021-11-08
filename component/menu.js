let isMenuOpen = false;

window.addEventListener("keydown", function (e) {
	if (e.key === "Escape" || e.key === "Esc") {
		// Todo create a box front of the user
		isMenuOpen = !isMenuOpen;
		popUpMenu(isMenuOpen);
	}
});

const popUpMenu = (isMenuOpen) => {
	const MENU_ID = "popup-menu";
	if (isMenuOpen) {
		const menu = document.createElement("a-box");
		menu.setAttribute("id", MENU_ID);
		menu.setAttribute("color", "yellow");
		menu.setAttribute("depth", "2");
		menu.setAttribute("height", "4");
		menu.setAttribute("width", "0.5");
		menu.setAttribute("position", "0 2 0");
		scene.appendChild(menu);
	} else if (!isMenuOpen) {
		const removeMenu = document.getElementById(MENU_ID);
		removeMenu.parentNode.removeChild(removeMenu);
	}
};
