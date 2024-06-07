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

var circleAnim = (0, _styledComponents.keyframes)(['0%{transform:rotate(0deg);}50%{transform:rotate(180deg);}100%{transform:rotate(360deg);}']);

var getIconSize = function getIconSize(_ref) {
  var small = _ref.small,
      medium = _ref.medium,
      large = _ref.large;

  if (small) return '16px';
  if (medium) return '64px';
  if (large) return '96px';
  return '32px';
};

var getBorderWidth = function getBorderWidth(_ref2) {
  var small = _ref2.small,
      medium = _ref2.medium,
      large = _ref2.large;

  if (small) return '1px';
  if (medium) return '4px';
  if (large) return '6px';
  return '2px';
};

var Circle = _styledComponents2.default.div.withConfig({
  componentId: 'sc-o0s1k5-0'
})(['width:', ';height:', ';position:relative;display:inline-block;box-sizing:border-box;font-size:0px;color:', ';'], function (props) {
  return getIconSize(props);
}, function (props) {
  return getIconSize(props);
}, function (props) {
  return props.color || _openColor2.default.indigo[8];
});

var CircleInner = _styledComponents2.default.div.withConfig({
  componentId: 'sc-o0s1k5-1'
})(['position:relative;box-sizing:border-box;display:inline-block;float:none;width:', ';height:', ';background:transparent;border:', ' solid currentColor;border-bottom-color:transparent;border-Radius:100%;animation:', ' 0.75s linear infinite;'], function (props) {
  return getIconSize(props);
}, function (props) {
  return getIconSize(props);
}, function (props) {
  return getBorderWidth(props);
}, circleAnim);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-o0s1k5-2'
})(['text-align:', ';padding:', ';'], function (props) {
  return props.align || 'center';
}, function (props) {
  return props.padding || '2rem';
});

var Spinner = function Spinner(_ref3) {
  var sm = _ref3.sm,
      md = _ref3.md,
      lg = _ref3.lg,
      color = _ref3.color,
      align = _ref3.align,
      padding = _ref3.padding;
  return _react2.default.createElement(Wrapper, { align: align, padding: padding }, _react2.default.createElement(Circle, {
    small: sm,
    medium: md,
    large: lg,
    color: color
  }, _react2.default.createElement(CircleInner, {
    small: sm,
    medium: md,
    large: lg
  })));
};

exports.default = Spinner;