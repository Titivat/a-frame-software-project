import CAM from "../constant/cameraIdConst.js";
AFRAME.registerSystem("track-cursor", {
    init: function() {
        this.el.setAttribute("cursor", { rayOrigin: "mouse" });
    },
});

AFRAME.registerComponent("track-cursor", {
    init: function() {

        this.el.addEventListener("mousedown", (e) => {
            if (this.el.is("cursor-hovered")) {
                this.el.sceneEl.camera.el.setAttribute("look-controls", {
                    enabled: false
                });
                this.el.addState("dragging");
            }
        });
        this.el.addEventListener("mouseup", (e) => {
            console.log(e);
            // position, rotation, scale, object
            if (this.el.is("dragging")) {
                this.el.sceneEl.camera.el.setAttribute("look-controls", {
                    enabled: true,
                });
                this.el.removeState("dragging");
            }
            this.el.emit("update_item", this.el)
        });
    },
});

AFRAME.registerComponent("dragndrop", {
    dependencies: ["track-cursor"],
    init: function() {
        this.range = 0;
        this.dist = 0;
        this.acc = 0.0;

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
    updateDirection: function() {
        this.direction.copy(this.el.sceneEl.getAttribute("raycaster").direction);
    },
    updateTarget: function() {
        let camera = this.el.sceneEl.camera.el;
        let height = new THREE.Vector3(0, 1.6, 0)
        this.target.copy(
            camera.object3D.position
            .clone()
            .add(height)
            .add(this.direction.clone().multiplyScalar(this.dist + this.range))
        );
    },
    tick: function(time, timeDelta) {

        if (this.el.is("dragging")) {
            this.acc += timeDelta;
            if (this.acc > 200) {
                this.el.emit("update_item", this.el)
                this.acc = 0.0
            }

            this.updateDirection();
            this.updateTarget();
            this.el.object3D.position.copy(this.target);
        }
    },
});