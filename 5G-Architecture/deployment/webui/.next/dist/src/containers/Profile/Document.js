'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('next/node_modules/babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _reactRedux = require('react-redux');

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _profile = require('../../modules/crud/profile');

var _actions = require('../../modules/crud/actions');

var _selectors = require('../../modules/crud/selectors');

var _actions2 = require('../../modules/notification/actions');

var Notification = _interopRequireWildcard(_actions2);

var _components = require('../../components');

var _traverse = require('traverse');

var _traverse2 = _interopRequireDefault(_traverse);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formData = {
  "security": {
    k: "465B5CE8 B199B49F AA5F0A2E E238A6BC",
    amf: "8000",
    op_value: "E8ED289D EBA952E4 283B54E8 8E6183CA"
  },
  "ambr": {
    "downlink": {
      "value": 1,
      "unit": 3
    },
    "uplink": {
      "value": 1,
      "unit": 3
    }
  },
  "slice": [{
    "sst": 1,
    "default_indicator": true,
    "session": [{
      "name": "internet",
      "type": 3,
      "ambr": {
        "downlink": {
          "value": 1,
          "unit": 3
        },
        "uplink": {
          "value": 1,
          "unit": 3
        }
      },
      "qos": {
        "index": 9,
        "arp": {
          "priority_level": 8,
          "pre_emption_capability": 1,
          "pre_emption_vulnerability": 1
        }
      }
    }]
  }]
};

