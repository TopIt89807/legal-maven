webpackJsonp([5],{1033:function(e,t){e.exports={profile:"_1V60Xbw1jHy3vltw6hVTx"}},708:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{auth:e.auth}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(0),f=(n(c),o(2)),d=(n(f),o(33)),p=o(1033),v=n(p),y=o(719),b=(n(y),o(959)),m=n(b),h=o(958),_=n(h),w=o(956),O=n(w),x=o(955),N=n(x),g=o(957),j=n(g),P=o(84),k=u("div",{className:"col-xs-12"},void 0,u(N["default"],{})),S=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),s(t,[{key:"componentWillMount",value:function(){this.props.dispatch((0,P.fetchUserProfileRequested)())}},{key:"onUpdateInfo",value:function(){alert("Update Information")}},{key:"onUpgradeMembership",value:function(){alert("Upgrade")}},{key:"onViewAll",value:function(){alert("View All")}},{key:"onAsk",value:function(){alert("Ask a Maven")}},{key:"render",value:function(){return u("div",{className:v["default"].profile+" container wow fadeIn"},void 0,u("div",{className:"row"},void 0,u("div",{className:"col-md-4 col-xs-12"},void 0,u(m["default"],{user:this.props.auth.user,onUpdate:this.onUpdateInfo.bind(this)})),u("div",{className:"col-md-8 col-xs-12"},void 0,u(_["default"],{onUpgrade:this.onUpgradeMembership.bind(this)})),u("div",{className:"col-md-8 col-xs-12"},void 0,u(j["default"],{onView:this.onViewAll.bind(this)})),k,u("div",{className:"col-xs-12"},void 0,u(O["default"],{onAsk:this.onAsk.bind(this)}))))}}]),t}(c.Component);t["default"]=(0,d.connect)(l)(S)},719:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(0),c=(n(s),o(2)),f=(n(c),o(754)),d=n(f),p=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){var e=d["default"].button;return this.props.isFullWidth&&(e+=" "+d["default"]["full-width"]),l("div",{className:e,onClick:this.props.onClick,style:this.props.style},void 0,this.props.title)}}]),t}(s.Component);t["default"]=p},754:function(e,t){e.exports={button:"UXeMM0xCqXOSM94NXL3dd","full-width":"_1TwiRRSJgltUKfD75pmMY-"}},755:function(e,t){e.exports={container:"_3xhID-yddsPEr0M30uFUo1","container-title":"b-GupJP5llYDFMHTY1jOP","avatar-container":"_1OzZgsoNdzag9SlUMqUWRB",avatar:"_2jODcprNs-DgNgWYrirxtc","text-box":"A0e6PlHUdXhm6eczQaLcI","tip-text":"_30d7ahubYnOPHP_1-s3djw",title:"eiL7N5k0gOQAMpTqL8A0p",text:"_1VSVRE4jq4vAtE-5KrCIC5",icon:"_3DvqbW00-U7V5mUC0QFoqR","button-container":"_3GDxEF35ezj276e6bTr-ms","button-container2":"_1LmN3MYxCnyOfx_ZehP37C","activity-container":"_1Byjd627g_yPcg6_SGNIjW",link:"zoilsZ9AdF_K_RHb9bx2b","activity-seemore":"_3Ilf1uOkoTNc8S75yBEfpm","info-container":"_3VYfLgQ-voooVwxM9vox2s"}},955:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(0),c=(n(s),o(2)),f=(n(c),o(755)),d=n(f),p=o(719),v=(n(p),l("i",{className:"fa fa-briefcase","aria-hidden":"true"})),y=l("i",{className:"fa fa-file","aria-hidden":"true"}),b=l("div",{},void 0,l("i",{className:"fa fa-caret-down","aria-hidden":"true"})),m=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return l("div",{className:d["default"].container+" row"},void 0,l("div",{className:d["default"]["container-title"]+" col-xs-12"},void 0,"My Activity"),l("div",{className:d["default"]["activity-container"]+" col-xs-12"},void 0,l("div",{className:d["default"].icon+" col-xs-1"},void 0,v),l("div",{className:d["default"].title+" col-sm-4 col-xs-10"},void 0,"Business Corporation"),l("div",{className:d["default"].text+" col-sm-3 col-xs-4"},void 0,"2017/5/5"),l("div",{className:d["default"].text+" pull-right"},void 0,l("a",{className:d["default"].link},void 0,"Let's continue >"))),l("div",{className:d["default"]["activity-container"]+" col-xs-12"},void 0,l("div",{className:d["default"].icon+" col-xs-1"},void 0,y),l("div",{className:d["default"].title+" col-sm-4 col-xs-10"},void 0,"Articles of Incorporation"),l("div",{className:d["default"].text+" col-sm-3 col-xs-4"},void 0,"2017/6/3"),l("div",{className:d["default"].text+" pull-right"},void 0,l("a",{className:d["default"].link},void 0,"Let's continue >"))),l("div",{className:d["default"]["activity-seemore"]+" col-xs-12"},void 0,b))}}]),t}(s.Component);t["default"]=m},956:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(0),c=(n(s),o(2)),f=n(c),d=o(755),p=n(d),v=o(719),y=n(v),b=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return l("div",{className:p["default"].container+" row"},void 0,l("div",{className:p["default"]["container-title"]+" col-xs-12"},void 0,"Conversations"),l("div",{className:p["default"]["text-box"]+" col-xs-12"},void 0,l("span",{className:p["default"].text},void 0,"Our mavens are here to assist you with all your legal questions. Let us know how we may help you, and we will get back to you as soon as possible.")),l("div",{className:p["default"]["button-container2"]+" col-xs-12"},void 0,l(y["default"],{title:"Ask a Maven",onClick:this.props.onAsk}),l("span",{className:p["default"]["tip-text"]},void 0,"Click for more access!")))}}]),t}(s.Component);b.PropTypes={onAsk:f["default"].func.isRequired},t["default"]=b},957:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(0),c=(n(s),o(2)),f=n(c),d=o(755),p=n(d),v=o(719),y=n(v),b=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return l("div",{className:p["default"].container+" row"},void 0,l("div",{className:p["default"]["container-title"]+" col-xs-12"},void 0,"My Documents"),l("div",{className:p["default"]["text-box"]+" col-xs-12"},void 0,l("div",{className:p["default"].title},void 0,"View or start a new document:"),l("span",{className:p["default"].text},void 0,"Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium doloremque laudantium, totam rem.")),l("div",{className:p["default"]["button-container2"]+" col-xs-12"},void 0,l(y["default"],{title:"View All",onClick:this.props.onView}),l("span",{className:p["default"]["tip-text"]},void 0,"Click to review my documents.")))}}]),t}(s.Component);b.PropTypes={onView:f["default"].func.isRequired},t["default"]=b},958:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(0),c=(n(s),o(2)),f=n(c),d=o(755),p=n(d),v=o(719),y=n(v),b=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return l("div",{className:p["default"].container+" row"},void 0,l("div",{className:p["default"]["container-title"]+" col-xs-12"},void 0,"Membership Details"),l("div",{className:p["default"]["text-box"]+" col-xs-12"},void 0,l("span",{className:p["default"].title},void 0,"Status:"),l("span",{className:p["default"].text},void 0,"Free Membership")),l("div",{className:p["default"]["text-box"]+" col-xs-12"},void 0,l("span",{className:p["default"].title},void 0,"Services Available:"),l("span",{className:p["default"].text},void 0,"Access to programs, glossary, most forms, current events, interactions with our Mavens.")),l("div",{className:p["default"]["button-container2"]+" col-xs-12"},void 0,l(y["default"],{title:"Upgrade",onClick:this.props.onUpgrade}),l("span",{className:p["default"]["tip-text"]},void 0,"Click for more success!")))}}]),t}(s.Component);b.PropTypes={onUpgrade:f["default"].func.isRequired},t["default"]=b},959:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(0),c=(n(s),o(2)),f=n(c),d=o(755),p=n(d),v=o(719),y=n(v),b=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"renderInfo",value:function(e,t){return l("div",{className:""+p["default"]["text-box"]},void 0,l("div",{className:p["default"].icon},void 0,l("i",{className:"fa "+e,"aria-hidden":"true"})),l("span",{className:p["default"].text},void 0,t))}},{key:"render",value:function(){var e=this.props.user;return console.log(e),l("div",{className:""+p["default"].container},void 0,l("div",{className:p["default"]["avatar-container"]},void 0,l("img",{className:p["default"].avatar,src:e&&e.photo?e.photo:"https://cdn.psychologytoday.com/sites/default/files/blogs/46379/2014/07/155585-159667.gif"})),l("div",{className:p["default"]["info-container"]},void 0,this.renderInfo("fa-user",e&&e.name?e.name.givenName+" "+e.name.familyName:""),this.renderInfo("fa-envelope",e&&e.emails?e.emails[0].value:""),this.renderInfo("fa-phone",e&&e.phone?e.phone:""),this.renderInfo("fa-map-marker",e&&e.address?e.address:""),this.renderInfo("fa-briefcase",e&&e.occupation?e.occupation:"")),l("div",{className:""+p["default"]["button-container"]},void 0,l(y["default"],{title:"Update Info",onClick:this.props.onUpdate})))}}]),t}(s.Component);b.PropTypes={onUpdate:f["default"].func.isRequired},t["default"]=b}});