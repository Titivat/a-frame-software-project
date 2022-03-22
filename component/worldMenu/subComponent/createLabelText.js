const createLabelText = (text) => {
	const label = document.createElement("a-gui-label");
	label.setAttribute("width", "2.5");
	label.setAttribute("height", "0.75");
	label.setAttribute("value", text);
	label.setAttribute("font-size", "0.35");
	label.setAttribute("line-height", "0.8");
	return label;
};

export default createLabelText;
