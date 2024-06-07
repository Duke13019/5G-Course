'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('next/node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _account = require('../../modules/crud/account');

var _actions = require('../../modules/crud/actions');

var _selectors = require('../../modules/crud/selectors');

var _actions2 = require('../../modules/notification/actions');

var Notification = _interopRequireWildcard(_actions2);

var _components = require('../../components');

var _traverse = require('traverse');

var _traverse2 = _interopRequireDefault(_traverse);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formData = {
  "roles": ["user"]
};

var Document = function (_Component) {
  (0, _inherits3.default)(Document, _Component);

  function Document() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Document);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Document.__proto__ || (0, _getPrototypeOf2.default)(Document)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      formData: formData
    }, _this.validate = function (formData, errors) {
      var _this$props = _this.props,
          accounts = _this$props.accounts,
          action = _this$props.action,
          status = _this$props.status;
      var username = formData.username,
          password1 = formData.password1,
          password2 = formData.password2;

      if (action === 'create' && accounts && accounts.data && accounts.data.filter(function (account) {
        return account.username === username;
      }).length > 0) {
        errors.username.addError('\'' + username + '\' is duplicated');
      }

      if (action === 'create') {
        if (password1 === undefined) {
          errors.password1.addError('is required');
        }
        if (password2 === undefined) {
          errors.password2.addError('is required');
        }
      }

      if (password1 != password2) {
        if ((0, _keys2.default)(errors.password1.__errors).length == 0) errors.password1.addError('is not matched');
        if ((0, _keys2.default)(errors.password2.__errors).length == 0) errors.password2.addError('is not matched');
      }

      return errors;
    }, _this.generatePassword = function (password, cb) {
      _crypto2.default.randomBytes(32, function (randomBytesErr, buf) {
        if (randomBytesErr) {
          return cb(randomBytesErr);
        }
        var salt = buf.toString('hex');

        _crypto2.default.pbkdf2(password, salt, 25000, 512, 'sha256', function (pbkdf2Err, hashRaw) {
          if (pbkdf2Err) {
            return cb(pbkdf2Err);
          }
          var hash = new Buffer(hashRaw, 'binary').toString('hex');

          cb(null, salt, hash);
        });
      });
    }, _this.submit = function (formData) {
      var _this$props2 = _this.props,
          dispatch = _this$props2.dispatch,
          action = _this$props2.action;

      _nprogress2.default.configure({
        parent: '#nprogress-base-form',
        trickleSpeed: 5
      });
      _nprogress2.default.start();

      if (action === 'create') {
        dispatch((0, _account.createAccount)({}, formData));
      } else if (action === 'update') {
        dispatch((0, _account.updateAccount)(formData.username, {}, formData));
      } else {
        throw new Error('Action type \'' + action + '\' is invalid.');
      }
    }, _this.handleSubmit = function (formData) {
      if (formData.password1 === undefined) {
        _this.submit(formData);
      } else {
        _this.generatePassword(formData.password1, function (err, salt, hash) {
          if (err) throw err;

          formData = (0, _assign2.default)(formData, {
            salt: salt,
            hash: hash
          });

          _this.submit(formData);
        });
      }
    }, _this.handleError = function (errors) {
      var dispatch = _this.props.dispatch;

      errors.map(function (error) {
        return dispatch(Notification.error({
          title: 'Validation Error',
          message: error.stack
        }));
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Document, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          account = _props.account,
          dispatch = _props.dispatch;

      if (account.needsFetch) {
        dispatch(account.fetch);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var account = nextProps.account,
          status = nextProps.status;
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          action = _props2.action,
          onHide = _props2.onHide;

      if (account.needsFetch) {
        dispatch(account.fetch);
      }

      if (account.data) {
        this.setState({ formData: account.data });
      } else {
        this.setState({ formData: formData });
      }

      if (status.response) {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done(true);

        var message = action === 'create' ? "New account created" : status.id + ' account updated';

        dispatch(Notification.success({
          title: 'Account',
          message: message
        }));

        dispatch((0, _actions.clearActionStatus)(_account.MODEL, action));
        onHide();
      }

      if (status.error) {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done(true);

        var response = ((status || {}).error || {}).response || {};

        var title = 'Unknown Code';
        var _message = 'Unknown Error';
        if (response.data && response.data.name && response.data.message) {
          title = response.data.name;
          _message = response.data.message;
        } else {
          title = response.status;
          _message = response.statusText;
        }

        dispatch(Notification.error({
          title: title,
          message: _message,
          autoDismiss: 0,
          action: {
            label: 'Dismiss',
            callback: function callback() {
              return onHide();
            }
          }
        }));
        dispatch((0, _actions.clearActionStatus)(_account.MODEL, action));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var validate = this.validate,
          handleSubmit = this.handleSubmit,
          handleError = this.handleError;
      var _props3 = this.props,
          session = _props3.session,
          visible = _props3.visible,
          action = _props3.action,
          status = _props3.status,
          account = _props3.account,
          onHide = _props3.onHide;

      return _react2.default.createElement(_components.Account.Edit, {
        session: session,
        visible: visible,
        action: action,
        formData: this.state.formData,
        isLoading: account.isLoading && !status.pending,
        validate: validate,
        onHide: onHide,
        onSubmit: handleSubmit,
        onError: handleError });
    }
  }]);

  return Document;
}(_react.Component);

Document = (0, _reactRedux.connect)(function (state, props) {
  return {
    accounts: (0, _selectors.select)((0, _account.fetchAccounts)(), state.crud),
    account: (0, _selectors.select)((0, _account.fetchAccount)(props.username), state.crud),
    status: (0, _selectors.selectActionStatus)(_account.MODEL, state.crud, props.action)
  };
})(Document);

exports.default = Document;