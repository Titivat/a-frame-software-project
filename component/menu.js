import CAM_VAL from "../constant/cameraIdConst.js";
import MENU_VAL from "../constant/menu.js";
import getElementPos from "../tools/getElementPosition.js";
let isMenuOpen = false;
console.log("loading menu")
const itemList = [{
        img: "#box_img",
        shape: "box",
    },
    {
        img: "#sphere_img",
        shape: "sphere",
    },
    {
        img: "#cylinder_img",
        shape: "cylinder",
    },
    {
        img: "#circle_img",
        shape: "circle",
    },
    {
        img: "#triangle_img",
        shape: "triangle",
    },
    {
        img: "#dodecahedron_img",
        shape: "dodecahedron",
    },
    {
        img: "#box_img",
        shape: "box",
    },
    {
        img: "#box_img",
        shape: "box",
    },
    {
        img: "#box_img",
        shape: "box",
    },
];

document.addEventListener("keydown", function(e) {
    if (e.key === "M" || e.key === "m") {
        // Todo create a box front of the user
        console.log("MENU BOOM")
        isMenuOpen = !isMenuOpen;
        popUpMenu(isMenuOpen);
    }
});

const popUpMenu = (isMenuOpen) => {
    const menuName = MENU_VAL.id;
    if (isMenuOpen) {
        const { xPos, yPos, zPos } = getElementPos(CAM_VAL.CAMERA);
        const menu = createMenu(menuName);
        menu.setAttribute("position", `${xPos} ${yPos+3} ${zPos - 4}`);
        scene.appendChild(menu);
        // addClickAbleToMenuItems();
    } else if (!isMenuOpen) {
        //MENU_VAL.id
        const removeMenu = document.getElementById(menuName);
        removeMenu.parentNode.removeChild(removeMenu);
    }
};

const createMenu = (name) => {
    const { xPos, yPos, zPos } = getElementPos(CAM_VAL.CAMERA);
    const menu = document.createElement("a-plane");
    menu.setAttribute("id", name);
    menu.setAttribute("color", "gray");
    // smenu.setAttribute("material", "opacity: 0.0; transparent: false");
    menu.setAttribute("height", "5");
    menu.setAttribute("width", "5");

    let spacing_row = -2;
    let spacing_col = 2;
    for (let index = 0; index < itemList.length; index++) {
        if (index % 3 === 0 && index !== 0) {
            spacing_row = -2;
            spacing_col -= 2;
        }

        const select_item = document.createElement("a-plane");
        select_item.setAttribute("id", `object-select-${index.toString()}`);
        select_item.setAttribute("src", itemList[index].img);
        select_item.setAttribute("height", "1");
        select_item.setAttribute("width", "1");
        select_item.setAttribute(
            "position",
            `${spacing_row} ${spacing_col + 0.3} 0.14`

        );

        select_item.addEventListener("click", function() {
            // const createObject = createItemObject(
            // 	`create-object-${index.toString()}`,
            // 	`https://cdn.aframe.io/examples/ar/models/reticle/reticle.gltf`
            // );

            const { xPos, yPos, zPos } = getElementPos(MENU_VAL.id)
            let createObjectData = {
                name: itemList[index].shape,
                type: itemList[index].shape,
                position: `${xPos} 2 ${zPos + 1}`,
                scale: "1 1 1",
                rotation: "0 0 0",
                properties: [{
                    name: 'color',
                    value: "cyan"
                }, ]
            }
            createObjectData.properties.push({ name: 'width', value: 1 })
            createObjectData.properties.push({ name: 'height', value: 1 })
            if (itemList[index].shape === "circle" || itemList[index].shape === "sphere") {
                createObjectData.properties.push({ name: 'radius', value: 1 })
            }
            menu.emit("create_item", createObjectData);
        });
        spacing_row += 2;
        menu.appendChild(select_item);
    }
    return menu;
};

const createItemObject = (id, modelLink) => {
    const createObject = document.createElement("a-entity");
    createObject.setAttribute("id", id);
    createObject.setAttribute("gltf-model", modelLink);
    createObject.setAttribute("dragndrop", "");
    createObject.setAttribute("response-type", `arraybuffer`);
    createObject.setAttribute("crossorigin", `anonymous`);
    return createObject;
};

// option

const stickPopup = (isMenuOpen) => {
    const menuName = MENU_VAL.id;
    if (isMenuOpen) {
        const addToCursor = document.getElementById(CAM_VAL.CURSOR);
        const menu = createMenu(menuName);
        menu.setAttribute("position", "0 0 -6");
        addToCursor.appendChild(menu);
    } else if (!isMenuOpen) {
        const removeMenu = document.getElementById(menuName);
        removeMenu.parentNode.removeChild(removeMenu);
    }
};