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

const createEditMenu = () => {
	const editMenu = document.createElement("a-gui-flex-container");
	editMenu.setAttribute("id", "editMenu");
	editMenu.setAttribute("flex-direction", "column");
	editMenu.setAttribute("width", "5");
	editMenu.setAttribute("height", "2.5");
	editMenu.setAttribute("justify-content", "center");
	editMenu.setAttribute("align-items", "normal");
	editMenu.setAttribute("component-padding", "0.1");
	editMenu.setAttribute("opacity", "0.7");
	return editMenu;
};

const createLabelText = () => {
	const label = document.createElement("a-gui-label");
	label.setAttribute("width", "2.5");
	label.setAttribute("height", "0.75");
	label.setAttribute("value", "7");
	label.setAttribute("font-size", "0.35");
	label.setAttribute("line-height", "0.8");
	return label;
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
		const label = createLabelText();
		createBtnTopLayout.appendChild(label);

		// bottom part of the create menu
		const confirmBtn = createButton("confirm", "createConfirmBtn", () => {
			// todo add the item in the list
			console.log("I am confirm btn");
			let { items } = JSON.parse(localStorage.getItem("items"));
			const newWorldName = label.getAttribute("value");
			items.push(newWorldName);
			localStorage.setItem("items", JSON.stringify({ items: items }));
		});
		const cancelBtn = createButton("cancel", "cancelConfirmBtn", () => {
			// todo delete the create menu
			console.log("I am cancel btn");
		});
		createBtnButtonLayout.appendChild(confirmBtn);
		createBtnButtonLayout.appendChild(cancelBtn);
		newCreateMenu.setAttribute("position", `${xPos} ${yPos + 3} ${zPos - 4}`);
		newCreateMenu.appendChild(createBtnTopLayout);
		newCreateMenu.appendChild(createBtnButtonLayout);
		scene.appendChild(newCreateMenu);

		// to do create keyboard here
	});

	rightContainer.appendChild(editBtn);
	rightContainer.appendChild(createdBtn);

	bottomContainer.appendChild(leftContainer);
	bottomContainer.appendChild(rightContainer);
	worldMenu.appendChild(bottomContainer);
};
