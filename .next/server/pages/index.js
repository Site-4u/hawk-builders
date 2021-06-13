(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7015:
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
;// CONCATENATED MODULE: external "jquery"
var external_jquery_namespaceObject = require("jquery");;
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_namespaceObject);
// EXTERNAL MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_ = __webpack_require__(104);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
// EXTERNAL MODULE: ./styles/anim.js
var anim = __webpack_require__(3400);
;// CONCATENATED MODULE: ./components/navbar.jsx






 // Input - "name"

function Navbar(props) {
  (0,external_react_.useEffect)(function () {
    window.onscroll = () => {
      const nav = document.querySelector('#navbar-container');
      if (external_jquery_default()(window).scrollTop() <= 50) nav.className = '';else nav.className = 'scroll';
    };

    external_jquery_default()(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      external_jquery_default()('html, body').animate({
        scrollTop: external_jquery_default()(external_jquery_default().attr(this, 'href')).offset().top - 100
      }, 200);
    });
  });

  function navMenuToggle() {
    external_jquery_default()("#1").toggleClass("toggle-div-btn-1");
    external_jquery_default()("#2").toggleClass("toggle-div-btn-2");
    external_jquery_default()("#3").toggleClass("toggle-div-btn-3");
    external_jquery_default()("#nav-link-container").toggleClass("nav-link-move");
  }

  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    id: "navbar-container",
    class: "",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      id: "navbar",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_awesome_reveal_.Fade, {
        triggerOnce: true,
        keyframes: anim/* down */.zN,
        delay: "5",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "push nav-brand",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: props.name
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "push nav-brand nav-brand-mobile",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "",
            children: props.name.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "nav-link-container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim/* down */.zN,
          delay: "20",
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link",
              href: "#about-us-page-container",
              children: "About Us"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim/* down */.zN,
          delay: "50",
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link",
              href: "#Projects",
              children: "Projects"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim/* down */.zN,
          delay: "80",
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link",
              href: "#contact-container",
              children: "Contact"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          id: "bg-nav-link-container"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        id: "toggle-container-btn",
        onClick: navMenuToggle,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          id: "toggle-container",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "1"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "2"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            id: "3"
          })]
        })
      })]
    })
  });
}

/* harmony default export */ var navbar = (Navbar);
;// CONCATENATED MODULE: ./components/LandingPageVideo.jsx





 //Input - "url, name, desc"

function lPage(props) {
  const videoURL = "https://www.youtube.com/embed/" + props.url + "?autoplay=1&mute=1&loop=1&controls=0&playlist=" + props.url;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "landing-page-container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "video-container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("iframe", {
        src: videoURL,
        autoplay: true,
        frameborder: "0",
        allowFullScreen: true,
        children: " "
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "video-overlay-container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim.up,
          delay: "90",
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            id: "heading",
            children: props.name
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim.up,
          delay: "120",
          children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
            class: "desc",
            children: props.desc
          })
        })]
      })]
    })
  });
}

/* harmony default export */ var LandingPageVideo = (lPage);
;// CONCATENATED MODULE: ./components/infoPic.jsx





 // Input - "name, desc, image"

function aboutUs(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "about-us-page-container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "info",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim/* right */.F2,
          delay: "20",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: props.name
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim/* right */.F2,
          delay: "0",
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: props.desc
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "image",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim/* left */.t$,
          delay: "20",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: props.image
          })
        })
      })]
    })
  });
}

/* harmony default export */ var infoPic = (aboutUs);
;// CONCATENATED MODULE: ./components/picInfo.jsx





 // Input - "name, desc, image"

function picInfo_aboutUs(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "r-about-us-page-container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "image",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim/* right */.F2,
          delay: "20",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: props.image
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "info",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim/* left */.t$,
          delay: "20",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: props.name
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim/* left */.t$,
          delay: "0",
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: props.desc
          })
        })]
      })]
    })
  });
}

