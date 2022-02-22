const createWorldMenuLayout = (name) => {
	const worldMenu = document.createElement("a-gui-flex-container");
	worldMenu.setAttribute("id", name);
	worldMenu.setAttribute("flex-direction", "column");
	worldMenu.setAttribute("justify-content", "center");
	worldMenu.setAttribute("align-items", "normal");
	worldMenu.setAttribute("component-padding", "0.1");
	worldMenu.setAttribute("opacity", "0.7");
	worldMenu.setAttribute("width", "12");
	worldMenu.setAttribute("height", "4.5");
	worldMenu.setAttribute("rotation", "0 0 0");
	return worldMenu;
};

export default createWorldMenuLayout;
