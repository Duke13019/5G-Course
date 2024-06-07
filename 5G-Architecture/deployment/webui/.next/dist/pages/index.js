'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../src/modules/store.js');

var _withSession = require('../src/helpers/with-session');

var _withSession2 = _interopRequireDefault(_withSession);

var _Auth = require('../src/containers/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

var _App = require('../src/containers/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Restricted = function Restricted(Component) {
  var checkAuth = function checkAuth(props) {
    return props.isLoggedIn ? _react2.default.createElement(Component, props) : _react2.default.createElement(_Auth2.default, null);
  };

  return (0, _withSession2.default)(checkAuth);
};

var Index = Restricted(function (_ref) {
  var session = _ref.session;
  return _react2.default.createElement('div', null, _react2.default.createElement(_App2.default, { session: session }));
});

Index.propTypes = {
  session: _propTypes2.default.object.isRequired
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(Index);