'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _ = require('..');

var _person = require('react-icons/lib/md/person');

var _person2 = _interopRequireDefault(_person);

var _close = require('react-icons/lib/md/close');

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    top: 0;\n    left: 0;\n    transform: translate(0, 0);\n\n    width: 100%;\n  '], ['\n    top: 0;\n    left: 0;\n    transform: translate(0, 0);\n\n    width: 100%;\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1xvl6wm-0'
})(['position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid ', ';box-shadow:1px 1px 2px ', ';width:', ';', ''], _openColor2.default.gray[4], _openColor2.default.gray[4], function (props) {
  return props.width;
}, _styleUtils.media.mobile(_templateObject));

Wrapper.propTypes = {
  width: _propTypes2.default.string
};

var ErrorWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1xvl6wm-1'
})(['display:flex;align-items:center;font-size:1rem;line-height:3rem;color:', ';background-color:', ';border-bottom:1px solid ', ';box-shadow:1px 1px 2px ', ';'], _openColor2.default.gray[7], _openColor2.default.pink[2], _openColor2.default.pink[3], _openColor2.default.pink[3]);

var ErrorMessage = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1xvl6wm-2'
})(['padding-left:1rem;']);

var ErrorClose = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1xvl6wm-3'
})(['position:absolute;right:1rem;']);

var ErrorBar = function ErrorBar(_ref) {
  var visible = _ref.visible,
      message = _ref.message,
      onClose = _ref.onClose;
  return visible ? _react2.default.createElement(ErrorWrapper, null, _react2.default.createElement(ErrorMessage, null, message), _react2.default.createElement(ErrorClose, { onClick: onClose }, _react2.default.createElement(_close2.default, null))) : null;
};

var Thumbnail = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1xvl6wm-4'
})(['display:flex;justify-content:center;padding:3rem 0;background:white;']);

var Form = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1xvl6wm-5'
})(['padding:1rem;background:', ';'], _openColor2.default.gray[0]);

var InputWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1xvl6wm-6'
})(['padding:0.5rem 0;']);

var Title = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1xvl6wm-7'
})(['margin-bottom:0.5rem;text-align:left;font-size:1rem;font-weight:bold;color:', ';'], _openColor2.default.gray[8]);

var Input = _styledComponents2.default.input.withConfig({
  componentId: 'sc-1xvl6wm-8'
})(['padding:0.5rem;width:100%;border:1px solid ', ';font-size:1rem;line-height:1.5rem;transition:all .25s;outline:none;&:focus{border:1px solid ', ';}'], _openColor2.default.gray[2], _openColor2.default.blue[7]);

Input.propTypes = {
  type: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};

var Button = _styledComponents2.default.button.withConfig({
  componentId: 'sc-1xvl6wm-9'
})(['margin-top:1rem;padding:1rem 0;width:100%;text-align:center;font-weight:500;font-size:1.2rem;color:white;background:', ';border:1px solid ', ';outline:none;cursor:pointer;transition:all .3s;&:hover{background:', ';}&:active{background:', ';border:1px solid ', ';}'], function (props) {
  return _openColor2.default[props.color][7];
}, function (props) {
  return _openColor2.default[props.color][10];
}, function (props) {
  return _openColor2.default[props.color][6];
}, function (props) {
  return _openColor2.default[props.color][8];
}, _openColor2.default.blue[7]);

Button.propTypes = {
  color: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

var Login = function Login(_ref2) {
  var width = _ref2.width,
      form = _ref2.form,
      error = _ref2.error,
      _innerRef = _ref2.innerRef,
      onChange = _ref2.onChange,
      onSubmit = _ref2.onSubmit,
      onKeyPress = _ref2.onKeyPress,
      onErrorReset = _ref2.onErrorReset;
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Open5gs - Login')), _react2.default.createElement(Wrapper, { id: 'nprogress-base-login', width: width }, _react2.default.createElement(ErrorBar, {
    visible: error !== null,
    message: error && error.message,
    onClose: onErrorReset }), _react2.default.createElement(Thumbnail, null, _react2.default.createElement(_.CircleIcon, { size: '8rem', background: _openColor2.default['blue'][6] }, _react2.default.createElement(_person2.default, null))), _react2.default.createElement(Form, null, _react2.default.createElement(InputWrapper, null, _react2.default.createElement(Title, null, 'Username'), _react2.default.createElement(Input, {
    name: 'username',
    type: 'text',
    placeholder: '',
    value: form.username,
    onChange: onChange,
    onKeyPress: onKeyPress,
    innerRef: function innerRef(comp) {
      _innerRef(comp);
    }
  })), _react2.default.createElement(InputWrapper, null, _react2.default.createElement(Title, null, 'Password'), _react2.default.createElement(Input, {
    name: 'password',
    type: 'password',
    placeholder: '',
    value: form.password,
    onChange: onChange,
    onKeyPress: onKeyPress
  })), _react2.default.createElement(Button, { color: 'teal', onClick: onSubmit }, 'Login'))));
};

Login.defaultProps = {
  width: '360px'
};

exports.default = Login;