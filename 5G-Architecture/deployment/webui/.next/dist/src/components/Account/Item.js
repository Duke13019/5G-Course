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

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _edit = require('react-icons/lib/md/edit');

var _edit2 = _interopRequireDefault(_edit);

var _delete = require('react-icons/lib/md/delete');

var _delete2 = _interopRequireDefault(_delete);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = _styledComponents2.default.div.withConfig({
  componentId: 'sc-xkqtg-0'
})(['position:relative;display:flex;padding:0.5rem;cursor:pointer;', ';.actions{position:absolute;top:0;right:0;width:8rem;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;}&:hover{background:', ';.actions{', ';}}'], function (p) {
  return p.disabled && 'opacity: 0.5; cursor: not-allowed; pointer-events: none;';
}, _openColor2.default.gray[1], function (p) {
  return p.disabled ? 'opacity: 0;' : 'opacity: 1;';
});

var CircleButton = _styledComponents2.default.div.withConfig({
  componentId: 'sc-xkqtg-1'
})(['height:2rem;width:2rem;display:flex;align-items:center;justify-content:center;margin:1px;color:', ';border-radius:1rem;font-size:1.5rem;&:hover{color:', ';}&.delete{&:hover{color:', ';}}'], _openColor2.default.gray[6], _openColor2.default.indigo[6], _openColor2.default.pink[6]);

var Account = _styledComponents2.default.div.withConfig({
  componentId: 'sc-xkqtg-2'
})(['display:flex;flex-direction:row;flex:1;line-height:2.5rem;margin :0 2rem;.username{font-size:1.25rem;color:', ';width:320px;}.role{font-size:1.1rem;color:', ';width:240px;}'], _openColor2.default.gray[8], _openColor2.default.gray[6]);

var SpinnerWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-xkqtg-3'
})(['position:absolute;top:0;right:0;width:4rem;height:100%;display:flex;align-items:center;justify-content:center;']);

var propTypes = {
  account: _propTypes2.default.shape({
    username: _propTypes2.default.string
  }),
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
          account = _this$props.account,
          onEdit = _this$props.onEdit;
      var username = account.username;

      onEdit(username);
    }, _this.handleDelete = function (e) {
      e.stopPropagation();

      var _this$props2 = _this.props,
          account = _this$props2.account,
          onDelete = _this$props2.onDelete;
      var username = account.username;

      onDelete(username);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Item, [{
    key: 'render',
    value: function render() {
      var handleEdit = this.handleEdit,
          handleDelete = this.handleDelete;
      var _props = this.props,
          session = _props.session,
          disabled = _props.disabled,
          spinner = _props.spinner,
          account = _props.account,
          onEdit = _props.onEdit,
          onDelete = _props.onDelete;

      return _react2.default.createElement(Card, { disabled: disabled, onClick: handleEdit }, _react2.default.createElement(Account, null, _react2.default.createElement('div', { className: 'username' }, account.username), _react2.default.createElement('div', { className: 'role' }, account.roles[0])), session.user.username !== account.username && _react2.default.createElement('div', { className: 'actions' }, _react2.default.createElement(_.Tooltip, { content: 'Delete', width: '60px' }, _react2.default.createElement(CircleButton, { className: 'delete', onClick: handleDelete }, _react2.default.createElement(_delete2.default, null)))), spinner && _react2.default.createElement(SpinnerWrapper, null, _react2.default.createElement(_.Spinner, { sm: true })));
    }
  }]);

  return Item;
}(_react.Component);

exports.default = Item;