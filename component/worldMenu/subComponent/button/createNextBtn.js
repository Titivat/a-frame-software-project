import removeDisplayItem from "../removeDisplayItem.js";
import displayMenuItem from "../displayMenuItem.js";
import createButton from "../createButton.js";
import getRowContainerElement from "../getRowContainerElement.js";

// does not work yet
// todo pass pageIndex as object so it mutate when get pass to the function
const createNextBtn = (pageIndex) => {
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
	return nextBtn;
};

export default createNextBtn;
