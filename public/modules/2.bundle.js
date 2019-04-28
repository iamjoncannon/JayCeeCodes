(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./app/components/Graph.js":
/*!*********************************!*\
  !*** ./app/components/Graph.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactForceGraph = __webpack_require__(/*! react-force-graph */ "./node_modules/react-force-graph/dist/react-force-graph.module.js");

var _threeSpritetext = __webpack_require__(/*! three-spritetext */ "./node_modules/three-spritetext/dist/three-spritetext.module.js");

var _threeSpritetext2 = _interopRequireDefault(_threeSpritetext);

var _graphdata = __webpack_require__(/*! ./graphdata */ "./app/components/graphdata.js");

var _graphdata2 = _interopRequireDefault(_graphdata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Graph = function (_React$Component) {
  _inherits(Graph, _React$Component);

  function Graph(props) {
    _classCallCheck(this, Graph);

    var _this = _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this, props));

    _this._handleClick = function (node) {

      if (node.DL) {

        var link = document.createElement("a");
        link.download = node.DL;
        link.href = node.DL;
        link.preventDefault = true;
        document.body.appendChild(link);
        link.click().preventDefault();
        document.body.removeChild(link);
      }

      if (node.addy) {

        window.open(node.addy, '_blank');

        return;
      } else if (node.label && node.label !== _this.props.scene) {

        _this.props.setHistory(node);

        return;
      } else if (node.text && node.label !== _this.props.scene) {

        _this.props.setHistory(node);
      }
    };

    _this._handleHover = function (node) {

      if (!node && !_this.state.highlighted) {

        var nextState = _this.state.scene === 'back' ? { highlighted: null, display: 'joncannon.codes' } : { highlighted: null, display: null };
        _this.props.lighted(null);
        _this.setState(nextState);
      } else if (!node && _this.state.highlighted) {
        // null and something is highlighted
        var _nextState = _this.state.scene === 'back' ? { highlighted: null, display: 'joncannon.codes' } : { highlighted: null, display: null };
        _this.props.lighted(null);
        _this.setState(_nextState);
      } else if (node && node.id !== _this.state.highlighted) {

        if (_this.props.screen[0] === 'desktop') {
          _this.props.lighted(true);
          _this.setState({ highlighted: node.id, display: node.display });
        } else if (node && _this.props.screen[0] === 'mobile') {
          // hover equals click on mobile

          _this.setState({ mobileDisplay: node.display });
          _this._handleClick(node);
        }
      }
    };

    _this.state = {
      graphData: _graphdata2.default,
      highlighted: null,
      display: 'joncannon.codes'
    };
    return _this;
  }

  _createClass(Graph, [{
    key: 'resize',
    value: function resize() {

      var type = this.props.screen[0];
      var screensize = this.props.screen[1];
      var factor = void 0;

      screensize > 1500 ? factor = 18 : screensize > 1200 ? factor = 15 : screensize > 1000 ? factor = 10 : screensize > 925 ? factor = 8 : screensize > 780 ? factor = 7 : screensize < 780 ? factor = 6 : screensize < 500 ? factor = 2 : '';

      type === 'mobile' ? factor = 3 : '';

      this.fg.cameraPosition({ z: window.innerWidth / factor }, // new position
      null, 1000 // ms transition duration
      );

      var newZoom = window.innerWidth / factor;

      if (factor !== this.state.factor) {

        this.setState({
          factor: factor
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loaded();
      this.resize();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {

      this.resize();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var screen = this.props.screen;

      var screenType = screen[0];
      var graphData = this.state.graphData;
      var scene = this.props.scene;
      // let viewData = graphData[`${scene}`]

      var viewData = graphData['' + viewMapper(scene)];

      scene === 'back' && screenType === 'desktop' ? viewData = graphData.DeskOpening : scene === 'back' && screenType === 'mobile' ? viewData = graphData.mobileOpening : '';
      !viewData ? viewData = graphData.me : '';

      // <img className={ scene !== 'back' && screenType === 'desktop' ? "back" : "back hide" } src='/imgs/back.png' onClick={ this._handleBack } />
      // <img className={ scene !== 'back' && screenType === 'desktop' ? "home" : "home hide" } src='/imgs/home.png' onClick={ this._handleBack } />        
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          { className: "display" },
          ' ',
          this.state.display,
          ' '
        ),
        _react2.default.createElement(
          'div',
          { style: { zIndex: 1 } },
          _react2.default.createElement(_reactForceGraph.ForceGraph3D, {
            height: screen[2],
            width: screen[1],
            ref: function ref(el) {
              _this2.fg = el;
            }
            // backgroundColor={'#ffffff'}
            , graphData: viewData
            // linkColor={() => 'rgba( 0, 0, 0, 1)'}
            , linkWidth: 2,
            linkMaterial: 'RawShaderMaterial',
            nodeThreeObject: function nodeThreeObject(node) {

              if (node.img) {
                var size = node.size;
                node.id === _this2.state.highlighted ? size += 8 : '';
                var imgTexture = new THREE.TextureLoader().load('./imgs/' + node.img);
                var material = new THREE.SpriteMaterial({ map: imgTexture });
                var sprite = new THREE.Sprite(material);
                sprite.scale.set(size, size);
                return sprite;
              }
              if (node.text) {

                var _sprite = new _threeSpritetext2.default(node.text);
                _sprite.fontFace = 'Sans Serif';
                _sprite.color = node.id === _this2.state.highlighted ? 'red' : 'white';
                _sprite.textHeight = node.id === _this2.state.highlighted ? node.size + 4 : node.size;
                return _sprite;
              }
            },
            onNodeClick: this._handleClick,
            enableNodeDrag: false,
            enableNavigationControls: false,
            showNavInfo: false,
            onNodeHover: this._handleHover,
            numDimensions: 2
          })
        )
      );
    }
  }]);

  return Graph;
}(_react2.default.Component);

exports.default = Graph;


function viewMapper(scene) {
  var returnVal = void 0;

  scene === "Hegel's Science of Logic as a graph" ? scene = "Concept Graph Project" : '';

  scene === "Concept Graph Project" ? returnVal = 'concept' : scene === 'This Site' ? returnVal = 'thisSite' : scene === "Concept Graph Technologies" ? returnVal = 'ConceptTech' : scene === 'Redux Genie' ? returnVal = 'genie' : scene === "Redux Genie Technologies" ? returnVal = 'GenieTech' : scene === "Tunes" ? returnVal = "Music" : returnVal = scene;

  return returnVal;
}

/***/ }),

