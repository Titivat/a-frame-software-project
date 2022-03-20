const appendToLabel = (label, value) => {
	const currentVal = label.getAttribute("value");
	label.setAttribute("value", currentVal + value);
};

export default appendToLabel;
