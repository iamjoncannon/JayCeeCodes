(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./app/components/mobile.css":
/*!***********************************!*\
  !*** ./app/components/mobile.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./mobile.css */ "./node_modules/css-loader/index.js!./app/components/mobile.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./app/components/mobileGraph.js":
/*!***************************************!*\
  !*** ./app/components/mobileGraph.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./mobile.css */ "./app/components/mobile.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mobileGraph = function (_React$Component) {
  _inherits(mobileGraph, _React$Component);

  function mobileGraph(props) {
    _classCallCheck(this, mobileGraph);

    var _this = _possibleConstructorReturn(this, (mobileGraph.__proto__ || Object.getPrototypeOf(mobileGraph)).call(this, props));

    _this.state = {
      scene: 'home'
    };
    return _this;
  }

  _createClass(mobileGraph, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var scene = this.state.scene;


      return _react2.default.createElement(
        'div',
        { id: 'mobileContainer' },
        _react2.default.createElement(
          'span',
          { className: 'navbuttons mobileText', onClick: function onClick() {
              return _this2.setState({ scene: 'home' });
            } },
          ' joncannon.codes '
        ),
        scene === 'home' ? _react2.default.createElement(
          'div',
          { id: 'home' },
          _react2.default.createElement(
            'div',
            { id: 'iconContainer' },
            _react2.default.createElement(
              'a',
              { href: 'https://www.linkedin.com/in/iamjoncannon/' },
              _react2.default.createElement('img', { className: 'icons', src: 'imgs/square-linkedin-512.png' })
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/iamjoncannon' },
              _react2.default.createElement('img', { className: 'icons', src: 'imgs/github_icon.png' })
            ),
            _react2.default.createElement(
              'a',
              { href: 'JonathanCannon.pdf', download: true },
              _react2.default.createElement('img', { className: 'icons', src: 'imgs/resume.png' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'lower' },
            _react2.default.createElement('img', { className: 'images', src: 'imgs/work.png', onClick: function onClick() {
                return _this2.setState({ scene: 'work' });
              } }),
            _react2.default.createElement(
              'a',
              { href: 'https://gltd.bandcamp.com/album/ep-1' },
              _react2.default.createElement('img', { className: 'images', src: 'imgs/music-note-2-xxl.png' })
            )
          )
        ) : scene === 'work' ? _react2.default.createElement(
          'div',
          { id: 'work' },
          _react2.default.createElement(
            'a',
            { href: 'http://redux-genie.net' },
            _react2.default.createElement('img', { className: 'images', src: 'imgs/lamp.png' })
          ),
          _react2.default.createElement(
            'a',
            { href: 'http://concept.joncannon.codes' },
            _react2.default.createElement('img', { className: 'images', src: 'imgs/hegel.jpg' })
          )
        ) : ''
      );
    }
  }]);

  return mobileGraph;
}(_react2.default.Component);

exports.default = mobileGraph;

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/components/mobile.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader!./app/components/mobile.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#mobileContainer {\n\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#iconContainer {\n\talign-self: center;\n\tdisplay: flex;\n\tflex-direction: row;\n\tleft: 50%;\n\tjustify-content: space-between;\n\tmargin-bottom: 2vh;\n\tmargin-right: 8vh;\n}\n\n.mobileText {\n\tfont-size: 8em;\n\tmargin: 3vh;\n\talign-self: center;\n\n}\n\n.icons {\n\talign-self: center;\n\theight: 8vh;\n\tmargin-left: 8vh;\n\n}\n\n.images {\n\talign-self: center;\n\tmargin: 3vh;\n\theight: 20vh;\n\t/*flex-basis: content;*/\n}\n\n.lower {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-self: center;\n\t/*margin-left: 3vh;*/\n}\n\n#home {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#work {\n\tdisplay: flex;\n\talign-self: center\n}", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map