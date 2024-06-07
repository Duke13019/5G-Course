'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectCollection = selectCollection;
exports.selectDocument = selectDocument;
exports.select = select;
exports.selectActionStatus = selectActionStatus;

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _immutable = require('immutable');

var _lang = require('lodash/lang');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function recent(fetchedAt) {
  if (fetchedAt === null) return false;

  var interval = 10 * 60 * 1000; // 10 minutes
  return Date.now() - interval < fetchedAt;
}

function selectCollection(modelName, crud, params) {
  var model = crud.getIn([modelName], (0, _immutable.Map)());
  var collection = model.get('collections', (0, _immutable.List)()).find(function (collection) {
    return (0, _lang.isEqual)(collection.get('params').toJS(), params);
  });

  var isLoading = function isLoading(_ref) {
    var needsFetch = _ref.needsFetch;
    return (0, _extends3.default)({
      otherInfo: {},
      data: [],
      isLoading: true
    }, collection ? { error: collection.get('error') } : {}, {
      needsFetch: needsFetch
    });
  };

  if (collection === undefined) {
    return isLoading({ needsFetch: true });
  }

  var fetchedAt = collection.get('fetchedAt');
  if (fetchedAt === 0) {
    return isLoading({ needsFetch: false });
  } else if (!recent(fetchedAt)) {
    return isLoading({ needsFetch: true });
  }

  var documentThatNeedsFetch = null;
  collection.get('ids', (0, _immutable.fromJS)([])).forEach(function (id) {
    var document = model.getIn(['byId', id], (0, _immutable.Map)());
    var documentFetchedAt = document.get('fetchedAt');
    if (documentFetchedAt !== 0 && !recent(document.get('fetchedAt'))) {
      documentThatNeedsFetch = document;
      return false;
    }
  });
  if (documentThatNeedsFetch) {
    return isLoading({ needsFetch: true });
  }

  var data = collection.get('ids', (0, _immutable.fromJS)([])).map(function (id) {
    return model.getIn(['byId', id, 'document']);
  }).toJS();

  return (0, _extends3.default)({
    otherInfo: collection.get('otherInfo', (0, _immutable.Map)()).toJS(),
    data: data,
    isLoading: false,
    needsFetch: false
  }, collection ? { error: collection.get('error') } : {});
}

function selectDocument(modelName, id, crud, params) {
  var model = crud.getIn([modelName, 'byId', id]);

  if (model && model.get('fetchedAt') === 0) {
    return {
      isLoading: true,
      needsFetch: false,
      error: new Error('Loading...')
    };
  }

  if (id === undefined || model == undefined || !recent(model.get('fetchedAt'))) {
    return {
      isLoading: true,
      needsFetch: true,
      error: new Error('Loading...')
    };
  }

  if (model.get('error') !== null) {
    return {
      isLoading: false,
      needsFetch: false,
      error: model.get('error')
    };
  }

  return {
    isLoading: false,
    needsFetch: false,
    data: model.get('document').toJS()
  };
}

function select(action, crud) {
  var model = action.meta.model;
  var params = action.meta.params;

  var selection = {};
  switch (action.type) {
    case _actions.CRUD.FETCH:
      selection = selectCollection(model, crud, params);
      break;
    case _actions.CRUD.FETCH_ONE:
      if (action.meta.id === undefined) {
        return selection;
      }
      selection = selectDocument(model, action.meta.id, crud, params);
      break;
    default:
      throw new Error('Action type \'' + action.type + '\' is not a fetch action.');
  }
  selection.fetch = action;
  return selection;
}

function selectActionStatus(modelName, crud, action) {
  var rawStatus = (crud.getIn([modelName, 'actionStatus', action]) || (0, _immutable.fromJS)({})).toJS();
  var _rawStatus$pending = rawStatus.pending,
      pending = _rawStatus$pending === undefined ? false : _rawStatus$pending,
      _rawStatus$id = rawStatus.id,
      id = _rawStatus$id === undefined ? null : _rawStatus$id,
      _rawStatus$isSuccess = rawStatus.isSuccess,
      isSuccess = _rawStatus$isSuccess === undefined ? null : _rawStatus$isSuccess,
      _rawStatus$payload = rawStatus.payload,
      payload = _rawStatus$payload === undefined ? null : _rawStatus$payload;

  if (pending === true) {
    return { id: id, pending: pending };
  }

  if (isSuccess === true) {
    return {
      id: id,
      pending: pending,
      response: payload
    };
  }

  return {
    id: id,
    pending: pending,
    error: payload
  };
}