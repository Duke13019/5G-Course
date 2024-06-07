'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _openColor = require('open-color');

var _openColor2 = _interopRequireDefault(_openColor);

var _styleUtils = require('../../helpers/style-utils');

var _reactJsonschemaForm = require('react-jsonschema-form');

var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Confirm = require('./Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: calc(100vw - 2rem);\n  '], ['\n    width: calc(100vw - 2rem);\n  ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    height: calc(100vh - 16rem);\n  '], ['\n    height: calc(100vh - 16rem);\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1m62379-0'
})(['display:flex;flex-direction:column;postion:relative;width:', ';', ' background:white;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);'], function (p) {
  return p.width || '1050px';
}, _styleUtils.media.mobile(_templateObject));

var Header = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1m62379-1'
})(['display:flex;justify-content:flex-start;padding:1rem;font-size:1.5rem;background:', ';'], _openColor2.default.gray[1]);

var Body = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1m62379-2'
})(['padding:2rem;font-size:14px;height:', ';', ' overflow:scroll;'], function (p) {
  return p.height || '500px';
}, _styleUtils.media.mobile(_templateObject2));

var Footer = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1m62379-3'
})(['display:flex;justify-content:flex-end;padding:1rem;']);

/* We can UI design with styled-componented. Later! */
var REQUIRED_FIELD_SYMBOL = "*";

var CustomTitleField = function CustomTitleField(props) {
  var id = props.id,
      title = props.title,
      required = props.required;

  var legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  return _react2.default.createElement('legend', { id: id }, legend);
};

var fields = {
  TitleField: CustomTitleField
};

function Label(props) {
  //  modified by acetcom
  //  const { label, required, id } = props;
  var label = props.label,
      id = props.id;

  var required = 0;
  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement('div', null);
  }
  return _react2.default.createElement('label', { className: 'control-label', htmlFor: id }, required ? label + REQUIRED_FIELD_SYMBOL : label);
}

var CustomFieldTemplate = function CustomFieldTemplate(props) {
  var id = props.id,
      classNames = props.classNames,
      label = props.label,
      children = props.children,
      errors = props.errors,
      help = props.help,
      description = props.description,
      hidden = props.hidden,
      required = props.required,
      displayLabel = props.displayLabel;

  if (hidden) {
    return children;
  }

  return _react2.default.createElement('div', { className: classNames }, displayLabel && _react2.default.createElement(Label, { label: label, required: required, id: id }), displayLabel && description ? description : null, children, errors, help);
};

var transformErrors = function transformErrors(errors) {
  return errors.map(function (error) {
    // use error messages from JSON schema if any
    if (error.schema.messages && error.schema.messages[error.name]) {
      return (0, _extends3.default)({}, error, {
        message: error.schema.messages[error.name]
      });
    }
    return error;
  });
};

var Form = function (_Component) {
  (0, _inherits3.default)(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleChange = function (data) {
      var onChange = _this.props.onChange;

      var formDataChanged = null;
      if (onChange) {
        formDataChanged = onChange(data.formData);
      }
      _this.setState({
        editing: true,
        disableSubmitButton: (0, _keys2.default)(data.errors).length > 0,
        formData: formDataChanged ? formDataChanged : data.formData
      });
    }, _this.handleSubmit = function (data) {
      var onSubmit = _this.props.onSubmit;

      onSubmit(data.formData);
    }, _this.handleSubmitButton = function () {
      _this.setState({
        disabled: true,
        disableSubmitButton: true
      });
      _this.submitButton.click();
    }, _this.handleOutside = function () {
      var onHide = _this.props.onHide;

      if (_this.state.editing === true) {
        _this.setState({ confirm: true });
      } else {
        onHide();
      }
    }, _this.handleClose = function () {
      var onHide = _this.props.onHide;

      _this.setState({ confirm: false });
      onHide();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Form, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.visible === false && nextProps.visible === true) {
        // Initialize State Variable when form view is visible for the first time
        this.setState({
          formData: nextProps.formData,
          disabled: false,
          editing: false,
          confirm: false,
          disableSubmitButton: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var handleChange = this.handleChange,
          handleSubmit = this.handleSubmit,
          handleSubmitButton = this.handleSubmitButton,
          handleOutside = this.handleOutside,
          handleClose = this.handleClose;
      var _props = this.props,
          visible = _props.visible,
          title = _props.title,
          schema = _props.schema,
          uiSchema = _props.uiSchema,
          isLoading = _props.isLoading,
          validate = _props.validate,
          onSubmit = _props.onSubmit,
          onError = _props.onError;
      var _state = this.state,
          disabled = _state.disabled,
          disableSubmitButton = _state.disableSubmitButton,
          formData = _state.formData;

      return _react2.default.createElement('div', null, _react2.default.createElement(_Modal2.default, {
        visible: visible,
        onOutside: handleOutside,
        disableOnClickOutside: this.state.confirm }, _react2.default.createElement(Wrapper, { id: 'nprogress-base-form', width: this.props.width }, _react2.default.createElement(Header, null, title), _react2.default.createElement(Body, { height: this.props.height }, isLoading && _react2.default.createElement(_Spinner2.default, null), !isLoading && _react2.default.createElement(_reactJsonschemaForm2.default, {
        schema: schema,
        uiSchema: disabled ? (0, _extends3.default)({
          "ui:disabled": true
        }, uiSchema) : (0, _extends3.default)({}, uiSchema),
        formData: formData,
        disableSubmitButton: disableSubmitButton,
        fields: fields,
        FieldTemplate: CustomFieldTemplate,
        liveValidate: true,
        validate: validate,
        showErrorList: false,
        transformErrors: transformErrors,
        autocomplete: 'off',
        onChange: handleChange,
        onSubmit: handleSubmit,
        onError: onError }, _react2.default.createElement('div', {
        'data-jsx': 301980644
      }, _react2.default.createElement('button', { type: 'submit', ref: function ref(el) {
          return _this2.submitButton = el;
        }, 'data-jsx': 301980644
      }), _react2.default.createElement(_style2.default, {
        styleId: 301980644,
        css: 'button[data-jsx="301980644"]{display:none}'
      })))), _react2.default.createElement(Footer, null, _react2.default.createElement(_Button2.default, { clear: true, disabled: disabled, onClick: handleClose }, 'CANCEL'), _react2.default.createElement(_Button2.default, { clear: true, disabled: disabled || disableSubmitButton, onClick: handleSubmitButton }, 'SAVE')))), _react2.default.createElement(_Confirm2.default, {
        visible: this.state.confirm,
        message: 'You have unsaved changes. Are you sure you want to close?',
        buttons: [{ text: "CLOSE", action: handleClose, info: true }, { text: "NO", action: function action() {
            return _this2.setState({ confirm: false });
          } }] }));
    }
  }]);

  return Form;
}(_react.Component);

Form.defaultProps = {
  visible: false,
  title: ""
};

exports.default = Form;