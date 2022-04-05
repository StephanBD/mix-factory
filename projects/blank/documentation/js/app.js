/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./projects/blank/src/javascript/colorsArray.js":
/*!******************************************************!*\
  !*** ./projects/blank/src/javascript/colorsArray.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*************************bgColors*************************/
var colors = ["pink-light", "pink", "pink-dark", "red-light", "red", "red-dark", "orange-light", "orange", "orange-dark", "yellow-light", "yellow", "yellow-dark", "brown-light", "brown", "brown-dark", "green-light", "green", "green-dark", "cyan-light", "cyan", "cyan-dark", "blue-light", "blue", "blue-dark", "purple-light", "purple", "purple-dark", "success-light", "success", "success-dark", "info-light", "info", "info-dark", "warning-light", "warning", "warning-dark", "danger-light", "danger", "danger-dark", "accent-color-light", "accent-color", "accent-color-dark", "gray-light", "gray", "gray-dark", "primary-light", "primary", "primary-dark", "secondary-light", "secondary", "secondary-dark", "tertiary-light", "tertiary", "tertiary-dark", "quaternary-light", "quaternary", "quaternary-dark", "light", "dark", "link", "white", "black"];
var allClasses = [];
colors.forEach(function (color) {
  allClasses.push("bg-" + color);
  allClasses.push("t-" + color);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allClasses);

/***/ }),

/***/ "./projects/blank/src/javascript/framework.js":
/*!****************************************************!*\
  !*** ./projects/blank/src/javascript/framework.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiDom": () => (/* binding */ MiDom),
/* harmony export */   "InputClass": () => (/* binding */ InputClass)
/* harmony export */ });
var _MiDom$prototype;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// default: 0.113037109375ms
// default: 0.807861328125ms // create one
function queryS() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";

  try {
    return document.querySelector(element);
  } catch (error) {
    this.error("createE", element);
  }
}
/*--------------------------------------------------------------------------/
/--------------------------------------------------------------------------*/


var MiDom = function MiDom() {
  var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
  var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  // this.node = create ? this.createE(node) : this.queryS(node);
  this.node = node ? this.createE(node, create) : ""; // this.value = "bg-red";
  // this.property = "className";
};
MiDom.prototype = (_MiDom$prototype = {
  //-----------------------------------------------------//
  // set setNode(target) {
  // 	console.log(this.node1, "=" + target);
  // 	return target
  // },
  // get node() {
  // 	return this._node
  // },
  //-----------------------------------------------------//
  createE: function createE() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
    var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    try {
      return create ? document.createElement(element) : this.node = document.querySelector(element);
    } catch (error) {
      this.error("createE", element);
    }
  },
  queryS: queryS,
  // queryS: (element = "div") => {
  // 	try { return document.querySelector(element) }
  // 	catch (error) { this.error("createE", element) }
  // },
  //-----------------------------------------------------//
  appendC: function appendC() {
    var where = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";

    try {
      if (_typeof(where) === 'object') {
        where.node ? where.node.appendChild(this.node) : where.appendChild(this.node);
      } else {
        this.queryS(where).appendChild(this.node);
      }

      return this;
    } catch (error) {
      this.error("appendC", where);
    }
  },
  innerH: function innerH() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    try {
      if (this.node.value === undefined) {
        if (typeof text === "string") {
          this.node.innerText = text;
        } else {
          this.node.innerHTML = text;
        }
      } else {
        // input, textarea, option
        this.node.value = text;
      }

      return this;
    } catch (error) {
      this.error("appendC", text);
    }
  },
  addE: function addE(func) {
    var _this = this;

    var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "click";
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    this.node.addEventListener(event, function (e) {
      return func(e, _this);
    }, scope); // this.node.addEventListener(event, func, scope);

    return this;
  },
  //-----------------------------------------------------//
  styleT: function styleT(styles) {
    this.node.style.cssText = styles;
    return this;
  },
  addId: function addId(id) {
    this.node.id = id;
    return this;
  },
  // sobre escribe
  classL: function classL(clase) {
    this.node.classList = clase;
    return this;
  },
  // agrega
  addC: function addC() {
    for (var i = 0; i < arguments.length; i++) {
      this.node.classList.add(arguments[i]);
    }

    return this;
  },
  removeC: function removeC(clase) {
    this.node.classList.remove(clase);
    return this;
  },
  classTg: function classTg(clase) {
    this.node.classList.toggle(clase);
    return this;
  },
  replace: function replace(clase, whit) {
    this.node.classList.replace(clase, whit);
    return this;
  },
  setSty: function setSty(property, value) {
    this.node.style[property] = value;
    return this;
  },
  setAtt: function setAtt(att, value) {
    this.node.setAttribute(att, value);
    return this;
  },
  dataset: function dataset(dataName, value) {
    this.node.dataset[dataName] = value;
    return this;
  },
  removeA: function removeA(att) {
    this.node.removeAttribute(att);
    return this;
  },
  value: function value() {
    return this.node.value;
  },
  content: function content() {
    return this.node.textContent;
  },
  error: function error(message, item) {
    console.error(message);

    if (item) {
      console.log(item);
    }

    return this;
  },
  // finally: function (message) {
  //   if (this.node === null) error(message)
  //   return this
  // },
  insertFn: function insertFn(fn) {
    fn(this);
    return this;
  },
  destroy: function destroy() {
    delete this.node;
  },
  removeChild: function removeChild(child) {
    this.node.removeChild(child);
    return this;
  }
}, _defineProperty(_MiDom$prototype, "removeChild", function removeChild(nuevo, old) {
  this.node.replaceChild(nuevo, old);
  return this;
}), _defineProperty(_MiDom$prototype, "repeat", function repeat(self, num) {
  for (var i = 1; i <= num; i++) {
    log(i);
    this.createE(self[0]);
    this.innerH(self[1]);
    this.appendC();
  }
}), _defineProperty(_MiDom$prototype, "pre", function pre(text) {
  var where = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "body";
  var pre = this.createE("pre");
  pre.innerHTML = JSON.stringify(text);
  this.queryS(where).appendChild(pre);
  return this;
}), _MiDom$prototype); // const algo = new MiDom("input")
// 	.innerH("xxxxx")
// 	.setSty("color", "blue")
// 	.appendC()
// 	.addE((e, self) => { console.log(e, self) })
// // console.log(algo)
// new MiDom("p").appendC().innerH("document.title -- " + document.title)
// // var num = 3
// for (let i = 1; i <= num; i++) {
//   log(i)
// }

