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

var _withWidth = require('../helpers/with-width');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _sidebar = require('../modules/sidebar');

var sidebarActions = _interopRequireWildcard(_sidebar);

var _components = require('../components');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarContainer = function (_Component) {
  (0, _inherits3.default)(SidebarContainer, _Component);

  function SidebarContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SidebarContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SidebarContainer.__proto__ || (0, _getPrototypeOf2.default)(SidebarContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleSelectView = function (view) {
      var _this$props = _this.props,
          width = _this$props.width,
          SidebarActions = _this$props.SidebarActions;

      SidebarActions.selectView(view);
      if (width === _withWidth.SMALL) {
        SidebarActions.toggle();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SidebarContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          view = _props.view;
      var handleSelectView = this.handleSelectView;

      return _react2.default.createElement(_components.Sidebar, {
        isOpen: isOpen,
        selectedView: view,
        onSelectView: handleSelectView });
    }
  }]);

  return SidebarContainer;
}(_react.Component);

var enhance = (0, _redux.compose)((0, _withWidth2.default)(), (0, _reactRedux.connect)(function (state) {
  return {
    isOpen: state.sidebar.isOpen,
    view: state.sidebar.view
  };
}, function (dispatch) {
  return {
    SidebarActions: (0, _redux.bindActionCreators)(sidebarActions, dispatch)
  };
}));

exports.default = enhance(SidebarContainer);