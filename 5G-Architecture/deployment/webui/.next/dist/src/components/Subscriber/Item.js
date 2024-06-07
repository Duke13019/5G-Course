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

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _edit = require('react-icons/lib/md/edit');

var _edit2 = _interopRequireDefault(_edit);

var _delete = require('react-icons/lib/md/delete');

var _delete2 = _interopRequireDefault(_delete);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: 50%;\n  '], ['\n    width: 50%;\n  ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    width: 100%;\n  '], ['\n    width: 100%;\n  ']);

var Sizer = _styledComponents2.default.div.withConfig({
  componentId: 'sc-mewtaf-0'
})(['display:inline-block;width:33.3%;padding:0.5rem;', ';', ' ', ''], function (p) {
  return p.disabled && 'opacity: 0.5; cursor: not-allowed;';
}, _styleUtils.media.desktop(_templateObject), _styleUtils.media.tablet(_templateObject2));

var Card = _styledComponents2.default.div.withConfig({
  componentId: 'sc-mewtaf-1'
})(['position:relative;display:flex;background:white;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);transition:all 0.3s cubic-bezier(.25,.8,.25,1);cursor:pointer;', ' .actions{position:absolute;top:0;right:0;width:6rem;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;}&:hover{box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);.actions{', ';}}'], function (p) {
  return p.disabled && 'pointer-events: none;';
}, function (p) {
  return p.disabled ? 'opacity: 0;' : 'opacity: 1;';
});

var CircleButton = _styledComponents2.default.div.withConfig({
  componentId: 'sc-mewtaf-2'
})(['height:2rem;width:2rem;display:flex;align-items:center;justify-content:center;margin:1px;background:white;color:', ';border-radius:1rem;font-size:1.5rem;&:hover{color:', ';}&.delete{&:hover{color:', ';}}'], _openColor2.default.gray[6], _openColor2.default.indigo[6], _openColor2.default.pink[6]);

var Imsi = _styledComponents2.default.div.withConfig({
  componentId: 'sc-mewtaf-3'
})(['padding-left:1rem;color:', ';font-size:1.25rem;line-height :3rem;'], _openColor2.default.gray[8]);

var SpinnerWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-mewtaf-4'
})(['position:absolute;top:0;right:0;width:4rem;height:100%;display:flex;align-items:center;justify-content:center;']);

var propTypes = {
  subscriber: _propTypes2.default.shape({
    imsi: _propTypes2.default.string
  }),
  onView: _propTypes2.default.func,
  onEdit: _propTypes2.default.func,
  onDelete: _propTypes2.default.func
};

var Item = function (_Component) {
  (0, _inherits3.default)(Item, _Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Item.__proto__ || (0, _getPrototypeOf2.default)(Item)).call.apply(_ref, [this].concat(args))), _this), _this.handleEdit = function (e) {
      e.stopPropagation();

      var _this$props = _this.props,
          subscriber = _this$props.subscriber,
          onEdit = _this$props.onEdit;
      var imsi = subscriber.imsi;

      onEdit(imsi);
    }, _this.handleDelete = function (e) {
      e.stopPropagation();

      var _this$props2 = _this.props,
          subscriber = _this$props2.subscriber,
          onDelete = _this$props2.onDelete;
      var imsi = subscriber.imsi;

      onDelete(imsi);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Item, [{
    key: 'render',
    value: function render() {
      var handleEdit = this.handleEdit,
          handleDelete = this.handleDelete;
      var _props = this.props,
          disabled = _props.disabled,
          subscriber = _props.subscriber,
          onView = _props.onView,
          onEdit = _props.onEdit,
          onDelete = _props.onDelete;
      var imsi = subscriber.imsi;

      return _react2.default.createElement(Sizer, { disabled: disabled }, _react2.default.createElement(Card, { disabled: disabled, onClick: function onClick() {
          return onView(imsi);
        } }, _react2.default.createElement(Imsi, null, imsi), _react2.default.createElement('div', { className: 'actions' }, _react2.default.createElement(_.Tooltip, { content: 'Edit', width: '60px' }, _react2.default.createElement(CircleButton, { onClick: handleEdit }, _react2.default.createElement(_edit2.default, null))), _react2.default.createElement(_.Tooltip, { content: 'Delete', width: '60px' }, _react2.default.createElement(CircleButton, { className: 'delete', onClick: handleDelete }, _react2.default.createElement(_delete2.default, null)))), disabled && _react2.default.createElement(SpinnerWrapper, null, _react2.default.createElement(_.Spinner, { sm: true }))));
    }
  }]);

  return Item;
}(_react.Component);

exports.default = Item;