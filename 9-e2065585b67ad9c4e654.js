(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(t,e,r){t.exports=r(170)},163:function(t,e){!function(e){"use strict";var r,i=Object.prototype,n=i.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"==typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{(u=e.regeneratorRuntime=c?t.exports:{}).wrap=b;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",g={},y={};y[a]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(k([])));v&&v!==i&&n.call(v,a)&&(y=v);var w=R.prototype=E.prototype=Object.create(y);S.prototype=w.constructor=R,R.constructor=S,R[l]=S.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,R):(t.__proto__=R,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},x(I.prototype),I.prototype[s]=function(){return this},u.AsyncIterator=I,u.async=function(t,e,r,i){var n=new I(b(t,e,r,i));return u.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},x(w),w[l]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var i=e.pop();if(i in t)return r.value=i,r.done=!1,r}return r.done=!0,r}},u.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,n){return s.type="throw",s.arg=t,e.next=i,n&&(e.method="next",e.arg=r),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var i=r.completion;if("throw"===i.type){var n=i.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:k(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=r),g}}}function b(t,e,r,i){var n=e&&e.prototype instanceof E?e:E,o=Object.create(n.prototype),a=new _(i||[]);return o._invoke=function(t,e,r){var i=f;return function(n,o){if(i===h)throw new Error("Generator is already running");if(i===p){if("throw"===n)throw o;return z()}for(r.method=n,r.arg=o;;){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===f)throw i=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=h;var l=L(t,e,r);if("normal"===l.type){if(i=r.done?p:d,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i=p,r.method="throw",r.arg=l.arg)}}}(t,r,a),o}function L(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(i){return{type:"throw",arg:i}}}function E(){}function S(){}function R(){}function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function I(t){var e;this._invoke=function(r,i){function o(){return new Promise(function(e,o){!function e(r,i,o,a){var s=L(t[r],t,i);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){l.value=t,o(l)},function(t){return e("throw",t,o,a)})}a(s.arg)}(r,i,e,o)})}return e=e?e.then(o,o):o()}}function j(t,e){var i=t.iterator[e.method];if(i===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=L(i,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,g;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:z}}function z(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},170:function(t,e,r){var i=function(){return this||"object"==typeof self&&self}()||Function("return this")(),n=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,o=n&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=r(163),n)i.regeneratorRuntime=o;else try{delete i.regeneratorRuntime}catch(a){i.regeneratorRuntime=void 0}},195:function(t,e,r){"use strict";var i=r(8);e.__esModule=!0,e.default=void 0;var n,o=i(r(7)),a=i(r(51)),s=i(r(167)),l=i(r(145)),c=i(r(0)),u=i(r(4)),f=function(t){var e=(0,l.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},d={},h=function(t){var e=f(t),r=e.fluid?e.fluid.src:e.fixed.src;return d[r]||!1},p=[];var g=function(t,e){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(t){t.forEach(function(t){p.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(n.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),n).observe(t),p.push([t,e])},y=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',r=t.sizes?'sizes="'+t.sizes+'" ':"",i=t.srcSetWebp?"<source type='image/webp' srcSet=\""+t.srcSetWebp+'" '+r+"/>":"",n=t.srcSet?'<source srcSet="'+t.srcSet+'" '+r+"/>":"",o=t.title?'title="'+t.title+'" ':"",a=t.alt?'alt="'+t.alt+'" ':'alt="" ',s=t.width?'width="'+t.width+'" ':"",l=t.height?'height="'+t.height+'" ':"",c=t.opacity?t.opacity:"1";return"<picture>"+i+n+"<img "+s+l+e+a+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(t,e){var r=t.style,i=t.onLoad,n=t.onError,o=(0,s.default)(t,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},o,{onLoad:i,onError:n,ref:e,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});m.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var v=function(t){function e(e){var r;r=t.call(this,e)||this;var i=!0,n=!1,o=e.fadeIn,s=h(e);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),e.critical&&(i=!0,n=!1);var l=!(r.props.critical&&!r.props.fadeIn);return r.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:o,hasNoScript:l,seenBefore:s},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)((0,a.default)(r))),r.handleRef=r.handleRef.bind((0,a.default)((0,a.default)(r))),r}(0,o.default)(e,t);var r=e.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},r.handleRef=function(t){var e=this;this.state.IOSupported&&t&&g(t,function(){e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:h(e.props)}),e.setState({isVisible:!0,imgLoaded:!1})})},r.handleImageLoaded=function(){var t,e,r;t=this.props,e=f(t),r=e.fluid?e.fluid.src:e.fixed.src,d[r]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var t=f(this.props),e=t.title,r=t.alt,i=t.className,n=t.style,o=void 0===n?{}:n,a=t.imgStyle,s=void 0===a?{}:a,u=t.placeholderStyle,d=void 0===u?{}:u,h=t.placeholderClassName,p=t.fluid,g=t.fixed,v=t.backgroundColor,w=t.Tag,b="boolean"==typeof v?"lightgray":v,L=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,d),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),S={title:e,alt:this.state.isVisible?"":r,style:L,className:h};if(p){var R=p;return c.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&c.default.createElement(m,(0,l.default)({src:R.base64},S)),R.tracedSVG&&c.default.createElement(m,(0,l.default)({src:R.tracedSVG},S)),b&&c.default.createElement(w,{title:e,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),c.default.createElement(m,{alt:r,title:e,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:r,title:e},R))}}))}if(g){var x=g,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},o);return"inherit"===o.display&&delete I.display,c.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&c.default.createElement(m,(0,l.default)({src:x.base64},S)),x.tracedSVG&&c.default.createElement(m,(0,l.default)({src:x.tracedSVG},S)),b&&c.default.createElement(w,{title:e,style:{backgroundColor:b,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(m,{alt:r,title:e,width:x.width,height:x.height,src:x.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:r,title:e,width:x.width,height:x.height},x))}}))}return null},e}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),b=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});v.propTypes={resolutions:w,sizes:b,fixed:w,fluid:b,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string};var L=v;e.default=L},197:function(t,e,r){"use strict";var i=r(11),n=r(25),o=r(26),a=r(24),s=[].sort,l=[1,2,3];i(i.P+i.F*(a(function(){l.sort(void 0)})||!a(function(){l.sort(null)})||!r(198)(s)),"Array",{sort:function(t){return void 0===t?s.call(o(this)):s.call(o(this),n(t))}})},198:function(t,e,r){"use strict";var i=r(24);t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}}}]);
//# sourceMappingURL=9-e2065585b67ad9c4e654.js.map