/*--------------------------------------------------------------------------/
document.getElementById(id)
document.getElementsByTagName(name)
document.createElement(name)
parentNode.appendChild(node)
element.innerHTML
element.style.left
element.setAttribute()
element.getAttribute()
element.addEventListener()
window.content
window.onload
window.scrollTo()

// align
// title
// lang
// translate
// dir
// hidden
// access
// Key
// draggable
// spellcheck
// autocapitalize
// contentEditable
// isContentEditable
// inputMode
// offsetParent
// offsetTop
// offsetLeft
// offsetWidth
// offsetHeight
// style
// innerText

/--------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------/

					Finding HTML Elements
Method	                        Description
document.getElementById(id)	Find an element by element id
document.getElementsByTagName(name)	Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name

					Changing HTML Elements
Property	                      Description
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element

Method	                    Description
element.setAttribute(attribute, value)	Change the attribute value of an HTML element

				Adding and Deleting Elements
Method	                        Description
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(new, old)	Replace an HTML element
document.write(text)	Write into the HTML output stream

					Adding Events Handlers
Method	                      Description
document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event

					Finding HTML Objects
The first HTML DOM Level 1 (1998), defined 11 HTML objects, object collections, and properties. These are still valid in HTML5.
Later, in HTML DOM Level 3, more objects, collections, and properties were added.
Property	                    Description	DOM
document.anchors	Returns all <a> elements that have a name attribute	1
document.applets	Returns all <applet> elements (Deprecated in HTML5)	1
document.baseURI	Returns the absolute base URI of the document	3
document.body	Returns the <body> element	1
document.cookie	Returns the document's cookie	1
document.doctype	Returns the document's doctype	3
document.documentElement	Returns the <html> element	3
document.documentMode	Returns the mode used by the browser	3
document.documentURI	Returns the URI of the document	3
document.domain	Returns the domain name of the document server	1
document.domConfig	Obsolete. Returns the DOM configuration	3
document.embeds	Returns all <embed> elements	3
document.forms	Returns all <form> elements	1
document.head	Returns the <head> element	3
document.images	Returns all <img> elements	1
document.implementation	Returns the DOM implementation	3
document.inputEncoding	Returns the document's encoding (character set)	3
document.lastModified	Returns the date and time the document was updated	3
document.links	Returns all <area> and <a> elements that have a href attribute	1
document.readyState	Returns the (loading) status of the document	3
document.referrer	Returns the URI of the referrer (the linking document)	1
document.scripts	Returns all <script> elements	3
document.strictErrorChecking	Returns if error checking is enforced	3
document.title	Returns the <title> element	1
document.URL	Returns the complete URL of the document	1

/--------------------------------------------------------------------------*/
// new MiDom("p").appendC().innerH("document.title -- " + document.title)
// new MiDom("p").appendC().innerH("document.URL -- " + document.URL)
// new MiDom("p").appendC().innerH("document.strictErrorChecking -- " + document.strictErrorChecking)
// new MiDom("p").appendC().innerH("document.scripts -- " + document.scripts)
// new MiDom("p").appendC().innerH("document.referrer -- " + document.referrer)
// new MiDom("p").appendC().innerH("document.readyState -- " + document.readyState)
// new MiDom("p").appendC().innerH("document.readyState -- " + document.readyState)
// new MiDom("p").appendC().innerH("document.links -- " + document.links)
// new MiDom("p").appendC().innerH("document.lastModified -- " + document.lastModified)
// new MiDom("p").appendC().innerH("document.inputEncoding -- " + document.inputEncoding)
// new MiDom("p").appendC().innerH("document.implementation -- " + document.implementation)
// new MiDom("p").appendC().innerH("document.images -- " + document.images)
// new MiDom("p").appendC().innerH("document.head -- " + document.head)
// new MiDom("p").appendC().innerH("document.forms -- " + document.forms)
// new MiDom("p").appendC().innerH("document.embeds -- " + document.embeds)
// new MiDom("p").appendC().innerH("document.domConfig -- " + document.domConfig)
// new MiDom("p").appendC().innerH("document.documentURI -- " + document.documentURI)
// new MiDom("p").appendC().innerH("document.documentMode -- " + document.documentMode)
// new MiDom("p").appendC().innerH("document.documentElement -- " + document.documentElement)
// new MiDom("p").appendC().innerH("document.doctype -- " + document.doctype)
// new MiDom("p").appendC().innerH("document.cookie -- " + document.cookie)
// new MiDom("p").appendC().innerH("document.body -- " + document.body)
// new MiDom("p").appendC().innerH("document.baseURI -- " + document.baseURI)
// new MiDom("p").appendC().innerH("document.applets -- " + document.applets)
// new MiDom("p").appendC().innerH("document.anchors -- " + document.anchors)
// console.group("‘group’")
// console.trace(1)
// console.error(1)
// console.time()
// console.timeEnd()
// log(console.memory)
// console.profile("profileName")
// console.profileEnd("profileName")
// console.count("stuff")
// console.assert(true, "Log me!")
// console.assert(false, "Log me!")
// console.groupEnd("‘group’")
//-----------------------------------------------------//
// class Domm {
//   constructor(node = "div") {
//     this.node = node;
//   }
// }
// Domm.prototype = {
//   crear: function () {
//    log(123)
//   }
// }
// let gg = new Domm("JavaScript", "Java");
// log(gg)
// gg.crear()
// function miDom() {
// 	return {
// 		nodex: "hola",
// 		set node(target) {
// 			console.log(target);
// 			// this.node = target
// 			// target.property = value
// 			return target
// 		},
// 		get node() {
// 			return 123
// 		}
// 	}
// }

