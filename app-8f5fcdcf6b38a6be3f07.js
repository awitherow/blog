webpackJsonp([7],{"./.cache/api-runner-browser.js":function(e,n){"use strict";var t=[];e.exports=function(e,n,o){var s=t.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return s=s.filter(function(e){return"undefined"!=typeof e}),s.length>0?s:o?[o]:[]}},"./.cache/async-requires.js":function(e,n,t){"use strict";n.components={"page-component---src-pages-404-js":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js"),"page-component---src-pages-index-js":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js")},n.json={"404.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),"index.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),"404-html.json":t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json")},n.layouts={index:t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var s=t("./node_modules/babel-runtime/helpers/extends.js"),r=o(s),a=t("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),i=o(a),u=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),l=o(u),d=t("./node_modules/babel-runtime/helpers/createClass.js"),c=o(d),f=t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=o(f),m=t("./node_modules/babel-runtime/helpers/inherits.js"),h=o(m),g=t("./node_modules/react/react.js"),b=o(g),j=t("./.cache/loader.js"),v=o(j),_=t("./.cache/emitter.js"),y=o(_),w=function(e){function n(e){(0,l.default)(this,n);var t=(0,p.default)(this,(n.__proto__||(0,i.default)(n)).call(this));return t.state={location:e.location,pageResources:v.default.getResourcesForPathname(e.location.pathname)},t}return(0,h.default)(n,e),(0,c.default)(n,[{key:"componentWillReceiveProps",value:function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=v.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):v.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}}},{key:"componentDidMount",value:function(){var e=this;y.default.on("onPostLoadPageResources",function(n){n.page.path===v.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,n){return this.state.pageResources.component!==n.pageResources.component||this.state.pageResources.json!==n.pageResources.json}},{key:"render",value:function(){return this.state.pageResources?(0,g.createElement)(this.state.pageResources.component,(0,r.default)({},this.props,this.state.pageResources.json)):null}}]),n}(b.default.Component);n.default=w},"./.cache/emitter.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=t("./node_modules/mitt/dist/mitt.js"),r=o(s),a=(0,r.default)();e.exports=a},"./.cache/find-page.js":function(e,n,t){"use strict";var o=t("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var r=t.slice(n.length);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),s[r])return s[r];var a=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(r,{path:e.path})||(0,o.matchPath)(r,{path:e.matchPath}))return a=e,s[r]=e,!0}else if((0,o.matchPath)(r,{path:e.path,exact:!0}))return a=e,s[r]=e,!0;return!1}),a}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(5,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(4,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(3,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./.cache/loader.js":function(e,n,t){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=t("./node_modules/babel-runtime/core-js/get-iterator.js"),r=o(s),a=t("./.cache/find-page.js"),i=o(a),u=t("./.cache/emitter.js"),l=o(u),d=void 0,c={},f={},p={},m={},h={},g=[],b=[],j={},v=[],_={},y=function(e){return e&&e.default||e},w=void 0,x=!0;w=t("./.cache/prefetcher.js")({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){E(e,function(){v=v.filter(function(n){return n!==e}),w.onResourcedFinished(e)})}}),l.default.on("onPreLoadPageResources",function(e){w.onPreLoadPageResources(e)}),l.default.on("onPostLoadPageResources",function(e){w.onPostLoadPageResources(e)});var R=function(e,n){return _[e]>_[n]?1:_[e]<_[n]?-1:0},P=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[e])n.nextTick(function(){t(null,m[e])});else{var o="page-c"===e.slice(0,6)?f.components[e]:f.json[e];o(function(n,o){m[e]=o,t(n,o)})}},N=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):E(e,function(n,o){if(n)t(n);else{var s=y(o());h[e]=s,t(n,s)}})},k=1,O={empty:function(){b=[],j={},_={},v=[],g=[]},addPagesArray:function(e){g=e;var n="";n=void 0,d=(0,i.default)(e,n)},addDevRequires:function(e){c=e},addProdRequires:function(e){f=e},dequeue:function(e){return b.pop()},enqueue:function(e){if(!g.some(function(n){return n.path===e}))return!1;var n=1/k;k+=1,j[e]?j[e]+=1:j[e]=1,O.has(e)||b.unshift(e),b.sort(P);var t=d(e);return t.jsonName&&(_[t.jsonName]?_[t.jsonName]+=1+n:_[t.jsonName]=1+n,v.indexOf(t.jsonName)!==-1||m[t.jsonName]||v.unshift(t.jsonName)),t.componentChunkName&&(_[t.componentChunkName]?_[t.componentChunkName]+=1+n:_[t.componentChunkName]=1+n,v.indexOf(t.componentChunkName)!==-1||m[t.jsonName]||v.unshift(t.componentChunkName)),v.sort(R),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:_}},getPages:function(){return{pathArray:b,pathCount:j}},getPage:function(e){return d(e)},has:function(e){return b.some(function(n){return n===e})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};x&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(e)||navigator.serviceWorker.getRegistrations().then(function(e){var n=!0,t=!1,o=void 0;try{for(var s,a=(0,r.default)(e);!(n=(s=a.next()).done);n=!0){var i=s.value;i.unregister()}}catch(e){t=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(t)throw o}}window.location.reload()})),x=!1;var o=d(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,p[e])return n.nextTick(function(){t(p[e]),l.default.emit("onPostLoadPageResources",{page:o,pageResources:p[e]})}),p[e];l.default.emit("onPreLoadPageResources",{path:e});var s=void 0,a=void 0,i=function(){if(s&&a){p[e]={component:s,json:a};var n={component:s,json:a};t(n),l.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return N(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),s=n,i()}),void N(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),a=n,i()})},peek:function(e){return b.slice(-1)[0]},length:function(){return b.length},indexOf:function(e){return b.length-b.indexOf(e)-1}};e.exports=O}).call(n,t("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"page-component---src-pages-404-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"page-component---src-pages-404-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],s=[],r=function(){var e=n();e&&(s.push(e),t(e))},a=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(e){a({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:s}},empty:function(){o=[],s=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){window.___history||(window.___history=e,e.listen(function(e,n){(0,l.default)("onRouteUpdate",{location:e,action:n})}))}function r(e,n){var t=n.location.pathname,o=(0,l.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var s=e.location.pathname;if(s===t)return!1}return!0}var a=t("./node_modules/babel-runtime/helpers/extends.js"),i=o(a),u=t("./.cache/api-runner-browser.js"),l=o(u),d=t("./node_modules/react/react.js"),c=o(d),f=t("./node_modules/react-dom/index.js"),p=o(f),m=t("./node_modules/react-router-dom/index.js"),h=t("./node_modules/react-router-scroll/lib/index.js"),g=t("./node_modules/history/createBrowserHistory.js"),b=o(g),j=t("./.cache/emitter.js"),v=o(j),_=t("./.cache/pages.json"),y=o(_),w=t("./.cache/component-renderer.js"),x=o(w),R=t("./.cache/async-requires.js"),P=o(R),E=t("./.cache/loader.js"),N=o(E);window.___emitter=v.default,N.default.addPagesArray(y.default),N.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=N.default,window.matchPath=m.matchPath,(0,l.default)("onClientEntry"),(0,l.default)("registerServiceWorker").length>0&&t("./.cache/register-service-worker.js");var k=function(e){function n(o){o.page.path===N.default.getPage(e).path&&(v.default.off("onPostLoadPageResources",n),clearTimeout(t),window.___history.push(e))}if(window.location.pathname!==e){var t=setTimeout(function(){v.default.off("onPostLoadPageResources",n),v.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);N.default.getResourcesForPathname(e)?(clearTimeout(t),window.___history.push(e)):v.default.on("onPostLoadPageResources",n)}};window.___navigateTo=k;var O=(0,b.default)();(0,l.default)("onRouteUpdate",{location:O.location,action:O.action});var C=(0,l.default)("replaceRouterComponent",{history:O})[0],T=function(e){var n=e.children;return c.default.createElement(m.BrowserRouter,{history:O},n)},U=function(e){P.default.layouts.index?P.default.layouts.index(function(n,t){var o=t();e(o)}):e(function(e){return c.default.createElement("div",null,e.children())})};U(function(e){N.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,d.createElement)(C?C:T,null,(0,d.createElement)(h.ScrollContext,{shouldUpdateScroll:r},(0,d.createElement)((0,m.withRouter)(e),{children:function(e){return(0,d.createElement)(m.Route,{render:function(n){s(n.history);var t=e?e:n;return N.default.getPage(t.location.pathname)?(0,d.createElement)(x.default,(0,i.default)({},t)):(0,d.createElement)(x.default,{location:{pathname:"/404.html"}})}})}})))},t=(0,l.default)("wrapRootComponent",{Root:n},n)[0];p.default.render(c.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0)})})},"./.cache/register-service-worker.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=t("./.cache/emitter.js"),r=o(s),a="/";a=void 0,"serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),s=t.e,r=t.s;t.e=function(o,a){var i=!1,u=!0,l=function(e){a&&(a(t,e),a=null)};return!r&&n&&n[o]?void l(!0):(s(o,function(){i||(i=!0,u?setTimeout(function(){l()}):l())}),void(i||(u=!1,e(function(){i||(i=!0,r?r[o]=void 0:(n||(n={}),n[o]=!0),l(!0))}))))}}o()},"./node_modules/hoist-non-react-statics/index.js":function(e,n){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},s="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,n,r){if("string"!=typeof n){var a=Object.getOwnPropertyNames(n);s&&(a=a.concat(Object.getOwnPropertySymbols(n)));for(var i=0;i<a.length;++i)if(!(t[a[i]]||o[a[i]]||r&&r[a[i]]))try{e[a[i]]=n[a[i]]}catch(e){}}return e}},"./node_modules/mitt/dist/mitt.js":function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},"./node_modules/process/browser.js":function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(d===setTimeout)return setTimeout(e,0);if((d===t||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(n){try{return d.call(null,e,0)}catch(n){return d.call(this,e,0)}}}function r(e){if(c===clearTimeout)return clearTimeout(e);if((c===o||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{return c(e)}catch(n){try{return c.call(null,e)}catch(n){return c.call(this,e)}}}function a(){h&&p&&(h=!1,p.length?m=p.concat(m):g=-1,m.length&&i())}function i(){if(!h){var e=s(a);h=!0;for(var n=m.length;n;){for(p=m,m=[];++g<n;)p&&p[g].run();g=-1,n=m.length}p=null,h=!1,r(e)}}function u(e,n){this.fun=e,this.array=n}function l(){}var d,c,f=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:t}catch(e){d=t}try{c="function"==typeof clearTimeout?clearTimeout:o}catch(e){c=o}}();var p,m=[],h=!1,g=-1;f.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new u(e,n)),1!==m.length||h||s(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(1,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/austinwitherow/dev/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/austinwitherow/dev/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/austinwitherow/dev/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/austinwitherow/dev/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/austinwitherow/dev/blog/node_modules/babel-preset-env/lib/index.js","/Users/austinwitherow/dev/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/austinwitherow/dev/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(6,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/austinwitherow/dev/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/austinwitherow/dev/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/austinwitherow/dev/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/austinwitherow/dev/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/austinwitherow/dev/blog/node_modules/babel-preset-env/lib/index.js","/Users/austinwitherow/dev/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/austinwitherow/dev/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,n,t){t("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return t.e(2,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/austinwitherow/dev/blog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/austinwitherow/dev/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/austinwitherow/dev/blog/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/austinwitherow/dev/blog/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/austinwitherow/dev/blog/node_modules/babel-preset-env/lib/index.js","/Users/austinwitherow/dev/blog/node_modules/babel-preset-stage-0/lib/index.js","/Users/austinwitherow/dev/blog/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}}});
//# sourceMappingURL=app-8f5fcdcf6b38a6be3f07.js.map