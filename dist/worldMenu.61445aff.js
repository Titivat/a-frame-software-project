// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"constant/cameraIdConst.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var CAM_VAL = {
  CAMERA_RIG: "rig",
  CAMERA: "camera",
  CURSOR: "cursor"
};
var _default = CAM_VAL;
exports.default = _default;
},{}],"constant/menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var MENU_VAL = {
  id: "popup-menu",
  world_id: "world_popup"
};
var _default = MENU_VAL;
exports.default = _default;
},{}],"tools/getElementPosition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getElementPosition = function getElementPosition(elementId) {
  var value = document.getElementById(elementId);

  var _value$getAttribute = value.getAttribute("position"),
      x = _value$getAttribute.x,
      y = _value$getAttribute.y,
      z = _value$getAttribute.z;

  return {
    xPos: x,
    yPos: y,
    zPos: z
  };
};

var _default = getElementPosition;
exports.default = _default;
},{}],"component/worldMenu/subComponent/createWorldMenuLayout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var createWorldMenuLayout = function createWorldMenuLayout(name) {
  var worldMenu = document.createElement("a-gui-flex-container");
  worldMenu.setAttribute("id", name);
  worldMenu.setAttribute("flex-direction", "column");
  worldMenu.setAttribute("justify-content", "center");
  worldMenu.setAttribute("align-items", "normal");
  worldMenu.setAttribute("component-padding", "0.1");
  worldMenu.setAttribute("opacity", "0.7");
  worldMenu.setAttribute("width", "11");
  worldMenu.setAttribute("height", "4.5");
  worldMenu.setAttribute("rotation", "0 0 0");
  return worldMenu;
};

var _default = createWorldMenuLayout;
exports.default = _default;
},{}],"component/worldMenu/subComponent/createNewItem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var createNewItem = function createNewItem(name, id, fun) {
  var newItem = document.createElement("a-gui-icon-label-button");
  newItem.setAttribute("id", id);
  newItem.setAttribute("margin", "0 0 0.1 0");
  newItem.setAttribute("value", name);
  newItem.setAttribute("width", "2.5");
  newItem.setAttribute("height", "0.75");
  newItem.setAttribute("font-size", "0.25");
  newItem.setAttribute("line-height", "0.8");
  newItem.setAttribute("letter-spacing", "0");
  newItem.setAttribute("opacity", "0.6");
  newItem.setAttribute("background-color", "#212121");
  newItem.setAttribute("hover-color", "#FF0000");
  newItem.addEventListener("click", fun);
  return newItem;
};

var _default = createNewItem;
exports.default = _default;
},{}],"component/worldMenu/subComponent/createRowContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var createRowContainer = function createRowContainer(id) {
  var rowContainer = document.createElement("a-gui-flex-container");
  rowContainer.setAttribute("id", id);
  rowContainer.setAttribute("flex-direction", "row");
  rowContainer.setAttribute("width", "3");
  rowContainer.setAttribute("height", "1");
  rowContainer.setAttribute("justify-content", "center");
  rowContainer.setAttribute("opacity", "0.7");
  rowContainer.setAttribute("margin", "0 0 0.1 0");
  return rowContainer;
};

var _default = createRowContainer;
exports.default = _default;
},{}],"component/worldMenu/subComponent/createButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var createButton = function createButton(name, id, fun) {
  var button = document.createElement("a-gui-button");
  button.setAttribute("id", id);
  button.setAttribute("width", "1.5");
  button.setAttribute("height", "0.75");
  button.setAttribute("value", name);
  button.setAttribute("font-size", "0.25");
  button.setAttribute("line-height", "0.8");
  button.setAttribute("margin", "0 0 0.05 0");
  button.addEventListener("click", fun);
  return button;
};

