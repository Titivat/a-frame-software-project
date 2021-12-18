AFRAME.registerComponent("lightbulb", {
	init: function () {
		this.isOn = false;
		this.count = 0;
		var el = this.el;

		el.addEventListener("click", function () {
			console.log(el.getAttribute("light"));
			if (this.On) {
				el.setAttribute(
					"light",
					"type: point; intensity: 1; distance: 100; decay: 0"
				);
				this.On = false;
			} else {
				el.setAttribute(
					"light",
					"type: point; intensity: 0; distance: 100; decay: 0"
				);
				this.On = true;
			}
		});
	},
});
