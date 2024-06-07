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

var _ = require('..');

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    margin: 0.5rem 0.25rem;\n  '], ['\n    margin: 0.5rem 0.25rem;\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-hckcdw-0'
})(['display:block;margin:2rem;', ''], _styleUtils.media.mobile(_templateObject));

var propTypes = {
  profiles: _propTypes2.default.arrayOf(_propTypes2.default.object),
  onView: _propTypes2.default.func,
  onEdit: _propTypes2.default.func,
  onDelete: _propTypes2.default.func
};

var List = function List(_ref) {
  var profiles = _ref.profiles,
      deletedId = _ref.deletedId,
      onView = _ref.onView,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete;

  var profileList = profiles.map(function (profile) {
    return _react2.default.createElement(_Item2.default, {
      key: profile._id,
      profile: profile,
      disabled: deletedId === profile._id,
      onView: onView,
      onEdit: onEdit,
      onDelete: onDelete });
  });

  return _react2.default.createElement(Wrapper, null, profileList);
};

exports.default = List;