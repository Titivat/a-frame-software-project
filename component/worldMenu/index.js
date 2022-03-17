import CAM_VAL from "../../constant/cameraIdConst.js";
import MENU_VAL from "../../constant/menu.js";
import getElementPos from "../../tools/getElementPosition.js";
import createWorldMenuLayout from "./subComponent/createWorldMenuLayout.js";
import createRowContainer from "./subComponent/createRowContainer.js";
import createButton from "./subComponent/createButton.js";
import displayMenuItem from "./subComponent/displayMenuItem.js";
import removeDisplayItem from "./subComponent/removeDisplayItem.js";
import WORLD_ITEM from "../../constant/worldItem.js";
import getRowContainerElement from "./subComponent/getRowContainerElement.js";
import displayMenuItemWithDelete from "./subComponent/displayMenuItemWithDelete.js";
import createEditMenu from "./subComponent/createEditMenu.js";
import createLabelText from "./subComponent/createLabelText.js";

let isMenuOpen = false;
document.addEventListener("keydown", function (e) {
	if (e.key === "Q" || e.key === "q") {
		isMenuOpen = !isMenuOpen;
		worldPopUpMenu(isMenuOpen);
	}
});

// constance item for testing
const items = WORLD_ITEM.items;
// this should have been implemented as class, bc the value would not change as expected
// so I put in local storage so that the value is the same at every place
localStorage.setItem("items", JSON.stringify({ items: items }));
localStorage.setItem("isEditable", true);
const worldPopUpMenu = (isMenuOpen) => {
	const worldMenuName = MENU_VAL.world_id;
	if (isMenuOpen) {
		// init constance
		// paging
		let pageIndex = 0;
		const { xPos, yPos, zPos } = getElementPos(CAM_VAL.CAMERA);

		// layout of the menu
		const worldMenu = createWorldMenuLayout(worldMenuName);

		// formatting the body for displaying item
		const rowContainer1 = createRowContainer("rowId1");
		const rowContainer2 = createRowContainer("rowId2");
		worldMenu.appendChild(rowContainer1);
		worldMenu.appendChild(rowContainer2);

		// init the display of the item
		displayMenuItem(rowContainer1, rowContainer2, items, pageIndex);

		// changing page of the item (all the display is here after click next or prev)
		bottomLayout(worldMenu, pageIndex);

		// set position for the menu
		worldMenu.setAttribute("position", `${xPos} ${yPos + 3} ${zPos - 5}`);
		scene.appendChild(worldMenu);
	} else if (!isMenuOpen) {
		const removeMenu = document.getElementById(worldMenuName);
		removeMenu.parentNode.removeChild(removeMenu);
	}
};

const appendToLabel = (label, value) => {
	const currentVal = label.getAttribute("value");
	label.setAttribute("value", currentVal + value);
};

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

const createKeyboardLayout = (id) => {
	const keyBoardContainer = document.createElement("a-gui-flex-container");
	keyBoardContainer.setAttribute("id", id);
	keyBoardContainer.setAttribute("align-items", "middle");
	keyBoardContainer.setAttribute("justify-content", "center");
	keyBoardContainer.setAttribute("component-padding", "0.1");
	keyBoardContainer.setAttribute("flex-direction", "column");
	keyBoardContainer.setAttribute("opacity", "0.7");
	keyBoardContainer.setAttribute("width", "5");
	keyBoardContainer.setAttribute("height", "0");
	keyBoardContainer.setAttribute("rotation", "-5 0 0");
	return keyBoardContainer;
};

//create key board
const createKeyboard = (label) => {
	console.log("I am a keyboard");
	const topKeys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
	const middleKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
	const bottomKeys = ["z", "x", "c", "v", "b", "n", "m"];
	const keyBoardContainer = createKeyboardLayout("edit-keyboard");
	const topRowKeys = createKeyboardRow(topKeys, label);
	const middleRowKeys = createKeyboardRow(middleKeys, label);
	const bottomRowKeys = createKeyboardRow(bottomKeys, label);
	keyBoardContainer.appendChild(topRowKeys);
	keyBoardContainer.appendChild(middleRowKeys);
	keyBoardContainer.appendChild(bottomRowKeys);
	return keyBoardContainer;
};

