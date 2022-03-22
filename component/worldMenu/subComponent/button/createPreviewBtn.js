import removeDisplayItem from "../removeDisplayItem.js";
import displayMenuItem from "../displayMenuItem.js";
import createButton from "../createButton.js";
import getRowContainerElement from "../getRowContainerElement.js";

// does not work yet
// todo pass pageIndex as object so it mutate when get pass to the function
const createPreviewBtn = (pageIndex) => {
	console.log("I am at createPreviewBtn");
	console.log(pageIndex);
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
	return prevBtn;
};

export default createPreviewBtn;
