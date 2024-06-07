'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transitions = exports.media = undefined;

var _styledComponents = require('styled-components');

var media = exports.media = {
  desktop: function desktop() {
    return (0, _styledComponents.css)(['@media (max-width:1200px){', '}'], _styledComponents.css.apply(undefined, arguments));
  },

  tablet: function tablet() {
    return (0, _styledComponents.css)(['@media (max-width:992px){', '}'], _styledComponents.css.apply(undefined, arguments));
  },

  mobile: function mobile() {
    return (0, _styledComponents.css)(['@media (max-width:768px){', '}'], _styledComponents.css.apply(undefined, arguments));
  }
};

var transitions = exports.transitions = {
  slideDown: (0, _styledComponents.keyframes)(['0%{opacity:0;transform:translateY(-100vh);}75%{opacity:1;transform:translateY(50px);}100%{transform:translateY(0px);}']),
  slideUp: (0, _styledComponents.keyframes)(['0%{transform:translateY(0px);opacity:1;}25%{opacity:1;transform:translateY(50px);}100%{opacity:0;transform:translateY(-100vh);}']),
  stretchOut: (0, _styledComponents.keyframes)(['0%{transform:scale(0.25,0.25);}100%{transform:scale(1,1);}']),
  shrinkIn: (0, _styledComponents.keyframes)(['0%{transform:scale(1,1);}100%{transform:scale(0.25,0.25);}'])
};