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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _styleUtils = require('../../helpers/style-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-196zlxj-0'
})(['position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:', ';.modal-enter{animation:', ';animation-fill-mode:forwards;}.modal-leave{animation:', ';animation-fill-mode:forwards;}'], function (p) {
  return p.zindex;
}, function (p) {
  return p.transitionEnter;
}, function (p) {
  return p.transitionLeave;
});

var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickOutside = function (e) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          onOutside = _this$props.onOutside;

      if (!visible) return null;
      onOutside();
    }, _this.handleKeyUp = function (e) {
      var onOutside = _this.props.onOutside;

      if (e.keyCode === 27) {
        onOutside();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.visible !== this.props.visible) {
        if (this.props.visible) {
          document.body.addEventListener('keyup', this.handleKeyUp);
        } else {
          document.body.removeEventListener('keyup', this.handleKeyUp);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          visible = _props.visible,
          children = _props.children,
          zindex = _props.zindex,
          transitionEnter = _props.transitionEnter,
          transitionLeave = _props.transitionLeave,
          transitionEnterTimeout = _props.transitionEnterTimeout,
          transitionLeaveTimeout = _props.transitionLeaveTimeout;

      return _react2.default.createElement(Wrapper, {
        zindex: zindex,
        transitionEnter: transitionEnter,
        transitionLeave: transitionLeave }, _react2.default.createElement(_CSSTransitionGroup2.default, {
        transitionName: 'modal',
        transitionEnterTimeout: transitionEnterTimeout,
        transitionLeaveTimeout: transitionLeaveTimeout }, visible && _react2.default.createElement('div', null, children)));
    }
  }]);

  return Modal;
}(_react.Component);

Modal.defaultProps = {
  zindex: '500',
  transitionEnter: _styleUtils.transitions.stretchOut + ' .25s ease-in',
  transitionLeave: _styleUtils.transitions.shrinkIn + ' .25s ease-in',
  transitionEnterTimeout: 300,
  transitionLeaveTimeout: 150
};

exports.default = (0, _reactOnclickoutside2.default)(Modal);