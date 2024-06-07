'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('next/node_modules/babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = require('next/node_modules/babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = [];

function notifications() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.NOTIFICATION.SHOW:
      var type = action.type,
          rest = (0, _objectWithoutProperties3.default)(action, ['type']);

      return [].concat((0, _toConsumableArray3.default)(state), [(0, _extends3.default)({}, rest, { uid: action.uid })]);
    case _actions.NOTIFICATION.HIDE:
      return state.filter(function (notification) {
        return notification.uid !== action.uid;
      });
    case _actions.NOTIFICATION.CLEAR:
      return [];
  }
  return state;
}

exports.default = notifications;