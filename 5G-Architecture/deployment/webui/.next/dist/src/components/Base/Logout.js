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

var _ = require('..');

var _styleUtils = require('../../helpers/style-utils');

var _person = require('react-icons/lib/md/person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: calc(100vw - 2rem);\n  '], ['\n    width: calc(100vw - 2rem);\n  ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  border: 1px solid ', ';\n  color: white;\n  background: ', ';\n  &:hover {\n    background: ', '\n  }\n  &:active {\n    background: ', '\n  }\n'], ['\n  border: 1px solid ', ';\n  color: white;\n  background: ', ';\n  &:hover {\n    background: ', '\n  }\n  &:active {\n    background: ', '\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  border: 1px solid ', ';\n  color: black;\n  background: ', ';\n  &:hover {\n    background: ', '\n  }\n  &:active {\n    background: ', '\n  }\n'], ['\n  border: 1px solid ', ';\n  color: black;\n  background: ', ';\n  &:hover {\n    background: ', '\n  }\n  &:active {\n    background: ', '\n  }\n']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-ansgl5-0'
})(['width:300px;', ''], _styleUtils.media.mobile(_templateObject));

var TitleWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-ansgl5-1'
})(['padding-left:1rem;line-height:3rem;font-size:1.2rem;color:white;background-color:', ';'], _openColor2.default.red[7]);

var ContentWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-ansgl5-2'
})(['padding:1rem 0 0 1rem;height:5rem;font-size:1rem;color:', ';background-color:', ';'], _openColor2.default.gray[7], _openColor2.default.gray[1]);

var ButtonWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-ansgl5-3'
})(['display:flex;justify-content:flex-end;background-color:', ';'], _openColor2.default.gray[2]);

var Button = _styledComponents2.default.button.withConfig({
  componentId: 'sc-ansgl5-4'
})(['margin:0.5rem;padding:0.3rem;width:4rem;text-align:center;font-size:0.9rem;border-radius:3px;outline:none;cursor:pointer;transition:all .3s;']);

var YesButton = Button.extend(_templateObject2, _openColor2.default.red[9], _openColor2.default.red[7], _openColor2.default.red[5], _openColor2.default.red[8]);

var NoButton = Button.extend(_templateObject3, _openColor2.default.gray[5], _openColor2.default.gray[3], _openColor2.default.gray[2], _openColor2.default.gray[4]);

var propTypes = {
  visible: _propTypes2.default.bool,
  onHide: _propTypes2.default.func,
  onLogout: _propTypes2.default.func
};

var Logout = function Logout(_ref) {
  var visible = _ref.visible,
      onHide = _ref.onHide,
      onLogout = _ref.onLogout;
  return _react2.default.createElement(_.Modal, {
    visible: visible,
    onOutside: onHide,
    transitionEnter: _styleUtils.transitions.slideDown + ' .5s ease-in-out',
    transitionLeave: _styleUtils.transitions.slideUp + ' .5s ease-in-out',
    transitionEnterTimeout: 500,
    transitionLeaveTimeout: 500 }, _react2.default.createElement(Wrapper, null, _react2.default.createElement(TitleWrapper, null, 'Logout'), _react2.default.createElement(ContentWrapper, null, 'Are you sure you want to logout?'), _react2.default.createElement(ButtonWrapper, null, _react2.default.createElement(YesButton, {
    onClick: onLogout }, 'Yes'), _react2.default.createElement(NoButton, {
    onClick: onHide }, 'No'))));
};

exports.default = Logout;