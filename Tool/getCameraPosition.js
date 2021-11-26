import CAM from "../constant/cameraIdConst.js";

const getCameraPosition = () => {
	const value = document.getElementById(CAM.MIDDLE_CIRCLE);
	console.log(value.getAttribute('position'));
	return "0 0 0";
};

export default getCameraPosition;
