const createNewItem = (name, id, buttonType, fun) => {
	switch (buttonType) {
		case "label":
			buttonType = "a-gui-icon-label-button";
			break;
		case "normal":
			buttonType = "a-gui-button";
			break;
		default:
			buttonType = "a-gui-icon-label-button";
	}
	const newItem = document.createElement(buttonType);
	newItem.setAttribute("id", id);
	newItem.setAttribute("margin", "0 0 0.1 0");
	newItem.setAttribute("value", name);
	newItem.setAttribute("width", "2.5");
	newItem.setAttribute("height", "0.75");
	newItem.setAttribute("font-size", "0.25");
	newItem.setAttribute("line-height", "0.8");
	newItem.setAttribute("letter-spacing", "0");
	newItem.setAttribute("opacity", "0.6");
	newItem.setAttribute("background-color", "#212121");
	newItem.setAttribute("hover-color", "#FF0000");
	newItem.addEventListener("click", fun);
	return newItem;
};

export default createNewItem;
