webpackJsonp([86068758442273],{328:function(e,t,n){!function(t){"use strict";function n(e,t){function n(e){return t.bgcolor&&(e.style.backgroundColor=t.bgcolor),t.width&&(e.style.width=t.width+"px"),t.height&&(e.style.height=t.height+"px"),t.style&&Object.keys(t.style).forEach(function(n){e.style[n]=t.style[n]}),e}return t=t||{},u(t),Promise.resolve(e).then(function(e){return l(e,t.filter,!0)}).then(s).then(f).then(n).then(function(n){return d(n,t.width||v.width(e),t.height||v.height(e))})}function r(e,t){return c(e,t||{}).then(function(t){return t.getContext("2d").getImageData(0,0,v.width(e),v.height(e)).data})}function o(e,t){return c(e,t||{}).then(function(e){return e.toDataURL()})}function i(e,t){return t=t||{},c(e,t).then(function(e){return e.toDataURL("image/jpeg",t.quality||1)})}function a(e,t){return c(e,t||{}).then(v.canvasToBlob)}function u(e){"undefined"==typeof e.imagePlaceholder?P.impl.options.imagePlaceholder=b.imagePlaceholder:P.impl.options.imagePlaceholder=e.imagePlaceholder,"undefined"==typeof e.cacheBust?P.impl.options.cacheBust=b.cacheBust:P.impl.options.cacheBust=e.cacheBust}function c(e,t){function r(e){var n=document.createElement("canvas");if(n.width=t.width||v.width(e),n.height=t.height||v.height(e),t.bgcolor){var r=n.getContext("2d");r.fillStyle=t.bgcolor,r.fillRect(0,0,n.width,n.height)}return n}return n(e,t).then(v.makeImage).then(v.delay(100)).then(function(t){var n=r(e);return n.getContext("2d").drawImage(t,0,0),n})}function l(e,t,n){function r(e){return e instanceof HTMLCanvasElement?v.makeImage(e.toDataURL()):e.cloneNode(!1)}function o(e,t,n){function r(e,t,n){var r=Promise.resolve();return t.forEach(function(t){r=r.then(function(){return l(t,n)}).then(function(t){t&&e.appendChild(t)})}),r}var o=e.childNodes;return 0===o.length?Promise.resolve(t):r(t,v.asArray(o),n).then(function(){return t})}function i(e,t){function n(){function n(e,t){function n(e,t){v.asArray(e).forEach(function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))})}e.cssText?t.cssText=e.cssText:n(e,t)}n(window.getComputedStyle(e),t.style)}function r(){function n(n){function r(e,t,n){function r(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function o(e){function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}return v.asArray(e).map(t).join("; ")+";"}var i="."+e+":"+t,a=n.cssText?r(n):o(n);return document.createTextNode(i+"{"+a+"}")}var o=window.getComputedStyle(e,n),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var a=v.uid();t.className=t.className+" "+a;var u=document.createElement("style");u.appendChild(r(a,n,o)),t.appendChild(u)}}[":before",":after"].forEach(function(e){n(e)})}function o(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function i(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach(function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)}))}return t instanceof Element?Promise.resolve().then(n).then(r).then(o).then(i).then(function(){return t}):t}return n||!t||t(e)?Promise.resolve(e).then(r).then(function(n){return o(e,n,t)}).then(function(t){return i(e,t)}):Promise.resolve()}function s(e){return y.resolveAll().then(function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e})}function f(e){return E.inlineAll(e).then(function(){return e})}function d(e,t,n){return Promise.resolve(e).then(function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)}).then(v.escapeXhtml).then(function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"}).then(function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+n+'">'+e+"</svg>"}).then(function(e){return"data:image/svg+xml;charset=utf-8,"+e})}function m(){function e(){var e="application/font-woff",t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(n){var r=t(n).toLowerCase();return e()[r]||""}function r(e){return e.search(/^(data:)/)!==-1}function o(e){return new Promise(function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))})}function i(e){return e.toBlob?new Promise(function(t){e.toBlob(t)}):o(e)}function a(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href}function u(){var e=0;return function(){function t(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}return"u"+t()+e++}}function c(e){return new Promise(function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e})}function l(e){var t=3e4;return P.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise(function(n){function r(){if(4===a.readyState){if(200!==a.status)return void(u?n(u):i("cannot fetch resource: "+e+", status: "+a.status));var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(a.response)}}function o(){u?n(u):i("timeout of "+t+"ms occured while fetching resource: "+e)}function i(e){console.error(e),n("")}var a=new XMLHttpRequest;a.onreadystatechange=r,a.ontimeout=o,a.responseType="blob",a.timeout=t,a.open("GET",e,!0),a.send();var u;if(P.impl.options.imagePlaceholder){var c=P.impl.options.imagePlaceholder.split(/,/);c&&c[1]&&(u=c[1])}})}function s(e,t){return"data:"+t+";base64,"+e}function f(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function d(e){return function(t){return new Promise(function(n){setTimeout(function(){n(t)},e)})}}function m(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}function p(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")}function h(e){var t=v(e,"border-left-width"),n=v(e,"border-right-width");return e.scrollWidth+t+n}function g(e){var t=v(e,"border-top-width"),n=v(e,"border-bottom-width");return e.scrollHeight+t+n}function v(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}return{escape:f,parseExtension:t,mimeType:n,dataAsUrl:s,isDataUrl:r,canvasToBlob:i,resolveUrl:a,getAndEncode:l,uid:u(),delay:d,asArray:m,escapeXhtml:p,makeImage:c,width:h,height:g}}function p(){function e(e){return e.search(o)!==-1}function t(e){for(var t,n=[];null!==(t=o.exec(e));)n.push(t[1]);return n.filter(function(e){return!v.isDataUrl(e)})}function n(e,t,n,r){function o(e){return new RegExp("(url\\(['\"]?)("+v.escape(e)+")(['\"]?\\))","g")}return Promise.resolve(t).then(function(e){return n?v.resolveUrl(e,n):e}).then(r||v.getAndEncode).then(function(e){return v.dataAsUrl(e,v.mimeType(t))}).then(function(n){return e.replace(o(t),"$1"+n+"$3")})}function r(r,o,i){function a(){return!e(r)}return a()?Promise.resolve(r):Promise.resolve(r).then(t).then(function(e){var t=Promise.resolve(r);return e.forEach(function(e){t=t.then(function(t){return n(t,e,o,i)})}),t})}var o=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:r,shouldProcess:e,impl:{readUrls:t,inline:n}}}function h(){function e(){return t(document).then(function(e){return Promise.all(e.map(function(e){return e.resolve()}))}).then(function(e){return e.join("\n")})}function t(){function e(e){return e.filter(function(e){return e.type===CSSRule.FONT_FACE_RULE}).filter(function(e){return w.shouldProcess(e.style.getPropertyValue("src"))})}function t(e){var t=[];return e.forEach(function(e){try{v.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(t){console.log("Error while reading CSS rules from "+e.href,t.toString())}}),t}function n(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return w.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}return Promise.resolve(v.asArray(document.styleSheets)).then(t).then(e).then(function(e){return e.map(n)})}return{resolveAll:e,impl:{readAll:t}}}function g(){function e(e){function t(t){return v.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||v.getAndEncode).then(function(t){return v.dataAsUrl(t,v.mimeType(e.src))}).then(function(t){return new Promise(function(n,r){e.onload=n,e.onerror=r,e.src=t})})}return{inline:t}}function t(n){function r(e){var t=e.style.getPropertyValue("background");return t?w.inlineAll(t).then(function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))}).then(function(){return e}):Promise.resolve(e)}return n instanceof Element?r(n).then(function(){return n instanceof HTMLImageElement?e(n).inline():Promise.all(v.asArray(n.childNodes).map(function(e){return t(e)}))}):Promise.resolve(n)}return{inlineAll:t,impl:{newImage:e}}}var v=m(),w=p(),y=h(),E=g(),b={imagePlaceholder:void 0,cacheBust:!1},P={toSvg:n,toPng:o,toJpeg:i,toBlob:a,toPixelData:r,impl:{fontFaces:y,images:E,util:v,inliner:w,options:{}}};e.exports=P}(this)},344:function(e,t,n){var r,o=o||function(e){"use strict";if(!("undefined"==typeof e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,i=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},a=/constructor/i.test(e.HTMLElement)||e.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent),c=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},l="application/octet-stream",s=4e4,f=function(e){var t=function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()};setTimeout(t,s)},d=function(e,t,n){t=[].concat(t);for(var r=t.length;r--;){var o=e["on"+t[r]];if("function"==typeof o)try{o.call(e,n||e)}catch(e){c(e)}}},m=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},p=function(t,c,s){s||(t=m(t));var p,h=this,g=t.type,v=g===l,w=function(){d(h,"writestart progress write writeend".split(" "))},y=function(){if((u||v&&a)&&e.FileReader){var r=new FileReader;return r.onloadend=function(){var t=u?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;"),n=e.open(t,"_blank");n||(e.location.href=t),t=void 0,h.readyState=h.DONE,w()},r.readAsDataURL(t),void(h.readyState=h.INIT)}if(p||(p=n().createObjectURL(t)),v)e.location.href=p;else{var o=e.open(p,"_blank");o||(e.location.href=p)}h.readyState=h.DONE,w(),f(p)};return h.readyState=h.INIT,o?(p=n().createObjectURL(t),void setTimeout(function(){r.href=p,r.download=c,i(r),w(),f(p),h.readyState=h.DONE})):void y()},h=p.prototype,g=function(e,t,n){return new p(e,t||e.name||"download",n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=m(e)),navigator.msSaveOrOpenBlob(e,t)}:(h.abort=function(){},h.readyState=h.INIT=0,h.WRITING=1,h.DONE=2,h.error=h.onwritestart=h.onprogress=h.onwrite=h.onabort=h.onerror=h.onwriteend=null,g)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof e&&e.exports?e.exports.saveAs=o:null!==n(507)&&null!==n(508)&&(r=function(){return o}.call(t,n,t,e),!(void 0!==r&&(e.exports=r)))},507:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},508:function(e,t){(function(t){e.exports=t}).call(t,{})},503:function(e,t,n){e.exports=n.p+"static/school.0dbb1399.png"},505:function(e,t,n){e.exports=n.p+"static/sprite-sheet-template.744f0651.png"},243:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){c.default.toBlob(document.querySelector(".sprite-sheet-wrapper")).then(function(t){console.log("saved 'sprite-sheet-"+e+".png'"),s.default.saveAs(t,"sprite-sheet-"+e+".png")})}t.__esModule=!0;var i=n(1),a=r(i),u=n(328),c=r(u),l=n(344),s=r(l),f=n(505),d=r(f),m=n(503),p=r(m),h="school",g=function(e){var t=e.pos,n=e.zoom;return a.default.createElement("div",{style:{position:"absolute",height:"300px",width:"300px",textAlign:"center",whiteSpace:"nowrap",left:300*t+"px"}},a.default.createElement("div",{style:{display:"inline-block",height:"100%",verticalAlign:"middle"}}),a.default.createElement("img",{style:{verticalAlign:"middle",zoom:""+n},src:p.default}))},v=function(){return a.default.createElement("div",{className:"sprite-sheet-wrapper",style:{background:"url("+d.default+")",position:"relative",height:"300px",width:"8700px"}},a.default.createElement(g,{pos:6,zoom:.17}),a.default.createElement(g,{pos:7,zoom:.4}),a.default.createElement(g,{pos:8,zoom:.53}),a.default.createElement(g,{pos:9,zoom:.67}),a.default.createElement(g,{pos:10,zoom:.75}),a.default.createElement(g,{pos:11,zoom:.85}),a.default.createElement(g,{pos:12,zoom:.9}),a.default.createElement(g,{pos:13,zoom:.85}),a.default.createElement(g,{pos:14,zoom:.8}),a.default.createElement(g,{pos:15,zoom:.7}),a.default.createElement(g,{pos:16,zoom:.7}),a.default.createElement(g,{pos:17,zoom:.7}),a.default.createElement(g,{pos:18,zoom:.7}),a.default.createElement(g,{pos:19,zoom:.7}),a.default.createElement(g,{pos:20,zoom:.7}),a.default.createElement(g,{pos:21,zoom:.7}),a.default.createElement(g,{pos:22,zoom:.7}),a.default.createElement(g,{pos:23,zoom:.7}),a.default.createElement(g,{pos:24,zoom:.7}),a.default.createElement(g,{pos:25,zoom:.7}),a.default.createElement(g,{pos:26,zoom:.7}),a.default.createElement(g,{pos:27,zoom:.7}),a.default.createElement(g,{pos:28,zoom:.7}))},w=function(){return a.default.createElement("div",null,a.default.createElement(v,null),a.default.createElement("button",{onClick:function(){return o(h)}},"make and save"),a.default.createElement("div",{style:{position:"relative"},className:"output-location"}))};t.default=w,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-sprite-sheet-js-53722e35fe35037b5556.js.map