/***********************InputClass***************************/

function createE() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "input";

  try {
    return document.createElement(element); // this.node = document.querySelector(element)
  } catch (error) {
    this.error("createE", element);
  }
} // ----------------------------


var InputClass = function InputClass() {
  var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "input";
  this._node = this.createE(node);
  this._atributes = "xxx";
  this._value = "bg-red"; // this._regex = "bg-red"
}; // ------------------------------------

InputClass.prototype = {
  set setValue(value) {
    if (typeof value === "string") {
      this._value = value;
      this.innerH(value);
    } // console.log(this.node1, "=" + value);
    // return value

  },

  set setRegex(value) {// value.match(reGex) ?
    // Reflect.set(target, "background", value.match(reGex)) :
    // Reflect.set(target, "background", "")
    // console.log(this.node1, "=" + value);
    // return value
  },

  // -----------
  get node() {
    return this._node;
  },

  // -------------------
  createE: createE,
  queryS: queryS,
  // ------
  appendC: function appendC() {
    var where = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";

    try {
      if (_typeof(where) === 'object') {
        where.node ? where.node.appendChild(this._node) : where.appendChild(this._node);
      } else {
        this.queryS(where).appendChild(this._node);
      }

      return this;
    } catch (error) {
      this.error("appendC", where);
    }
  },
  // -----------
  innerH: function innerH() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    try {
      this.node.value = text;
      return this;
    } catch (error) {
      this.error("appendC", text);
    }
  }
}; // ----------------------------------

/***/ }),

/***/ "./projects/blank/src/javascript/helpers.js":
/*!**************************************************!*\
  !*** ./projects/blank/src/javascript/helpers.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "query": () => (/* binding */ query),
/* harmony export */   "queryAll": () => (/* binding */ queryAll),
/* harmony export */   "getXY": () => (/* binding */ getXY),
/* harmony export */   "emoveClasses": () => (/* binding */ emoveClasses),
/* harmony export */   "insertBefore": () => (/* binding */ insertBefore),
/* harmony export */   "insertAfter": () => (/* binding */ insertAfter),
/* harmony export */   "offset": () => (/* binding */ offset),
/* harmony export */   "dragElement": () => (/* binding */ dragElement),
/* harmony export */   "pasteHtmlAtCaret": () => (/* binding */ pasteHtmlAtCaret)
/* harmony export */ });
function query(node) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}
function getXY(e) {
  // Get the bounding rectangle of target
  var rect = e.target.getBoundingClientRect(); // Mouse position

  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  return {
    x: x,
    y: y
  };
}
function emoveClasses(element) {
  for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classes[_key - 1] = arguments[_key];
  }

  // console.log(classes);
  classes.forEach(function (className) {
    element.classList.remove(className);
  }); // return element
} // -------------------------------------------------

function insertBefore(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode);
}
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
} // function log() {
// 	for (var i = 0; i < arguments.length; i++) {
// 		console.log(arguments[i]);
// 	}
// }
// random colors  ==================================================================
// ranColor = () => "#" + Math.random().toString(16).substring(-6)
// rgbRandom = () => `rgb(${random(255)},${random(255)},${random(255)})`
// random = (num) => Math.floor(Math.random() * (num + 1))
//-------------------drag----------------------------------//

function offset(elem) {
  if (!elem) elem = this;
  var x = elem.offsetLeft;
  var y = elem.offsetTop;

  while (elem = elem.offsetParent) {
    x += elem.offsetLeft;
    y += elem.offsetTop;
  }

  return {
    left: x,
    top: y
  };
} //-------------------drag----------------------------------//

function dragElement(elmntToDrag, dragWith) {
  var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

  if (dragWith) {
    // if present, the header is where you move the DIV from:
    dragWith.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmntToDrag.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault(); // get the mouse cursor position at startup:

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault(); // calculate the new cursor position:

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY; // set the element's new position:

    elmntToDrag.style.top = elmntToDrag.offsetTop - pos2 + "px";
    elmntToDrag.style.left = elmntToDrag.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
} //-------------------pasteHtmlAtCaret----------------------------------//

function pasteHtmlAtCaret() {
  var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "<br>";
  var selectPastedContent = arguments.length > 1 ? arguments[1] : undefined;
  var sel, range;

  if (window.getSelection) {
    // IE9 and non-IE
    sel = window.getSelection();

    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents(); // Range.createContextualFragment() would be useful here but is
      // only relatively recently standardized and is not supported in
      // some browsers (IE9, for one)

      var el = document.createElement("div");
      el.innerHTML = html;
      var frag = document.createDocumentFragment(),
          node,
          lastNode;

      while (node = el.firstChild) {
        lastNode = frag.appendChild(node);
      }

      var firstNode = frag.firstChild;
      range.insertNode(frag); // Preserve the selection

      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);

        if (selectPastedContent) {
          range.setStartBefore(firstNode);
        } else {
          range.collapse(true);
        }

        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  } else if ((sel = document.selection) && sel.type != "Control") {
    // IE < 9
    var originalRange = sel.createRange();
    originalRange.collapse(true);
    sel.createRange().pasteHTML(html);

    if (selectPastedContent) {
      range = sel.createRange();
      range.setEndPoint("StartToStart", originalRange);
      range.select();
    }
  }
}

/***/ }),

