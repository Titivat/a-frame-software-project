import createNewItem from "./createNewItem.js";

const displayMenuItem = (rowContainer1, rowContainer2, items, pageIndex) => {
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

		index < 4 + pageIndex
			? rowContainer1.appendChild(newItem)
			: rowContainer2.appendChild(newItem);
	}
};

export default displayMenuItem;
