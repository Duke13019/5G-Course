'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('next/node_modules/babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _reactNotificationSystem = require('react-notification-system');

var _reactNotificationSystem2 = _interopRequireDefault(_reactNotificationSystem);

var _actions = require('../modules/notification/actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification() {
    (0, _classCallCheck3.default)(this, Notification);

    return (0, _possibleConstructorReturn3.default)(this, (Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).apply(this, arguments));
  }

  (0, _createClass3.default)(Notification, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var dispatch = this.props.dispatch;
      var notifications = nextProps.notifications;

      var notificationIds = notifications.map(function (notification) {
        return notification.uid;
      });
      var systemNotifications = this.system.state.notifications || [];

      if (notifications.length > 0) {
        systemNotifications.forEach(function (notification) {
          if (notificationIds.indexOf(notification.uid) < 0) {
            _this2.system.removeNotification(notification.uid);
          }
        });

        notifications.forEach(function (notification) {
          _this2.system.addNotification((0, _extends3.default)({}, notification, {
            onRemove: function onRemove() {
              dispatch(actions.hide(notification.uid));
              notification.onRemove && notification.onRemove();
            }
          }));
        });
      }

      if (this.props.notifications !== notifications && notifications.length === 0) {
        this.system.clearNotifications();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          notifications = _props.notifications,
          rest = (0, _objectWithoutProperties3.default)(_props, ['notifications']);

      return _react2.default.createElement(_reactNotificationSystem2.default, (0, _extends3.default)({ ref: function ref(_ref) {
          return _this3.system = _ref;
        } }, rest));
    }
  }]);

  return Notification;
}(_react.Component);

Notification = (0, _reactRedux.connect)(function (state) {
  return {
    notifications: state.notifications
  };
})(Notification);

exports.default = Notification;