'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _search = require('react-icons/lib/md/search');

var _search2 = _interopRequireDefault(_search);

var _clear = require('react-icons/lib/md/clear');

var _clear2 = _interopRequireDefault(_clear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: 400px;\n  '], ['\n    width: 400px;\n  ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    margin: 0rem auto;\n    width: 100%;\n  '], ['\n    margin: 0rem auto;\n    width: 100%;\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-wzhs8v-0'
})(['display:flex;align-items:center;width:700px;margin:2rem auto 1rem auto;background:white;color:', ';box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);transition:all 0.3s cubic-bezier(.25,.8,.25,1);&:hover{box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);}', ' ', ''], _openColor2.default.gray[6], _styleUtils.media.tablet(_templateObject), _styleUtils.media.mobile(_templateObject2));

var SearchIconWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-wzhs8v-1'
})(['display:inline-flex;margin-left:1rem;font-size:1.5rem;']);

var Input = _styledComponents2.default.input.withConfig({
  componentId: 'sc-wzhs8v-2'
})(['padding :1rem;margin:0 auto;width:100%;font-size:1.5rem;cursor:text;border:none;outline:none;']);
var ClearIconWrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-wzhs8v-3'
})(['display:inline-flex;margin-right:1rem;font-size:1.5rem;cursor:pointer;']);

var Search = function Search(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      onClear = _ref.onClear;
  return _react2.default.createElement(Wrapper, null, _react2.default.createElement(SearchIconWrapper, null, _react2.default.createElement(_search2.default, null)), _react2.default.createElement(Input, {
    value: value,
    onChange: onChange }), value !== '' && _react2.default.createElement(ClearIconWrapper, { onClick: onClear }, _react2.default.createElement(_clear2.default, null)));
};

exports.default = Search;