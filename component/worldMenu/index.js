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
		worldMenu.setAttribute("position", `${xPos} ${yPos + 3} ${zPos - 4.5}`);
		scene.appendChild(worldMenu);
	} else if (!isMenuOpen) {
		const removeMenu = document.getElementById(worldMenuName);
		removeMenu.parentNode.removeChild(removeMenu);
	}
};

const bottomLayout = (worldMenu, pageIndex) => {
	const bottomContainer = createRowContainer();
	const leftContainer = createRowContainer();
	const rightContainer = createRowContainer();

	const nextBtn = createButton("Next", "next-btn", () => {
		const isEditable = localStorage.getItem("isEditable");
		if (pageIndex + 8 < items.length && isEditable) {
			let items = JSON.parse(localStorage.getItem("items"));
			removeDisplayItem(pageIndex, items.items, "world-item");
			pageIndex += 8;
			const { rowContainer1, rowContainer2 } = getRowContainerElement();
			displayMenuItem(rowContainer1, rowContainer2, items.items, pageIndex);
		}
	});

	const prevBtn = createButton("prev", "prev-btn", () => {
		const isEditable = localStorage.getItem("isEditable");
		if (pageIndex !== 0 && isEditable) {
			let items = JSON.parse(localStorage.getItem("items"));
			removeDisplayItem(pageIndex, items.items, "world-item");
			pageIndex -= 8;
			const { rowContainer1, rowContainer2 } = getRowContainerElement();
			displayMenuItem(rowContainer1, rowContainer2, items.items, pageIndex);
		}
	});

	leftContainer.appendChild(prevBtn);
	leftContainer.appendChild(nextBtn);

	const editBtn = createButton("edit", "edit-btn", () => {
		const items = JSON.parse(localStorage.getItem("items"));
		const isEditable = localStorage.getItem("isEditable");
		if (isEditable) {
			removeDisplayItem(pageIndex, items.items, "world-item");
			const { rowContainer1, rowContainer2 } = getRowContainerElement();
			displayMenuItemWithDelete(
				rowContainer1,
				rowContainer2,
				items.items,
				pageIndex
			);
			localStorage.setItem("isEditable", false);
		} else {
			removeDisplayItem(pageIndex, items.items, "world-item-delete");
			localStorage.setItem("isEditable", true);
		}
	});

	// todo create a new object
	// it is a log for now
	const createdBtn = createButton("create", "create-btn", () => {
		console.log("I am a create button");
		const value = JSON.parse(localStorage.getItem("items"));
		console.log(value.items);
	});

	rightContainer.appendChild(editBtn);
	rightContainer.appendChild(createdBtn);

	bottomContainer.appendChild(leftContainer);
	bottomContainer.appendChild(rightContainer);
	worldMenu.appendChild(bottomContainer);
};
