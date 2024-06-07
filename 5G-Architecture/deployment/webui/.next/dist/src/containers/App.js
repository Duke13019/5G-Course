'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _redux = require('redux');

var _sidebar = require('../modules/sidebar');

var sidebarActions = _interopRequireWildcard(_sidebar);

var _withWidth = require('../helpers/with-width');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _components = require('../components');

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

var _Subscriber = require('./Subscriber');

var Subscriber = _interopRequireWildcard(_Subscriber);

var _Profile = require('./Profile');

var Profile = _interopRequireWildcard(_Profile);

var _Account = require('./Account');

var Account = _interopRequireWildcard(_Account);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          width = _props.width,
          SidebarActions = _props.SidebarActions;

      if (width !== _withWidth.SMALL) {
        SidebarActions.setVisibility(true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          view = _props2.view,
          session = _props2.session;

      if (view === "subscriber") {
        document.body.style.backgroundColor = "#e9ecef";
      } else {
        document.body.style.backgroundColor = "white";
      }

      return _react2.default.createElement(_components.Layout, null, _react2.default.createElement(_components.Layout.Container, { visible: view === "subscriber" }, _react2.default.createElement(Subscriber.Collection, null)), _react2.default.createElement(_components.Layout.Container, { visible: view === "profile" }, _react2.default.createElement(Profile.Collection, null)), _react2.default.createElement(_components.Layout.Container, { visible: view === "account" }, _react2.default.createElement(Account.Collection, { session: session })), _react2.default.createElement(_Notification2.default, null));
    }
  }]);

  return App;
}(_react.Component);

var enhance = (0, _redux.compose)((0, _withWidth2.default)(), (0, _reactRedux.connect)(function (state) {
  return {
    view: state.sidebar.view
  };
}, function (dispatch) {
  return {
    SidebarActions: (0, _redux.bindActionCreators)(sidebarActions, dispatch)
  };
}));

exports.default = enhance(App);