/* harmony default export */ var picInfo = (picInfo_aboutUs);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(3750);
;// CONCATENATED MODULE: ./components/facts.jsx







 // Input - "message1, message2, message3"

function facts(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "facts-section-container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "info",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim.up,
          delay: "0",
          children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaUserFriends */.wN, {
            size: "6rem",
            color: "white"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: props.message1
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "info",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim.up,
          delay: "20",
          children: [/*#__PURE__*/jsx_runtime_.jsx(bs_index_esm/* BsHouseFill */.nZm, {
            size: "6rem",
            color: "white"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: props.message2
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "info",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim.up,
          delay: "40",
          children: [/*#__PURE__*/jsx_runtime_.jsx(bs_index_esm/* BsSearch */.dVI, {
            size: "6rem",
            color: "white"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: props.message3
          })]
        })
      })]
    })
  });
}

/* harmony default export */ var components_facts = (facts);
;// CONCATENATED MODULE: ./components/card.jsx







function card(props) {
  var desc = props.desc;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "card-container",
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
      triggerOnce: true,
      keyframes: anim.up,
      delay: props.id * 100,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "img",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: props.img
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          class: "info",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            class: "name",
            children: props.name
          }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
            class: "desc",
            children: desc
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            class: "price",
            children: props.price
          })]
        })]
      })
    })
  });
}

/* harmony default export */ var components_card = (card);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var io5_index_esm = __webpack_require__(155);
;// CONCATENATED MODULE: external "emailjs-com"
var external_emailjs_com_namespaceObject = require("emailjs-com");;
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_namespaceObject);
;// CONCATENATED MODULE: ./components/fullContact.jsx









function contact() {
  function sendEmail(e) {
    e.preventDefault();
    external_emailjs_com_default().sendForm('service_sk0tiwp', 'template_2nika1e', e.target, 'user_m4yKPukA2PawmJR2074c6').then(result => {
      console.log(result.text);
    }, error => {
      console.log(error.text);
    });
    e.target.reset();
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "contact-container",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      class: "title",
      children: "Contact Us"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        class: "information",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim/* right */.F2,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "number",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "image",
              children: /*#__PURE__*/jsx_runtime_.jsx(io5_index_esm/* IoCall */.DsV, {
                size: "6rem",
                color: "white"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "info",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                children: "Phone Number"
              }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: "647-835-4402"
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim/* right */.F2,
          delay: "30",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            class: "email",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "image",
              children: /*#__PURE__*/jsx_runtime_.jsx(io5_index_esm/* IoMail */.GYo, {
                size: "6rem",
                color: "white"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              class: "info",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                children: "Email"
              }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: "contact@hawkbuilders.ca"
              })]
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "divider"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        class: "contact",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          onSubmit: sendEmail,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
            triggerOnce: true,
            keyframes: anim/* left */.t$,
            delay: "0",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                name: "name",
                placeholder: "Your Name",
                required: true
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
            triggerOnce: true,
            keyframes: anim/* left */.t$,
            delay: "10",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                name: "number",
                placeholder: "Your Phone Number",
                required: true
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
            triggerOnce: true,
            keyframes: anim/* left */.t$,
            delay: "20",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                name: "email",
                placeholder: "Your Email Adress",
                required: true
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
            triggerOnce: true,
            keyframes: anim/* left */.t$,
            delay: "30",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                name: "message",
                placeholder: "Type your message here"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
            triggerOnce: true,
            keyframes: anim/* left */.t$,
            delay: "40",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              class: "btn-container",
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                class: "btn",
                type: "submit",
                value: "SUBMIT"
              })
            })
          })]
        })
      })]
    })]
  });
}

/* harmony default export */ var fullContact = (contact);
// EXTERNAL MODULE: ./components/footer.jsx
var footer = __webpack_require__(6600);
// EXTERNAL MODULE: ../../../../../../../usr/local/lib/node_modules/next/head.js
var head = __webpack_require__(5726);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
;// CONCATENATED MODULE: ./pages/index.js
















