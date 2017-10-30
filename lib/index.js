'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentEditable = function (_Component) {
  _inherits(ContentEditable, _Component);

  function ContentEditable(props) {
    _classCallCheck(this, ContentEditable);

    var _this = _possibleConstructorReturn(this, (ContentEditable.__proto__ || Object.getPrototypeOf(ContentEditable)).call(this, props));

    _this._onChange = _this._onChange.bind(_this);
    _this._onPaste = _this._onPaste.bind(_this);
    return _this;
  }

  _createClass(ContentEditable, [{
    key: '_onChange',
    value: function _onChange(ev) {
      var method = this.getInnerMethod();
      var value = this.refs.element[method];

      this.props.onChange(ev, value);
    }
  }, {
    key: '_onPaste',
    value: function _onPaste(ev) {
      var _props = this.props,
          onPaste = _props.onPaste,
          contentEditable = _props.contentEditable;


      if (contentEditable === 'plaintext-only') {
        ev.preventDefault();
        var text = ev.clipboardData.getData("text");
        document.execCommand('insertText', false, text);
      }

      if (onPaste) {
        onPaste(ev);
      }
    }
  }, {
    key: 'getInnerMethod',
    value: function getInnerMethod() {
      return this.props.contentEditable === 'plaintext-only' ? 'innerText' : 'innerHTML';
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var method = this.getInnerMethod();
      return nextProps.html !== this.el[method];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          tagName = _props2.tagName,
          html = _props2.html,
          contentEditable = _props2.contentEditable,
          props = _objectWithoutProperties(_props2, ['tagName', 'html', 'contentEditable']);

      var Element = tagName || "div";

      return _react2.default.createElement(Element, _extends({}, props, {
        ref: function ref(el) {
          _this2.el = el;
        },
        dangerouslySetInnerHTML: { __html: html },
        contentEditable: contentEditable === 'false' ? false : true,
        onInput: this._onChange,
        onPaste: this._onPaste
      }));
    }
  }]);

  return ContentEditable;
}(_react.Component);

exports.default = ContentEditable;
