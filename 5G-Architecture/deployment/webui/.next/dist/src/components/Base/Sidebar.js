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

var _styleUtils = require('../../helpers/style-utils');

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _personAdd = require('react-icons/lib/md/person-add');

var _personAdd2 = _interopRequireDefault(_personAdd);

var _contentCopy = require('react-icons/lib/md/content-copy');

var _contentCopy2 = _interopRequireDefault(_contentCopy);

var _vpnKey = require('react-icons/lib/md/vpn-key');

var _vpnKey2 = _interopRequireDefault(_vpnKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    position: absolute;\n    top: 4rem;\n    left: 0;\n    width: ', ';\n    height: ', ';\n    transition: height .2s ease-in-out;\n  '], ['\n    position: absolute;\n    top: 4rem;\n    left: 0;\n    width: ', ';\n    height: ', ';\n    transition: height .2s ease-in-out;\n  ']);

var Menu = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1n42jc7-0'
})(['display:block;width:', ';transition:width .2s ease-in-out;overflow:hidden;position:relative;z-index:1;', ' background-color:', ';box-shadow:3px 3px 6px rgba(0,0,0,0.1),3px 3px 6px rgba(0,0,0,0.2);'], function (p) {
  return p.visible ? p.width : '0';
}, _styleUtils.media.mobile(_templateObject, function (p) {
  return p.visible ? '100%' : '0';
}, function (p) {
  return p.visible ? '100%' : '0';
}), _openColor2.default.indigo[5]);

var StyledItem = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1n42jc7-1'
})(['display:flex;align-items:center;padding :1rem;transition:all .3s;cursor:pointer;color:white;background:', ';border-left:', ';&:hover{background:', ';}'], function (p) {
  return p.active ? _openColor2.default.indigo[7] : _openColor2.default.indigo[5];
}, function (p) {
  return p.active ? '12px solid ' + _openColor2.default.indigo[6] : '12px solid ' + _openColor2.default.indigo[4];
}, function (p) {
  return p.active ? _openColor2.default.indigo[7] : _openColor2.default.indigo[6];
});

var Icon = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1n42jc7-2'
})(['display:inline-flex;padding-left:1rem;font-size:1.5rem;']);

var Title = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1n42jc7-3'
})(['padding-left:2rem;font-size:1.2rem;']);

var Item = function Item(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      name = _ref.name,
      onSelect = _ref.onSelect;
  return _react2.default.createElement(StyledItem, {
    onClick: function onClick() {
      return onSelect(name);
    },
    active: name === selected }, children);
};

var propTypes = {
  isOpen: _propTypes2.default.bool,
  width: _propTypes2.default.string,
  selectedView: _propTypes2.default.string,
  onSelectView: _propTypes2.default.func
};

var defaultProps = {
  width: "16rem"
};

var Sidebar = function Sidebar(_ref2) {
  var isOpen = _ref2.isOpen,
      width = _ref2.width,
      selectedView = _ref2.selectedView,
      onSelectView = _ref2.onSelectView;
  return _react2.default.createElement(Menu, { visible: isOpen, width: width }, _react2.default.createElement(Item, { name: 'subscriber', selected: selectedView, onSelect: onSelectView }, _react2.default.createElement(Icon, null, _react2.default.createElement(_personAdd2.default, null)), _react2.default.createElement(Title, null, 'Subscriber')), _react2.default.createElement(Item, { name: 'profile', selected: selectedView, onSelect: onSelectView }, _react2.default.createElement(Icon, null, _react2.default.createElement(_contentCopy2.default, null)), _react2.default.createElement(Title, null, 'Profile')), _react2.default.createElement(Item, { name: 'account', selected: selectedView, onSelect: onSelectView }, _react2.default.createElement(Icon, null, _react2.default.createElement(_vpnKey2.default, null)), _react2.default.createElement(Title, null, 'Account')));
};

Sidebar.defaultProps = defaultProps;

exports.default = Sidebar;