/***/ "./projects/blank/src/javascript/navbar.js":
/*!*************************************************!*\
  !*** ./projects/blank/src/javascript/navbar.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./projects/blank/src/javascript/helpers.js");
 // --------------------------------
// 🗛

document.querySelector("#font-deincrease").addEventListener("click", function () {
  var fontSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--font-size-adjust')) - 1 + "px";
  document.documentElement.style.setProperty('--font-size-adjust', fontSize);
});
document.querySelector("#font-increase").addEventListener("click", function () {
  var fontSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--font-size-adjust')) + 1 + "px";
  document.documentElement.style.setProperty('--font-size-adjust', fontSize);
}); // 👁️

(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#revealer").addEventListener("click", function (e) {
  e.preventDefault();
  var i = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("i", (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#revealer"));
  i.classList.toggle("fa-eye");
  i.classList.toggle("fa-eye-slash");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("body").classList.toggle("_reveal");
}); // 🌞

(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#dark-theme").addEventListener("click", function (e) {
  e.preventDefault();
  var i = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("i", (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#dark-theme")); // <i class="far fa-sun"></i>

  i.classList.toggle("fa-moon");
  i.classList.toggle("fa-sun");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("body").classList.toggle("dark-theme");
}); // --------------------------------

var btn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#btn-menu");
var menubar = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)(".menubar"); // -------------------------------

btn.addEventListener("click", function (e) {
  e.preventDefault(); // console.log("click menu", query(".menubar"));

  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)(".menubar").classList.toggle("active");
}); // -------------------------------

menubar.addEventListener("click", function (e) {
  // console.log(e.target);
  var childDropdown;

  if (e.target.classList.contains("menubar-dropdown") && e.target.children[0]) {
    childDropdown = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)(".menubar-dropdown-item", e.target); // console.log("father");
  } else if (e.target.parentElement.classList.contains("menubar-dropdown")) {
    childDropdown = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)(".menubar-dropdown-item", e.target.parentElement);
  } // console.log(e.target.parentElement);


  if (childDropdown) {
    if (!menubar.classList.contains("active") || childDropdown.classList.contains("hide")) {
      menubar.classList.add("active");
      childDropdown.classList.remove("hide");
    } else {
      toggleClass(childDropdown);
    }
  } // childDropdown = query(".menubar-dropdown-item", e.target);
  // console.log(childDropdown);
  // if (childDropdown) {
  //   toggleBlock(childDropdown);
  // }

}, false); // -----------------

function toggleClass(node) {
  node.classList.toggle("hide");
}

function toggleBlock(node) {
  var $display = document.defaultView.getComputedStyle(node, null).getPropertyValue("display") === "block" ? "none" : "block"; // console.log($display);

  node.style.display = $display;
} // import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";
// gsap.registerPlugin(CSSRulePlugin);
// gsap.registerPlugin(ScrollTrigger);
// -------------------------------
// -------------------------------
// let obj = { value: "xxx", nodes: [inputClass] }
// let focusNode = new Proxy(obj, {
// 	get: function (target, property) {
// 		if (target.hasOwnProperty(property))
// 			return target[property]
// 	},
// 	set: (target, property, value) => {
// 		Reflect.set(target, "value", value);
// 		// console.log(target.nodes[0]);
// 		target.nodes.forEach(element => {
// 			// element.setAttribute('value', value);
// 			element.value = value
// 			// console.log(element.value = value);
// 		});
// 	}
// })

/***/ }),

/***/ "./projects/blank/src/javascript/tags.js":
/*!***********************************************!*\
  !*** ./projects/blank/src/javascript/tags.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTags": () => (/* binding */ allTags)
/* harmony export */ });
// {
// 	tag: "div",
// 	className: "box-2 bg-orange",
// 	children: "p"
// },
// ----------------------------
var tags = [{
  tag: "ul"
}, {
  tag: "li"
}, {
  tag: "input",
  attributes: {
    type: "text",
    placeholder: "placeholder",
    value: "value"
  }
}, {
  tag: "textarea"
}, {
  tag: "p"
}, {
  tag: "div"
}, {
  tag: "span"
}, {
  tag: "table",
  textContent: "table",
  children: [{
    tag: "caption",
    children: "caption"
  }, // {
  // 	tag: "colgroup",
  // 	children: [
  // 		{
  // 			tag: "col",
  // 		}
  // 	]
  // },
  {
    tag: "thead",
    children: [{
      tag: "tr",
      children: [{
        tag: "th",
        children: "Name"
      }, {
        tag: "th",
        children: "Emil"
      }]
    }]
  }, {
    tag: "tbody",
    children: [{
      tag: "tr",
      children: [{
        tag: "td",
        children: "Name"
      }, {
        tag: "td",
        children: "Emil"
      }]
    }]
  }, {
    tag: "tfoot",
    children: [{
      tag: "tr",
      children: [{
        tag: "td",
        children: "Name"
      }, {
        tag: "td",
        children: "Emil"
      }]
    }]
  }]
}, {
  tag: "button",
  textContent: "button",
  attributes: {
    className: "btn"
  }
}]; // ---------------------------

