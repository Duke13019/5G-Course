'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('./actions');

var _immutable = require('immutable');

var _lang = require('lodash/lang');

var byIdInitialState = (0, _immutable.fromJS)({});
var collectionInitialState = (0, _immutable.fromJS)({
  params: {},
  otherInfo: {},
  ids: [],
  fetchedAt: null,
  error: null
});

var collectionsInitialState = (0, _immutable.fromJS)([]);

var actionStatusInitialState = (0, _immutable.fromJS)({
  create: {},
  update: {},
  delete: {}
});

var modelInitialState = (0, _immutable.fromJS)({
  byId: byIdInitialState,
  collections: collectionsInitialState,
  actionStatus: actionStatusInitialState
});

var initialState = (0, _immutable.fromJS)({});

function byIdReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : byIdInitialState;
  var action = arguments[1];

  var idProperty = action.meta ? action.meta.idProperty : '_id';
  var id = action.meta ? action.meta.id : undefined;
  switch (action.type) {
    case _actions.CRUD.FETCH_SUCCESS:
      var data = state.toJS();
      action.payload.data.forEach(function (document) {
        data[document[idProperty]] = {
          document: document,
          fetchedAt: action.meta.fetchedAt,
          error: null
        };
      });
      return (0, _immutable.fromJS)(data);
    case _actions.CRUD.FETCH_ONE:
      return state.setIn([id, 'fetchedAt'], 0).setIn([id, 'error'], null);
    case _actions.CRUD.FETCH_ONE_SUCCESS:
      return state.setIn([id, 'fetchedAt'], action.meta.fetchedAt).setIn([id, 'error'], null).setIn([id, 'document'], (0, _immutable.fromJS)(action.payload.data));
    case _actions.CRUD.FETCH_ONE_FAILURE:
      return state.setIn([id, 'fetchedAt'], action.meta.fetchedAt).setIn([id, 'error'], action.payload).setIn([id, 'document'], null);
    case _actions.CRUD.CREATE_SUCCESS:
      return state.set(action.payload.data[idProperty], (0, _immutable.fromJS)({
        document: action.payload.data,
        fetchedAt: action.meta.fetchedAt,
        error: null
      }));
    case _actions.CRUD.UPDATE:
      return state.setIn([id, 'fetchedAt'], 0);
    case _actions.CRUD.UPDATE_SUCCESS:
      return state.set(id, (0, _immutable.fromJS)({
        document: action.payload.data,
        fetchedAt: action.meta.fetchedAt,
        error: null
      }));
    case _actions.CRUD.DELETE_SUCCESS:
      return state.delete(id);
    default:
      return state;
  }
}

function collectionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : collectionInitialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.CRUD.FETCH:
      return state.set('params', (0, _immutable.fromJS)(action.meta.params)).set('fetchedAt', 0).set('error', null);
    case _actions.CRUD.FETCH_SUCCESS:
      var idProperty = action.meta ? action.meta.idProperty : '_id';
      var data = action.payload.data;
      var ids = data.map(function (document) {
        return document[idProperty];
      });
      return state.set('params', (0, _immutable.fromJS)(action.meta.params)).set('ids', (0, _immutable.fromJS)(ids)).set('otherInfo', (0, _immutable.fromJS)(action.payload).delete('data')).set('error', null).set('fetchedAt', action.meta.fetchedAt);
    case _actions.CRUD.FETCH_FAILURE:
      return state.set('params', (0, _immutable.fromJS)(action.meta.params)).set('error', action.payload);
    default:
      return state;
  }
}

function collectionsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : collectionsInitialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.CRUD.FETCH:
    case _actions.CRUD.FETCH_SUCCESS:
    case _actions.CRUD.FETCH_FAILURE:
      var index = state.findIndex(function (collection) {
        return (0, _lang.isEqual)(collection.toJS().params, action.meta.params);
      });
      if (index < 0) {
        return state.push(collectionReducer(undefined, action));
      }
      return state.update(index, function (s) {
        return collectionReducer(s, action);
      });
    case _actions.CRUD.CREATE_SUCCESS:
      var idProperty = action.meta ? action.meta.idProperty : '_id';
      /* At this point, the ID is stored in the 0-index collection.
         Later you will need to find the collection to which you want to add the ID. */
      return state.update(0, function (item) {
        return item.set('ids', item.get('ids').push(action.payload.data[idProperty]));
      });
    case _actions.CRUD.DELETE_SUCCESS:
      var id = action.meta ? action.meta.id : undefined;
      /* Find ID from all collections and delete them if they exist. */
      return state.map(function (item, idx) {
        return item.set('ids', item.get('ids').filter(function (x) {
          return x !== id;
        }));
      });
    default:
      return state;
  }
}

function actionStatusReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : actionStatusInitialState;
  var action = arguments[1];

  var idProperty = action.meta ? action.meta.idProperty : '_id';
  var id = action.meta ? action.meta.id : undefined;
  switch (action.type) {
    case _actions.CRUD.CLEAR_ACTION_STATUS:
      return state.set(action.payload.action, (0, _immutable.fromJS)({}));
    case _actions.CRUD.CREATE:
      return state.set('create', (0, _immutable.fromJS)({
        pending: true,
        id: null
      }));
    case _actions.CRUD.CREATE_SUCCESS:
      return state.set('create', (0, _immutable.fromJS)({
        pending: false,
        id: action.payload.data[idProperty],
        isSuccess: !action.error,
        payload: action.payload
      }));
    case _actions.CRUD.CREATE_FAILURE:
      return state.set('create', (0, _immutable.fromJS)({
        pending: false,
        id: null,
        isSuccess: !action.error,
        payload: action.payload
      }));
    case _actions.CRUD.UPDATE:
      return state.set('update', (0, _immutable.fromJS)({
        pending: true,
        id: id
      }));
    case _actions.CRUD.UPDATE_SUCCESS:
    case _actions.CRUD.UPDATE_FAILURE:
      return state.set('update', (0, _immutable.fromJS)({
        pending: false,
        id: id,
        isSuccess: !action.error,
        payload: action.payload
      }));
    case _actions.CRUD.DELETE:
      return state.set('delete', (0, _immutable.fromJS)({
        pending: true,
        id: id
      }));
    case _actions.CRUD.DELETE_SUCCESS:
    case _actions.CRUD.DELETE_FAILURE:
      return state.set('delete', (0, _immutable.fromJS)({
        pending: false,
        id: id,
        isSuccess: !action.error,
        payload: action.payload
      }));
    default:
      return state;
  }
}

function crud() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.CRUD.FETCH:
    case _actions.CRUD.FETCH_SUCCESS:
    case _actions.CRUD.FETCH_FAILURE:
      return state.updateIn([action.meta.model, 'byId'], function (s) {
        return byIdReducer(s, action);
      }).updateIn([action.meta.model, 'collections'], function (s) {
        return collectionsReducer(s, action);
      });
    case _actions.CRUD.FETCH_ONE:
    case _actions.CRUD.FETCH_ONE_SUCCESS:
    case _actions.CRUD.FETCH_ONE_FAILURE:
      return state.updateIn([action.meta.model, 'byId'], function (s) {
        return byIdReducer(s, action);
      });
    case _actions.CRUD.CREATE:
    case _actions.CRUD.CREATE_FAILURE:
      return state.updateIn([action.meta.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    case _actions.CRUD.CREATE_SUCCESS:
      return state.updateIn([action.meta.model, 'byId'], function (s) {
        return byIdReducer(s, action);
      }).updateIn([action.meta.model, 'collections'], (0, _immutable.fromJS)([]), function (s) {
        return collectionsReducer(s, action);
      }).updateIn([action.meta.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    case _actions.CRUD.UPDATE:
    case _actions.CRUD.UPDATE_SUCCESS:
      return state.updateIn([action.meta.model, 'byId'], function (s) {
        return byIdReducer(s, action);
      }).updateIn([action.meta.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    case _actions.CRUD.UPDATE_FAILURE:
      return state.updateIn([action.meta.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    case _actions.CRUD.DELETE:
    case _actions.CRUD.DELETE_FAILURE:
      return state.updateIn([action.meta.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    case _actions.CRUD.DELETE_SUCCESS:
      return state.updateIn([action.meta.model, 'byId'], function (s) {
        return byIdReducer(s, action);
      }).updateIn([action.meta.model, 'collections'], (0, _immutable.fromJS)([]), function (s) {
        return collectionsReducer(s, action);
      }).updateIn([action.meta.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    case _actions.CRUD.CLEAR_ACTION_STATUS:
      return state.updateIn([action.payload.model, 'actionStatus'], function (s) {
        return actionStatusReducer(s, action);
      });
    default:
      return state;
  }
}

exports.default = crud;