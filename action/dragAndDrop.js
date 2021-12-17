// if (window.AFRAME == null) {
// 	console.log("I am not AFRAME");
// 	console.error("aframe not found, please import it before this component.");
// }
const API_PATH_NAME = "https://reqres.in";
async function postData(url = "", data = {}) {
	// Default options are marked with *
	const response = await fetch(`${API_PATH_NAME}${url}`, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

AFRAME.registerSystem("track-cursor", {
	init: function () {
		this.el.setAttribute("cursor", { rayOrigin: "mouse" });
	},
});

AFRAME.registerComponent("track-cursor", {
	init: function () {
		this.el.addEventListener("mousedown", (e) => {
			if (this.el.is("cursor-hovered")) {
				this.el.sceneEl.camera.el.setAttribute("look-controls", {
					enabled: false,
				});
				this.el.addState("dragging");
			}
		});
		this.el.addEventListener("click", (e) => {
			console.log("Stop dragging");
			console.log(this.el.object3D.position);
			// position, rotation, scale, object
			ws.send(JSON.stringify(this.el.object3D.position));
			if (this.el.is("dragging")) {
				this.el.sceneEl.camera.el.setAttribute("look-controls", {
					enabled: true,
				});
				this.el.removeState("dragging");
			} else {
				console.log("Not dragging");
			}
		});
	},
});

AFRAME.registerComponent("dragndrop", {
	dependencies: ["track-cursor"],
	init: function () {
		this.range = 0;
		this.dist = 0;

		this.el.addEventListener("stateadded", (e) => {
			if (e.detail == "dragging") {
				this.range = 0;
				this.dist = this.el.object3D.position
					.clone()
					.sub(this.el.sceneEl.camera.el.object3D.position)
					.length();
			}
		});

		this.direction = new AFRAME.THREE.Vector3();
		this.target = new AFRAME.THREE.Vector3();
		document.addEventListener("wheel", (e) => {
			if (e.deltaY < 0) {
				this.range += 0.1;
			} else {
				this.range -= 0.1;
			}
		});
	},
	updateDirection: function () {
		this.direction.copy(this.el.sceneEl.getAttribute("raycaster").direction);
	},
	updateTarget: function () {
		let camera = this.el.sceneEl.camera.el;
		this.target.copy(
			camera.object3D.position
				.clone()
				.add(this.direction.clone().multiplyScalar(this.dist + this.range))
		);
	},
	tick: function () {
		if (this.el.is("dragging")) {
			this.updateDirection();
			this.updateTarget();
			this.el.object3D.position.copy(this.target);
		}
	},
});

AFRAME.registerComponent("change-color-on-hover", {
	schema: {
		color: { default: "red" },
	},

	init: function () {
		var data = this.data;
		var el = this.el; // <a-box>
		var defaultColor = el.getAttribute("material").color;

		el.addEventListener("mouseenter", function () {
			el.setAttribute("color", data.color);
		});

		el.addEventListener("mouseleave", function () {
			el.setAttribute("color", defaultColor);
		});
	},
});
