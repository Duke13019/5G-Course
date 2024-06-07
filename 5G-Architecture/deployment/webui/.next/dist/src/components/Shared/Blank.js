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

var _importContacts = require('react-icons/lib/md/import-contacts');

var _importContacts2 = _interopRequireDefault(_importContacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1gvl0wa-0'
})(['position:relative;display:block;margin-top :6rem;']);

var StyledTitle = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1gvl0wa-1'
})(['display:block;margin-top:2rem;text-align:center;font-size:1rem;font-weight:bold;color:', ';cursor:pointer;'], _openColor2.default.indigo[8]);

var StyledBody = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1gvl0wa-2'
})(['display:block;margin-top:2rem;text-align:center;font-size:1rem;font-weight:300;color:', ';cursor:default;'], _openColor2.default.gray[6]);

var Blank = function Blank(_ref) {
  var visible = _ref.visible,
      title = _ref.title,
      body = _ref.body,
      onTitle = _ref.onTitle;
  return visible ? _react2.default.createElement(Wrapper, null, _react2.default.createElement(_.CircleIcon, { size: '12rem', background: _openColor2.default.gray[0], color: _openColor2.default.gray[8] }, _react2.default.createElement(_importContacts2.default, null)), _react2.default.createElement(StyledBody, null, body), _react2.default.createElement(StyledTitle, { onClick: onTitle }, title)) : null;
};

Blank.defaultProps = {
  visible: false,
  title: "ADD A DATA",
  body: "You have no data... yet!"
};

exports.default = Blank;