var algo = {
  children: [{
    children: [{
      children: [{
        children: "",
        tag: "DIV",
        attributes: {
          className: "dot bg-cyan-dark mx-1"
        }
      }, {
        children: "",
        tag: "DIV",
        attributes: {
          className: "dot bg-cyan-dark mx-1"
        }
      }, {
        children: "",
        tag: "DIV",
        attributes: {
          className: "dot bg-cyan-dark mx-1"
        }
      }, {
        children: [{
          children: "",
          tag: "I",
          attributes: {
            className: "fas fa-sign-in-alt",
            style: "transform:rotateZ(270deg);"
          }
        }],
        tag: "DIV",
        attributes: {
          className: "btn t-black ml-a"
        }
      }, {
        children: [{
          children: "",
          tag: "I",
          attributes: {
            className: "fas fa-arrow-up"
          }
        }],
        tag: "DIV",
        attributes: {
          className: "btn t-black"
        }
      }, {
        children: [{
          children: "",
          tag: "I",
          attributes: {
            className: "fas fa-arrow-down"
          }
        }],
        tag: "DIV",
        attributes: {
          className: "btn t-black"
        }
      }, {
        children: [{
          children: "",
          tag: "I",
          attributes: {
            className: "fab fa-html5"
          }
        }],
        tag: "DIV",
        attributes: {
          className: "btn bg-orange t-white"
        }
      }, {
        children: [{
          children: "",
          tag: "I",
          attributes: {
            className: "fas fa-copy"
          }
        }],
        tag: "DIV",
        attributes: {
          className: "btn bg-green-light t-white"
        }
      }, {
        children: [{
          children: "",
          tag: "I",
          attributes: {
            className: "fas fa-arrows-alt"
          }
        }],
        tag: "DIV",
        attributes: {
          className: "btn bg-info t-white"
        }
      }, {
        children: [{
          children: "",
          tag: "I",
          attributes: {
            className: "fas fa-trash-alt"
          }
        }],
        tag: "DIV",
        attributes: {
          className: "btn bg-red t-white"
        }
      }],
      tag: "DIV",
      attributes: {
        className: "flex ai-center jc-flex-start"
      }
    }],
    tag: "DIV",
    attributes: {
      className: "relative"
    }
  }, {
    children: [{
      children: "classes",
      tag: "BUTTON",
      attributes: {
        className: "btn-md btn-tab"
      }
    }, {
      children: "tags",
      tag: "BUTTON",
      attributes: {
        className: "btn-md btn-tab active"
      }
    }, {
      children: "components",
      tag: "BUTTON",
      attributes: {
        className: "btn-md btn-tab"
      }
    }, {
      children: "code",
      tag: "BUTTON",
      attributes: {
        className: "btn-md btn-tab btn-generate-code"
      }
    }],
    tag: "DIV",
    attributes: {
      className: "flex b-bottom-1 b-cyan-light"
    }
  }, {
    textContent: "",
    tag: "DIV",
    attributes: {
      className: "p-3 relative tabcontent"
    }
  }, {
    textContent: "",
    tag: "DIV",
    attributes: {
      className: "p-3 tabcontent active"
    }
  }, {
    textContent: "",
    tag: "DIV",
    attributes: {
      className: "p-3 tabcontent"
    }
  }, {
    textContent: "",
    tag: "DIV",
    attributes: {
      className: "p-3 tabcontent"
    }
  }],
  tag: "DIV",
  textContent: "builder modal",
  attributes: {
    className: "modal-draggable bg-white shadow-md",
    autocomplete: "off"
  }
}; // ----------------------------

var components = [{
  tag: "div",
  textContent: '<i class="fab fa-html5"></i> card',
  attributes: {
    className: "card shadow"
  },
  children: [{
    tag: "img",
    attributes: {
      className: "card-img "
    }
  }, {
    tag: "div",
    attributes: {
      className: "card-body "
    },
    textContent: "card"
  }, {
    tag: "div",
    attributes: {
      className: "card-footer "
    },
    textContent: "card"
  }]
}];
components.push(algo); // ---------------------------

var allTags = {
  components: components,
  tags: tags
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./projects/blank/src/javascript/doc.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autocomplete": () => (/* binding */ autocomplete)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./projects/blank/src/javascript/helpers.js");
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework */ "./projects/blank/src/javascript/framework.js");
/* harmony import */ var _colorsArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorsArray */ "./projects/blank/src/javascript/colorsArray.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags */ "./projects/blank/src/javascript/tags.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



__webpack_require__(/*! ./navbar */ "./projects/blank/src/javascript/navbar.js");


 // import { tags, components } from "./tags";


/*************************vars*************************/

var form, tagname, copyBtn, draggableBtn, deleteBtn, fatherBtn, arrowUp, arrowDown, classesControl, tabBtns, dragModal, tagsTab, componentsTab, switchBox, textareaCode, btnCode, btnGenerateCode, btnCopyCode, proxyNode, moveMe, whereDrop;
/*************************init*************************/

function init() {
  // const dropzone = query("#dropzone")
  form = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)(".modal-draggable");
  tagname = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#tagname"); // ------- btns

  copyBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#copy-btn");
  draggableBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#draggable-btn");
  deleteBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#delete-btn");
  fatherBtn = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#father-btn");
  arrowUp = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#arrow-up-btn");
  arrowDown = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#arrow-down-btn"); // -----classes input

  classesControl = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#classes-control"); // tab btn

  tabBtns = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.queryAll)(".btn-tab"); // drag modal

  dragModal = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#drag-modal"); // tabs

  tagsTab = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#tags");
  componentsTab = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#components"); // show html

  switchBox = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#switchBox"); // var dropzone, sDefTxt;

  switchBox.addEventListener("click", function (e) {
    if (proxyNode.node === dropzone) return;

    if (proxyNode.node.classList.contains("pre-html-code")) {
      nodeEdit(proxyNode.node);
    } else {
      htmlEdit(proxyNode.node);
    }
  }); // autocomplete

  autocomplete((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#myInput"), _colorsArray__WEBPACK_IMPORTED_MODULE_2__["default"], proxyNode); // tabs

  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      openTab(e, btn.textContent);
    });

    if (btn.classList.contains("active")) {
      btn.click();
    }
  }); // ------------------

  _tags__WEBPACK_IMPORTED_MODULE_3__.allTags.tags.forEach(function (node, index) {
    createNodes(node, {
      attributes: {
        className: "btn-sm bg-orange m"
      },
      tag: "div"
    }, index, false, "tags").appendC(tagsTab);
  });
  _tags__WEBPACK_IMPORTED_MODULE_3__.allTags.components.forEach(function (node, index) {
    createNodes(node, {
      attributes: {
        className: "btn-sm bg-orange m"
      },
      tag: "div"
    }, index, false, "components").appendC(componentsTab);
  });
  /*************************create code*************************/

  textareaCode = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#copy");
  btnCode = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.queryAll)(".btn-copy");
  btnGenerateCode = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)(".btn-generate-code");
  btnCopyCode = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)(".btn-copy-code"); // --------------------

  btnCode.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      generateCode();
    });
  }); // --------

  btnGenerateCode.addEventListener("click", function (e) {
    generateCode();
  });
  btnCopyCode.addEventListener("click", function (e) {
    copyToClipboard();
  }); // remove cell and class

  classesControl.addEventListener("click", function (e) {
    if (e.target.classList.contains("close-btn")) {
      var className = e.target.dataset.className;
      proxyNode.removeClass = className;
      delete e.target.parentNode.remove();
    }
  }); //==========================proxyNode==========================//

  proxyNode = new Proxy({
    node: null,
    tabSelected: null
  }, {
    get: function get(target, property) {
      if (target.hasOwnProperty(property) && target[property]) // if (target.hasOwnProperty(property) && typeof target[property] !== 'undefined')
        return target[property];
    },
    // ---------
    set: function set(target, property, value) {
      if (target.node !== value && property === "node") {
        if (target.node !== null || value === null) {
          target.node.removeAttribute("contentEditable");
          target.node.removeAttribute("draggable");
          target.node.removeEventListener("dragstart", dragMove); // form.classList.add("hide")
          // tabBtns[0].style.visibility = "hidden"

          for (var i = 0; i < target.node.childElementCount; i++) {
            target.node.children[i].removeAttribute("contentEditable");
          }
        } // ----- save


        Reflect.set(target, "node", value); // ----- focus

        if (value !== null) {
          target.node.contentEditable = true;

          for (var _i = 0; _i < target.node.childElementCount; _i++) {
            target.node.children[_i].contentEditable = false;
          }

          tagname.innerText = proxyNode.node.tagName; // target.node.focus()

          form.classList.remove("hide"); // console.log(value.className,);
          // if (value.className !== "" && value.className.length > 0)

          classesControl.innerHTML = ""; // tabBtns[0].style.visibility = "visible"

          tabBtns[0].classList.remove("t-gray");

          if (!hasBlankSpaces(value.className)) {
            // createCells(value.className.split(" "))
            value.className.split(" ").forEach(function (element) {
              createCell(element);
            });
          }
        }
      } // ------
      else if (property === "delete") {
        delete target.node.remove();
        Reflect.set(target, "node", null);
        tabBtns[0].classList.add("t-gray");
        tabBtns[1].click();
      } // ------
      // remove class from node
      else if (property === "removeClass") {
        // console.log(property, target, value);
        target.node.classList.remove(value);
      } // ------
      // add class 
      else if (property === "addClass") {
        // console.log(property, target, value);
        target.node.classList.add(value);
      }

      return true;
    }
  }); // -------

  initDropzone(); // # end init
} //==========================dropzone==========================//


