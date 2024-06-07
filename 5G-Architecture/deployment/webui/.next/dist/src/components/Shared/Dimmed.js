'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Black = _styledComponents2.default.div.withConfig({
  componentId: 'sc-hw01ia-0'
})(['position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:', ';background:rgba(0,0,0,0.3);'], function (p) {
  return p.zindex;
});

var Dimmed = function Dimmed(_ref) {
  var visible = _ref.visible,
      zindex = _ref.zindex;
  return _react2.default.createElement('div', null, visible && _react2.default.createElement(Black, { zindex: zindex }));
};

Dimmed.defaultProps = {
  visible: false,
  zindex: '300'
};

exports.default = Dimmed;