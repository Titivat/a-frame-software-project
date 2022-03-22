const createKeyboardLayout = (id) => {
	const keyBoardContainer = document.createElement("a-gui-flex-container");
	keyBoardContainer.setAttribute("id", id);
	keyBoardContainer.setAttribute("align-items", "middle");
	keyBoardContainer.setAttribute("justify-content", "center");
	keyBoardContainer.setAttribute("component-padding", "0.1");
	keyBoardContainer.setAttribute("flex-direction", "column");
	keyBoardContainer.setAttribute("opacity", "0.7");
	keyBoardContainer.setAttribute("width", "5");
	keyBoardContainer.setAttribute("height", "0");
	keyBoardContainer.setAttribute("rotation", "-5 0 0");
	return keyBoardContainer;
};

export default createKeyboardLayout;
