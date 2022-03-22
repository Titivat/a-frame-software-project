const createKeyboardKeycap = (id, name, func) => {
	const keycap = document.createElement("a-gui-button");
	keycap.setAttribute("id", id);
	keycap.setAttribute("width", "0.5");
	keycap.setAttribute("height", "0.5");
	keycap.setAttribute("value", name);
	keycap.setAttribute("margin", "0 0.1 0.2 0");
	keycap.addEventListener("click", func);
	return keycap;
};

export default createKeyboardKeycap;
