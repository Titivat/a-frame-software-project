const createEditMenu = () => {
	const editMenu = document.createElement("a-gui-flex-container");
	editMenu.setAttribute("id", "editMenu");
	editMenu.setAttribute("flex-direction", "column");
	editMenu.setAttribute("width", "5");
	editMenu.setAttribute("height", "2.5");
	editMenu.setAttribute("justify-content", "center");
	editMenu.setAttribute("align-items", "normal");
	editMenu.setAttribute("component-padding", "0.1");
	editMenu.setAttribute("opacity", "0.7");
	return editMenu;
};

export default createEditMenu;
