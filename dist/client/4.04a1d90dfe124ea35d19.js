webpackJsonp([4],{1018:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(0),l=i(u),c=n(4),f=i(c),p=n(696),d=i(p),h=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.componentDidMount=function(){var e=i.props.timeOut;0!==e&&(i.timer=setTimeout(i.requestHide,e))},i.componentWillUnmount=function(){i.timer&&clearTimeout(i.timer)},i.handleClick=function(){var e=i.props.onClick;e&&e(),i.requestHide()},i.requestHide=function(){var e=i.props.onRequestHide;e&&e()},a=n,o(i,a)}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.message,i=this.props.title,r=(0,d["default"])(["notification","notification-"+t]);return i=i?l["default"].createElement("h4",{className:"title"},i):null,l["default"].createElement("div",{className:r,onClick:this.handleClick},l["default"].createElement("div",{className:"notification-message",role:"alert"},i,l["default"].createElement("div",{className:"message"},n)))}}]),t}(l["default"].Component);h.propTypes={type:f["default"].oneOf(["info","success","warning","error"]),title:f["default"].node,message:f["default"].node.isRequired,timeOut:f["default"].number,onClick:f["default"].func,onRequestHide:f["default"].func},h.defaultProps={type:"info",title:null,message:null,timeOut:5e3,onClick:function(){},onRequestHide:function(){}},t["default"]=h,e.exports=t["default"]},1019:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(0),l=i(u),c=n(4),f=i(c),p=n(859),d=i(p),h=n(860),m=i(h),v=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.state={notifications:[]},i.componentWillMount=function(){d["default"].addChangeListener(i.handleStoreChange)},i.componentWillUnmount=function(){d["default"].removeChangeListener(i.handleStoreChange)},i.handleStoreChange=function(e){i.setState({notifications:e})},i.handleRequestHide=function(e){d["default"].remove(e)},a=n,o(i,a)}return a(t,e),s(t,[{key:"render",value:function(){var e=this.state.notifications,t=this.props,n=t.enterTimeout,i=t.leaveTimeout;return l["default"].createElement(m["default"],{enterTimeout:n,leaveTimeout:i,notifications:e,onRequestHide:this.handleRequestHide})}}]),t}(l["default"].Component);v.propTypes={enterTimeout:f["default"].number,leaveTimeout:f["default"].number},v.defaultProps={enterTimeout:400,leaveTimeout:400},t["default"]=v,e.exports=t["default"]},1020:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationManager=t.NotificationContainer=t.Notifications=void 0;var r=n(860),o=i(r),a=n(1019),s=i(a),u=n(859),l=i(u);t.Notifications=o["default"],t.NotificationContainer=s["default"],t.NotificationManager=l["default"],t["default"]=o["default"]},1028:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=n(0),l=i(u),c=n(4),f=i(c),p=n(868),d=i(p),h=n(1029),m=i(h),v=n(869),y=({transitionName:v.nameShape.isRequired,transitionAppear:f["default"].bool,transitionEnter:f["default"].bool,transitionLeave:f["default"].bool,transitionAppearTimeout:(0,v.transitionTimeout)("Appear"),transitionEnterTimeout:(0,v.transitionTimeout)("Enter"),transitionLeaveTimeout:(0,v.transitionTimeout)("Leave")},{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),b=function(e){function t(){var n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=i=o(this,e.call.apply(e,[this].concat(u))),i._wrapChild=function(e){return l["default"].createElement(m["default"],{name:i.props.transitionName,appear:i.props.transitionAppear,enter:i.props.transitionEnter,leave:i.props.transitionLeave,appearTimeout:i.props.transitionAppearTimeout,enterTimeout:i.props.transitionEnterTimeout,leaveTimeout:i.props.transitionLeaveTimeout},e)},a=n,o(i,a)}return a(t,e),t.prototype.render=function(){return l["default"].createElement(d["default"],s({},this.props,{childFactory:this._wrapChild}))},t}(l["default"].Component);b.displayName="CSSTransitionGroup",b.propTypes={},b.defaultProps=y,t["default"]=b,e.exports=t["default"]},1029:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return T.length?T.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){T.length&&T.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(746),c=i(l),f=n(747),p=i(f),d=n(914),h=i(d),m=n(738),v=n(0),y=i(v),b=n(4),_=i(b),g=n(58),w=n(869),T=[];m.transitionEnd&&T.push(m.transitionEnd),m.animationEnd&&T.push(m.animationEnd);var E=({children:_["default"].node,name:w.nameShape.isRequired,appear:_["default"].bool,enter:_["default"].bool,leave:_["default"].bool,appearTimeout:_["default"].number,enterTimeout:_["default"].number,leaveTimeout:_["default"].number},function(e){function t(){var n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=i=o(this,e.call.apply(e,[this].concat(u))),i.componentWillAppear=function(e){i.props.appear?i.transition("appear",e,i.props.appearTimeout):e()},i.componentWillEnter=function(e){i.props.enter?i.transition("enter",e,i.props.enterTimeout):e()},i.componentWillLeave=function(e){i.props.leave?i.transition("leave",e,i.props.leaveTimeout):e()},a=n,o(i,a)}return a(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var i=(0,g.findDOMNode)(this);if(!i)return void(t&&t());var r=this.props.name[e]||this.props.name+"-"+e,o=this.props.name[e+"Active"]||r+"-active",a=null,u=void 0;(0,c["default"])(i,r),this.queueClassAndNode(o,i);var l=function(e){e&&e.target!==i||(clearTimeout(a),u&&u(),(0,p["default"])(i,r),(0,p["default"])(i,o),u&&u(),t&&t())};n?(a=setTimeout(l,n),this.transitionTimeouts.push(a)):m.transitionEnd&&(u=s(i,l))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,h["default"])(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,c["default"])(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=u({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,y["default"].cloneElement(y["default"].Children.only(this.props.children),e)},t}(y["default"].Component));E.displayName="CSSTransitionGroupChild",E.propTypes={},t["default"]=E,e.exports=t["default"]},1030:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var r=n(1028),o=i(r),a=n(868),s=i(a);e.exports={TransitionGroup:s["default"],CSSTransitionGroup:o["default"]}},1031:function(e,t,n){"use strict";function i(e){if(!e)return e;var t={};return o.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function r(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var i={},r=[];for(var o in e)t.hasOwnProperty(o)?r.length&&(i[o]=r,r=[]):r.push(o);var a=void 0,s={};for(var u in t){if(i.hasOwnProperty(u))for(a=0;a<i[u].length;a++){var l=i[u][a];s[i[u][a]]=n(l)}s[u]=n(u)}for(a=0;a<r.length;a++)s[r[a]]=n(r[a]);return s}t.__esModule=!0,t.getChildMapping=i,t.mergeChildMappings=r;var o=n(0)},1041:function(e,t,n){e.exports=n.p+"37af2caac70c45d0bb56ae518a4ad97b.png"},691:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,i,r){var o=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&o)for(var s in o)void 0===n[s]&&(n[s]=o[s]);else n||(n=o||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=n(0),f=(i(c),n(4)),p=(i(f),n(59)),d=(n(48),n(49),n(1020)),h=n(829),m=i(h),v=n(872),y=i(v),b=n(1041),_=i(b),g=u(d.NotificationContainer,{}),w=u(y["default"],{}),T=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.createNotification=function(e){return alert("book"),function(){switch(e){case"info":d.NotificationManager.info("Info message");break;case"success":d.NotificationManager.success("Success message","Title here");break;case"warning":d.NotificationManager.warning("Warning message","Close after 3000ms",3e3);break;case"error":d.NotificationManager.error("Error message","Click me!",5e3,function(){alert("callback")})}}},n}return a(t,e),l(t,[{key:"render",value:function(){var e=this;return u("div",{className:m["default"].home+" wow fadeIn",style:{background:"#FFF url("+_["default"]+") repeat"}},void 0,u("div",{className:m["default"]["main-container"]+" container wow zoomIn","data-wow-delay":"0.2s","data-wow-duration":"0.5s"},void 0,u("div",{className:"row"},void 0,u("div",{className:m["default"].title+" col-xs-12"},void 0,"Legal Maven"),u("div",{className:m["default"].description+" col-xs-12",onClick:function(t){return e.createNotification("info").bind(e)}},void 0,"Get to the right answer. Faster."),u("div",{className:m["default"]["search-box-container"]+" col-sm-push-2 col-sm-8 col-xs-push-1 col-xs-10"},void 0,u("input",{type:"text",className:m["default"]["search-box"],placeholder:"How may we help you today?"}),u("i",{className:"fa fa-search "+m["default"]["search-icon"],"aria-hidden":"true"})))),g,w)}}]),t}(c.Component);t["default"]=(0,p.connect)(s)(T)},696:function(e,t,n){var i,r;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i))e.push(n.apply(null,i));else if("object"===r)for(var a in i)o.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(i=[],r=function(){return n}.apply(t,i),!(void 0!==r&&(e.exports=r)))}()},702:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=!("undefined"==typeof window||!window.document||!window.document.createElement),e.exports=t["default"]},707:function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function r(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!r(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,r,s,u,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(n=this._events[e],a(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),n.apply(this,s)}else if(o(n))for(s=Array.prototype.slice.call(arguments,1),l=n.slice(),r=l.length,u=0;u<r;u++)l[u].apply(this,s);return!0},n.prototype.addListener=function(e,t){var r;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned&&(r=a(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,r,a,s;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],a=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(n)){for(s=a;s-- >0;)if(n[s]===t||n[s].listener&&n[s].listener===t){r=s;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},734:function(e,t){"use strict";function n(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")!==-1}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},738:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(){for(var e=document.createElement("div").style,t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},n=Object.keys(t),i=void 0,r=void 0,o="",a=0;a<n.length;a++){var s=n[a];if(s+"TransitionProperty"in e){o="-"+s.toLowerCase(),i=t[s]("TransitionEnd"),r=t[s]("AnimationEnd");break}}return!i&&"transitionProperty"in e&&(i="transitionend"),!r&&"animationName"in e&&(r="animationend"),e=null,{animationEnd:r,transitionEnd:i,prefix:o}}Object.defineProperty(t,"__esModule",{value:!0}),t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var o=n(702),a=i(o),s="transform",u=void 0,l=void 0,c=void 0,f=void 0,p=void 0,d=void 0,h=void 0,m=void 0,v=void 0,y=void 0,b=void 0;if(a["default"]){var _=r();u=_.prefix,t.transitionEnd=l=_.transitionEnd,t.animationEnd=c=_.animationEnd,t.transform=s=u+"-"+s,t.transitionProperty=f=u+"-transition-property",t.transitionDuration=p=u+"-transition-duration",t.transitionDelay=h=u+"-transition-delay",t.transitionTiming=d=u+"-transition-timing-function",t.animationName=m=u+"-animation-name",t.animationDuration=v=u+"-animation-duration",t.animationTiming=y=u+"-animation-delay",t.animationDelay=b=u+"-animation-timing-function"}t.transform=s,t.transitionProperty=f,t.transitionTiming=d,t.transitionDelay=h,t.transitionDuration=p,t.transitionEnd=l,t.animationName=m,t.animationDuration=v,t.animationTiming=y,t.animationDelay=b,t.animationEnd=c,t["default"]={transform:s,end:l,property:f,timing:d,delay:h,duration:p}},746:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){e.classList?e.classList.add(t):(0,a["default"])(e)||(e.className=e.className+" "+t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var o=n(734),a=i(o);e.exports=t["default"]},747:function(e,t){"use strict";e.exports=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}},829:function(e,t){e.exports={home:"_37C9HJPUzY52Ex490y87_h",footer:"_1wZ1wZ-UlievGrJUWIxiJC","service-box":"_2ndtVNYt2HqQlFrk9BLFgu","service-icon":"_3q81HjDZxpEDZMqsEU6ro5","service-title":"_1m7s6_1JUwdhD932tYX9L2","service-text":"_2snTPXEMvEN8i5jdi--HnB","main-container":"_1Sdl55TwHlDFxbirT1jrhV",title:"_1ldS0leZzeochsFHKEFPfg",description:"_2jMdm40vzBlPDfByr0SY8b","search-box-container":"Ejl1kMqO-LvUhHYFGs7JB","search-icon":"_2_lH2nFeY9x-twSVV928GR","search-box":"_2R7FQyRpoCE5m3JJfubYo4"}},859:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(707),u=function(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";return e.replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})},l={CHANGE:"change",INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error"},c=function(e){function t(){i(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.listNotify=[],e}return o(t,e),a(t,[{key:"create",value:function(e){var t={id:u(),type:"info",title:null,message:null,timeOut:5e3};e.priority?this.listNotify.unshift(Object.assign(t,e)):this.listNotify.push(Object.assign(t,e)),this.emitChange()}},{key:"info",value:function(e,t,n,i,r){this.create({type:l.INFO,message:e,title:t,timeOut:n,onClick:i,priority:r})}},{key:"success",value:function(e,t,n,i,r){this.create({type:l.SUCCESS,message:e,title:t,timeOut:n,onClick:i,priority:r})}},{key:"warning",value:function(e,t,n,i,r){this.create({type:l.WARNING,message:e,title:t,timeOut:n,onClick:i,priority:r})}},{key:"error",value:function(e,t,n,i,r){this.create({type:l.ERROR,message:e,title:t,timeOut:n,onClick:i,priority:r})}},{key:"remove",value:function(e){this.listNotify=this.listNotify.filter(function(t){return e.id!==t.id}),this.emitChange()}},{key:"emitChange",value:function(){this.emit(l.CHANGE,this.listNotify)}},{key:"addChangeListener",value:function(e){this.addListener(l.CHANGE,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(l.CHANGE,e)}}]),t}(s.EventEmitter);t["default"]=new c,e.exports=t["default"]},860:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(0),l=i(u),c=n(4),f=i(c),p=n(1030),d=n(696),h=i(d),m=n(1018),v=i(m),y=function(e){function t(){var e,n,i,a;r(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.handleRequestHide=function(e){return function(){var t=i.props.onRequestHide;t&&t(e)}},a=n,o(i,a)}return a(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.notifications,i=t.enterTimeout,r=t.leaveTimeout,o=(0,h["default"])("notification-container",{"notification-container-empty":0===n.length});return l["default"].createElement("div",{className:o},l["default"].createElement(p.CSSTransitionGroup,{transitionName:"notification",transitionEnterTimeout:i,transitionLeaveTimeout:r},n.map(function(t){var n=t.id||(new Date).getTime();return l["default"].createElement(v["default"],{key:n,type:t.type,title:t.title,message:t.message,timeOut:t.timeOut,onClick:t.onClick,onRequestHide:e.handleRequestHide(t)})})))}}]),t}(l["default"].Component);y.propTypes={notifications:f["default"].array.isRequired,onRequestHide:f["default"].func,enterTimeout:f["default"].number,leaveTimeout:f["default"].number},y.defaultProps={notifications:[],onRequestHide:function(){},enterTimeout:400,leaveTimeout:400},t["default"]=y,e.exports=t["default"]},868:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=n(889),l=i(u),c=n(0),f=i(c),p=n(4),d=i(p),h=n(256),m=(i(h),n(1031)),v=({component:d["default"].any,childFactory:d["default"].func,children:d["default"].node},{component:"span",childFactory:function(e){return e}}),y=function(e){function t(n,i){r(this,t);var a=o(this,e.call(this,n,i));return a.performAppear=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(a._handleDoneAppearing.bind(a,e,t)):a._handleDoneAppearing(e,t)},a._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete a.currentlyTransitioningKeys[e];var n=(0,m.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performEnter=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(a._handleDoneEntering.bind(a,e,t)):a._handleDoneEntering(e,t)},a._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete a.currentlyTransitioningKeys[e];var n=(0,m.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performLeave=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(a._handleDoneLeaving.bind(a,e,t)):a._handleDoneLeaving(e,t)},a._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete a.currentlyTransitioningKeys[e];var n=(0,m.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)?a.keysToEnter.push(e):a.setState(function(t){var n=s({},t.children);return delete n[e],{children:n}})},a.childRefs=Object.create(null),a.state={children:(0,m.getChildMapping)(n.children)},a}return a(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,m.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,m.mergeChildMappings)(n,t)});for(var i in t){var r=n&&n.hasOwnProperty(i);!t[i]||r||this.currentlyTransitioningKeys[i]||this.keysToEnter.push(i)}for(var o in n){var a=t&&t.hasOwnProperty(o);!n[o]||a||this.currentlyTransitioningKeys[o]||this.keysToLeave.push(o)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[],n=function(n){var i=e.state.children[n];if(i){var r="string"!=typeof i.ref,o=e.props.childFactory(i),a=function(t){e.childRefs[n]=t};o===i&&r&&(a=(0,l["default"])(i.ref,a)),t.push(f["default"].cloneElement(o,{key:n,ref:a}))}};for(var i in this.state.children)n(i);var r=s({},this.props);return delete r.transitionLeave,delete r.transitionName,delete r.transitionAppear,delete r.transitionEnter,delete r.childFactory,delete r.transitionLeaveTimeout,delete r.transitionEnterTimeout,delete r.transitionAppearTimeout,delete r.component,f["default"].createElement(this.props.component,r,t)},t}(f["default"].Component);y.displayName="TransitionGroup",y.propTypes={},y.defaultProps=v,t["default"]=y,e.exports=t["default"]},869:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=r;var o=n(0),a=(i(o),n(4)),s=i(a);t.nameShape=s["default"].oneOfType([s["default"].string,s["default"].shape({enter:s["default"].string,leave:s["default"].string,active:s["default"].string}),s["default"].shape({enter:s["default"].string,enterActive:s["default"].string,leave:s["default"].string,leaveActive:s["default"].string,appear:s["default"].string,appearActive:s["default"].string})])},872:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,i,r){var o=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&o)for(var s in o)void 0===n[s]&&(n[s]=o[s]);else n||(n=o||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}();t["default"]=function(e){return r("div",{className:u["default"].footer},void 0,r("div",{className:"container"},void 0,r("div",{className:"row"},void 0,r("div",{className:"col-sm-4 col-xs-12"},void 0,r("div",{className:u["default"]["service-box"]},void 0,r("div",{className:u["default"]["service-icon"]},void 0,l),r("div",{className:u["default"]["service-title"]},void 0,"Legal Mavens"),r("div",{className:u["default"]["service-text"]},void 0,"Our Mavens are specialized attorneys who can answer your specific legal questions and concerns.",c," Have a question?  ",f))),r("div",{className:"col-sm-4 col-xs-12"},void 0,r("div",{className:u["default"]["service-box"]},void 0,r("div",{className:u["default"]["service-icon"]},void 0,p),r("div",{className:u["default"]["service-title"]},void 0,"Transfer Tax Made Easy"),r("div",{className:u["default"]["service-text"]},void 0,"Conducting a deed or entity transfer? Figure out whether your transaction qualifies for an exemption, or how much tax you may owe.  ",d,"."))),r("div",{className:"col-sm-4 col-xs-12"},void 0,r("div",{className:u["default"]["service-box"]},void 0,r("div",{className:u["default"]["service-icon"]},void 0,h),r("div",{className:u["default"]["service-title"]},void 0,"Start-Ups"),r("div",{className:u["default"]["service-text"]},void 0,"Decide what type of entity is right for your business, obtain formation paperwork, and get answers to important legal questions relating to your business.  ",m,"."))))))};var o=n(0),a=(i(o),n(4)),s=(i(a),n(59),n(48),n(49),n(829)),u=i(s),l=r("i",{className:"fa fa-graduation-cap","aria-hidden":"true"}),c=r("br",{}),f=r("a",{},void 0,"Consult an expert now"),p=r("i",{className:"fa fa-exchange","aria-hidden":"true"}),d=r("a",{},void 0,"Calculate now"),h=r("i",{className:"fa fa-building-o","aria-hidden":"true"}),m=r("a",{},void 0,"Get started now")},889:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},914:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-p)),i=setTimeout(e,n);return p=t,i}Object.defineProperty(t,"__esModule",{value:!0});var o=n(702),a=i(o),s=["","webkit","moz","o","ms"],u="clearTimeout",l=r,c=void 0,f=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};a["default"]&&s.some(function(e){var t=f(e,"request");if(t in window)return u=f(e,"cancel"),l=function(e){return window[t](e)}});var p=(new Date).getTime();c=function(e){return l(e)},c.cancel=function(e){window[u]&&"function"==typeof window[u]&&window[u](e)},t["default"]=c,e.exports=t["default"]}});