const getElementPosition = (elementId) => {
	const value = document.getElementById(elementId);
	const { x, y, z } = value.getAttribute("position");
	return {xPos: x, yPos: y, zPos: z};
};

export default getElementPosition;