const bottomLayout = (worldMenu, pageIndex) => {
	const bottomContainer = createRowContainer();
	const leftContainer = createRowContainer();
	const rightContainer = createRowContainer();

	const nextBtn = createButton("Next", "next-btn", () => {
		const isEditable = localStorage.getItem("isEditable");
		let { items } = JSON.parse(localStorage.getItem("items"));
		if (pageIndex + 8 < items.length && isEditable) {
			removeDisplayItem(pageIndex, items, "world-item");
			pageIndex += 8;
			const { rowContainer1, rowContainer2 } = getRowContainerElement();
			displayMenuItem(rowContainer1, rowContainer2, items, pageIndex);
		}
	});

	const prevBtn = createButton("prev", "prev-btn", () => {
		const isEditable = localStorage.getItem("isEditable");
		if (pageIndex !== 0 && isEditable) {
			let { items } = JSON.parse(localStorage.getItem("items"));
			removeDisplayItem(pageIndex, items, "world-item");
			pageIndex -= 8;
			const { rowContainer1, rowContainer2 } = getRowContainerElement();
			displayMenuItem(rowContainer1, rowContainer2, items, pageIndex);
		}
	});

	leftContainer.appendChild(prevBtn);
	leftContainer.appendChild(nextBtn);

	const editBtn = createButton("edit", "edit-btn", () => {
		const { items } = JSON.parse(localStorage.getItem("items"));
		const isEditable = localStorage.getItem("isEditable");
		if (isEditable) {
			removeDisplayItem(pageIndex, items, "world-item");
			const { rowContainer1, rowContainer2 } = getRowContainerElement();
			displayMenuItemWithDelete(rowContainer1, rowContainer2, items, pageIndex);
			localStorage.setItem("isEditable", false);
		} else {
			removeDisplayItem(pageIndex, items, "world-item-delete");
			localStorage.setItem("isEditable", true);
		}
	});

	// todo create a new object
	// it is a log for now
	const createdBtn = createButton("create", "create-btn", () => {
		console.log("I am a create button");
		const { xPos, yPos, zPos } = getElementPos(CAM_VAL.CAMERA);
		const newCreateMenu = createEditMenu();
		const createBtnTopLayout = createRowContainer("createBtnTopLayout");
		const createBtnButtonLayout = createRowContainer("createBtnBottomLayout");

		// top part of the create menu
		const label = createLabelText("");
		createBtnTopLayout.appendChild(label);

		// bottom part of the create menu
		const confirmBtn = createButton("confirm", "createConfirmBtn", () => {
			// todo add the item in the list
			console.log("I am confirm btn");
			// let { items } = JSON.parse(localStorage.getItem("items"));
			// const newWorldName = label.getAttribute("value");
			// items.push({ name: newWorldName });
			// localStorage.setItem("items", JSON.stringify({ items: items }));
		});
		const cancelBtn = createButton("cancel", "cancelConfirmBtn", () => {
			// todo delete the create menu
			console.log("I am cancel btn");
			const editMenu = document.getElementById(`editMenu`);
			editMenu.parentNode.removeChild(editMenu);
			const editMenuKeyboard = document.getElementById(`edit-keyboard`);
			editMenuKeyboard.parentNode.removeChild(editMenuKeyboard);
		});
		createBtnButtonLayout.appendChild(confirmBtn);
		createBtnButtonLayout.appendChild(cancelBtn);
		newCreateMenu.setAttribute("position", `${xPos} ${yPos + 3.5} ${zPos - 4}`);
		newCreateMenu.appendChild(createBtnTopLayout);
		newCreateMenu.appendChild(createBtnButtonLayout);
		scene.appendChild(newCreateMenu);

		// to do create keyboard here
		const keyboard = createKeyboard(label);
		keyboard.setAttribute("position", `${xPos} ${yPos + 1.2} ${zPos - 3.5}`);
		scene.appendChild(keyboard);
	});

	rightContainer.appendChild(editBtn);
	rightContainer.appendChild(createdBtn);

	bottomContainer.appendChild(leftContainer);
	bottomContainer.appendChild(rightContainer);
	worldMenu.appendChild(bottomContainer);
};
