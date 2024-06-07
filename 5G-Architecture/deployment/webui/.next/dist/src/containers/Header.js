'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _session = require('../modules/auth/session');

var _session2 = _interopRequireDefault(_session);

var _components = require('../components');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderContainer = function (_Component) {
  (0, _inherits3.default)(HeaderContainer, _Component);

  function HeaderContainer() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, HeaderContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HeaderContainer.__proto__ || (0, _getPrototypeOf2.default)(HeaderContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      logout: {
        visible: false,
        dimmed: false
      }
    }, _this.logoutHandler = {
      show: function show() {
        _this.setState({
          logout: {
            visible: true,
            dimmed: true
          }
        });
      },
      hide: function hide() {
        _this.setState({
          logout: {
            visible: false,
            dimmed: false
          }
        });
      },
      logout: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var session;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.setState({
                    logout: {
                      visible: false
                    }
                  });

                  session = new _session2.default();
                  _context.next = 4;
                  return session.signout();

                case 4:

                  // @FIXME next/router not working reliably so using window.location
                  window.location = '/';

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        function logout() {
          return _ref2.apply(this, arguments);
        }

        return logout;
      }()
    }, _this.handleSidebarToggle = function () {
      var SidebarActions = _this.props.SidebarActions;

      SidebarActions.toggle();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(HeaderContainer, [{
    key: 'render',
    value: function render() {
      var handleSidebarToggle = this.handleSidebarToggle,
          logoutHandler = this.logoutHandler;
      var logout = this.state.logout;

      return _react2.default.createElement('div', null, _react2.default.createElement(_components.Header, {
        onSidebarToggle: handleSidebarToggle,
        onLogoutRequest: logoutHandler.show
      }), _react2.default.createElement(_components.Logout, {
        visible: logout.visible,
        onHide: logoutHandler.hide,
        onLogout: logoutHandler.logout }), _react2.default.createElement(_components.Dimmed, { visible: logout.dimmed }));
    }
  }]);

  return HeaderContainer;
}(_react.Component);

HeaderContainer = (0, _reactRedux.connect)(null, function (dispatch) {
  return {
    SidebarActions: (0, _redux.bindActionCreators)(sidebarActions, dispatch)
  };
})(HeaderContainer);

exports.default = HeaderContainer;