function initDropzone() {
  dropzone.addEventListener('keypress', function (e) {
    if (document.activeElement === proxyNode.node && e.key === 'Enter') {
      e.preventDefault();
      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.pasteHtmlAtCaret)();
    }
  });
  dropzone.addEventListener("paste", function (e) {
    e.preventDefault();

    if (document.activeElement === proxyNode.node) {
      var paste = (e.clipboardData || window.clipboardData).getData('text/html').replace(/<!--StartFragment-->([\s\S]*?)<!--EndFragment-->/g, '$1');
      proxyNode.node.innerHTML = paste.replace(/ style="[a-zA-Z:\ \:\0-9\;\-\&]*\"/g, "");
    }
  }); // -----------------

  dropzone.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.target !== proxyNode.node) {
      proxyCreate(e.target); // proxyNode.node = e.target

      e.target.contentEditable = true;
      e.target.focus();
      tabBtns[0].click(); // proxyDrag();
    } // proxyClasses.className = e.target.className

  }); // -----------------

  dropzone.addEventListener("dblclick", function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (e.target === proxyNode.node) {
      proxyNoDrag();
      e.target.contentEditable = true;
      e.target.focus(); // tabBtns[0].click()
    }
  }); // -------------------------------- drag Modal ---------------------------
  // Make the DIV element draggable:

  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.dragElement)(form, dragModal); // ------------------------------------------------
  // .move-me.preview(draggable="true").absolute.top.left 

  moveMe = new _framework__WEBPACK_IMPORTED_MODULE_1__.MiDom("div").classL("h-1 move-me preview absolute top left hid").appendC().node; // const moveMe = query(".move-me")

  whereDrop = null;
  dropzone.addEventListener("dragover", function (e) {
    // console.log("dragover...");
    e.preventDefault();
    e.stopPropagation(); // -----------

    var rect = e.target.getBoundingClientRect();
    var y = e.clientY - rect.top;

    var _offset = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.offset)(e.target),
        left = _offset.left,
        top = _offset.top; // ------------


    moveMe.style.display = "block";
    moveMe.style.left = left + "px";
    moveMe.style.width = e.target.offsetWidth + "px"; // moveMe.style.left = e.clientX + "px";

    if (e.target !== dropzone && e.target !== moveMe) {
      if (y < e.target.offsetHeight / 3) {
        moveMe.style.height = "0";
        moveMe.style.top = top - 2 + "px";
        whereDrop = "insertBefore";
      } else if (y > e.target.offsetHeight / 3 * 2) {
        moveMe.style.height = "0";
        moveMe.style.top = e.target.offsetHeight + top + "px";
        whereDrop = "insertAfter";
      } else {
        moveMe.style.top = top + "px";
        moveMe.style.height = e.target.offsetHeight + "px";
        whereDrop = "inside";
      }
    } else if (e.target === dropzone) {
      moveMe.style.height = "16px";

      if (y < e.target.offsetHeight / 3) {
        moveMe.style.top = dropzone.offsetTop + "px";
        whereDrop = "first";
      } else if (y > e.target.offsetHeight / 3 * 2) {
        moveMe.style.top = e.target.offsetHeight + top - 16 + "px";
        whereDrop = "last";
      }
    }
  });
  dropzone.addEventListener("dragleave", function (e) {
    // previewNode.remove()
    // console.log(e.target);
    moveMe.style.display = "none";
    whereDrop = null; // emoveClasses(e.target, "drag-is-top", "drag-is-center", "drag-is-bottom")
  }); // ===========================drop=============================================

  dropzone.addEventListener("drop", function (e) {
    // console.log(e.target === proxyNode.node);
    if (_typeof(e.target) === proxyNode.node) return; // e.target.classList.remove("bg-yellow")

    e.preventDefault();
    e.stopPropagation(); // let target=  e.target === dropzone ? : e.target

    var element; // --------

    if (e.dataTransfer.getData("tag/create")) {
      var type = e.dataTransfer.getData("tag/create").match(/\w+/g);
      element = createNodes(_tags__WEBPACK_IMPORTED_MODULE_3__.allTags[type[0]][type[1]]).node;
    } else {
      element = proxyNode.node;
    }

    try {
      switch (whereDrop) {
        case "insertBefore":
          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.insertBefore)(element, e.target);
          break;

        case "insertAfter":
          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.insertAfter)(element, e.target);
          break;

        case "inside":
          e.target.appendChild(element);
          break;

        case "first":
          if (dropzone.firstElementChild) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.insertBefore)(element, dropzone.firstElementChild);
          } else {
            dropzone.appendChild(element);
          }

          break;

        case "last":
          dropzone.appendChild(element); // insertAfter(element, dropzone.lastElementChild)

          break;

        default:
          break;
      }
    } catch (error) {
      // console.log(error);
      return;
    }

    moveMe.style.display = "none";
    whereDrop = null; // emoveClasses(e.target, "drag-is-top", "drag-is-center", "drag-is-bottom")
  }); // -------------

  arrowUp.addEventListener("click", function (e) {
    if (proxyNode.node && proxyNode.node.previousSibling && proxyNode.node !== dropzone) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.insertBefore)(proxyNode.node, proxyNode.node.previousSibling);
    }
  }); // -------------

  arrowDown.addEventListener("click", function (e) {
    if (proxyNode.node && proxyNode.node.nextSibling && proxyNode.node !== dropzone) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.insertAfter)(proxyNode.node, proxyNode.node.nextSibling);
    }
  }); // ------------- 

  copyBtn.addEventListener("click", function (e) {
    if (proxyNode.node !== dropzone && proxyNode.node) {
      var dupNode = proxyNode.node.cloneNode(true); // console.log(dupNode);

      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.insertAfter)(dupNode, proxyNode.node);
    }
  }); // -------------

  deleteBtn.addEventListener("click", function (e) {
    if (proxyNode.node !== dropzone && proxyNode.node) {
      proxyNode["delete"] = true;
    }
  }); // -------------

  fatherBtn.addEventListener("click", function (e) {
    if (proxyNode.node !== dropzone && proxyNode.node) {
      proxyNode.node = proxyNode.node.parentNode;
    }
  }); // -------

  draggableBtn.addEventListener("click", function (e) {
    if (proxyNode.node !== dropzone && proxyNode.node) {
      proxyNode.node.draggable = true;
      proxyNode.node.contentEditable = false; // proxyNode.focus()
      // console.log(proxyNode.node);

      proxyNode.node.addEventListener("dragstart", dragMove);
      proxyNode.node.addEventListener("dragend", dragEnd); // console.log("xxxxx");
    }
  });
} // contentEditable="true"


