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
})({"js/scrollTrigger.js":[function(require,module,exports) {
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".title", {
//     scrollTrigger:{
//         trigger:".title",
//         toggleActions:"restart none none none",
//         start:"top 30%",
//         end:"top ",

//         // scrub: true,
//         markers: true
//     },
//     y: 50,
//     duration: 3,
//     // ease: "none"

// });

// gsap.fromTo(".title" ,{
//     y: -500,
//     opacity: 0
// },
// {
//     y:50,
//     opacity: 1,
//     duration: 2

// }
// );

// tweenMax.from(".title " ,{
//     y:500 ,
//     // duartion: 5,
//     // delay: 2

// });
gsap.fromTo(".title", {
  x: -50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".title",
    toggleActions: "restart none none none",
    start: "center 50%",
    end: "center 10% "
    // markers:true
  },

  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".social-media", {
  x: 50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".social-media",
    toggleActions: "restart none none none",
    start: "center 50%",
    end: "center 10% "
    // markers:true
  },

  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".box", {
  x: 50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".box",
    toggleActions: "restart none none none",
    start: "top center",
    end: "top 80% ",
    // markers:true,
    scrub: 1
  },
  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".logo-ipsum", {
  x: -50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".logo-ipsum",
    toggleActions: "restart none none none",
    start: "top 60%",
    end: "top 80% ",
    // markers:true,
    scrub: 1
  },
  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".content", {
  x: -50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".content",
    toggleActions: "restart none none none",
    start: "top 60%",
    end: "top 40% ",
    // markers:true,
    scrub: 1
  },
  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".img-cont", {
  x: 50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".img-cont",
    toggleActions: "restart none none none",
    start: "top 60%",
    end: "top 40% ",
    // markers:true,
    scrub: 1
  },
  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".inner-text", {
  x: -50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".inner-text",
    toggleActions: "restart none none none",
    start: "top 60%",
    end: "top 40% ",
    // markers:true,
    scrub: 1
  },
  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".business-text", {
  x: -50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".business-text",
    toggleActions: "restart none none none",
    start: "top 60%",
    end: "top 40% ",
    // markers:true,
    scrub: 1
  },
  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".video", {
  x: 50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".video",
    toggleActions: "restart none none none",
    start: "top 60%",
    end: "top 40% ",
    // markers:true,
    scrub: 1
  },
  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".skils-bg", {
  y: 100,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".skils-bg",
    toggleActions: "restart none none none",
    start: "top 80%",
    end: "top 40% ",
    // markers:true,
    scrub: 1
  },
  y: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".skil-bar1", {
  width: 0,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".skil-bar1",
    // toggleActions:"restart none none none",
    start: "top 60%",
    end: "top 40% "
    // markers:true,
    // scrub: 1
  },

  width: "95%",
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".skil-bar2", {
  width: 0,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".skil-bar2",
    // toggleActions:"restart none none none",
    start: "top 60%",
    end: "top 40% "
    // markers:true,
    // scrub: 1
  },

  width: "95%",
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".skil-bar3", {
  width: 0,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".skil-bar3",
    // toggleActions:"restart none none none",
    start: "top 60%",
    end: "top 40% "
    // markers:true,
    // scrub: 1
  },

  width: "95%",
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".skil-bar4", {
  width: 0,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".skil-bar4",
    // toggleActions:"restart none none none",
    start: "top 60%",
    end: "top 40% "
    // markers:true,
    // scrub: 1
  },

  width: "95%",
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".violet-mode", {
  x: -50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".card-content",
    toggleActions: "restart none none none",
    start: "top 60%",
    end: "top 10% ",
    // markers:true,
    scrub: 1
  },
  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".card-content", {
  x: 50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".card-content",
    toggleActions: "restart none none none",
    start: "top 80%",
    end: "top 40% ",
    // markers:true,
    scrub: 1
  },
  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".imag-inr", {
  x: -50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".imag-inr",
    toggleActions: "restart none none none",
    start: "top 80%",
    end: "top 10% ",
    // markers:true,
    scrub: 1
  },
  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".text-right", {
  x: 50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".text-right",
    toggleActions: "restart none none none",
    start: "top 80%",
    end: "top 10% ",
    // markers:true,
    scrub: 1
  },
  x: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".openday", {
  y: 50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".openday",
    toggleActions: "restart none none none",
    start: "top 80%",
    end: "top 40% ",
    // markers:true,
    scrub: 1
  },
  y: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
gsap.fromTo(".all-cont", {
  y: 50,
  opacity: 0
}, {
  scrollTrigger: {
    trigger: ".all-cont",
    toggleActions: "restart none none none",
    start: "top 80%",
    end: "top 40% ",
    // markers:true,
    scrub: 1
  },
  y: 0,
  duration: 1,
  ease: "in",
  opacity: 1
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63189" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/scrollTrigger.js"], null)
//# sourceMappingURL=/scrollTrigger.0ab9834d.js.map