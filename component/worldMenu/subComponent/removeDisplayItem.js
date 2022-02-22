const removeDisplayItem = (pageIndex, items, deleteItem) => {
	for (let index = 0 + pageIndex; index < 8 + pageIndex; index++) {
		if (items[index] === undefined) {
			break;
		}
		// Todo only change the value of it not delete it from the DOM
		const worldItem = document.getElementById(`${index}-${deleteItem}`);
		worldItem.parentNode.removeChild(worldItem);
	}
};

export default removeDisplayItem;