function proxyCreate(node) {
  proxyNode.node = node;
}

function proxyAdd(className) {
  var cell = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var classes = className.trim().split(' ');

  if (classes.length > 1) {
    for (var i = 0; i < classes.length; i++) {
      proxyNode.addClass = classes[i];
      cell && createCell(classes[i]);
    }
  } else {
    // console.log(classes);
    proxyNode.addClass = classes[0];
    cell && createCell(classes[0]);
  }
}

function proxyRemove(className) {
  proxyNode.removeClass = className;
}

function proxyDelete() {
  proxyNode["delete"] = true;
} // ------------


function proxyDrag() {
  if (proxyNode.node !== dropzone && proxyNode.node) {
    proxyNode.node.draggable = true;
    proxyNode.node.contentEditable = false; // proxyNode.focus()
    // console.log(proxyNode.node);

    proxyNode.node.addEventListener("dragstart", dragMove);
    proxyNode.node.addEventListener("dragend", dragEnd); // console.log("xxxxx");
  }
}

function proxyNoDrag() {
  if (proxyNode.node !== dropzone && proxyNode.node) {
    proxyNode.node.removeAttribute("draggable");
  }
} //==========================validator==========================//


function hasBlankSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

var cellClassOld = ""; //==========================cell==========================//

function createCell(className) {
  if (hasBlankSpaces(className)) return; // -------
  // let cell = new MiDom("div")

  var cell = new _framework__WEBPACK_IMPORTED_MODULE_1__.MiDom("div").classL("cell").appendC(classesControl); // .innerH(className)

  new _framework__WEBPACK_IMPORTED_MODULE_1__.MiDom("input").classL("cell-input").innerH(className).setAtt("type", "text").appendC(cell);
  new _framework__WEBPACK_IMPORTED_MODULE_1__.MiDom("span").classL("close-btn").appendC(cell).innerH("x").dataset("className", className); // ------------

  cell.addE(function (e) {
    cellClassOld = className;
  }, "focus"); // ----

  cell.addE(function (e) {
    // console.log(cellClassOld, e.target.value.split(' ')[0]);
    if (e.key === 'Enter' && e.target.value !== cellClassOld && !hasBlankSpaces(e.target.value)) {
      // console.log(e.target.value)
      var newValue = e.target.value.split(' ')[0];
      proxyAdd(newValue, false);
      proxyRemove(cellClassOld);
      cellClassOld = newValue;
      e.target.value = newValue;
      e.target.nextSibling.dataset["className"] = newValue;
    }
  }, "keypress");
} // -------


function dragCreate(e, tag) {
  e.dataTransfer.setData("tag/create", tag);
} // -------


function dragMove(e) {
  e.dataTransfer.setData("tag/move", proxyNode.node);
} // -------


function dragEnd(e) {
  // previewNode.remove()
  moveMe.style.display = "none";
  whereDrop = null;
}
/*************************create nodes *************************/


