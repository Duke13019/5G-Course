'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('next/node_modules/babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ============================

var tooltipArrowHeight = 6;

// const TooltipWrapperButton = styled.button`
//   display: inline-block;
//   outline: none;
//   border: none;
//   background: none;
//   padding: 0;
// `;
var TooltipWrapperDiv = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1awfxoo-0'
})(['display:inline-block;outline:none;border:none;background:none;padding:0;']);
var TooltipContainer = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1awfxoo-1'
})(['display:block;position:relative;']);
var TooltipBubble = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1awfxoo-2'
})(['position:absolute;text-align:center;left:', ';', ';', ';', ';display:inline-block;border-radius:3px;min-height:', ';min-width:', ';padding:', ';z-index:999;line-height:1.5;font-size:0.8rem;box-sizing:border-box;box-shadow:0px 2px 10px rgba(0,0,0,0.2);color:', ';background-color:', ';border-color:', ';visibility:', ';', ' transition:transform 0.2s ease,opacity 0.3s ease;transform:', ';opacity:', ';'], function (props) {
  return props.leftPosition + 'px';
}, function (props) {
  return props.top && 'bottom: calc(100% + ' + tooltipArrowHeight + 'px);';
}, function (props) {
  return props.bottom && 'top: calc(100% + ' + tooltipArrowHeight + 'px);';
}, function (props) {
  return !props.top && !props.bottom && 'bottom: calc(100% + ' + tooltipArrowHeight + 'px);';
}, function (props) {
  return props.height ? props.height : "30px";
}, function (props) {
  return props.width ? props.width : "100px";
}, function (props) {
  return props.padding ? props.padding : "8px";
}, function (props) {
  return props.textColor || '#fff';
}, function (props) {
  return props.bgColor || 'rgba(0,0,0,0.8)';
}, function (props) {
  return props.bgColor || 'rgba(0,0,0,0.8)';
}, function (props) {
  return props.show ? 'visible' : 'hidden';
}, function (props) {
  return !props.show && 'pointer-events: none;';
}, function (props) {
  return props.show ? 'translateY(0px)' : 'translateY(' + (props.bottom ? -10 : 10) + 'px)';
}, function (props) {
  return props.show ? 1 : 0;
});

var TooltipArrow = _styledComponents2.default.span.withConfig({
  componentId: 'sc-1awfxoo-3'
})(['width:0px;height:0px;border-left:', ';border-right:', ';border-top:', ';border-top-color:inherit;position:absolute;', ' ', ' ', ' ', ' left:', ';'], tooltipArrowHeight + 'px solid transparent', tooltipArrowHeight + 'px solid transparent', tooltipArrowHeight + 'px solid', function (props) {
  return props.top && 'bottom: -' + tooltipArrowHeight + 'px;';
}, function (props) {
  return props.bottom && 'top: -' + tooltipArrowHeight + 'px;';
}, function (props) {
  return !props.top && !props.bottom && 'bottom: -' + tooltipArrowHeight + 'px;';
}, function (props) {
  return props.bottom && 'transform: rotate(180deg);';
}, 'calc(50% - ' + tooltipArrowHeight + 'px)');

var Tooltip = function (_Component) {
  (0, _inherits3.default)(Tooltip, _Component);

  function Tooltip(props) {
    (0, _classCallCheck3.default)(this, Tooltip);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call(this, props));

    _this.showTooltip = _this.showTooltip.bind(_this);
    _this.hideTooltip = _this.hideTooltip.bind(_this);
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);

    var disableHoverChanges = props.show != null;

    _this.state = {
      showTooltip: false,
      lPos: null,
      disableHoverChanges: disableHoverChanges
    };
    return _this;
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if (nextProps.show !== this.props.show) {
      if (nextProps.show) this.showTooltip();else this.hideTooltip();
      // }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var showTooltip = this.state.showTooltip;

      return nextState.showTooltip !== showTooltip;
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      if (!this.state.disableHoverChanges) this.showTooltip();
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      if (!this.state.disableHoverChanges) this.hideTooltip();
    }
  }, {
    key: 'showTooltip',
    value: function showTooltip() {
      var tipNode = this.tooltipRef;
      var tipWrapNode = this.tooltipWrapRef;
      var lPos = -(tipNode.offsetWidth / 2) + tipWrapNode.offsetWidth / 2;

      this.setState({ showTooltip: true, lPos: lPos });
    }
  }, {
    key: 'hideTooltip',
    value: function hideTooltip() {
      this.setState({ showTooltip: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          content = _props.content,
          children = _props.children,
          bg = _props.bg,
          color = _props.color,
          rest = (0, _objectWithoutProperties3.default)(_props, ['content', 'children', 'bg', 'color']);

      var _state = this.state,
          showTooltip = _state.showTooltip,
          lPos = _state.lPos;

      // NOTE: Use `button` wrapper when we need to control tooltip visibility
      // with focus / blur.
      // const Wrapper = disableHoverChanges ?
      //   TooltipWrapperButton :
      //   TooltipWrapperDiv;

      return _react2.default.createElement(TooltipWrapperDiv, (0, _extends3.default)({}, rest, { tabIndex: '0' }), _react2.default.createElement(TooltipContainer, {
        innerRef: function innerRef(ref) {
          _this2.tooltipWrapRef = ref;
        },
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }, _react2.default.createElement(TooltipBubble, (0, _extends3.default)({}, rest, {
        innerRef: function innerRef(ref) {
          _this2.tooltipRef = ref;
        },
        leftPosition: lPos || 0,
        show: showTooltip,
        bgColor: bg,
        textColor: color
      }), _react2.default.createElement(TooltipArrow, rest), content), children));
    }
  }]);

  return Tooltip;
}(_react.Component);

Tooltip.defaultProps = {
  content: 'tooltip content',
  show: null
};

exports.default = Tooltip;