var Document = function (_Component) {
  (0, _inherits3.default)(Document, _Component);

  function Document() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Document);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Document.__proto__ || (0, _getPrototypeOf2.default)(Document)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      formData: formData
    }, _this.validate = function (formData, errors) {
      var _this$props = _this.props,
          profiles = _this$props.profiles,
          action = _this$props.action,
          status = _this$props.status;

      //    In Editing-mode, this is not working!
      //    More study is needed.
      //
      //    if (formData.msisdn) {
      //      formData.msisdn.map(msisdn => {
      //        if (subscribers.data.filter(subscriber => subscriber.msisdn.includes(msisdn)).length > 0) {
      //          errors.msisdn.addError(`'${msisdn}' is duplicated`);
      //        }
      //      });

      if (formData.msisdn) {
        var msisdn = formData.msisdn;

        if (msisdn && msisdn.length > 1 && msisdn[0] === msisdn[1]) errors.msisdn.addError('\'' + msisdn[1] + '\' is duplicated');
      }

      if (formData.slice) {
        var s_nssais = formData.slice.map(function (slice) {
          return (0, _stringify2.default)({ sst: slice.sst, sd: slice.sd });
        });
        var duplicates = {};
        for (var i = 0; i < s_nssais.length; i++) {
          if (duplicates.hasOwnProperty(s_nssais[i])) {
            duplicates[s_nssais[i]].push(i);
          } else if (s_nssais.lastIndexOf(s_nssais[i]) !== i) {
            duplicates[s_nssais[i]] = [i];
          }
        }

        var _loop = function _loop(key) {
          duplicates[key].forEach(function (index) {
            return errors.slice[index].sst.addError(key + ' is duplicated');
          });
        };

        for (var key in duplicates) {
          _loop(key);
        }
      }

      var _loop2 = function _loop2(_i) {
        var names = formData.slice[_i].session.map(function (session) {
          return session.name;
        });
        var duplicates = {};
        for (var j = 0; j < names.length; j++) {
          if (duplicates.hasOwnProperty(names[j])) {
            duplicates[names[j]].push(j);
          } else if (names.lastIndexOf(names[j]) !== j) {
            duplicates[names[j]] = [j];
          }
        }

        var _loop3 = function _loop3(key) {
          duplicates[key].forEach(function (index) {
            return errors.slice[_i].session[index].name.addError('\'' + key + '\' is duplicated');
          });
        };

        for (var key in duplicates) {
          _loop3(key);
        }
      };

      for (var _i = 0; _i < formData.slice.length; _i++) {
        _loop2(_i);
      }

      if (!formData.slice.some(function (slice) {
        return slice.default_indicator == true;
      })) {
        for (var _i2 = 0; _i2 < formData.slice.length; _i2++) {
          errors.slice[_i2].default_indicator.addError('At least 1 Default S-NSSAI is required');
        }
      }

      return errors;
    }, _this.handleSubmit = function (formData) {
      var _this$props2 = _this.props,
          dispatch = _this$props2.dispatch,
          action = _this$props2.action;

      if (formData.security) {
        if (formData.security.op_type === 1) {
          formData.security.op = formData.security.op_value;
          formData.security.opc = null;
        } else {
          formData.security.op = null;
          formData.security.opc = formData.security.op_value;
        }
      }

      _nprogress2.default.configure({
        parent: '#nprogress-base-form',
        trickleSpeed: 5
      });
      _nprogress2.default.start();

      if (action === 'create') {
        dispatch((0, _profile.createProfile)({}, formData));
      } else if (action === 'update') {
        dispatch((0, _profile.updateProfile)(formData._id, {}, formData));
      } else {
        throw new Error('Action type \'' + action + '\' is invalid.');
      }
    }, _this.handleError = function (errors) {
      var dispatch = _this.props.dispatch;

      errors.map(function (error) {
        return dispatch(Notification.error({
          title: 'Validation Error',
          message: error.stack
        }));
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Document, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          profile = _props.profile,
          dispatch = _props.dispatch;

      if (profile.needsFetch) {
        dispatch(profile.fetch);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var profile = nextProps.profile,
          status = nextProps.status;
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          action = _props2.action,
          onHide = _props2.onHide;

      if (profile.needsFetch) {
        dispatch(profile.fetch);
      }

      if (profile.data) {
        // Mongoose library has a problem for 64bit-long type
        //
        //   FETCH : the library returns 'Number' type for 64bit-long type
        //   CREATE/UPDATE : the library returns 'String' type for 64bit-long type
        //
        // In this case, I cannot avoid json-schema validation function
        // So, I've changed the type from 'String' to 'Number' if the key name is 'downlink' and 'uplink'
        // 
        //    The followings are changed from 'String' to 'Number' after DB CREATE or UPDATE
        //     - ambr.downlink, ambr.uplink, qos.mbr.downlink, qos.mbr.uplink, qos.gbr.downlink, qos.gbr.uplink
        // 
        //traverse(profile.data).forEach(function(x) {
        //  if (this.key == 'downlink') this.update(Number(x));
        //  if (this.key == 'uplink') this.update(Number(x));
        //})

        if (profile.data.security) {
          if (profile.data.security.opc) {
            profile.data.security.op_type = 0;
            profile.data.security.op_value = profile.data.security.opc;
          } else {
            profile.data.security.op_type = 1;
            profile.data.security.op_value = profile.data.security.op;
          }
        }
        this.setState({ formData: profile.data });
      } else {
        this.setState({ formData: formData });
      }

      if (status.response) {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done(true);

        //      const message = action === 'create' ? "New profile created" : `${status.id} profile updated`;
        var message = action === 'create' ? "New profile created" : 'This profile updated';

        dispatch(Notification.success({
          title: 'Profile',
          message: message
        }));

        dispatch((0, _actions.clearActionStatus)(_profile.MODEL, action));
        onHide();
      }

      if (status.error) {
        _nprogress2.default.configure({
          parent: 'body',
          trickleSpeed: 5
        });
        _nprogress2.default.done(true);

        var response = ((status || {}).error || {}).response || {};

        var title = 'Unknown Code';
        var _message = 'Unknown Error';
        if (response.data && response.data.name && response.data.message) {
          title = response.data.name;
          _message = response.data.message;
        } else {
          title = response.status;
          _message = response.statusText;
        }

        dispatch(Notification.error({
          title: title,
          message: _message,
          autoDismiss: 0,
          action: {
            label: 'Dismiss',
            callback: function callback() {
              return onHide();
            }
          }
        }));
        dispatch((0, _actions.clearActionStatus)(_profile.MODEL, action));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var validate = this.validate,
          handleSubmit = this.handleSubmit,
          handleError = this.handleError;
      var _props3 = this.props,
          visible = _props3.visible,
          action = _props3.action,
          status = _props3.status,
          profile = _props3.profile,
          onHide = _props3.onHide;

      return _react2.default.createElement(_components.Profile.Edit, {
        visible: visible,
        action: action,
        formData: this.state.formData,
        isLoading: profile.isLoading && !status.pending,
        validate: validate,
        onHide: onHide,
        onSubmit: handleSubmit,
        onError: handleError });
    }
  }]);

  return Document;
}(_react.Component);

Document = (0, _reactRedux.connect)(function (state, props) {
  return {
    profiles: (0, _selectors.select)((0, _profile.fetchProfiles)(), state.crud),
    profile: (0, _selectors.select)((0, _profile.fetchProfile)(props._id), state.crud),
    status: (0, _selectors.selectActionStatus)(_profile.MODEL, state.crud, props.action)
  };
})(Document);

exports.default = Document;