class Index extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "Home - Hawk Builders"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "icon",
          href: "https://i.ibb.co/PN3RFY5/favicon.png"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          charset: "UTF-8"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: "Hawk Builders has been in the industry striving to serve your dreams since 2005. Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality."
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "keywords",
          content: "Hawk, Builders, Hawk Builders, H, B, HB, House, Construction, Basement, Washroom, Kitchen, Renovation, Upgrade, Living, Home, Construction"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "author",
          content: "Site 4 u"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(navbar, {
        name: "Hawk Builders"
      }), /*#__PURE__*/jsx_runtime_.jsx(LandingPageVideo, {
        url: "vyIh46Xawyo",
        name: "Hawk Builders",
        desc: "Strive To Serve Your Dream"
      }), /*#__PURE__*/jsx_runtime_.jsx(infoPic, {
        name: "What is Hawk Builders",
        desc: "We have been in the industry striving to serve your dreams since 2005. Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality.",
        image: "https://i.ibb.co/nzdqgWr/download.png"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_facts, {
        message1: "Your experience with us will be seamless",
        message2: "We will make your Dream a Reality",
        message3: "We serve you in numerous ways"
      }), /*#__PURE__*/jsx_runtime_.jsx(picInfo, {
        name: "How We Serve You",
        desc: " Contacting us, you can let us take care of all your stress, you can lean on us for all support. Our experienced team handle it all, starting from: Creating Rough sketch of your vision; Getting land surveys conducted; Developing geological drawings; Getting soil sampling; Developing Engineering drawings; 3D sketch of the House; HVAC drawings; Truss Drawing; Obtaining all required permits from the concerned governmental agencies; And finally Construction to bring your vision to life. ",
        image: "https://i.ibb.co/qJQNTSH/pexels-burst-544965-1-1.jpg"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_facts, {
        message1: "Your experience with us will be seamless",
        message2: "We will make your Dream a Reality",
        message3: "We serve you in numerous ways"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "Projects",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
          triggerOnce: true,
          keyframes: anim.up,
          delay: "0",
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: " Projects "
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "cards",
            children: [/*#__PURE__*/jsx_runtime_.jsx(components_card, {
              id: "1",
              name: "Build",
              desc: "We build houses to your taste. Just contact us to get a quote on the price.",
              img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_card, {
              id: "2",
              name: "Model",
              desc: "We model the ultimate dream house that you would want us to build for you.",
              img: "https://i.ibb.co/d5FyZXR/Screen-Shot-2021-06-11-at-8-03-08-AM.png"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_card, {
              id: "3",
              name: "Kitchen",
              desc: "Have a kitchen to Great Gordan's Standards.",
              img: "https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?cs=srgb&dl=pexels-tamil-king-3214064.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_card, {
              id: "4",
              name: "Living Room",
              desc: "Grab popcorn on a Friday nigh and enjoy a warm cozy room.",
              img: "https://images.pexels.com/photos/5353880/pexels-photo-5353880.jpeg?cs=srgb&dl=pexels-curtis-adams-5353880.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_card, {
              id: "5",
              name: "Washroom",
              desc: "No matter your budget, experience the washroom of a king.",
              img: "https://images.pexels.com/photos/5071176/pexels-photo-5071176.jpeg?cs=srgb&dl=pexels-curtis-adams-5071176.jpg&fm=jpg"
            }), /*#__PURE__*/jsx_runtime_.jsx(components_card, {
              id: "6",
              name: "Lounge",
              desc: "Call your friends over and enjoy the day by showing off your new lounge created by the 'Hawk Builders'.",
              img: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?cs=srgb&dl=pexels-terry-magallanes-2635038.jpg&fm=jpg"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/projects",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            class: "viewMoreProjects",
            children: " View More "
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(fullContact, {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
        triggerOnce: true,
        keyframes: anim.up,
        delay: "0",
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
var __webpack_exports__ = __webpack_require__.X(0, [610,760,316], function() { return __webpack_exec__(7015); });
module.exports = __webpack_exports__;

})();