import createKeyboardLayout from "./createKeyboardLayout.js";
import createKeyboardKeycap from "./createKeyboardKeycap.js";
import createKeyboardRow from "./createKeyboardRow.js";
import backspaceKey from "./backspaceKey.js";

const createKeyboard = (label) => {
	const numberKeys = ["0", "1", "3", "4", "5", "6", "7", "8", "9"];
	const topKeys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
	const middleKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
	const bottomKeys = ["z", "x", "c", "v", "b", "n", "m"];
	const backspace = createKeyboardKeycap(`back-key`, "back", () =>
		backspaceKey(label)
	);
	const keyBoardContainer = createKeyboardLayout("edit-keyboard");
	const numberRowKeys = createKeyboardRow(numberKeys, label);
	const topRowKeys = createKeyboardRow(topKeys, label);
	topRowKeys.appendChild(backspace);
	const middleRowKeys = createKeyboardRow(middleKeys, label);
	const bottomRowKeys = createKeyboardRow(bottomKeys, label);
	keyBoardContainer.appendChild(numberRowKeys);
	keyBoardContainer.appendChild(topRowKeys);
	keyBoardContainer.appendChild(middleRowKeys);
	keyBoardContainer.appendChild(bottomRowKeys);
	return keyBoardContainer;
};

export default createKeyboard;
