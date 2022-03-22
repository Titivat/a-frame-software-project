const backspaceKey = (label) => {
	const currentVal = label.getAttribute("value");
	if (currentVal) {
		const newString = currentVal.slice(0, -1);
		label.setAttribute("value", newString);
	}
};

export default backspaceKey;
