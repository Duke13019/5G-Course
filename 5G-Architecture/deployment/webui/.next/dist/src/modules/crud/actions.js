'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CRUD = exports.CRUD = {
  FETCH: 'crud/FETCH',
  FETCH_SUCCESS: 'crud/FETCH_SUCCESS',
  FETCH_FAILURE: 'crud/FETCH_FAILURE',
  FETCH_ONE: 'crud/FETCH_ONE',
  FETCH_ONE_SUCCESS: 'crud/FETCH_ONE_SUCCESS',
  FETCH_ONE_FAILURE: 'crud/FETCH_ONE_FAILURE',
  CREATE: 'crud/CREATE',
  CREATE_SUCCESS: 'crud/CREATE_SUCCESS',
  CREATE_FAILURE: 'crud/CREATE_FAILURE',
  UPDATE: 'crud/UPDATE',
  UPDATE_SUCCESS: 'crud/UPDATE_SUCCESS',
  UPDATE_FAILURE: 'crud/UPDATE_FAILURE',
  DELETE: 'crud/DELETE',
  DELETE_SUCCESS: 'crud/DELETE_SUCCESS',
  DELETE_FAILURE: 'crud/DELETE_FAILURE',
  CLEAR_ACTION_STATUS: 'crud/CLEAR_ACTION_STATUS'
};

var fetchCollection = exports.fetchCollection = function fetchCollection(model, url) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var idProperty = options.idProperty || '_id';
  return {
    type: CRUD.FETCH,
    meta: {
      success: CRUD.FETCH_SUCCESS,
      failure: CRUD.FETCH_FAILURE,
      model: model,
      idProperty: idProperty,
      params: params
    },
    payload: {
      method: 'get',
      url: url,
      params: params
    }
  };
};

var fetchDocument = exports.fetchDocument = function fetchDocument(model, id, url) {
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var idProperty = options.idProperty || '_id';
  return {
    type: CRUD.FETCH_ONE,
    meta: {
      success: CRUD.FETCH_ONE_SUCCESS,
      failure: CRUD.FETCH_ONE_FAILURE,
      model: model,
      idProperty: idProperty,
      id: id
    },
    payload: {
      method: 'get',
      url: url,
      params: params
    }
  };
};

var createDocument = exports.createDocument = function createDocument(model, url) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var idProperty = options.idProperty || '_id';
  return {
    type: CRUD.CREATE,
    meta: {
      success: CRUD.CREATE_SUCCESS,
      failure: CRUD.CREATE_FAILURE,
      model: model,
      idProperty: idProperty
    },
    payload: {
      method: 'post',
      url: url,
      params: params,
      data: data
    }
  };
};

var updateDocument = exports.updateDocument = function updateDocument(model, id, url) {
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  var idProperty = options.idProperty || '_id';
  return {
    type: CRUD.UPDATE,
    meta: {
      success: CRUD.UPDATE_SUCCESS,
      failure: CRUD.UPDATE_FAILURE,
      model: model,
      idProperty: idProperty,
      id: id
    },
    payload: {
      method: 'patch',
      url: url,
      params: params,
      data: data
    }
  };
};

var deleteDocument = exports.deleteDocument = function deleteDocument(model, id, url) {
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var idProperty = options.idProperty || '_id';
  return {
    type: CRUD.DELETE,
    meta: {
      success: CRUD.DELETE_SUCCESS,
      failure: CRUD.DELETE_FAILURE,
      model: model,
      idProperty: idProperty,
      id: id
    },
    payload: {
      method: 'delete',
      url: url,
      params: params
    }
  };
};

var clearActionStatus = exports.clearActionStatus = function clearActionStatus(model, action) {
  return {
    type: CRUD.CLEAR_ACTION_STATUS,
    payload: { model: model, action: action }
  };
};