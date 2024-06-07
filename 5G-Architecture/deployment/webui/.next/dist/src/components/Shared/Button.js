'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('next/node_modules/babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _withRipple = require('./withRipple');

var _withRipple2 = _interopRequireDefault(_withRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBgColor(props) {
  var color = _openColor2.default.indigo[7];
  var colorDark = _openColor2.default.indigo[8];

  // Determine color based on props
  if (props.secondary) {
    color = _openColor2.default.violet[7];
    colorDark = _openColor2.default.violet[8];
  }
  if (props.info) {
    color = _openColor2.default.gray[7];
    colorDark = _openColor2.default.gray[8];
  }
  if (props.danger) {
    color = _openColor2.default.red[7];
    colorDark = _openColor2.default.red[8];
  }
  if (props.success) {
    color = _openColor2.default.lime[7];
    colorDark = _openColor2.default.lime[8];
  }
  if (props.outline || props.clear) {
    color = 'transparent';
    colorDark = 'transparent';
  }

  /* eslint-disable max-len */
  return 'background: ' + color + '; background: linear-gradient(to bottom, ' + color + ' 0%, ' + colorDark + ' 100%);';
  /* eslint-enable max-len */
}

function getHoverColor(props) {
  var color = _openColor2.default.indigo[8];
  if (props.secondary) color = _openColor2.default.violet[8];
  if (props.info) color = _openColor2.default.gray[8];
  if (props.danger) color = _openColor2.default.red[8];
  if (props.success) color = _openColor2.default.lime[8];
  if (props.clear) color = 'transparent';

  return color;
}

function getActiveColor(props) {
  var color = _openColor2.default.indigo[9];
  if (props.secondary) color = _openColor2.default.violet[9];
  if (props.info) color = _openColor2.default.gray[9];
  if (props.danger) color = _openColor2.default.red[9];
  if (props.success) color = _openColor2.default.lime[9];

  return color;
}

function getColor(props) {
  if (props.primary) return _openColor2.default.indigo[7];
  if (props.secondary) return _openColor2.default.violet[7];
  if (props.info) return _openColor2.default.gray[7];
  if (props.danger) return _openColor2.default.red[7];
  if (props.success) return _openColor2.default.lime[7];
  return _openColor2.default.indigo[7]; // default
}

var ButtonWrapper = _styledComponents2.default.button.withConfig({
  componentId: 'sc-qropdj-0'
})(['outline:none;font-size:1rem;padding:8px 16px;font-weight:normal;width:', ';text-shadow:1px 1px 2px rgba(0,0,0,0.1);border-style:solid;border-width:', ';border-radius:4px;border-color:', ';color:', ';', ' ', ';', ';', ' ', ' ', ' ', ' &:hover{background:', ';', ' ', '}&:active{background:', ';color:', ';}'], function (props) {
  return props.w || 'auto';
}, function (props) {
  return props.outline && !props.clear ? '1px' : '0px';
}, function (props) {
  return getColor(props);
}, function (props) {
  return props.outline || props.clear ? getColor(props) : '#fff';
}, function (props) {
  return !props.outline && !props.clear && !props.flat && 'box-shadow: 1px 3px 6px rgba(0,0,0,0.1);';
}, function (props) {
  return getBgColor(props);
}, function (props) {
  return props.disabled && 'opacity: 0.5; cursor: not-allowed;';
}, function (props) {
  return props.small && 'padding: 4px 8px;';
}, function (props) {
  return props.large && 'padding: 12px 20px;';
}, function (props) {
  return props.small && 'font-size: 0.8rem;';
}, function (props) {
  return props.large && 'font-size: 1.5rem;';
}, function (props) {
  return getHoverColor(props);
}, function (props) {
  return !props.clear && 'color: #fff;';
}, function (props) {
  return !props.disabled && 'cursor: pointer;';
}, function (props) {
  return !props.clear && getActiveColor(props);
}, function (props) {
  return props.clear && getActiveColor(props);
});

var ButtonContent = _styledComponents2.default.div.withConfig({
  componentId: 'sc-qropdj-1'
})(['display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;', ';'], function (props) {
  return props.disabled && 'pointer-events: none;';
});

var Button = function Button(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children']);

  return _react2.default.createElement(ButtonWrapper, rest, _react2.default.createElement(ButtonContent, { disabled: rest.disabled }, children));
};

exports.default = (0, _withRipple2.default)(Button);