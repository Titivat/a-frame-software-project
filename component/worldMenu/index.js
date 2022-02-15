import CAM_VAL from "../../constant/cameraIdConst.js";
import MENU_VAL from "../../constant/menu.js";
import getElementPos from "../../tools/getElementPosition.js";
import createWorldMenuLayout from "./createWorldMenuLayout.js";
import createNewItem from "./createNewItem.js";
import createRowContainer from "./createRowContainer.js";
import createButton from "./createButton.js";

let isMenuOpen = false;
document.addEventListener("keydown", function (e) {
	if (e.key === "Q" || e.key === "q") {
		// Todo create a box front of the user
		isMenuOpen = !isMenuOpen;
		worldPopUpMenu(isMenuOpen);
	}
});

const items = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	// "11",
	// "12",
	// "13",
	// "14",
	// "15",
	// "16",
	// "17",
	// "18",
	// "19",
	// "20",
];

const worldPopUpMenu = (isMenuOpen) => {
	const worldMenuName = MENU_VAL.world_id;
	if (isMenuOpen) {
		const { xPos, yPos, zPos } = getElementPos(CAM_VAL.CAMERA);
		let pageIndex = 0;
		const worldMenu = createWorldMenuLayout(worldMenuName);
		const rowContainer1 = createRowContainer("rowId1");
		const rowContainer2 = createRowContainer("rowId2");
		worldMenu.appendChild(rowContainer1);
		worldMenu.appendChild(rowContainer2);
		displayMenuItem(rowContainer1, rowContainer2, items, pageIndex);
		bottomLayout(worldMenu, items, pageIndex);
		console.log("I am pageIndex from worldPopUpMenu");
		console.log(pageIndex);
		worldMenu.setAttribute("position", `${xPos} ${yPos + 3} ${zPos - 4.5}`);
		scene.appendChild(worldMenu);
	} else if (!isMenuOpen) {
		const removeMenu = document.getElementById(worldMenuName);
		removeMenu.parentNode.removeChild(removeMenu);
	}
};

// adding Item to the menu
const displayMenuItem = (rowContainer1, rowContainer2, items, pageIndex) => {
	for (let index = 0 + pageIndex; index < 8 + pageIndex; index++) {
		if (items[index] === undefined) {
			break;
		}

		const newItem = createNewItem(items[index], `${index}-world-item`, () => {
			console.log("I am a shape of " + items[index]);
		});

		index < 4 + pageIndex
			? rowContainer1.appendChild(newItem)
			: rowContainer2.appendChild(newItem);
	}
};

const removeDisplayItem = (pageIndex, items) => {
	for (let index = 0 + pageIndex; index < 8 + pageIndex; index++) {
		if (items[index] === undefined) {
			break;
		}
		// Todo only change the value of it not delete it from the DOM
		const worldItem = document.getElementById(`${index}-world-item`);
		worldItem.parentNode.removeChild(worldItem);
	}
};

const getRowContainerElement = () => {
	const rowContainer1 = document.getElementById("rowId1");
	const rowContainer2 = document.getElementById("rowId2");
	return { rowContainer1, rowContainer2 };
};

const bottomLayout = (worldMenu, items, pageIndex) => {
	const bottomContainer = createRowContainer();
	const leftContainer = createRowContainer();
	const nextButton = createButton("Next", "next-btn", () => {
		if (pageIndex + 8 < items.length) {
			removeDisplayItem(pageIndex, items);
			pageIndex += 8;
			const { rowContainer1, rowContainer2 } = getRowContainerElement();
			displayMenuItem(rowContainer1, rowContainer2, items, pageIndex);
		}
	});

	const prevButton = createButton("prev", "prev-btn", () => {
		if (pageIndex !== 0) {
			removeDisplayItem(pageIndex, items);
			pageIndex -= 8;
			const { rowContainer1, rowContainer2 } = getRowContainerElement();
			displayMenuItem(rowContainer1, rowContainer2, items, pageIndex);
		}
	});

	leftContainer.appendChild(prevButton);
	leftContainer.appendChild(nextButton);

	bottomContainer.appendChild(leftContainer);
	worldMenu.appendChild(bottomContainer);
};
