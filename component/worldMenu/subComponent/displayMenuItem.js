import createNewItem from "./createNewItem.js";

const displayMenuItem = (rowContainer1, rowContainer2, items, pageIndex) => {
	for (let index = 0 + pageIndex; index < 8 + pageIndex; index++) {
		// check for the end of list
		if (items[index] === undefined) {
			break;
		}

		// put it here bc items[index] when it undefined would exploded
		const { name } = items[index];
		const newItem = createNewItem(name, `${index}-world-item`, "label", () => {
			console.log("I am a shape of " + name);
		});

		index < 4 + pageIndex
			? rowContainer1.appendChild(newItem)
			: rowContainer2.appendChild(newItem);
	}
};

export default displayMenuItem;
