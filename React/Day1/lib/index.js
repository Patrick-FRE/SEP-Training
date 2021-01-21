"use strict";

var _Home = _interopRequireDefault(require("./components/Home"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_Home["default"], {
  name: "Patrick"
}), document.getElementById('root'));