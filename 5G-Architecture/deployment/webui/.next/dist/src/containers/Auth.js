'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('next/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _redux = require('redux');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _session = require('../modules/auth/session');

var _session2 = _interopRequireDefault(_session);

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auth = function (_Component) {
  (0, _inherits3.default)(Auth, _Component);

  function Auth() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Auth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Auth.__proto__ || (0, _getPrototypeOf2.default)(Auth)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: null,
      form: {
        username: '',
        password: ''
      },
      session: {}
    }, _this.setInnerRef = function (comp) {
      _this.input = comp;
    }, _this.handleChange = function (e) {
      _this.setState({
        form: (0, _extends3.default)({}, _this.state.form, (0, _defineProperty3.default)({}, e.target.name, e.target.value))
      });
    }, _this.handleKeyPress = function (e) {
      if (e.charCode === 13) {
        _this.handleSubmit();
      }
    }, _this.handleSubmit = function (e) {
      var _this$state$form = _this.state.form,
          username = _this$state$form.username,
          password = _this$state$form.password;
      var loginRequest = _this.props.loginRequest;

      _nprogress2.default.configure({
        parent: '#nprogress-base-login',
        trickleSpeed: 5
      });
      _nprogress2.default.start();

      var session = new _session2.default();
      session.signin(username, password).then(function () {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done();

        _index2.default.push('/');
      }).catch(function (err) {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done();

        _this.setState({
          error: {
            message: err.message
          }
        });

        _this.input.focus();
      });
    }, _this.handleErrorReset = function (e) {
      _this.setState({
        error: null
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Auth, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var session;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                session = new _session2.default();
                _context.t0 = this;
                _context.next = 4;
                return session.getSession(true);

              case 4:
                _context.t1 = _context.sent;
                _context.t2 = {
                  session: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

                this.input.focus();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          form = _state.form,
          error = _state.error;
      var setInnerRef = this.setInnerRef,
          handleChange = this.handleChange,
          handleSubmit = this.handleSubmit,
          handleKeyPress = this.handleKeyPress,
          handleErrorReset = this.handleErrorReset;

      return _react2.default.createElement(_components.Login, {
        form: form,
        error: error,
        innerRef: setInnerRef,
        onChange: handleChange,
        onSubmit: handleSubmit,
        onKeyPress: handleKeyPress,
        onErrorReset: handleErrorReset
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {
        var req = _ref3.req;
        var session;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                session = new _session2.default({ req: req });
                _context2.next = 3;
                return session.getSession(true);

              case 3:
                _context2.t0 = _context2.sent;
                return _context2.abrupt('return', {
                  session: _context2.t0
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Auth;
}(_react.Component);

exports.default = Auth;