webpackJsonp([0xd2a57dc1d883],{108:function(n,e,o){"use strict";function t(n,e,o){var t=r.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function a(n,e,o){return r.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=a;var r=[{plugin:o(373),options:{plugins:[]}},{plugin:o(375),options:{plugins:[]}}]},227:function(n,e,o){"use strict";var t;e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(345),"component---src-templates-blog-post-js":o(354),"component---src-pages-404-js":o(347),"component---src-pages-blog-js":o(348),"component---src-pages-career-js":o(349),"component---src-pages-index-js":o(350),"component---src-pages-projects-js":o(351),"component---src-pages-resume-js":o(352),"component---src-pages-sprite-sheet-js":o(353)},e.json=(t={"layout-index.json":o(10),"offline-plugin-app-shell-fallback.json":o(368)},t["layout-index.json"]=o(10),t["blog-exploring-lda-classification.json"]=o(360),t["layout-index.json"]=o(10),t["blog-programming-language-parsing.json"]=o(362),t["layout-index.json"]=o(10),t["blog-continuations-and-javascript.json"]=o(359),t["layout-index.json"]=o(10),t["blog-javascript-shallow-dive.json"]=o(361),t["layout-index.json"]=o(10),t["blog-type-systems.json"]=o(364),t["layout-index.json"]=o(10),t["blog-automated-memory-management.json"]=o(358),t["layout-index.json"]=o(10),t["blog-what-is-ocaml.json"]=o(365),t["layout-index.json"]=o(10),t["blog-rolling-hash.json"]=o(363),t["layout-index.json"]=o(10),t["404.json"]=o(355),t["layout-index.json"]=o(10),t["blog.json"]=o(357),t["layout-index.json"]=o(10),t["career.json"]=o(366),t["layout-index.json"]=o(10),t["index.json"]=o(367),t["layout-index.json"]=o(10),t["projects.json"]=o(369),t["layout-index.json"]=o(10),t["resume.json"]=o(370),t["layout-index.json"]=o(10),t["sprite-sheet.json"]=o(371),t["layout-index.json"]=o(10),t["404-html.json"]=o(356),t),e.layouts={"layout---index":o(346)}},228:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},s=o(1),c=t(s),l=o(7),f=t(l),p=o(162),d=t(p),m=o(84),g=t(m),h=o(108),y=o(502),j=t(y),v=function(n){var e=n.children;return c.default.createElement("div",null,e())},x=function(n){function e(o){a(this,e);var t=r(this,n.call(this)),u=o.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),t.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},t}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=i({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);x.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},e.default=x,n.exports=e.default},84:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(402),r=t(a),u=(0,r.default)();n.exports=u},229:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(105),r=o(163),u=t(r),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),r=(0,u.default)(t,e);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),i[r])return i[r];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(r,{path:n.path})||(0,a.matchPath)(r,{path:n.matchPath}))return s=n,i[r]=n,!0}else{if((0,a.matchPath)(r,{path:n.path,exact:!0}))return s=n,i[r]=n,!0;if((0,a.matchPath)(r,{path:n.path+"index.html"}))return s=n,i[r]=n,!0}return!1}),s}}},230:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(137),r=t(a),u=o(108),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,r.default)();n.exports=c},356:function(n,e,o){o(5),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(382)})})}},355:function(n,e,o){o(5),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(383)})})}},358:function(n,e,o){o(5),n.exports=function(n){return o.e(0x6268e9008e1e,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(384)})})}},359:function(n,e,o){o(5),n.exports=function(n){return o.e(28927685275597,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(385)})})}},360:function(n,e,o){o(5),n.exports=function(n){return o.e(0x83bb64759aac,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(386)})})}},361:function(n,e,o){o(5),n.exports=function(n){return o.e(0x7bcae7d8f855,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(387)})})}},362:function(n,e,o){o(5),n.exports=function(n){return o.e(81018481736552,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(388)})})}},363:function(n,e,o){o(5),n.exports=function(n){return o.e(0x872fe98bed3e,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(389)})})}},364:function(n,e,o){o(5),n.exports=function(n){return o.e(0xa60c5512fddb,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(390)})})}},365:function(n,e,o){o(5),n.exports=function(n){return o.e(0xa1c42ecda236,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(391)})})}},357:function(n,e,o){o(5),n.exports=function(n){return o.e(49683490770531,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(392)})})}},366:function(n,e,o){o(5),n.exports=function(n){return o.e(88970537805274,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(393)})})}},367:function(n,e,o){o(5),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(394)})})}},10:function(n,e,o){o(5),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(140)})})}},368:function(n,e,o){o(5),n.exports=function(n){return o.e(0xbf4c176e203a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(395)})})}},369:function(n,e,o){o(5),n.exports=function(n){return o.e(97786326051841,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(396)})})}},370:function(n,e,o){o(5),n.exports=function(n){return o.e(0xc69833dc971c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(397)})})}},371:function(n,e,o){o(5),n.exports=function(n){return o.e(9756867643184,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(398)})})}},346:function(n,e,o){o(5),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(231)})})}},162:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=o(1),r=(t(a),o(229)),u=t(r),i=o(84),s=t(i),c=o(163),l=t(c),f=void 0,p={},d={},m={},g={},h={},y=[],j=[],v={},x="",b=[],R={},C=function(n){return n&&n.default||n},N=void 0,_=!0,w=[],P={},k={},E=5;N=o(232)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){S(n,function(){b=b.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},L=function(n,e){return v[n]>v[e]?1:v[n]<v[e]?-1:0},S=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){o(null,g[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){g[e]=t,w.push({resource:e,succeeded:!n}),k[e]||(k[e]=n),w=w.slice(-E),o(n,t)})}},A=function(e,o){h[e]?n.nextTick(function(){o(null,h[e])}):k[e]?n.nextTick(function(){o(k[e])}):S(e,function(n,t){if(n)o(n);else{var a=C(t());h[e]=a,o(n,a)}})},D=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=w.find(function(n){return n.succeeded});return!!e},T=function(n,e){console.log(e),P[n]||(P[n]=e),D()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){j=[],v={},R={},b=[],y=[],x=""},addPagesArray:function(n){y=n,f=(0,u.default)(n,x)},addDevRequires:function(n){p=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,x);if(!y.some(function(n){return n.path===e}))return!1;var o=1/M;M+=1,v[e]?v[e]+=1:v[e]=1,U.has(e)||j.unshift(e),j.sort(L);var t=f(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+o:R[t.jsonName]=1+o,b.indexOf(t.jsonName)!==-1||g[t.jsonName]||b.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+o:R[t.componentChunkName]=1+o,b.indexOf(t.componentChunkName)!==-1||g[t.jsonName]||b.unshift(t.componentChunkName)),b.sort(O),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:R}},getPages:function(){return{pathArray:j,pathCount:v}},getPage:function(n){return f(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};_&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var a;if(o){if(t>=e.length)break;a=e[t++]}else{if(t=e.next(),t.done)break;a=t.value}var r=a;r.unregister()}window.location.reload()}})),_=!1;if(P[e])return T(e,'Previously detected load failure for "'+e+'"'),o();var t=f(e);if(!t)return T(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),s.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];s.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=void 0,i=function(){if(a&&r&&(!t.layoutComponentChunkName||u)){m[e]={component:a,json:r,layout:u,page:t};var n={component:a,json:r,layout:u,page:t};o(n),s.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return A(t.componentChunkName,function(n,e){n&&T(t.path,"Loading the component for "+t.path+" failed"),a=e,i()}),A(t.jsonName,function(n,e){n&&T(t.path,"Loading the JSON for "+t.path+" failed"),r=e,i()}),void(t.layoutComponentChunkName&&A(t.layout,function(n,e){n&&T(t.path,"Loading the Layout for "+t.path+" failed"),u=e,i()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,o(141))},399:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-exploring-lda-classification.json",path:"/blog/exploring-lda-classification"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-programming-language-parsing.json",path:"/blog/programming-language-parsing"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-continuations-and-javascript.json",path:"/blog/continuations-and-javascript"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-javascript-shallow-dive.json",path:"/blog/javascript-shallow-dive"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-type-systems.json",path:"/blog/type-systems"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-automated-memory-management.json",path:"/blog/automated-memory-management"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-what-is-ocaml.json",path:"/blog/what-is-ocaml"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-rolling-hash.json",path:"/blog/rolling-hash"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-blog-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog.json",path:"/blog/"},{componentChunkName:"component---src-pages-career-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"career.json",path:"/career/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-projects-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects.json",path:"/projects/"},{componentChunkName:"component---src-pages-resume-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"resume.json",path:"/resume/"},{componentChunkName:"component---src-pages-sprite-sheet-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"sprite-sheet.json",path:"/sprite-sheet/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},232:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],a=[],r=function(){var n=e();n&&(a.push(n),o(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},r=o(108),u=o(1),i=t(u),s=o(142),c=t(s),l=o(105),f=o(379),p=o(329),d=t(p),m=o(139),g=o(230),h=t(g),y=o(84),j=t(y),v=o(399),x=t(v),b=o(400),R=t(b),C=o(228),N=t(C),_=o(227),w=t(_),P=o(162),k=t(P);o(254),window.___history=h.default,window.___emitter=j.default,k.default.addPagesArray(x.default),k.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=k.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};O(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var a=n.location.pathname;if(a===o)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&o(233);var t=function(n){function e(n){n.page.path===k.default.getPage(t).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(r),window.___history.push(o))}var o=(0,m.createLocation)(n,null,null,h.default.location),t=o.pathname,a=E[t];if(a&&(t=a.toPath),window.location.pathname!==t){var r=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);k.default.getResourcesForPathname(t)?(clearTimeout(r),window.___history.push(o)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,r.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var s=!1,p=(0,r.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return i.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(N.default);k.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(p?p:g,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return k.default.getPage(t.location.pathname)?(0,u.createElement)(N.default,a({page:!0},t)):(0,u.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},400:function(n,e){n.exports=[]},233:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(84),r=t(a),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},163:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},329:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,a="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return r||o.addEventListener(a,n=function(){for(o.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},5:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),a=o.e,r=o.s;o.e=function(t,u){var i=!1,s=!0,c=function(n){u&&(u(o,n),u=null)};return!r&&e&&e[t]?void c(!0):(a(t,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,n(function(){i||(i=!0,r?r[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},372:function(n,e,o){"use strict";var t=o(9);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var o=null,a=n.target;a.parentNode;a=a.parentNode)if("A"===a.nodeName){o=a;break}if(!o)return!0;if(o.target&&"_self"!==o.target.toLowerCase())return!0;if(o.pathname===window.location.pathname&&""!==o.hash)return!0;if(""===o.pathname)return!0;if(o.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=o.href;var u=document.createElement("a");if(u.href=window.location.href,r.host!==u.host)return!0;var i=new RegExp("^"+u.host+(0,t.withPrefix)("/"));return!i.test(""+r.host+r.pathname)||(n.preventDefault(),e(o.getAttribute("href")),!1)})}},373:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(9),r=o(372),u=t(r);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,a.navigateTo)(n)})}},345:function(n,e,o){o(5),n.exports=function(n){return o.e(99219681209289,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(374)})})}},375:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},402:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},502:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},347:function(n,e,o){o(5),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(237)})})}},348:function(n,e,o){o(5),n.exports=function(n){return o.e(0xc19374f83753,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(238)})})}},349:function(n,e,o){o(5),n.exports=function(n){return o.e(41802369688294,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(239)})})}},350:function(n,e,o){o(5),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(240)})})}},351:function(n,e,o){o(5),n.exports=function(n){return o.e(0xc260c743ec7c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(241)})})}},352:function(n,e,o){o(5),n.exports=function(n){return o.e(0x8eb291567e75,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(242)})})}},353:function(n,e,o){o(5),n.exports=function(n){return o.e(86068758442273,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(243)})})}},354:function(n,e,o){o(5),n.exports=function(n){return o.e(0x620f737b6699,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(244)})})}}});
//# sourceMappingURL=app-f397964a87246f602e93.js.map