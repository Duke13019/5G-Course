'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dimmed = require('./Dimmed');

var _Dimmed2 = _interopRequireDefault(_Dimmed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: calc(100vw - 2rem);\n  '], ['\n    width: calc(100vw - 2rem);\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-hbbw66-0'
})(['display:flex;flex-direction:column;postion:relative;width:300px;', ' background:white;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);'], _styleUtils.media.mobile(_templateObject));

var Message = _styledComponents2.default.div.withConfig({
  componentId: 'sc-hbbw66-1'
})(['padding:2rem;']);

var Buttons = _styledComponents2.default.div.withConfig({
  componentId: 'sc-hbbw66-2'
})(['display:flex;justify-content:flex-end;padding:1rem;']);

var Confirm = function Confirm(_ref) {
  var visible = _ref.visible,
      onOutside = _ref.onOutside,
      message = _ref.message,
      buttons = _ref.buttons;

  var buttonList = buttons.map(function (button) {
    return _react2.default.createElement(_Button2.default, {
      key: button.text,
      clear: true,
      danger: button.danger === true,
      info: button.info === true,
      onClick: button.action }, button.text);
  });
  return _react2.default.createElement('div', null, _react2.default.createElement(_Modal2.default, {
    visible: visible,
    onOutside: onOutside,
    zindex: '1000',
    transitionEnterTimeout: 10,
    transitionLeaveTimeout: 30 }, _react2.default.createElement(Wrapper, null, _react2.default.createElement(Message, null, message), _react2.default.createElement(Buttons, null, buttonList))), _react2.default.createElement(_Dimmed2.default, { visible: visible, zindex: '999' }));
};

Confirm.defaultProps = {
  visible: false,
  disabled: true,
  onOutside: function onOutside() {}
};

exports.default = Confirm;