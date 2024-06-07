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

var _edit = require('react-icons/lib/md/edit');

var _edit2 = _interopRequireDefault(_edit);

var _delete = require('react-icons/lib/md/delete');

var _delete2 = _interopRequireDefault(_delete);

var _close = require('react-icons/lib/md/close');

var _close2 = _interopRequireDefault(_close);

var _phone = require('react-icons/lib/md/phone');

var _phone2 = _interopRequireDefault(_phone);

var _security = require('react-icons/lib/md/security');

var _security2 = _interopRequireDefault(_security);

var _router = require('react-icons/lib/md/router');

var _router2 = _interopRequireDefault(_router);

var _cast = require('react-icons/lib/md/cast');

var _cast2 = _interopRequireDefault(_cast);

var _keyboardControl = require('react-icons/lib/md/keyboard-control');

var _keyboardControl2 = _interopRequireDefault(_keyboardControl);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    width: calc(100vw - 4rem);\n  '], ['\n    width: calc(100vw - 4rem);\n  ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    height: calc(100vh - 16rem);\n  '], ['\n    height: calc(100vh - 16rem);\n  ']);

var Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1ole59l-0'
})(['display:flex;flex-direction:column;postion:relative;width:900px;', ' background:white;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);'], _styleUtils.media.mobile(_templateObject));

var Header = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1ole59l-1'
})(['position:relative;display:flex;background:', ';.title{padding:1.5rem;color:', ';font-size:1.5rem;}.actions{position:absolute;top:0;right:0;width:8rem;height:100%;display:flex;align-items:center;justify-content:center;}'], _openColor2.default.gray[1], _openColor2.default.gray[8]);

var CircleButton = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1ole59l-2'
})(['height:2rem;width:2rem;display:flex;align-items:center;justify-content:center;margin:1px;color:', ';border-radius:1rem;font-size:1.5rem;&:hover{color:', ';}&.delete{&:hover{color:', ';}}'], _openColor2.default.gray[6], _openColor2.default.indigo[6], _openColor2.default.pink[6]);

var Body = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1ole59l-3'
})(['display:block;margin:0.5rem;height:500px;', ' overflow:scroll;'], _styleUtils.media.mobile(_templateObject2));

var Subscriber = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1ole59l-4'
})(['display:flex;flex-direction:column;margin:0,auto;color:', ';.header{margin:12px;font-size:16px;}.sectionbody{display:flex;}.sectioncolumn{flex:1;}.body{display:flex;flex-direction:row;flex:1;margin:6px;.left{width:80px;text-align:center;font-size:18px;color:', ';}.right{display:flex;flex-direction:column;flex:1;.data{flex:1;font-size:12px;margin:4px;}}}'], _openColor2.default.gray[9], _openColor2.default.gray[6]);

