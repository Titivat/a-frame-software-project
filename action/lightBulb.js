AFRAME.registerComponent("lightbulb", {
    init: function() {
        this.onoff = false;
        this.count = 0;

        this.el.setAttribute(
            "light",
            "type: point; intensity: 0; distance: 100; decay: 0"
        );

        this.el.addEventListener("click", function() {
            if (this.onoff) {
                this.el.setAttribute(
                    "light",
                    "type: point; intensity: 1; distance: 100; decay: 0"
                );
                this.onoff = false;
            } else {
                this.el.setAttribute(
                    "light",
                    "type: point; intensity: 0; distance: 100; decay: 0"
                );
                this.onoff = true;
            }
            this.el.emit("set_tag", { device_name: this.el.id, tag: "onoff", value: this.onoff })
        }.bind(this));
    },
});