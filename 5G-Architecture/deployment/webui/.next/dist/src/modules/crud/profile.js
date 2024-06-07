'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfile = exports.updateProfile = exports.createProfile = exports.fetchProfile = exports.fetchProfiles = exports.URL = exports.MODEL = undefined;

var _actions = require('./actions');

var MODEL = exports.MODEL = 'profiles';
var URL = exports.URL = '/Profile';

var fetchProfiles = exports.fetchProfiles = function fetchProfiles() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _actions.fetchCollection)(MODEL, URL, params);
};

var fetchProfile = exports.fetchProfile = function fetchProfile(_id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.fetchDocument)(MODEL, _id, URL + '/' + _id, params);
};

var createProfile = exports.createProfile = function createProfile() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.createDocument)(MODEL, URL, params, data);
};

var updateProfile = exports.updateProfile = function updateProfile(_id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return (0, _actions.updateDocument)(MODEL, _id, URL + '/' + _id, params, data);
};

var deleteProfile = exports.deleteProfile = function deleteProfile(_id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _actions.deleteDocument)(MODEL, _id, URL + '/' + _id, params);
};