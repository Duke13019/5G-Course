'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('next/node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _withWidth = require('../../helpers/with-width');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = {
  "title": "",
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "title": "Username*",
      "required": true,
      "maxLength": 24
    },
    "roles": {
      "type": "array",
      "title": "",
      "items": {
        "type": "string",
        "title": "Role",
        "enum": ["user", "admin"],
        "required": true
      }
    },
    "password1": {
      "type": "string",
      "title": "Password*"
    },
    "password2": {
      "type": "string",
      "title": "Confirm Password*"
    }
  }
};

var uiSchema = {
  "password1": {
    "classNames": "col-xs-6",
    "ui:widget": "password"
  },
  "password2": {
    "classNames": "col-xs-6",
    "ui:widget": "password"
  }
};

var Edit = function (_Component) {
  (0, _inherits3.default)(Edit, _Component);

  function Edit(props) {
    (0, _classCallCheck3.default)(this, Edit);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Edit.__proto__ || (0, _getPrototypeOf2.default)(Edit)).call(this, props));

    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  (0, _createClass3.default)(Edit, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      this.setState(this.getStateFromProps(nextProps));
    }
  }, {
    key: 'getStateFromProps',
    value: function getStateFromProps(props) {
      var session = props.session,
          action = props.action,
          width = props.width,
          formData = props.formData;
      var _session$user = session.user,
          username = _session$user.username,
          roles = _session$user.roles;

      var state = {
        schema: schema,
        uiSchema: uiSchema,
        formData: formData
      };

      if (action === 'update' && (roles.indexOf('admin') === -1 || formData.username === username)) {
        state.uiSchema = (0, _assign2.default)(state.uiSchema, {
          "roles": {
            "ui:disabled": true,
            "ui:options": {
              "addable": false,
              "orderable": false,
              "removable": false
            }
          }
        });
      } else {
        state.uiSchema = (0, _assign2.default)(state.uiSchema, {
          "roles": {
            "ui:options": {
              "addable": false,
              "orderable": false,
              "removable": false
            }
          }
        });
      }

      if (action === 'update') {
        state.uiSchema = (0, _assign2.default)(state.uiSchema, {
          "username": {
            "ui:disabled": true
          }
        });
      } else if (width !== _withWidth.SMALL) {
        state.uiSchema = (0, _assign2.default)(state.uiSchema, {
          "username": {
            "ui:autofocus": true
          }
        });
      }

      return state;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          visible = _props.visible,
          action = _props.action,
          isLoading = _props.isLoading,
          validate = _props.validate,
          onHide = _props.onHide,
          onSubmit = _props.onSubmit,
          onError = _props.onError;
      var formData = this.state.formData;

      return _react2.default.createElement(_.Form, {
        visible: isLoading ? false : visible,
        title: action === 'update' ? 'Edit Account' : 'Create Account',
        width: '480px',
        height: '400px',
        schema: this.state.schema,
        uiSchema: this.state.uiSchema,
        formData: formData,
        isLoading: isLoading,
        validate: validate,
        onHide: onHide,
        onSubmit: onSubmit,
        onError: onError });
    }
  }]);

  return Edit;
}(_react.Component);

exports.default = (0, _withWidth2.default)()(Edit);