var Pdn = _styledComponents2.default.div.withConfig({
  componentId: 'sc-1ole59l-5'
})(['display:flex;flex-direction:column;margin:0 auto;color:', ';.header{margin:12px;font-size:16px;}.body{display:flex;flex-direction:row;flex:1;margin:0px 32px;.small_data{width:50px;font-size:12px;margin:4px;}.medium_data{width:80px;font-size:12px;margin:4px;}.large_data{width:140px;font-size:12px;margin:4px;}}'], _openColor2.default.gray[9]);
var View = function View(_ref) {
  var visible = _ref.visible,
      disableOnClickOutside = _ref.disableOnClickOutside,
      subscriber = _ref.subscriber,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      onHide = _ref.onHide;

  var imsi = (subscriber || {}).imsi;
  var msisdn_list = (subscriber || {}).msisdn || [];
  var imeisv = (subscriber || {}).imeisv;
  var mme_host = (subscriber || {}).mme_host;
  var mme_realm = (subscriber || {}).mme_realm;
  var purge_flag = (subscriber || {}).purge_flag;
  var security = (subscriber || {}).security || {};
  var ambr = (subscriber || {}).ambr || {};
  var subscriber_status = (subscriber || {}).subscriber_status;
  var operator_determined_barring = (subscriber || {}).operator_determined_barring;
  var slice_list = (subscriber || {}).slice || [];

  return _react2.default.createElement('div', null, _react2.default.createElement(_.Modal, {
    visible: visible,
    onOutside: onHide,
    disableOnClickOutside: disableOnClickOutside }, _react2.default.createElement(Wrapper, null, _react2.default.createElement(Header, null, _react2.default.createElement('div', { className: 'title' }, imsi), _react2.default.createElement('div', { className: 'actions' }, _react2.default.createElement(_.Tooltip, { content: 'Edit', width: '60px' }, _react2.default.createElement(CircleButton, { onClick: function onClick() {
      return onEdit(imsi);
    } }, _react2.default.createElement(_edit2.default, null))), _react2.default.createElement(_.Tooltip, { content: 'Delete', width: '60px' }, _react2.default.createElement(CircleButton, { className: 'delete', onClick: function onClick() {
      return onDelete(imsi);
    } }, _react2.default.createElement(_delete2.default, null))), _react2.default.createElement(_.Tooltip, { content: 'Close', width: '60px' }, _react2.default.createElement(CircleButton, { className: 'delete', onClick: onHide }, _react2.default.createElement(_close2.default, null))))), _react2.default.createElement(Body, null, _react2.default.createElement(Subscriber, null, _react2.default.createElement('div', { className: 'header' }, 'Subscriber Configuration'), _react2.default.createElement('div', { className: 'sectionbody' }, _react2.default.createElement('div', { className: 'sectioncolumn' }, (msisdn_list.length !== 0 || imeisv && imeisv.length !== 0) && _react2.default.createElement('div', { className: 'body' }, _react2.default.createElement('div', { className: 'left' }, _react2.default.createElement(_phone2.default, null)), _react2.default.createElement('div', { className: 'right' }, msisdn_list.map(function (msisdn, index) {
    return _react2.default.createElement('div', { key: index, className: 'data' }, msisdn, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'MSISDN'));
  }), imeisv && imeisv.length !== 0 && _react2.default.createElement('div', { className: 'data' }, imeisv, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'IMEISV')))), _react2.default.createElement('div', { className: 'body' }, _react2.default.createElement('div', { className: 'left' }, _react2.default.createElement(_security2.default, null)), _react2.default.createElement('div', { className: 'right' }, _react2.default.createElement('div', { className: 'data' }, security.k, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'K')), security.opc && _react2.default.createElement('div', { className: 'data' }, security.opc, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'OPc')), security.op && _react2.default.createElement('div', { className: 'data' }, security.op, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'OP')), _react2.default.createElement('div', { className: 'data' }, security.amf, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'AMF')), security.sqn && _react2.default.createElement('div', { className: 'data' }, security.sqn, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'SQN'))))), _react2.default.createElement('div', { className: 'sectioncolumn' }, _react2.default.createElement('div', { className: 'body' }, _react2.default.createElement('div', { className: 'left' }, _react2.default.createElement(_security2.default, null)), _react2.default.createElement('div', { className: 'right' }, _react2.default.createElement('div', { className: 'data' }, subscriber_status == 0 ? "SERVICE_GRANTED (0)" : "OPERATOR_DETERMINED_BARRING (1)", _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'Subscriber Status (TS 29.272 7.3.29)')), _react2.default.createElement('div', { className: 'data' }, operator_determined_barring, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'Operator Determined Barring (TS 29.272 7.3.30)'))))), _react2.default.createElement('div', { className: 'sectioncolumn' }, mme_host && mme_host.length !== 0 && _react2.default.createElement('div', { className: 'body' }, _react2.default.createElement('div', { className: 'left' }, _react2.default.createElement(_router2.default, null)), _react2.default.createElement('div', { className: 'right' }, _react2.default.createElement('div', { className: 'data' }, mme_host, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'MME Hostname')), mme_realm && _react2.default.createElement('div', { className: 'data' }, mme_realm, _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'MME Realm')), _react2.default.createElement('div', { className: 'data' }, purge_flag === true ? "Purged" : "Not Purged", _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'UE is Purged at MME')))), _react2.default.createElement('div', { className: 'body' }, _react2.default.createElement('div', { className: 'left' }, _react2.default.createElement(_cast2.default, null)), _react2.default.createElement('div', { className: 'right' }, _react2.default.createElement('div', { className: 'data' }, ambr['downlink'] === undefined ? "unlimited" : ambr.downlink['value'] === undefined ? "unlimited" : ambr.downlink.value, ' ', ambr['downlink'] === undefined ? "unlimited" : ambr.downlink['value'] === undefined ? "" : ambr.downlink['unit'] === undefined ? "bps" : ambr.downlink.unit === 0 ? "bps" : ambr.downlink.unit === 1 ? "Kbps" : ambr.downlink.unit === 2 ? "Mbps" : ambr.downlink.unit === 3 ? "Gbps" : ambr.downlink.unit === 4 ? "Tbps" : "Unknown Unit", _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'DL')), _react2.default.createElement('div', { className: 'data' }, ambr['uplink'] === undefined ? "unlimited" : ambr.uplink['value'] === undefined ? "unlimited" : ambr.uplink.value, ' ', ambr['uplink'] === undefined ? "unlimited" : ambr.uplink['value'] === undefined ? "" : ambr.uplink['unit'] === undefined ? "bps" : ambr.uplink.unit === 0 ? "bps" : ambr.uplink.unit === 1 ? "Kbps" : ambr.uplink.unit === 2 ? "Mbps" : ambr.uplink.unit === 3 ? "Gbps" : ambr.uplink.unit === 4 ? "Tbps" : "Unknown Unit", _react2.default.createElement('span', { style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement(_keyboardControl2.default, null), 'UL'))))))), _react2.default.createElement(Pdn, null, slice_list.map(function (slice, index) {
    return _react2.default.createElement('div', { key: index }, slice.sd === undefined ? _react2.default.createElement('div', { className: 'header' }, 'SST:', slice.sst, ' ', slice.default_indicator == true ? "(Default S-NSSAI)" : "") : _react2.default.createElement('div', { className: 'header' }, 'SST:', slice.sst, ' SD:', slice.sd, ' ', slice.default_indicator == true ? "(Default S-NSSAI)" : ""), _react2.default.createElement('div', { className: 'body', style: { color: _openColor2.default.gray[5] } }, _react2.default.createElement('div', { className: 'large_data' }, 'DNN/APN'), _react2.default.createElement('div', { className: 'medium_data' }, 'Type'), _react2.default.createElement('div', { className: 'small_data' }, '5QI/QCI'), _react2.default.createElement('div', { className: 'small_data' }, 'ARP'), _react2.default.createElement('div', { className: 'medium_data' }, 'Capability'), _react2.default.createElement('div', { className: 'medium_data' }, 'Vulnerablility'), _react2.default.createElement('div', { className: 'large_data' }, 'MBR DL/UL'), _react2.default.createElement('div', { className: 'large_data' }, 'GBR DL/UL')), slice['session'] !== undefined && slice.session.map(function (session) {
      return _react2.default.createElement('div', { key: session.name }, _react2.default.createElement('div', { className: 'body' }, _react2.default.createElement('div', { className: 'large_data' }, session.name), _react2.default.createElement('div', { className: 'medium_data' }, session.type === 1 ? "IPv4" : session.type === 2 ? "IPv6" : session.type === 3 ? "IPv4v6" : "Unknown"), _react2.default.createElement('div', { className: 'small_data' }, session.qos.index), _react2.default.createElement('div', { className: 'small_data' }, session.qos.arp.priority_level), _react2.default.createElement('div', { className: 'medium_data' }, session.qos.arp.pre_emption_capability === 2 ? "Enabled" : session.qos.arp.pre_emption_capability === 1 ? "Disabled" : "Unknown"), _react2.default.createElement('div', { className: 'medium_data' }, session.qos.arp.pre_emption_vulnerability === 2 ? "Enabled" : session.qos.arp.pre_emption_vulnerability === 1 ? "Disabled" : "Unknown"), session['ambr'] === undefined ? _react2.default.createElement('div', { className: 'large_data' }, 'unlimited/unlimited') : _react2.default.createElement('div', { className: 'large_data' }, session.ambr['downlink'] === undefined ? "unlimited" : session.ambr.downlink['value'] === undefined ? "unlimited" : session.ambr.downlink.value, ' ', session.ambr['downlink'] === undefined ? "unlimited" : session.ambr.downlink['value'] === undefined ? "" : session.ambr.downlink['unit'] === undefined ? "bps" : session.ambr.downlink.unit === 0 ? "bps" : session.ambr.downlink.unit === 1 ? "Kbps" : session.ambr.downlink.unit === 2 ? "Mbps" : session.ambr.downlink.unit === 3 ? "Gbps" : session.ambr.downlink.unit === 4 ? "Tbps" : "Unknown Unit", ' / ', session.ambr['uplink'] === undefined ? "unlimited" : session.ambr.uplink['value'] === undefined ? "unlimited" : session.ambr.uplink.value, ' ', session.ambr['uplink'] === undefined ? "unlimited" : session.ambr.uplink['value'] === undefined ? "" : session.ambr.uplink['unit'] === undefined ? "bps" : session.ambr.uplink.unit === 0 ? "bps" : session.ambr.uplink.unit === 1 ? "Kbps" : session.ambr.uplink.unit === 2 ? "Mbps" : session.ambr.uplink.unit === 3 ? "Gbps" : session.ambr.uplink.unit === 4 ? "Tbps" : "Unknown Unit"), _react2.default.createElement('div', { className: 'large_data' })), session['ue'] !== undefined && _react2.default.createElement('div', { className: 'body' }, _react2.default.createElement('div', { className: 'medium_data' }), _react2.default.createElement('div', { className: 'medium_data', style: { color: _openColor2.default.gray[5] } }, "UE IPv4", ' '), _react2.default.createElement('div', { className: 'large_data' }, (session.ue || {}).ipv4), _react2.default.createElement('div', { className: 'medium_data', style: { color: _openColor2.default.gray[5] } }, "UE IPv6", ' '), _react2.default.createElement('div', { className: 'large_data' }, (session.ue || {}).ipv6)), session['smf'] !== undefined && _react2.default.createElement('div', { className: 'body' }, _react2.default.createElement('div', { className: 'medium_data' }), _react2.default.createElement('div', { className: 'medium_data', style: { color: _openColor2.default.gray[5] } }, "SMF IPv4", ' '), _react2.default.createElement('div', { className: 'large_data' }, (session.smf || {}).ipv4), _react2.default.createElement('div', { className: 'medium_data', style: { color: _openColor2.default.gray[5] } }, "SMF IPv6", ' '), _react2.default.createElement('div', { className: 'large_data' }, (session.smf || {}).ipv6)), session['pcc_rule'] !== undefined && session.pcc_rule.map(function (pcc_rule, index) {
        return _react2.default.createElement('div', { key: index }, _react2.default.createElement('div', { className: 'body' }, _react2.default.createElement('div', { className: 'large_data' }), _react2.default.createElement('div', { className: 'medium_data' }), _react2.default.createElement('div', { className: 'small_data' }, pcc_rule.qos.index), _react2.default.createElement('div', { className: 'small_data' }, pcc_rule.qos.arp.priority_level), _react2.default.createElement('div', { className: 'medium_data' }, pcc_rule.qos.arp.pre_emption_capability === 2 ? "Enabled" : pcc_rule.qos.arp.pre_emption_capability === 1 ? "Disabled" : "Unknown"), _react2.default.createElement('div', { className: 'medium_data' }, pcc_rule.qos.arp.pre_emption_vulnerability === 2 ? "Enabled" : pcc_rule.qos.arp.pre_emption_vulnerability === 1 ? "Disabled" : "Unknown"), pcc_rule.qos['mbr'] === undefined ? _react2.default.createElement('div', { className: 'large_data' }, 'unlimited/unlimited') : _react2.default.createElement('div', { className: 'large_data' }, pcc_rule.qos.mbr['downlink'] === undefined ? "unlimited" : pcc_rule.qos.mbr.downlink['value'] === undefined ? "unlimited" : pcc_rule.qos.mbr.downlink.value, ' ', pcc_rule.qos.mbr['downlink'] === undefined ? "unlimited" : pcc_rule.qos.mbr.downlink['value'] === undefined ? "" : pcc_rule.qos.mbr.downlink['unit'] === undefined ? "bps" : pcc_rule.qos.mbr.downlink.unit === 0 ? "bps" : pcc_rule.qos.mbr.downlink.unit === 1 ? "Kbps" : pcc_rule.qos.mbr.downlink.unit === 2 ? "Mbps" : pcc_rule.qos.mbr.downlink.unit === 3 ? "Gbps" : pcc_rule.qos.mbr.downlink.unit === 4 ? "Tbps" : "Unknown Unit", ' / ', pcc_rule.qos.mbr['uplink'] === undefined ? "unlimited" : pcc_rule.qos.mbr.uplink['value'] === undefined ? "unlimited" : pcc_rule.qos.mbr.uplink.value, ' ', pcc_rule.qos.mbr['uplink'] === undefined ? "unlimited" : pcc_rule.qos.mbr.uplink['value'] === undefined ? "" : pcc_rule.qos.mbr.uplink['unit'] === undefined ? "bps" : pcc_rule.qos.mbr.uplink.unit === 0 ? "bps" : pcc_rule.qos.mbr.uplink.unit === 1 ? "Kbps" : pcc_rule.qos.mbr.uplink.unit === 2 ? "Mbps" : pcc_rule.qos.mbr.uplink.unit === 3 ? "Gbps" : pcc_rule.qos.mbr.uplink.unit === 4 ? "Tbps" : "Unknown Unit"), pcc_rule.qos['gbr'] === undefined ? _react2.default.createElement('div', { className: 'large_data' }, 'unlimited/unlimited') : _react2.default.createElement('div', { className: 'large_data' }, pcc_rule.qos.gbr['downlink'] === undefined ? "unlimited" : pcc_rule.qos.gbr.downlink['value'] === undefined ? "unlimited" : pcc_rule.qos.gbr.downlink.value, ' ', pcc_rule.qos.gbr['downlink'] === undefined ? "unlimited" : pcc_rule.qos.gbr.downlink['value'] === undefined ? "" : pcc_rule.qos.gbr.downlink['unit'] === undefined ? "bps" : pcc_rule.qos.gbr.downlink.unit === 0 ? "bps" : pcc_rule.qos.gbr.downlink.unit === 1 ? "Kbps" : pcc_rule.qos.gbr.downlink.unit === 2 ? "Mbps" : pcc_rule.qos.gbr.downlink.unit === 3 ? "Gbps" : pcc_rule.qos.gbr.downlink.unit === 4 ? "Tbps" : "Unknown Unit", ' / ', pcc_rule.qos.gbr['uplink'] === undefined ? "unlimited" : pcc_rule.qos.gbr.uplink['value'] === undefined ? "unlimited" : pcc_rule.qos.gbr.uplink.value, ' ', pcc_rule.qos.gbr['uplink'] === undefined ? "unlimited" : pcc_rule.qos.gbr.uplink['value'] === undefined ? "" : pcc_rule.qos.gbr.uplink['unit'] === undefined ? "bps" : pcc_rule.qos.gbr.uplink.unit === 0 ? "bps" : pcc_rule.qos.gbr.uplink.unit === 1 ? "Kbps" : pcc_rule.qos.gbr.uplink.unit === 2 ? "Mbps" : pcc_rule.qos.gbr.uplink.unit === 3 ? "Gbps" : pcc_rule.qos.gbr.uplink.unit === 4 ? "Tbps" : "Unknown Unit")), pcc_rule['flow'] !== undefined && pcc_rule.flow.map(function (flow, index) {
          return _react2.default.createElement('div', { className: 'body', key: index }, _react2.default.createElement('div', { className: 'medium_data' }), _react2.default.createElement('div', { className: 'small_data', style: { color: _openColor2.default.gray[5] } }, flow.direction == 1 && "Downlink", flow.direction == 2 && "Uplink"), _react2.default.createElement('div', { className: 'large_data', style: { width: "480px" } }, flow.description));
        }));
      }));
    }));
  }))))), _react2.default.createElement(_.Dimmed, { visible: visible }));
};

exports.default = View;