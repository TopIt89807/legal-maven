webpackJsonp([8],{714:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e){return{activities:e.activities?e.activities.activities:[]}}function l(e,t){return{fetchActivities:function(){return e(f.fetchActivities())},restoreStep:function(t){return e((0,p.restoreStep)(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(32),u=r(968),c=o(u),s=r(260),f=n(s),p=r(258);t["default"]=(0,a.connect)(i,l)(c["default"])},727:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,l=arguments.length-3;if(r||0===l||(r={}),r&&i)for(var a in i)void 0===r[a]&&(r[a]=i[a]);else r||(r=i||{});if(1===l)r.children=o;else if(l>1){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),s=(n(c),r(2)),f=(n(s),r(747)),p=n(f),d=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),u(t,[{key:"render",value:function(){var e=p["default"].button;return this.props.isFullWidth&&(e+=" "+p["default"]["full-width"]),a("div",{className:e,onClick:this.props.onClick,style:this.props.style},void 0,this.props.title)}}]),t}(c.Component);t["default"]=d},747:function(e,t){e.exports={button:"UXeMM0xCqXOSM94NXL3dd","full-width":"_1TwiRRSJgltUKfD75pmMY-"}},933:function(e,t){e.exports={container:"_1PclISfoyPdKPYYpzgJmmc","container-title":"_3PV-mKR-kMvdZ_Fg8N5hNA",title:"_1kQZS9CH9RWEWTHAPGe3x-",text:"_1NHUDMhPQmD5wR-zwAJIZk","search-container":"_2lidkjEnb_d6_cwpkibWjo","activity-container":"ekEuIQXpnLkrkNYtms0uw",activity:"_1F1PjdHWWY20GIOV4-INyA",icon:"_1X75Wglg9Oigqji6r9ddKe",link:"_368oVmd4OlUsxYSzEo0tHM","activity-seemore":"_13luWzlq0glIG1AAZdbDhG","avatar-container":"_2QMVIz0au8l8FUZL-iFzzU","info-container":"LjKhFED-QasG8-RTE2_7Y"}},968:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,l=arguments.length-3;if(r||0===l||(r={}),r&&i)for(var a in i)void 0===r[a]&&(r[a]=i[a]);else r||(r=i||{});if(1===l)r.children=o;else if(l>1){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),s=(n(c),r(2)),f=(n(s),r(933)),p=n(f),d=r(33),y=r(727),v=(n(y),r(969)),h=n(v),m=a("hr",{}),b=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),u(t,[{key:"componentDidMount",value:function(){this.props.fetchActivities()}},{key:"restoreActivity",value:function(e){this.props.restoreStep({name:e.name,history:e.history,progress:e.progress}),d.browserHistory.push("/legal"+e.program.kind+"s/"+e.program.name)}},{key:"render",value:function(){var e,t=this;return this.props.activities&&(e=this.props.activities.map(function(e,r){return a(h["default"],{name:e.program.name,program:e.program.description,date:e.updated,onClick:function(r){return t.restoreActivity(e)}},r)})),a("div",{className:"container wow fadeIn"},void 0,a("div",{className:p["default"].container+" row"},void 0,a("div",{className:p["default"]["container-title"]+" col-xs-12"},void 0,"My Activity"),a("div",{className:p["default"]["search-container"]+" col-xs-12"},void 0,a("div",{className:p["default"].text},void 0," Search Container. Will Put Search Element "),m),a("div",{className:p["default"]["activity-container"]+" col-xs-12"},void 0,e)))}}]),t}(c.Component);t["default"]=b},969:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,l=arguments.length-3;if(r||0===l||(r={}),r&&i)for(var a in i)void 0===r[a]&&(r[a]=i[a]);else r||(r=i||{});if(1===l)r.children=o;else if(l>1){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),s=(n(c),r(2)),f=(n(s),r(933)),p=n(f),d=a("i",{className:"fa fa-briefcase","aria-hidden":"true"}),y=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return a("div",{className:p["default"].activity+" col-xs-12",onClick:this.props.onClick},void 0,a("div",{className:p["default"].icon+" col-xs-1"},void 0,d),a("div",{className:p["default"].title+" col-md-3 col-xs-10"},void 0,this.props.name),a("div",{className:p["default"].text+" col-xs-push-1 col-xs-12 col-sm-push-0 col-sm-8 col-md-push-0 col-md-5 "},void 0,this.props.program),a("div",{className:p["default"].text+" col-xs-push-1 col-xs-11 col-sm-push-0 col-sm-3 col-md-push-0 col-md-3"},void 0,new Date(this.props.date).toDateString()))}}]),t}(c.Component);t["default"]=y}});