'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-133inke-0'
})(['width:', ';height:', ';margin:0 auto;display:flex;align-items:center;justify-content:center;border-radius:calc(', ' * 0.5 );font-size:calc(', ' * 0.75);background:', ';color:', ';'], function (p) {
  return p.size;
}, function (p) {
  return p.size;
}, function (p) {
  return p.size;
}, function (p) {
  return p.size;
}, function (p) {
  return p.background;
}, function (p) {
  return p.color;
});

Wrapper.propTypes = {
  size: _propTypes2.default.string,
  background: _propTypes2.default.string,
  color: _propTypes2.default.string
};

var CircleIcon = function CircleIcon(_ref) {
  var children = _ref.children,
      size = _ref.size,
      background = _ref.background,
      color = _ref.color;
  return _react2.default.createElement(Wrapper, { size: size, background: background, color: color }, children);
};

CircleIcon.defaultProps = {
  size: '4rem',
  background: '#000',
  color: 'white'
};

exports.default = CircleIcon;