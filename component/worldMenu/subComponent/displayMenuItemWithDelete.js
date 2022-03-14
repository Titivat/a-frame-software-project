import removeDisplayItem from "./removeDisplayItem.js";
import getRowContainerElement from "./getRowContainerElement.js";
import displayMenuItem from "./displayMenuItem.js";
import createNewItem from "./createNewItem.js";

const displayMenuItemWithDelete = (
	rowContainer1,
	rowContainer2,
	items,
	pageIndex
) => {
	for (let index = 0 + pageIndex; index < 8 + pageIndex; index++) {
		if (items[index] === undefined) {
			break;
		}

		const newItem = createNewItem(
			items[index],
			`${index}-world-item`,
			"label",
			() => {
				console.log("I am a shape of " + items[index]);
			}
		);
		const deleteBtn = createNewItem(
			"X",
			`${index}-world-item-delete`,
			"normal",
			() => {
				items = items.filter((item) => item != items[index]);
				removeDisplayItem(pageIndex, items, "world-item-delete");
				removeDisplayItem(pageIndex, items, "world-item");
				const { rowContainer1, rowContainer2 } = getRowContainerElement();
				displayMenuItem(rowContainer1, rowContainer2, items, pageIndex);
				localStorage.setItem("items", JSON.stringify({ items: items }));
			}
		);
		deleteBtn.setAttribute("width", "0.25");
		deleteBtn.setAttribute("height", "0.2");
		deleteBtn.setAttribute("font-size", "0.13");
		deleteBtn.setAttribute("position", "0 1 1");

		// for new row
		if (index < 4 + pageIndex) {
			rowContainer1.appendChild(newItem);
			rowContainer1.appendChild(deleteBtn);
		} else {
			rowContainer2.appendChild(newItem);
			rowContainer2.appendChild(deleteBtn);
		}
	}
};

export default displayMenuItemWithDelete;
