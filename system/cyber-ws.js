console.log(
    "KUYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY"
);

AFRAME.registerSystem("cyber-ws", {
    // Initial state.
    schema: {
        host: { type: "string", default: "ws://localhost:2077/ws/system/" },
    },

    init: function() {
        var sceneEl = this.el;
        let host = this.data.host;
        console.log("START CONNECTION");
        sceneEl.emit("connectionStarted", { host: host });

        this.ws = new WebSocket(host);

        this.ws.onopen = function() {
            const data = JSON.stringify({
                action: "init_world",
                data: "CONNECT ME BITCH",
            });
            this.ws.send(data);
        }.bind(this);

        this.ws.onmessage = function(evt) {
            let received_msg = evt.data;
            const incomingData = JSON.parse(received_msg);
            console.log("INCOMING!")
            console.log(incomingData)
            if (incomingData.type === "house_snapshot") {
                const data = incomingData.data
                console.log(data)
                for (let item of data) {
                    console.log(item)
                    let element = document.getElementById(item.meta.nickname);
                    if (!element) {
                        let newItem = document.createElement(`a-${item.meta.avatar}`);
                        newItem.setAttribute("dragndrop", "");
                        newItem.setAttribute("response-type", `arraybuffer`);
                        newItem.setAttribute("crossorigin", `anonymous`);

                        newItem.setAttribute("id", item.meta.nickname);
                        newItem.setAttribute(
                            "rotation",
                            AFRAME.utils.coordinates.stringify(item.rotation)
                        );
                        newItem.setAttribute(
                            "position",
                            AFRAME.utils.coordinates.stringify(item.position)
                        );
                        newItem.setAttribute(
                            "scale",
                            AFRAME.utils.coordinates.stringify(item.scale)
                        );

                        for (let property of item.properties) {
                            newItem.setAttribute(property.name, property.value);
                        }
                        sceneEl.appendChild(newItem);
                        console.log("SHIT CREATED")
                    } else {
                        element.setAttribute(
                            "rotation",
                            AFRAME.utils.coordinates.stringify(item.rotation)
                        );
                        element.setAttribute(
                            "position",
                            AFRAME.utils.coordinates.stringify(item.position)
                        );
                        element.setAttribute(
                            "scale",
                            AFRAME.utils.coordinates.stringify(item.scale));

                        for (let property of item.properties) {
                            element.setAttribute(property.name, property.value);
                        }
                        console.log("SHIT UPDATED")
                    }
                }
            }
        };

        this.ws.onclose = function() {
            alert("KABOOM!");
        };

        // UPDATE TAG OF DEVICE
        // this.el.addEventListener("set_tag", (e) => {
        //     let data = { action: "set_tag", data: e }
        //     this.ws.send(JSON.stringify(data))
        // })

        this.el.addEventListener("update_item", function(e) {
            console.log("UPDATE")
            let toUpdate = e.target
            console.log(toUpdate.components)
            if (toUpdate.components.geometry) {
                let data = {
                    action: "update_item",
                    data: {
                        name: toUpdate.id,
                        type: toUpdate.components.geometry.data.primitive,
                        position: AFRAME.utils.coordinates.stringify(toUpdate.object3D.position),
                        rotation: AFRAME.utils.coordinates.stringify(toUpdate.object3D.rotation),
                        scale: AFRAME.utils.coordinates.stringify(toUpdate.object3D.scale),
                        properties: [{
                                name: "height",
                                value: toUpdate.components.geometry.data.height
                            },
                            {
                                name: "width",
                                value: toUpdate.components.geometry.data.width
                            },
                            {
                                name: "color",
                                value: toUpdate.components.material.data.color
                            },
                        ]
                    }
                }
                console.log(data)
                this.ws.send(JSON.stringify(data))

            }
        }.bind(this));

        this.el.addEventListener("create_item", function(e) {
            console.log("CREATE")
            let toCreate = e.detail
            let data = {
                action: "create_item",
                data: toCreate
            }
            console.log(data)
            this.ws.send(JSON.stringify(data))

        }.bind(this));
    },
});