/***/ "./app/components/graphdata.js":
/*!*************************************!*\
  !*** ./app/components/graphdata.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// will migrate this to Mongo

var ratio = 4;

var CodeNode = { id: 'Code', label: 'Code', img: 'code.png', size: 20, display: 'Code' };
var MeNode = { id: 'me', label: 'me', img: 'me.jpg', size: 7 * ratio, display: 'Me' };
var MusicNode = { id: 'Music', label: 'Music', size: 10, img: 'music-note-2-xxl.png', display: "Tunes" };
var ProjectNode = { id: 'Projects', label: 'Projects', img: 'work.png', size: 4 * ratio, display: "Projects" };
var linkedIn = { id: 'linkedIn', label: 'linkedin', img: 'square-linkedin-512.png', size: 10, addy: "https://www.linkedin.com/in/iamjoncannon/", display: "Linked In" };
var github = { id: 'github', label: 'github', img: 'github_icon.png', size: 10, addy: "https://github.com/iamjoncannon", display: "Github" };
var resume = { id: 'resume', label: 'resume', img: 'resume.png', size: 8, addy: '/public/', DL: '/public/JonathanCannon.pdf', display: "Hire Me" };
var fullstack = { id: 'fullstack', label: 'fullstack', img: 'fullstack.png', size: 10, addy: 'https://www.fullstackacademy.com/', display: "Fullstack Academy of Code" };
var UC = { id: 'UC', label: 'UC', img: 'uchicago.png', size: 15, addy: 'https://www.uchicago.edu/', display: "University of Chicago" };
var bodega = { id: 'bodega', label: 'bodega', img: 'bodega.png', size: 15, addy: 'https://globally.ltd/4', display: "Bodega" };
var soundcloud = { id: 'soundcloud', label: 'soundcloud', img: 'soundcloud-icon.png', size: 15, addy: 'https://soundcloud.com/bodegachill', display: "My SoundCloud" };
var bandCamp = { id: 'bandCamp', label: 'bandCamp', img: 'globallyLTD.jpg', size: 15, addy: 'https://gltd.bandcamp.com/album/ep-1', display: "Buy my Tunes"

	// projects 
};var ThisNode = { id: 'this', color: 'black', label: 'thisSite', text: 'this', size: 2 * ratio, display: "This Site" };
var genieNode = { id: 'genie', label: 'genie', img: 'lamp.png', size: 20, display: "Redux Genie" };
var conceptNode = { id: 'concept', label: 'concept', img: 'hegel.jpg', size: 4 * ratio, display: "Concept Graph Project" };

var DeskOpening = {
	nodes: [CodeNode, MeNode, MusicNode, ProjectNode],
	links: [{ source: 'Code', target: 'me' }, { source: 'Music', target: 'me' }, { source: 'Projects', target: 'Code' }]
};

var Code = {
	nodes: [CodeNode, ProjectNode, github, linkedIn],
	links: [{ source: 'Code', target: 'Projects' }, { source: 'Code', target: 'github' }, { source: 'github', target: 'linkedIn' }]
};

var me = {
	nodes: [_extends({}, MeNode, { size: 5 * ratio }), resume, ProjectNode, UC],
	links: [{ source: 'me', target: 'resume' },
	// {source : 'fullstack', target: 'me'},
	{ source: 'Projects', target: 'me' }, { source: 'UC', target: 'me' }]
};

var Music = {
	nodes: [MusicNode, bodega, soundcloud, bandCamp],
	links: [{ source: 'Music', target: 'bodega' }, { source: 'soundcloud', target: 'bodega' }, { source: 'bodega', target: 'bandCamp' }]
};

var Projects = {
	nodes: [ProjectNode, genieNode, conceptNode, ThisNode],
	links: [{ source: 'Projects', target: 'genie' }, { source: 'Projects', target: 'concept' }, { source: 'this', target: 'Projects' }]

	// redux genie
};var genieText = { id: 'genietext', color: 'black', text: 'Redux Genie', size: 1.3 * ratio, addy: 'https://www.npmjs.com/package/redux-genie', display: "Redux CLI dev tool" };
var genieGH = { id: 'genieGH', img: 'github_icon.png', size: 10, addy: 'https://github.com/lovely-libras/redux-genie', display: "Source" };
var genieSite = { id: 'genieSite', color: 'black', text: 'Docs', size: 1.3 * ratio, addy: 'http://redux-genie.net/docs', display: "Read the Docs" };
var genieNPM = { id: 'genieNPM', img: 'npm-logo.png', size: 4 * ratio, addy: 'https://www.npmjs.com/package/redux-genie', display: "npm i -g redux-genie" };
var genieTech = { id: 'GenieTech', color: 'black', label: "GenieTech", text: "Technologies", size: 1.3 * ratio, display: "Redux Genie Technologies" };

var genie = {
	nodes: [genieNode, genieText, genieSite, genieGH, genieNPM, genieTech],
	links: [{ source: 'genie', target: 'genietext' }, { source: 'genie', target: 'genieSite' }, { source: 'genie', target: 'genieGH' }, { source: 'genieNPM', target: 'genie' }, { source: 'GenieTech', target: 'genie' }]

	// NPM, NodeJS, Bash, Redux, Mocha/Chai

};var NodeJS = { id: 'nodeJS', img: 'node.jpg', size: 4 * ratio, display: "NodeJS" };
var Bash = { id: 'Bash', img: 'bash.svg', size: 4 * ratio, display: "Bash scripting" };
var Redux = { id: 'Redux', img: 'redux.png', size: 4 * ratio, display: "Redux" };
var Mocha = { id: 'Mocha', img: 'mocha.svg', size: 4 * ratio, display: "Mocha/Chai TDD"
	// let Chai = {id: 'Mocha', img: 'mocha.svg', size: 4 * ratio }

};var GenieTech = {
	nodes: [genieNode, genieNPM, NodeJS, Bash, Redux, Mocha],
	links: [{ source: 'genie', target: 'nodeJS' }, { source: 'genie', target: 'Bash' }, { source: 'genie', target: 'Redux' }, { source: 'genieNPM', target: 'genie' }, { source: 'Mocha', target: 'genie' }]

	// concept
};var conceptText = { id: 'conceptText', color: 'black', label: "concept", text: 'Concept Graph', size: 1 * ratio, display: "Hegel's Science of Logic as a graph", addy: "http://concept.joncannon.codes" };
var conceptGH = { id: 'conceptGH', img: 'github_icon.png', size: 10, addy: 'https://github.com/iamjoncannon/concept_parser', display: 'Source' };
var conceptTech = { id: 'conceptTech', color: 'black', label: "ConceptTech", text: 'Technologies', size: 1 * ratio, display: "Concept Graph Technologies" };
var conceptSite = { id: 'conceptSite', color: 'black', text: 'Deployed Site', size: 1 * ratio, display: "http://concept.joncannon.codes", addy: "http://concept.joncannon.codes" };
var presentation = { id: 'present', color: 'black', img: 'presentation.png', size: 5 * ratio, display: "Presentation", addy: "https://www.youtube.com/watch?v=sPflAhvZgrU&feature=youtu.be" };

var concept = {
	nodes: [conceptText, conceptGH, conceptTech, conceptSite, conceptNode, presentation],
	links: [{ source: 'concept', target: 'conceptGH' }, { source: 'concept', target: 'conceptTech' }, { source: 'concept', target: 'conceptSite' }, { source: 'concept', target: 'conceptText' }, { source: 'concept', target: 'present' }]

	// NodeJS, Express, PostGres, Amazon, D3, pm2

};var express = { id: 'express', img: 'express.png', size: 4 * ratio, display: "Express JS" };
var postgres = { id: 'postgres', img: 'postgres.png', size: 4 * ratio, display: "PostgreSQL" };
var amazon = { id: 'amazon', img: 'aws.png', size: 4 * ratio, display: "AWS EC2" };
var D3 = { id: 'D3', img: 'D3.png', size: 4 * ratio, display: "D3" };
var pm2 = { id: 'pm2', img: 'pm2-logo.png', size: 4 * ratio, display: "pm2" };
var react = { id: 'react', img: 'react.png', size: 5 * ratio, display: "React" };

var ConceptTech = {
	nodes: [conceptNode, NodeJS, express, postgres, amazon, D3, pm2, react],
	links: [{ source: 'concept', target: 'nodeJS' }, { source: 'concept', target: 'express' }, { source: 'concept', target: 'postgres' }, { source: 'concept', target: 'amazon' }, { source: 'concept', target: 'D3' }, { source: 'concept', target: 'pm2' }, { source: 'concept', target: 'react' }]
};

var thisSite = {
	nodes: [ThisNode, NodeJS, express, amazon, D3, pm2, react],
	links: [{ source: 'this', target: 'nodeJS' }, { source: 'this', target: 'express' }, { source: 'this', target: 'amazon' }, { source: 'this', target: 'D3' }, { source: 'this', target: 'pm2' }, { source: 'this', target: 'react' }]
};

var mobileOpening = {
	nodes: [CodeNode, MeNode, MusicNode],
	links: [{ source: 'me', target: 'Code' }, { source: 'me', target: 'Music' }]
};

exports.default = {
	DeskOpening: DeskOpening,
	mobileOpening: mobileOpening,
	Code: Code,
	me: me,
	Music: Music,
	Projects: Projects,
	genie: genie,
	concept: concept,
	GenieTech: GenieTech,
	ConceptTech: ConceptTech,
	thisSite: thisSite
};

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map