const removeElement = (id) => {
	const elementToBeRemove = document.getElementById(id);
	elementToBeRemove.parentNode.removeChild(elementToBeRemove);
};

export default removeElement;
