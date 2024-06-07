'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducers = require('./crud/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _sidebar = require('./sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _reducers3 = require('./notification/reducers');

var _reducers4 = _interopRequireDefault(_reducers3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  crud: _reducers2.default,
  sidebar: _sidebar2.default,
  notifications: _reducers4.default
});