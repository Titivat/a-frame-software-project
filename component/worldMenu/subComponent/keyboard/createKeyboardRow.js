import createKeyboardKeycap from "./createKeyboardKeycap.js";
import appendToLabel from "./appendToLabel.js";
import createRowContainer from "../createRowContainer.js";

const createKeyboardRow = (keyboardWords, label) => {
	const rowContainer = createRowContainer();
	rowContainer.setAttribute("height", "0.5");
	keyboardWords.forEach((key) => {
		const newKey = createKeyboardKeycap(`${key}-key`, key, () =>
			appendToLabel(label, key)
		);
		rowContainer.appendChild(newKey);
	});
	return rowContainer;
};

export default createKeyboardRow;
