const createNewItem = (name, id, fun) => {
	const newItem = document.createElement("a-gui-icon-label-button");
	newItem.setAttribute("id",  id);
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
