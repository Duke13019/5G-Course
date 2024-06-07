'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _Header = require('../../containers/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Sidebar = require('../../containers/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _package = require('../../../package');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1fw8mhi-0'
})(['display:flex;height:calc(100vh - 4rem);']);

var propTypes = {
  title: _propTypes2.default.string
};

var defaultProps = {
  title: 'Open5GS ' + _package2.default.version
};

var Layout = function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, title)), _react2.default.createElement(_Header2.default, null), _react2.default.createElement(Body, null, _react2.default.createElement(_Sidebar2.default, null), children));
};

Layout.defaultProps = defaultProps;

var ContainerWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1fw8mhi-1'
})(['flex:1;overflow-y:scroll;']);

Layout.Container = function (_ref2) {
  var visible = _ref2.visible,
      children = _ref2.children;
  return visible ? _react2.default.createElement(ContainerWrapper, null, children) : null;
};

Layout.Content = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1fw8mhi-2'
})(['']);

exports.default = Layout;