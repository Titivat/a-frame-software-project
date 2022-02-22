const createButton = (name, id, fun) => {
	const button = document.createElement("a-gui-button");
	button.setAttribute("id", id);
	button.setAttribute("width", "1.5");
	button.setAttribute("height", "0.75");
	button.setAttribute("value", name);
	button.setAttribute("font-size", "0.25");
	button.setAttribute("line-height", "0.8");
	button.setAttribute("margin", "0 0 0.05 0");
	button.addEventListener("click", fun);
	return button;
};

export default createButton;
