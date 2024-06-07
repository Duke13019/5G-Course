'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAccount = exports.updateAccount = exports.createAccount = exports.fetchAccount = exports.fetchAccounts = exports.URL = exports.MODEL = undefined;

var _actions = require('./actions');

var MODEL = exports.MODEL = 'accounts';
var URL = exports.URL = '/Account';

var fetchAccounts = exports.fetchAccounts = function fetchAccounts() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _actions.fetchCollection)(MODEL, URL, params, { idProperty: 'username' });
};

var fetchAccount = exports.fetchAccount = function fetchAccount(username) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.fetchDocument)(MODEL, username, URL + '/' + username, params, { idProperty: 'username' });
};

var createAccount = exports.createAccount = function createAccount() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.createDocument)(MODEL, URL, params, data, { idProperty: 'username' });
};

var updateAccount = exports.updateAccount = function updateAccount(username) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return (0, _actions.updateDocument)(MODEL, username, URL + '/' + username, params, data, { idProperty: 'username' });
};

var deleteAccount = exports.deleteAccount = function deleteAccount(username) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.deleteDocument)(MODEL, username, URL + '/' + username, params, { idProperty: 'username' });
};