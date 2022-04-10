AFRAME.registerComponent("create-world-menu", {
	init: function () {
		this.isWorldMenuOpen = false;
		this.el.addEventListener("xbuttondown", this.xButtonPress);
	},
	xButtonPress: function (evt) {
		if (this.isWorldMenuOpen) {
			console.log("I am true");
			this.isWorldMenuOpen = false;
		} else {
			console.log("I am false");
			this.isWorldMenuOpen = true;
			const box = document.createElement("a-entity");
			box.setAttribute(
				"geometry",
				"primitive: box; width: 1; height: 1; depth: 1;"
			);
			box.setAttribute("position", "0 2 -3");
			const scene = document.querySelector("a-scene");
			scene.appendChild(box);
		}
	},
});