function PropertyToNode(propertiesObj, element) {
  for (var key in propertiesObj) {
    if (Object.hasOwnProperty.call(propertiesObj, key)) {
      var value = propertiesObj[key]; // console.log(value, key);
      // ----

      switch (key) {
        case "className":
          element.classL(value);
          break;

        case "id":
          element.addId(value);
          break;

        case "style":
          element.styleT(value);
          break;

        case "value":
          element.innerH(value);
          break;

        default:
          element.setAtt(key, value);
          break;
      } // ----

    }
  }
}

console.log(_tags__WEBPACK_IMPORTED_MODULE_3__.allTags); // ==============================createNodes=================================

function createNodes(node) {
  var custome = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var deep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var nodeType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  var element; // --------

  if (custome && custome.tag) {
    element = new _framework__WEBPACK_IMPORTED_MODULE_1__.MiDom(custome.tag);
  } else if (node.tag) {
    element = new _framework__WEBPACK_IMPORTED_MODULE_1__.MiDom(node.tag);
  } // ------------


  if (element.node.tagName == "IMG") {
    // console.log("is img");
    // src="https://via.placeholder.com/150"
    element.setAtt("src", "https://via.placeholder.com/500");
  } // ------------


  if (custome && custome.attributes) {
    PropertyToNode(custome.attributes, element);
  } else if (node.attributes && Object.keys(node.attributes).length !== 0) {
    PropertyToNode(node.attributes, element);
  } // ------------


  if (deep && _typeof(node.children) === "object" && node.children.length > 0) {
    node.children.forEach(function (child) {
      createNodes(child).appendC(element.node);
    });
  } else {
    element.node.innerHTML = node.textContent || typeof node.textContent === "string" ? node.textContent : node.children;
  } // -------


  if (index !== null) {
    // element.dataset("type", nodeType)
    element.node.draggable = true;
    element.node.addEventListener("dragstart", function (e) {
      dragCreate(e, nodeType + "-" + index);
    });
    element.node.addEventListener("dragend", dragEnd);
  } // --------


  return element;
} // --------


function generateCode() {
  var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dropzone;
  proxyNode.node = null;
  tabBtns[0].classList.add("t-gray");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.queryAll)(".pre-html-code").forEach(function (element) {
    nodeEdit(element); // console.log(element);
  }); // ------

  var string = node.outerHTML || new XMLSerializer().serializeToString(node);
  textareaCode.value = string;
}

function copyToClipboard() {
  var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dropzone;
  textareaCode.focus();
  textareaCode.select();
  textareaCode.setSelectionRange(0, 99999);
  /* For mobile devices */

  document.execCommand("copy");
  textareaCode.blur();
}
/*************************tabs*************************/


function openTab(evt, textContent) {
  if (textContent === "classes" && proxyNode.node === undefined) {
    return;
  } // Declare all variables


  var i, tabcontent, tablinks; // Get all elements with class="tabcontent" and hide them

  tabcontent = form.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    // tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active");
  } // Get all elements with class="btn-tab" and remove the class "active"


  tablinks = form.getElementsByClassName("btn-tab");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(textContent).classList.add("active");
  evt.currentTarget.className += " active";
}

function createObjNodes(element) {
  // -----------
  var node = {}; // -----------

  if (element.children && element.children.length > 0) {
    var childs = [];

    for (var index = 0; index < element.children.length; index++) {
      // const element = element.children[index];
      childs.push(createObjNodes(element.children[index])); // childs.push(element.children[index].tagName)
    }

    node.children = childs;
  } else {
    node.children = element.textContent;
  } // ----------


  node.tag = element.tagName; // node.className = element.className
  // ----------

  node.attributes = {};

  for (var i = 0; i < element.attributes.length; i++) {
    var attrib = element.attributes[i];

    if (attrib.name === "class") {
      node.attributes["className"] = attrib.value;
    } else {
      node.attributes[attrib.name] = attrib.value;
    }
  } // ---------


  return node;
}
/*************************autocomplete*************************/
// ---------------------


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/

  inp.addEventListener("input", function (e) {
    var a,
        b,
        i,
        val = this.value;
    /*close any already open lists of autocompleted values*/

    closeAllLists();

    if (!val) {
      return false;
    }

    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/

    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/

    this.parentNode.appendChild(a);
    /*for each item in the array...*/

    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/

        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/

        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/

        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          // inp.value = this.getElementsByTagName("input")[0].value;
          // let value = this.getElementsByTagName("input")[0].value
          inp.value = "";
          proxyAdd(this.getElementsByTagName("input")[0].value); // proxyNode.addClass = value;
          // createCell(value)

          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/

          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/

  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");

    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/

      addActive(x);
    } else if (e.keyCode == 38) {
      //up

      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/

      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();

      if (currentFocus > -1) {
        /* and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      } else {
        // let inputValues = e.target.value.split(' ')
        proxyAdd(inp.value); // proxyNode.addClass = inp.value
        // createCell(inp.value)

        inp.value = "";
      }
    }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/

    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/

    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");

    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/


  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
} //-------------------show html----------------------------------//

function htmlEdit(element) {
  var oContent;
  oContent = document.createTextNode(element.outerHTML);
  var oPre = document.createElement("pre");
  oPre.innerHTML = "";
  oPre.classList.add("pre-html-code");
  oPre.contentEditable = false; // oPre.id = "sourceText";
  // oPre.contentEditable = true;
  // dropzone.appendChild(oPre);

  oPre.appendChild(oContent);
  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.insertAfter)(oPre, element);
  element.remove();
  oPre.click();
} // -----


function nodeEdit(element) {
  var node = stringToHTML(element); // console.log(node);

  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.insertAfter)(node, element);
  element.remove();
  node.click();
} // -----------------


function stringToHTML(element) {
  var oContent;
  var div = document.createElement("div");
  oContent = document.createRange();
  oContent.selectNodeContents(element);
  div.innerHTML = oContent.toString(); // console.log(div.firstElementChild);

  return div.firstElementChild;
}

; // -----------------

var dropzone = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.query)("#dropzone");

if (dropzone) {
  init();
} // ------------------------
})();

/******/ })()
;
//# sourceMappingURL=app.js.map