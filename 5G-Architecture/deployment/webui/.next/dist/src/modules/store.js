'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _typeof2 = require('next/node_modules/babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _sagas = require('./sagas');

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = exports.initStore = function initStore() {

  var composeEnhancers = process.env.NODE_ENV === 'development' && (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : _redux.compose;

  var sagaMiddleware = (0, _reduxSaga2.default)();
  var enhancer = composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware));

  var store = (0, _redux.createStore)(_reducers2.default, enhancer);
  sagaMiddleware.run(_sagas2.default);

  return store;
};