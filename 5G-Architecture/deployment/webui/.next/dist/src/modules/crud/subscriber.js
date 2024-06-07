'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSubscriber = exports.updateSubscriber = exports.createSubscriber = exports.fetchSubscriber = exports.fetchSubscribers = exports.URL = exports.MODEL = undefined;

var _actions = require('./actions');

var MODEL = exports.MODEL = 'subscribers';
var URL = exports.URL = '/Subscriber';

var fetchSubscribers = exports.fetchSubscribers = function fetchSubscribers() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _actions.fetchCollection)(MODEL, URL, params, { idProperty: 'imsi' });
};

var fetchSubscriber = exports.fetchSubscriber = function fetchSubscriber(imsi) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.fetchDocument)(MODEL, imsi, URL + '/' + imsi, params, { idProperty: 'imsi' });
};

var createSubscriber = exports.createSubscriber = function createSubscriber() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.createDocument)(MODEL, URL, params, data, { idProperty: 'imsi' });
};

var updateSubscriber = exports.updateSubscriber = function updateSubscriber(imsi) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return (0, _actions.updateDocument)(MODEL, imsi, URL + '/' + imsi, params, data, { idProperty: 'imsi' });
};

var deleteSubscriber = exports.deleteSubscriber = function deleteSubscriber(imsi) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.deleteDocument)(MODEL, imsi, URL + '/' + imsi, params, { idProperty: 'imsi' });
};