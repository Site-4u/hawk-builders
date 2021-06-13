(function() {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 5189:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Index; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ../../../../../../../usr/local/lib/node_modules/next/link.js
var next_link = __webpack_require__(5903);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(7516);
;// CONCATENATED MODULE: ./components/back.jsx






function back() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "back",
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* BiArrowBack */.YiX, {
          size: "2.5rem",
          className: "arrow"
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: " Back "
        })]
      })
    })
  });
}

/* harmony default export */ var components_back = (back);
// EXTERNAL MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_ = __webpack_require__(104);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
// EXTERNAL MODULE: ./styles/anim.js
var anim = __webpack_require__(3400);
;// CONCATENATED MODULE: ./components/houseImage.jsx






function houseImage(props) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
    triggerOnce: true,
    keyframes: anim.up,
    delay: props.id * 100,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "houseImage",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: props.link
      })
    })
  });
}

/* harmony default export */ var components_houseImage = (houseImage);
// EXTERNAL MODULE: ./components/footer.jsx
var footer = __webpack_require__(6600);
// EXTERNAL MODULE: ../../../../../../../usr/local/lib/node_modules/next/head.js
var head = __webpack_require__(5726);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
;// CONCATENATED MODULE: ./pages/projects.js











class Index extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "Projects - Hawk Builders"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "shortcut icon",
          href: "https://i.ibb.co/PN3RFY5/favicon.png"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          charset: "UTF-8"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: "Take A look at our projects - Hawk Builders has been in the industry striving to serve your dreams since 2005. Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality."
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "author",
          content: "Site 4 u"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_back, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "container-project",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
            triggerOnce: true,
            keyframes: anim/* right */.F2,
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "Houses"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "imgContainerProjects",
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "1",
              link: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "2",
              link: "https://i.ibb.co/d5FyZXR/Screen-Shot-2021-06-11-at-8-03-08-AM.png"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
            triggerOnce: true,
            keyframes: anim/* right */.F2,
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "Interior"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "imgContainerProjects",
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "1",
              link: "https://images.pexels.com/photos/5353880/pexels-photo-5353880.jpeg?cs=srgb&dl=pexels-curtis-adams-5353880.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "2",
              link: "https://images.pexels.com/photos/3315286/pexels-photo-3315286.jpeg?cs=srgb&dl=pexels-victoria-borodinova-3315286.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "3",
              link: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?cs=srgb&dl=pexels-christa-grover-2121121.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "4",
              link: "https://images.pexels.com/photos/6587823/pexels-photo-6587823.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6587823.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "5",
              link: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?cs=srgb&dl=pexels-christa-grover-2121121.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "6",
              link: "https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6585750.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "7",
              link: "https://i.ibb.co/KWKQwK9/1.jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "8",
              link: "https://i.ibb.co/Df2Cwz4/2.jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "9",
              link: "https://i.ibb.co/sydfQxY/3.jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "10",
              link: "https://i.ibb.co/sjzbPYS/4.jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "11",
              link: "https://i.ibb.co/vZ2JWxt/5.jpg"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
            triggerOnce: true,
            keyframes: anim/* right */.F2,
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "Bedroom"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "imgContainerProjects",
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "1",
              link: "https://images.pexels.com/photos/6585612/pexels-photo-6585612.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6585612.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "2",
              link: "https://images.pexels.com/photos/6489100/pexels-photo-6489100.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6489100.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "3",
              link: "https://images.pexels.com/photos/6587902/pexels-photo-6587902.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6587902.jpg&fm=jpg"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
            triggerOnce: true,
            keyframes: anim/* right */.F2,
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "Kitchens"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "imgContainerProjects",
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "1",
              link: "https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?cs=srgb&dl=pexels-tamil-king-3214064.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "2",
              link: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?cs=srgb&dl=pexels-terry-magallanes-2635038.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "3",
              link: "https://images.pexels.com/photos/6585767/pexels-photo-6585767.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6585767.jpg&fm=jpg"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
            triggerOnce: true,
            keyframes: anim/* right */.F2,
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "Basements"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "imgContainerProjects",
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "1",
              link: "https://i.ibb.co/L0pZ227/bs.jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "2",
              link: "https://i.ibb.co/2dsPZzw/bs1.jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "3",
              link: "https://i.ibb.co/ZYk83ND/bs2.jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "4",
              link: "https://i.ibb.co/kQqcCyd/bs3.jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "5",
              link: "https://i.ibb.co/FV1bcLg/bs4.jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "6",
              link: "https://i.ibb.co/Hxx5gLv/bs5.jpg"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "container",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
            triggerOnce: true,
            keyframes: anim/* right */.F2,
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "Washrooms"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "imgContainerProjects",
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "1",
              link: "https://images.pexels.com/photos/6587852/pexels-photo-6587852.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6587852.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "2",
              link: "https://images.pexels.com/photos/5071176/pexels-photo-5071176.jpeg?cs=srgb&dl=pexels-curtis-adams-5071176.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "3",
              link: "https://i.ibb.co/rwd8wQc/1.jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_houseImage, {
              id: "4",
              link: "https://i.ibb.co/rZ8Kn5Y/2.jpg"
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
        triggerOnce: true,
        keyframes: anim.up,
        children: /*#__PURE__*/jsx_runtime_.jsx(footer/* default */.Z, {})
      })]
    });
  }

}
;

/***/ }),

/***/ 7381:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 104:
/***/ (function(module) {

"use strict";
module.exports = require("react-awesome-reveal");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [610,516,316], function() { return __webpack_exec__(5189); });
module.exports = __webpack_exports__;

})();