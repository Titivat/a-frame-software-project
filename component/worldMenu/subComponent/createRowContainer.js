const createRowContainer = (id) => {
	const rowContainer = document.createElement("a-gui-flex-container");
	rowContainer.setAttribute("id", id);
	rowContainer.setAttribute("flex-direction", "row");
	rowContainer.setAttribute("width", "3");
	rowContainer.setAttribute("height", "1");
	rowContainer.setAttribute("justify-content", "center");
	rowContainer.setAttribute("opacity", "0.7");
	rowContainer.setAttribute("margin", "0 0 0.1 0");
	return rowContainer;
};

export default createRowContainer;
