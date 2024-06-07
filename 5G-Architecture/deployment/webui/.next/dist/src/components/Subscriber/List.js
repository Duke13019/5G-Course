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

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _ = require('..');

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    margin: 0.5rem 0.25rem;\n  '], ['\n    margin: 0.5rem 0.25rem;\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-13k69tf-0'
})(['display:block;margin:1rem 0.5rem;', ' .subscriber-enter{animation:', ' .3s ease-in;animation-fill-mode:forwards;}.subscriber-leave{animation:', ' .15s ease-in;animation-fill-mode:forwards;}'], _styleUtils.media.mobile(_templateObject), _styleUtils.transitions.stretchOut, _styleUtils.transitions.shrinkIn);

var propTypes = {
  subscribers: _propTypes2.default.arrayOf(_propTypes2.default.object),
  onView: _propTypes2.default.func,
  onEdit: _propTypes2.default.func,
  onDelete: _propTypes2.default.func,
  search: _propTypes2.default.string
};

var List = function List(_ref) {
  var subscribers = _ref.subscribers,
      deletedImsi = _ref.deletedImsi,
      onView = _ref.onView,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      search = _ref.search;

  function pred(s) {
    if (s.msisdn && s.msisdn[0] && s.msisdn[0].indexOf(search) !== -1 || s.msisdn && s.msisdn[1] && s.msisdn[1].indexOf(search) !== -1 || s.imsi.indexOf(search) !== -1) {
      return true;
    }
  }
  var subscriberList = subscribers.filter(pred).sort(function (a, b) {
    if (a.imsi > b.imsi) return 1;
    if (a.imsi < b.imsi) return -1;
    return 0;
  }).map(function (subscriber) {
    return _react2.default.createElement(_Item2.default, {
      key: subscriber.imsi,
      subscriber: subscriber,
      disabled: deletedImsi === subscriber.imsi,
      onView: onView,
      onEdit: onEdit,
      onDelete: onDelete });
  });

  return _react2.default.createElement(Wrapper, null, _react2.default.createElement(_CSSTransitionGroup2.default, {
    transitionName: 'subscriber',
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 150 }, subscriberList));
};

exports.default = List;