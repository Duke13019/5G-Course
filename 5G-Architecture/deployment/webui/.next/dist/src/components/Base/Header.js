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

var _ = require('..');

var _menu = require('react-icons/lib/md/menu');

var _menu2 = _interopRequireDefault(_menu);

var _person = require('react-icons/lib/md/person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1eik7dm-0'
})(['display:flex;align-items:center;height:4rem;color:white;background:', ';'], _openColor2.default.indigo[9]);

var Menu = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1eik7dm-1'
})(['display:inline-flex;margin:0 1.5rem;cursor:pointer;font-size:1.5rem;']);

var Title = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1eik7dm-2'
})(['margin:0 0.5rem;font-size:1.5rem;font-family:\'Ubuntu\',sans-serif;']);

var Thumbnail = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1eik7dm-3'
})(['padding:1rem 0;position:absolute;right:2rem;cursor:pointer;']);

var propTypes = {
  onSidebarToggle: _propTypes2.default.func.isRequired,
  onLogoutRequest: _propTypes2.default.func.isRequired
};

var Header = function Header(_ref) {
  var onSidebarToggle = _ref.onSidebarToggle,
      onLogoutRequest = _ref.onLogoutRequest;
  return _react2.default.createElement(Wrapper, null, _react2.default.createElement(Menu, { onClick: onSidebarToggle }, _react2.default.createElement(_menu2.default, null)), _react2.default.createElement(Title, null, 'Open5GS'), _react2.default.createElement(Thumbnail, { onClick: onLogoutRequest }, _react2.default.createElement(_.Tooltip, { bottom: true, content: 'Logout', width: '60px' }, _react2.default.createElement(_.CircleIcon, { size: '2rem', background: _openColor2.default['pink'][4] }, _react2.default.createElement(_person2.default, null)))));
};

exports.default = Header;