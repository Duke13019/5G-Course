'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _profile = require('../../modules/crud/profile');

var _actions = require('../../modules/crud/actions');

var _selectors = require('../../modules/crud/selectors');

var _actions2 = require('../../modules/notification/actions');

var Notification = _interopRequireWildcard(_actions2);

var _components = require('../../components');

var _Document = require('./Document');

var _Document2 = _interopRequireDefault(_Document);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collection = function (_Component) {
  (0, _inherits3.default)(Collection, _Component);

  function Collection() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Collection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Collection.__proto__ || (0, _getPrototypeOf2.default)(Collection)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      document: {
        action: '',
        visible: false,
        dimmed: false
      },
      confirm: {
        visible: false,
        _id: ''
      },
      view: {
        visible: false,
        disableOnClickOutside: false,
        _id: ''
      }
    }, _this.documentHandler = {
      show: function show(action, payload) {
        _this.setState({
          document: (0, _extends3.default)({
            action: action,
            visible: true,
            dimmed: true
          }, payload),
          view: (0, _extends3.default)({}, _this.state.view, {
            disableOnClickOutside: true
          })
        });
      },
      hide: function hide() {
        _this.setState({
          document: {
            action: '',
            visible: false,
            dimmed: false
          },
          view: (0, _extends3.default)({}, _this.state.view, {
            disableOnClickOutside: false
          })
        });
      },
      actions: {
        create: function create() {
          _this.documentHandler.show('create');
        },
        update: function update(_id) {
          _this.documentHandler.show('update', { _id: _id });
        }
      }
    }, _this.confirmHandler = {
      show: function show(_id) {
        _this.setState({
          confirm: {
            visible: true,
            _id: _id
          },
          view: (0, _extends3.default)({}, _this.state.view, {
            disableOnClickOutside: true
          })
        });
      },
      hide: function hide() {
        _this.setState({
          confirm: (0, _extends3.default)({}, _this.state.confirm, {
            visible: false
          }),
          view: (0, _extends3.default)({}, _this.state.view, {
            disableOnClickOutside: false
          })
        });
      },
      actions: {
        delete: function _delete() {
          var dispatch = _this.props.dispatch;

          if (_this.state.confirm.visible === true) {
            _this.confirmHandler.hide();
            _this.documentHandler.hide();
            _this.viewHandler.hide();

            dispatch((0, _profile.deleteProfile)(_this.state.confirm._id));
          }
        }
      }
    }, _this.viewHandler = {
      show: function show(_id) {
        _this.setState({
          view: {
            _id: _id,
            visible: true,
            disableOnClickOutside: false
          }
        });
      },
      hide: function hide() {
        _this.setState({
          view: (0, _extends3.default)({}, _this.state.view, {
            visible: false
          })
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collection, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          profiles = _props.profiles,
          dispatch = _props.dispatch;

      if (profiles.needsFetch) {
        dispatch(profiles.fetch);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var profiles = nextProps.profiles,
          status = nextProps.status;
      var dispatch = this.props.dispatch;

      if (profiles.needsFetch) {
        dispatch(profiles.fetch);
      }

      if (status.response) {
        dispatch(Notification.success({
          title: 'Profile',
          //        message: `${status.id} has been deleted`
          message: 'This profile has been deleted'
        }));
        dispatch((0, _actions.clearActionStatus)(_profile.MODEL, 'delete'));
      }

      if (status.error) {
        var title = 'Unknown Code';
        var message = 'Unknown Error';
        if (response.data && response.data.name && response.data.message) {
          title = response.data.name;
          message = response.data.message;
        } else {
          title = response.status;
          message = response.statusText;
        }

        dispatch(Notification.error({
          title: title,
          message: message,
          autoDismiss: 0,
          action: {
            label: 'Dismiss'
          }
        }));
        dispatch((0, _actions.clearActionStatus)(_profile.MODEL, 'delete'));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var documentHandler = this.documentHandler,
          viewHandler = this.viewHandler,
          confirmHandler = this.confirmHandler;
      var document = this.state.document;
      var _props2 = this.props,
          profiles = _props2.profiles,
          status = _props2.status;
      var isLoading = profiles.isLoading,
          data = profiles.data;

      return _react2.default.createElement(_components.Layout.Content, null, _react2.default.createElement(_components.Profile.List, {
        profiles: data,
        deletedId: status.id,
        onView: viewHandler.show,
        onEdit: documentHandler.actions.update,
        onDelete: confirmHandler.show
      }), isLoading && _react2.default.createElement(_components.Spinner, { md: true }), _react2.default.createElement(_components.Blank, {
        visible: !isLoading && !((0, _keys2.default)(data).length > 0),
        title: 'ADD A PROFILE',
        body: 'You have no profiles... yet!',
        onTitle: documentHandler.actions.create
      }), _react2.default.createElement(_components.FloatingButton, { onClick: documentHandler.actions.create }), _react2.default.createElement(_components.Profile.View, {
        visible: this.state.view.visible,
        profile: data.filter(function (profile) {
          return profile._id === _this2.state.view._id;
        })[0],
        disableOnClickOutside: this.state.view.disableOnClickOutside,
        onEdit: documentHandler.actions.update,
        onDelete: confirmHandler.show,
        onHide: viewHandler.hide }), _react2.default.createElement(_Document2.default, (0, _extends3.default)({}, document, {
        onEdit: documentHandler.actions.update,
        onDelete: confirmHandler.show,
        onHide: documentHandler.hide })), _react2.default.createElement(_components.Dimmed, { visible: document.dimmed }), _react2.default.createElement(_components.Confirm, {
        visible: this.state.confirm.visible,
        message: 'Delete this profile?',
        onOutside: confirmHandler.hide,
        buttons: [{ text: "CANCEL", action: confirmHandler.hide, info: true }, { text: "DELETE", action: confirmHandler.actions.delete, danger: true }] }));
    }
  }]);

  return Collection;
}(_react.Component);

Collection = (0, _reactRedux.connect)(function (state) {
  return {
    profiles: (0, _selectors.select)((0, _profile.fetchProfiles)(), state.crud),
    status: (0, _selectors.selectActionStatus)(_profile.MODEL, state.crud, 'delete')
  };
})(Collection);

exports.default = Collection;