var _default = createButton;
exports.default = _default;
},{}],"component/worldMenu/index.js":[function(require,module,exports) {
"use strict";

var _cameraIdConst = _interopRequireDefault(require("../../constant/cameraIdConst.js"));

var _menu = _interopRequireDefault(require("../../constant/menu.js"));

var _getElementPosition = _interopRequireDefault(require("../../tools/getElementPosition.js"));

var _createWorldMenuLayout = _interopRequireDefault(require("./subComponent/createWorldMenuLayout.js"));

var _createNewItem = _interopRequireDefault(require("./subComponent/createNewItem.js"));

var _createRowContainer = _interopRequireDefault(require("./subComponent/createRowContainer.js"));

var _createButton = _interopRequireDefault(require("./subComponent/createButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMenuOpen = false;
document.addEventListener("keydown", function (e) {
  if (e.key === "Q" || e.key === "q") {
    isMenuOpen = !isMenuOpen;
    worldPopUpMenu(isMenuOpen);
  }
});
var items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

var worldPopUpMenu = function worldPopUpMenu(isMenuOpen) {
  var worldMenuName = _menu.default.world_id;

  if (isMenuOpen) {
    var pageIndex = 0;

    var _getElementPos = (0, _getElementPosition.default)(_cameraIdConst.default.CAMERA),
        xPos = _getElementPos.xPos,
        yPos = _getElementPos.yPos,
        zPos = _getElementPos.zPos; // layout of the menu


    var worldMenu = (0, _createWorldMenuLayout.default)(worldMenuName); // formatting the body for displaying item

    var rowContainer1 = (0, _createRowContainer.default)("rowId1");
    var rowContainer2 = (0, _createRowContainer.default)("rowId2");
    worldMenu.appendChild(rowContainer1);
    worldMenu.appendChild(rowContainer2); // init the display of the item

    displayMenuItem(rowContainer1, rowContainer2, items, pageIndex); // changing page of the item (all the display is here after click next or prev)

    bottomLayout(worldMenu, items, pageIndex); // set position for the menu

    worldMenu.setAttribute("position", "".concat(xPos, " ").concat(yPos + 3, " ").concat(zPos - 4.5));
    scene.appendChild(worldMenu);
  } else if (!isMenuOpen) {
    var removeMenu = document.getElementById(worldMenuName);
    removeMenu.parentNode.removeChild(removeMenu);
  }
}; // adding Item to the menu


var displayMenuItem = function displayMenuItem(rowContainer1, rowContainer2, items, pageIndex) {
  var _loop = function _loop(index) {
    if (items[index] === undefined) {
      return "break";
    }

    var newItem = (0, _createNewItem.default)(items[index], "".concat(index, "-world-item"), function () {
      console.log("I am a shape of " + items[index]);
    });
    index < 4 + pageIndex ? rowContainer1.appendChild(newItem) : rowContainer2.appendChild(newItem);
  };

  for (var index = 0 + pageIndex; index < 8 + pageIndex; index++) {
    var _ret = _loop(index);

    if (_ret === "break") break;
  }
};

var removeDisplayItem = function removeDisplayItem(pageIndex, items) {
  for (var index = 0 + pageIndex; index < 8 + pageIndex; index++) {
    if (items[index] === undefined) {
      break;
    } // Todo only change the value of it not delete it from the DOM


    var worldItem = document.getElementById("".concat(index, "-world-item"));
    worldItem.parentNode.removeChild(worldItem);
  }
};

var getRowContainerElement = function getRowContainerElement() {
  var rowContainer1 = document.getElementById("rowId1");
  var rowContainer2 = document.getElementById("rowId2");
  return {
    rowContainer1: rowContainer1,
    rowContainer2: rowContainer2
  };
};

var bottomLayout = function bottomLayout(worldMenu, items, pageIndex) {
  var bottomContainer = (0, _createRowContainer.default)();
  var leftContainer = (0, _createRowContainer.default)();
  var rightContainer = (0, _createRowContainer.default)();
  var nextBtn = (0, _createButton.default)("Next", "next-btn", function () {
    if (pageIndex + 8 < items.length) {
      removeDisplayItem(pageIndex, items);
      pageIndex += 8;

      var _getRowContainerEleme = getRowContainerElement(),
          rowContainer1 = _getRowContainerEleme.rowContainer1,
          rowContainer2 = _getRowContainerEleme.rowContainer2;

      displayMenuItem(rowContainer1, rowContainer2, items, pageIndex);
    }
  });
  var prevBtn = (0, _createButton.default)("prev", "prev-btn", function () {
    if (pageIndex !== 0) {
      removeDisplayItem(pageIndex, items);
      pageIndex -= 8;

      var _getRowContainerEleme2 = getRowContainerElement(),
          rowContainer1 = _getRowContainerEleme2.rowContainer1,
          rowContainer2 = _getRowContainerEleme2.rowContainer2;

      displayMenuItem(rowContainer1, rowContainer2, items, pageIndex);
    }
  });
  leftContainer.appendChild(prevBtn);
  leftContainer.appendChild(nextBtn);
  var editBtn = (0, _createButton.default)("edit", "edit-btn", function () {
    console.log("I am a edit button");
  });
  var createdBtn = (0, _createButton.default)("create", "create-btn", function () {
    console.log("I am a create button");
  });
  rightContainer.appendChild(editBtn);
  rightContainer.appendChild(createdBtn);
  bottomContainer.appendChild(leftContainer);
  bottomContainer.appendChild(rightContainer);
  worldMenu.appendChild(bottomContainer);
};
},{"../../constant/cameraIdConst.js":"constant/cameraIdConst.js","../../constant/menu.js":"constant/menu.js","../../tools/getElementPosition.js":"tools/getElementPosition.js","./subComponent/createWorldMenuLayout.js":"component/worldMenu/subComponent/createWorldMenuLayout.js","./subComponent/createNewItem.js":"component/worldMenu/subComponent/createNewItem.js","./subComponent/createRowContainer.js":"component/worldMenu/subComponent/createRowContainer.js","./subComponent/createButton.js":"component/worldMenu/subComponent/createButton.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51602" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","component/worldMenu/index.js"], null)
//# sourceMappingURL=/worldMenu.61445aff.js.map