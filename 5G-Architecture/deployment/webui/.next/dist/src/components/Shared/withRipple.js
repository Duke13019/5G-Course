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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAlignement(props) {
  if (props.align === 'center') return '0px auto';
  if (props.align === 'right') return '0px 0px 0px auto';
  if (props.align === 'left') return '0px auto 0px 0px';
  return '0px';
}

var RippleWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1632uu9-0'
})(['position:relative;overflow:hidden;transform:translate3d(0,0,0);display:inline-block;align-self:flex-start;margin:', ';&:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#000 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform .5s,opacity 1s;}&:active:after{transform:scale(0,0);opacity:.2;transition:0s;}'], function (props) {
  return getAlignement(props);
});

/* eslint-disable react/prefer-stateless-function */
var withRipple = function withRipple(Comp) {
  return function (_Component) {
    (0, _inherits3.default)(RippleProvider, _Component);

    function RippleProvider() {
      (0, _classCallCheck3.default)(this, RippleProvider);

      return (0, _possibleConstructorReturn3.default)(this, (RippleProvider.__proto__ || (0, _getPrototypeOf2.default)(RippleProvider)).apply(this, arguments));
    }

    (0, _createClass3.default)(RippleProvider, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(RippleWrapper, { align: this.props.align }, _react2.default.createElement(Comp, this.props));
      }
    }]);

    return RippleProvider;
  }(_react.Component);
};
/* eslint-enable react/prefer-stateless-function */

exports.default = withRipple;