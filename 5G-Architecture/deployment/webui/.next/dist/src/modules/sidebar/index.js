'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectView = exports.setVisibility = exports.toggle = exports.SIDEBAR = undefined;

var _defineProperty2 = require('next/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reduxActions = require('redux-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleActions;

var SIDEBAR = exports.SIDEBAR = {
  TOGGLE: 'sidebar/TOGGLE',
  SET_VISIBILITY: 'sidebar/SET_VISIBILITY',
  SELECT_VIEW: 'sidebar/SELECT_VIEW'

  /*
    UIAction.toggleSidebar
      payload : null
  
    UIAction.setSidebarVisibiliy
      payload : {
        isOpen
      } 
  
    UIAction.selectView
      payload : {
        view
      }
  */
};var toggle = exports.toggle = (0, _reduxActions.createAction)(SIDEBAR.TOGGLE);
var setVisibility = exports.setVisibility = (0, _reduxActions.createAction)(SIDEBAR.SET_VISIBILITY);
var selectView = exports.selectView = (0, _reduxActions.createAction)(SIDEBAR.SELECT_VIEW);

var initialState = {
  isOpen: false,
  view: "subscriber"
};

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, SIDEBAR.TOGGLE, function (state, action) {
  return (0, _extends3.default)({}, state, {
    isOpen: !state.isOpen
  });
}), (0, _defineProperty3.default)(_handleActions, SIDEBAR.SET_VISIBILITY, function (state, action) {
  return (0, _extends3.default)({}, state, {
    isOpen: action.payload
  });
}), (0, _defineProperty3.default)(_handleActions, SIDEBAR.SELECT_VIEW, function (state, action) {
  return (0, _extends3.default)({}, state, {
    view: action.payload
  });
}), _handleActions), initialState);