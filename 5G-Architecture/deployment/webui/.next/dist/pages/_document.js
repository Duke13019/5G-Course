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

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var description = 'an implementation of 3GPP EPC(MME, SGW, PGW, HSS)';

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var sheet = new _styledComponents.ServerStyleSheet();
      var main = sheet.collectStyles(_react2.default.createElement(_document.Main, null));
      var styleTags = sheet.getStyleElement();
      return _react2.default.createElement('html', null, _react2.default.createElement(_document.Head, null, _react2.default.createElement('title', null, 'Open5GS'), _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' }), _react2.default.createElement('meta', { name: 'author', content: 'Open5GS' }), _react2.default.createElement('meta', { name: 'description', content: description }), _react2.default.createElement('link', { rel: 'icon', href: '/static/favicon.ico' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/bootstrap.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/nprogress.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/index.css' }), styleTags), _react2.default.createElement('body', null, _react2.default.createElement('div', { className: 'root' }, main), _react2.default.createElement(_document.NextScript, null)));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;