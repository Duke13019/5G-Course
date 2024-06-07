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

var _add = require('react-icons/lib/md/add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-gptr28-0'
})(['position:fixed;bottom:2rem;right:2rem;width:4rem;height:4rem;border:1px solid ', ';color:white;background:', ';border-radius:2rem;font-size:2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;&:hover{transform:translateY(-0.5rem);background:', ';}'], _openColor2.default.pink[9], _openColor2.default.pink[8], _openColor2.default.pink[6]);

var FloatingButton = function FloatingButton(_ref) {
  var onClick = _ref.onClick;
  return _react2.default.createElement(Wrapper, { onClick: onClick }, _react2.default.createElement(_add2.default, null));
};

exports.default = FloatingButton;