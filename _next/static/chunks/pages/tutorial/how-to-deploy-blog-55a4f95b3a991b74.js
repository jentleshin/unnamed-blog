(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{6266:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/how-to-deploy-blog",function(){return n(5283)}])},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};l=e,o=Promise,(null!=o&&"undefined"!==typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](l):l instanceof o)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=s({},r,e));var l,o;var u=r=s({},r,t);if(u.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(u.suspense)return n(u);r.loadableGenerated&&delete(r=s({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,a(n,r);delete r.ssr}return n(r)};l(n(7294));var i=l(n(4302));function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var s=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=s},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,a=(l=n(7294))&&l.__esModule?l:{default:l},o=n(7161),u=n(6319);var c=[],d=[],p=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,s;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var s=this;this._timeout=setTimeout((function(){s._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),s&&r(t,s),e}();function h(e){return function(e,t){var n=function(){if(!s){var t=new b(e,r);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=a.default.lazy(r.loader));var s=null;if(!p&&!r.suspense){var l=r.webpack?r.webpack():r.modules;l&&d.push((function(e){var t=!0,r=!1,s=void 0;try{for(var i,a=l[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(-1!==e.indexOf(o))return n()}}catch(u){r=!0,s=u}finally{try{t||null==a.return||a.return()}finally{if(r)throw s}}}))}var c=r.suspense?function(e,t){return a.default.createElement(r.lazy,i({},e,{ref:t}))}:function(e,t){n();var i=a.default.useContext(u.LoadableContext),l=o.useSubscription(s);return a.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),a.default.useMemo((function(){return l.loading||l.error?a.default.createElement(r.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:s.retry}):l.loaded?a.default.createElement(function(e){return e&&e.__esModule?e.default:e}(l.loaded),e):null}),[e,l])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",a.default.forwardRef(c)}(f,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return m(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){m(c).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return p=!0,t()};m(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var x=h;t.default=x},5283:function(e,t,n){"use strict";n.r(t);var r=n(5893),s=n(6990),i=n(4515);t.default=function(){return(0,r.jsx)(i.Xg,{home:!0,children:(0,r.jsxs)("div",{className:"container px-3 pb-5 md:mt-[50px] pt-20 md:pt-0",children:[(0,r.jsx)(i.xv,{title:!0,className:"text-3xl",children:"How to Export and deploy blog on firebase"}),(0,r.jsx)("hr",{}),(0,r.jsx)(i.xv,{subtitle:!0,className:"mt-10",children:"1. Export Project."}),(0,r.jsxs)(i.aV,{type:s.RH.disc,className:"mt-5",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"Stop the local server"})," (if running)",(0,r.jsx)("br",{}),"Open terminal and press ",(0,r.jsx)("b",{children:"ctrl + C"})," to stop the server.",(0,r.jsx)(i.Ee,{className:"mt-5",src:"/public/imp_assets/tutorials/stop-server.png",alt:"nextjs-simple-blog-template",size:s.h2.DEFAULT})]}),(0,r.jsxs)("li",{children:["Run ",(0,r.jsx)("b",{children:"npm run out"}),(0,r.jsx)("br",{}),"In the terminal run ",(0,r.jsx)("b",{children:"npm run out"}),".",(0,r.jsx)(i.Ee,{className:"mt-5",src:"/public/imp_assets/tutorials/npm-run-out.png",alt:"nextjs-simple-blog-template",size:s.h2.MEDIUM}),(0,r.jsx)(i.Ee,{className:"mt-5",src:"/public/imp_assets/tutorials/export-done.png",alt:"nextjs-simple-blog-template",size:s.h2.MEDIUM})]}),(0,r.jsxs)("li",{children:["After the export is successful. You will see a new folder created named ",(0,r.jsx)("b",{children:"out"})," in you project directory .",(0,r.jsx)(i.Ee,{className:"my-5",src:"/public/imp_assets/tutorials/out-folder.png",alt:"nextjs-simple-blog-template",size:s.h2.XS}),"This ",(0,r.jsx)("b",{children:"out"})," is the folder you need to deploy on your hosting service."]})]}),(0,r.jsx)(i.ty,{}),(0,r.jsx)(i.xv,{subtitle:!0,className:"mt-10",children:"2. Basic firebase deployment tutorial."}),(0,r.jsxs)(i.aV,{type:s.RH.disc,className:"mt-5",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"Goto firebase console"}),(0,r.jsx)("br",{}),"If you have a gmail account, goto firebase ",(0,r.jsx)("a",{href:"https://firebase.google.com/",target:"_blank",rel:"noopener noreferrer",children:"https://firebase.google.com/"})," and goto firebase console."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"Create a project"}),(0,r.jsx)("br",{}),(0,r.jsx)(i.Ee,{className:"my-5",src:"/public/imp_assets/tutorials/firebase-create-proj.png",alt:"nextjs-simple-blog-template",size:s.h2.DEFAULT}),"Enter project name and Select Conitnue with analytics and enter the contry. and click create project."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"Firebase Dashboard"}),(0,r.jsx)("br",{}),"Click on ",(0,r.jsx)("b",{children:"Hosting"})," inside ",(0,r.jsx)("b",{children:"Build"}),(0,r.jsx)(i.Ee,{className:"my-5",src:"/public/imp_assets/tutorials/select-hosting.png",alt:"nextjs-simple-blog-template",size:s.h2.SMALL}),(0,r.jsx)(i.Ee,{className:"my-5",src:"/public/imp_assets/tutorials/hosting-gs.png",alt:"nextjs-simple-blog-template",size:s.h2.DEFAULT})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"Install firebase"}),(0,r.jsx)("br",{}),"Open terminal in your project folder or VS Code and run ",(0,r.jsx)("b",{children:"npm install -g firebase-tools"})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"Firebase Login"}),(0,r.jsx)("br",{}),"Type ",(0,r.jsx)("b",{children:"firebase login"})," in terminal and hit enter. ",(0,r.jsx)("br",{})," Follow the login steps and login into your firebase(google) account"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"Init Firebase and Deploy"}),(0,r.jsx)("br",{}),"Run ",(0,r.jsx)("b",{children:"firebase init"})," in terminal, move the selection to hosting using arrow keys and select Hosting by hitting space, and then press enter.",(0,r.jsx)(i.Ee,{className:"my-5",src:"/public/imp_assets/tutorials/use-exi.png",alt:"nextjs-simple-blog-template",caption:"Select Use an Existing Project",size:s.h2.DEFAULT}),"After you select ",(0,r.jsx)("b",{children:"Use an Existing Project"})," you will see list of all projects in your firebase account, including the one we created now.",(0,r.jsx)(i.Ee,{className:"my-5",src:"/public/imp_assets/tutorials/select-proj.png",alt:"nextjs-simple-blog-template",size:s.h2.DEFAULT}),"it will ask the following:",(0,r.jsxs)(i.aV,{type:s.RH.number,className:"mt-5",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"What do you want to use as your public directory?"})," here write ",(0,r.jsx)("b",{children:"out"}),(0,r.jsx)(i.Ee,{className:"my-5",src:"/public/imp_assets/tutorials/select-dir.png",alt:"nextjs-simple-blog-template",size:s.h2.DEFAULT})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"Configure as a single-page app (rewrite all urls to /index.html)"})," here enter ",(0,r.jsx)("b",{children:"N"})," (decline it)"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"Set up automatic builds and deploys with GitHub?"})," here enter ",(0,r.jsx)("b",{children:"N"})," (decline it)"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"File out/index.html already exists. Overwrite? (y/N)"}),"  here enter ",(0,r.jsx)("b",{children:"N"})," (decline it)"]})]}),(0,r.jsx)(i.Ee,{className:"my-5",src:"/public/imp_assets/tutorials/firebase-complete.png",alt:"nextjs-simple-blog-template",caption:"Firebase Setup Complete",size:s.h2.DEFAULT}),"Finally run ",(0,r.jsx)("b",{children:"firebase deploy"})," and your peoject will be deployed on your firebase hosting.",(0,r.jsx)(i.Ee,{className:"my-5",src:"/public/imp_assets/tutorials/fb-deploy.png",alt:"nextjs-simple-blog-template",caption:"Firebase Deploy",size:s.h2.DEFAULT})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"* note"}),(0,r.jsx)("br",{}),"This setup is only to be done once for each project. next time when you create any new article file just run ",(0,r.jsx)("b",{children:"npm run out"})," and after successful export run ",(0,r.jsx)("b",{children:"firebase deploy"})," to deploy updated and new files/articles to hosting."]})]}),(0,r.jsxs)("div",{className:"px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded mt-10 !text-lg leading-relaxed ",children:["For any any queries related to this project / template feel free to connect with us at ",(0,r.jsx)("u",{children:"webexpe13@gmail.com"}),". You can also post any comments on our ",(0,r.jsx)("a",{href:"https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("u",{children:(0,r.jsx)("i",{children:"github discussions"})})}),"."]})]})})}},4515:function(e,t,n){"use strict";n.d(t,{Xg:function(){return s},xv:function(){return i},Ee:function(){return l},ty:function(){return a},aV:function(){return o},e9:function(){return u},iR:function(){return c},GJ:function(){return d},Y7:function(){return p}});var r=n(5152),s=(0,r.default)((function(){return Promise.all([n.e(874),n.e(228),n.e(13),n.e(933)]).then(n.bind(n,1933))}),{loadableGenerated:{webpack:function(){return[1933]}}}),i=(0,r.default)((function(){return n.e(980).then(n.bind(n,6980))}),{loadableGenerated:{webpack:function(){return[6980]}}}),l=(0,r.default)((function(){return n.e(28).then(n.bind(n,3028))}),{loadableGenerated:{webpack:function(){return[3028]}}}),a=(0,r.default)((function(){return n.e(199).then(n.bind(n,2199))}),{loadableGenerated:{webpack:function(){return[2199]}}}),o=(0,r.default)((function(){return n.e(70).then(n.bind(n,7070))}),{loadableGenerated:{webpack:function(){return[7070]}}}),u=(0,r.default)((function(){return Promise.resolve().then(n.bind(n,534))}),{loadableGenerated:{webpack:function(){return[534]}}}),c=(0,r.default)((function(){return n.e(162).then(n.bind(n,162))}),{loadableGenerated:{webpack:function(){return[162]}}}),d=(0,r.default)((function(){return n.e(354).then(n.bind(n,7354))}),{loadableGenerated:{webpack:function(){return[7354]}}}),p=(0,r.default)((function(){return Promise.all([n.e(4),n.e(931)]).then(n.bind(n,931))}),{loadableGenerated:{webpack:function(){return[931]}}})},5152:function(e,t,n){e.exports=n(638)},8217:function(e,t,n){"use strict";var r=n(6086),s=n(7294);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,i=s.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=i[0];var l=i[1];return i=e.value,e.getCurrentValue===t&&e.subscribe===n||(i=t(),l({getCurrentValue:t,subscribe:n,value:i})),s.useDebugValue(i),s.useEffect((function(){function e(){if(!s){var e=t();l((function(s){return s.getCurrentValue!==t||s.subscribe!==n||s.value===e?s:r({},s,{value:e})}))}}var s=!1,i=n(e);return e(),function(){s=!0,i()}}),[t,n]),i}},7161:function(e,t,n){"use strict";e.exports=n(8217)}},function(e){e.O(0,[774,888,179],(function(){return t=6266,e(e.s=t);var t}));var t=e.O();_N_E=t}]);