AFRAME.registerComponent("create-world-menu", {
	schema: {
		isWorldMenuOpen: false,
	},
	init: function () {
		this.el.addEventListener("abuttondown", this.aButtonPress);
	},
	aButtonPress: function (evt) {
		if (this.isWorldMenuOpen) {
			console.log("I am true");
			this.isWorldMenuOpen = false;
		} else {
			console.log("I am false");
			this.isWorldMenuOpen = true;
		}
	},
});
