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
  OUTSIDE_CIRCLE: "#cam-rig",
  MIDDLE_CIRCLE: "#camera",
  CURSOR: "#cursor"
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
  id: "popup-menu"
};
var _default = MENU_VAL;
exports.default = _default;
},{}],"Tool/getElementPosition.js":[function(require,module,exports) {
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
},{}],"component/menu.js":[function(require,module,exports) {
"use strict";

var _cameraIdConst = _interopRequireDefault(require("../constant/cameraIdConst.js"));

var _menu = _interopRequireDefault(require("../constant/menu.js"));

var _getElementPosition = _interopRequireDefault(require("../Tool/getElementPosition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isMenuOpen = false;
var itemList = [{
  img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
  shape: "a-box"
}, {
  img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
  shape: "a-sphere"
}, {
  img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
  shape: "a-cylinder"
}, {
  img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
  shape: "a-circle"
}, {
  img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
  shape: "a-triangle"
}, {
  img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
  shape: "a-dodecahedron"
}, {
  img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
  shape: "a-box"
}, {
  img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
  shape: "a-box"
}, {
  img: "https://yt3.ggpht.com/ytc/AKedOLRQAFnHpU09DMFpzeSt2Ke6sOm8lcAYRFAWFSqekA=s68-c-k-c0x00ffffff-no-rj",
  shape: "a-box"
}];
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Esc") {
    // Todo create a box front of the user
    isMenuOpen = !isMenuOpen;
    popUpMenu(isMenuOpen);
  }
});
var API_PATH_NAME = "https://reqres.in";

function postData() {
  return _postData.apply(this, arguments);
}

function _postData() {
  _postData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var url,
        data,
        response,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
            data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.next = 4;
            return fetch("".concat(API_PATH_NAME).concat(url), {
              method: "POST",
              // *GET, POST, PUT, DELETE, etc.
              mode: "cors",
              // no-cors, *cors, same-origin
              cache: "no-cache",
              // *default, no-cache, reload, force-cache, only-if-cached
              credentials: "same-origin",
              // include, *same-origin, omit
              headers: {
                "Content-Type": "application/json" // 'Content-Type': 'application/x-www-form-urlencoded',

              },
              redirect: "follow",
              // manual, *follow, error
              referrerPolicy: "no-referrer",
              // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data) // body data type must match "Content-Type" header

            });

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response.json());

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _postData.apply(this, arguments);
}

var popUpMenu = function popUpMenu(isMenuOpen) {
  var menuName = _menu.default.id;

  if (isMenuOpen) {
    var _getElementPos = (0, _getElementPosition.default)(_cameraIdConst.default.MIDDLE_CIRCLE),
        xPos = _getElementPos.xPos,
        yPos = _getElementPos.yPos,
        zPos = _getElementPos.zPos;

    var menu = createMenu(menuName);
    menu.setAttribute("position", "".concat(xPos, " ").concat(yPos, " ").concat(zPos - 4));
    scene.appendChild(menu); // addClickAbleToMenuItems();
  } else if (!isMenuOpen) {
    //MENU_VAL.id
    var removeMenu = document.getElementById(menuName);
    removeMenu.parentNode.removeChild(removeMenu);
  }
};

var createMenu = function createMenu(name) {
  var _getElementPos2 = (0, _getElementPosition.default)(_cameraIdConst.default.MIDDLE_CIRCLE),
      xPos = _getElementPos2.xPos,
      yPos = _getElementPos2.yPos,
      zPos = _getElementPos2.zPos;

  var menu = document.createElement("a-plane");
  menu.setAttribute("id", name);
  menu.setAttribute("color", "yellow"); // menu.setAttribute("material", "opacity: 0.0; transparent: true");

  menu.setAttribute("height", "5");
  menu.setAttribute("width", "5");
  var spacing_row = -2;
  var spacing_col = 2;

  var _loop = function _loop(index) {
    if (index % 3 === 0 && index !== 0) {
      spacing_row = -2;
      spacing_col -= 1.5;
    }

    var select_item = document.createElement("a-plane");
    select_item.setAttribute("id", "a-plane-".concat(index.toString()));
    select_item.setAttribute("src", itemList[index].img);
    select_item.setAttribute("height", "1");
    select_item.setAttribute("width", "1");
    select_item.setAttribute("position", "".concat(spacing_row, " ").concat(spacing_col, " 0.14"));
    select_item.addEventListener("click", function () {
      var createObject = createItemObject("create-object-".concat(index.toString()), "https://cdn.aframe.io/examples/ar/models/reticle/reticle.gltf"); // const createObject = createBox(
      // 	`create-object-${index.toString()}`,
      // 	itemList[index].shape
      // );

      createObject.addEventListener("click", function () {
        console.log("I am from menu"); // const data = {
        // 	name: "morpheus",
        // 	job: "leader",
        // };
        // const response = await postData("/api/users", data);
        // todo be able to drag
        // console.log("Click: %c", "background: red;padding: 100000px;");
        // console.log(createObject.sceneEl.camera.el.object3D.position);
      });
      createObject.setAttribute("position", "".concat(xPos, " 2 ").concat(zPos - 2));
      scene.appendChild(createObject);
    });
    spacing_row += 2;
    menu.appendChild(select_item);
  };

  for (var index = 0; index < itemList.length; index++) {
    _loop(index);
  }

  return menu;
};

var createItemObject = function createItemObject(id, modelLink) {
  var createObject = document.createElement("a-entity");
  createObject.setAttribute("id", id);
  createObject.setAttribute("gltf-model", modelLink);
  createObject.setAttribute("dragndrop", "");
  createObject.setAttribute("response-type", "arraybuffer");
  createObject.setAttribute("crossorigin", "anonymous");
  return createObject;
}; // option


var createBox = function createBox(id, shape) {
  var createObject = document.createElement(shape);
  createObject.setAttribute("id", id);
  createObject.setAttribute("dragndrop", "");
  createObject.setAttribute("height", "1");
  createObject.setAttribute("width", "1");
  createObject.setAttribute("hoverable", "");
  createObject.setAttribute("grabbable", "");
  createObject.setAttribute("stretchable", "");
  createObject.setAttribute("draggable", "");
  createObject.setAttribute("dropppable", "");
  createObject.setAttribute("color", "tomato");
  return createObject;
};

var stickPopup = function stickPopup(isMenuOpen) {
  var menuName = _menu.default.id;

  if (isMenuOpen) {
    var addToCursor = document.getElementById(_cameraIdConst.default.CURSOR);
    var menu = createMenu(menuName);
    menu.setAttribute("position", "0 0 -6");
    addToCursor.appendChild(menu);
  } else if (!isMenuOpen) {
    var removeMenu = document.getElementById(menuName);
    removeMenu.parentNode.removeChild(removeMenu);
  }
};
},{"../constant/cameraIdConst.js":"constant/cameraIdConst.js","../constant/menu.js":"constant/menu.js","../Tool/getElementPosition.js":"Tool/getElementPosition.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49596" + '/');

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
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","component/menu.js"], null)
//# sourceMappingURL=/menu.094279f7.js.map