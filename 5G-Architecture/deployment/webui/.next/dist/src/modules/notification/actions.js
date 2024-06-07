'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOTIFICATION = undefined;
exports.show = show;
exports.success = success;
exports.error = error;
exports.warning = warning;
exports.info = info;
exports.hide = hide;
exports.clear = clear;

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOTIFICATION = exports.NOTIFICATION = {
  SHOW: 'notification/SHOW',
  HIDE: 'notification/HIDE',
  CLEAR: 'notification/CLEAR'
};

function show() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

  return (0, _extends3.default)({
    type: NOTIFICATION.SHOW
  }, opts, {
    uid: opts.uid || Date.now(),
    position: opts.position || 'bc',
    autoDismiss: opts.autoDismiss === undefined ? 2 : opts.autoDismiss,
    level: level
  });
}

function success(opts) {
  return show(opts, 'success');
}

function error(opts) {
  return show(opts, 'error');
}

function warning(opts) {
  return show(opts, 'warning');
}

function info(opts) {
  return show(opts, 'info');
}

function hide(uid) {
  return {
    type: NOTIFICATION.HIDE,
    uid: uid
  };
}

function clear() {
  return { type: NOTIFICATION.CLEAR };
}