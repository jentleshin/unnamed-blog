(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{4644:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return r(712)}])},638:function(e,t,r){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}t.default=function(e,t){var r=i.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](a):a instanceof l)?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=n({},o,e));var a,l;var u=o=n({},o,t);if(u.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(u.suspense)return r(u);o.loadableGenerated&&delete(o=n({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr){if(!o.ssr)return delete o.ssr,s(r,o);delete o.ssr}return r(o)};a(r(7294));var i=a(r(4302));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,r){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=((o=r(7294))&&o.__esModule?o:{default:o}).default.createContext(null);t.LoadableContext=n},4302:function(e,t,r){"use strict";function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=(a=r(7294))&&a.__esModule?a:{default:a},l=r(7161),u=r(6319);var c=[],d=[],h=!1;function f(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var p=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,n;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var o=this;this._delay=setTimeout((function(){o._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var n=this;this._timeout=setTimeout((function(){n._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&o(t.prototype,r),n&&o(t,n),e}();function y(e){return function(e,t){var r=function(){if(!n){var t=new p(e,o);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()},o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=s.default.lazy(o.loader));var n=null;if(!h&&!o.suspense){var a=o.webpack?o.webpack():o.modules;a&&d.push((function(e){var t=!0,o=!1,n=void 0;try{for(var i,s=a[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var l=i.value;if(-1!==e.indexOf(l))return r()}}catch(u){o=!0,n=u}finally{try{t||null==s.return||s.return()}finally{if(o)throw n}}}))}var c=o.suspense?function(e,t){return s.default.createElement(o.lazy,i({},e,{ref:t}))}:function(e,t){r();var i=s.default.useContext(u.LoadableContext),a=l.useSubscription(n);return s.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),i&&Array.isArray(o.modules)&&o.modules.forEach((function(e){i(e)})),s.default.useMemo((function(){return a.loading||a.error?s.default.createElement(o.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?s.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return c.preload=function(){return!o.suspense&&r()},c.displayName="LoadableComponent",s.default.forwardRef(c)}(f,e)}function b(e,t){for(var r=[];e.length;){var o=e.pop();r.push(o(t))}return Promise.all(r).then((function(){if(e.length)return b(e,t)}))}y.preloadAll=function(){return new Promise((function(e,t){b(c).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return h=!0,t()};b(d,e).then(r,r)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var m=y;t.default=m},712:function(e,t,r){"use strict";r.r(t);var o=r(5893),n=r(4515);t.default=function(){return(0,o.jsx)(n.Xg,{PAGE_SEO:{title:"Privacy Policy",description:"This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in website",keywords:"webexpx, contact us, webexpe13@gmail.com, next js blog template",author:"Mayur Nalwala, Rupali Yadav"},home:!0,children:(0,o.jsxs)("div",{className:"container px-3 pb-[20px] mt-10 pt-14 md:pt-0",children:[(0,o.jsx)(n.xv,{title:!0,className:"text-3xl",children:"Privacy Policy"}),(0,o.jsxs)(n.xv,{p:!0,children:["At [Website_Name], accessible from [Website_URL], one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by [Website_Name] and how we use it. ",(0,o.jsx)("br",{}),"If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. ",(0,o.jsx)("br",{}),"This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in [Website_Name]. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Privacy Policy Generator."]}),(0,o.jsx)(n.ty,{line:!0}),(0,o.jsx)(n.xv,{subtitle:!0,className:"text-xl",children:"Consent"}),(0,o.jsx)(n.xv,{p:!0,children:"By using our website, you hereby consent to our Privacy Policy and agree to its terms."}),(0,o.jsx)(n.ty,{line:!0}),(0,o.jsx)(n.xv,{subtitle:!0,className:"text-xl",children:"Information we collect"}),(0,o.jsxs)(n.xv,{p:!0,children:["The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. ",(0,o.jsx)("br",{}),"If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. ",(0,o.jsx)("br",{}),"When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number."]}),(0,o.jsx)(n.ty,{line:!0}),(0,o.jsx)(n.xv,{subtitle:!0,className:"text-xl",children:"How we use your information"}),(0,o.jsxs)(n.xv,{p:!0,children:["We use the information we collect in various ways, including to:",(0,o.jsxs)("ul",{className:"list-disc pl-8",children:[(0,o.jsx)("li",{children:"Provide, operate, and maintain our website"}),(0,o.jsx)("li",{children:"Improve, personalize, and expand our website"}),(0,o.jsx)("li",{children:"Understand and analyze how you use our website"}),(0,o.jsx)("li",{children:"Develop new products, services, features, and functionality"}),(0,o.jsx)("li",{children:"Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes"}),(0,o.jsx)("li",{children:"Send you emails"}),(0,o.jsx)("li",{children:"Find and prevent fraud"})]})]}),(0,o.jsx)(n.ty,{line:!0}),(0,o.jsx)(n.xv,{subtitle:!0,className:"text-xl",children:"Log Files"}),(0,o.jsx)(n.xv,{p:!0,children:"[Website_Name] follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."}),(0,o.jsx)(n.ty,{line:!0}),(0,o.jsx)(n.xv,{subtitle:!0,className:"text-xl",children:"Cookies and Web Beacons"}),(0,o.jsxs)(n.xv,{p:!0,children:["Like any other website, [Website_Name] uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. ",(0,o.jsx)("br",{}),'For more general information on cookies, please read "What Are Cookies".']}),(0,o.jsx)(n.ty,{line:!0}),(0,o.jsx)(n.xv,{subtitle:!0,className:"text-xl",children:"Google DoubleClick DART Cookie"}),(0,o.jsx)(n.xv,{p:!0,children:"Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL \u2013 https://policies.google.com/technologies/ads"}),(0,o.jsx)(n.ty,{line:!0}),(0,o.jsx)(n.xv,{subtitle:!0,className:"text-xl",children:"Our Advertising Partners"}),(0,o.jsxs)(n.xv,{p:!0,children:["Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.",(0,o.jsx)("ul",{className:"list-disc pl-8",children:(0,o.jsx)("li",{children:"Google : https://policies.google.com/technologies/ads"})})]}),(0,o.jsx)(n.ty,{line:!0}),(0,o.jsx)(n.xv,{subtitle:!0,className:"text-xl",children:"Advertising Partners Privacy Policies"}),(0,o.jsxs)(n.xv,{p:!0,children:["You may consult this list to find the Privacy Policy for each of the advertising partners of [Website_Name]. ",(0,o.jsx)("br",{}),"Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on [Website_Name], which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. ",(0,o.jsx)("br",{}),"Note that [Website_Name] has no access to or control over these cookies that are used by third-party advertisers."]}),(0,o.jsx)(n.ty,{line:!0}),(0,o.jsx)(n.xv,{subtitle:!0,className:"text-xl",children:"Third Party Privacy Policies"}),(0,o.jsxs)(n.xv,{p:!0,children:["[Website_Name]'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. ",(0,o.jsx)("br",{}),"You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites."]}),(0,o.jsx)(n.ty,{line:!0}),(0,o.jsx)(n.xv,{subtitle:!0,className:"text-xl",children:"CCPA Privacy Rights (Do Not Sell My Personal Information)"}),(0,o.jsxs)(n.xv,{p:!0,children:["Under the CCPA, among other rights, California consumers have the right to: ",(0,o.jsx)("br",{})," Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. ",(0,o.jsx)("br",{}),"Request that a business delete any personal data about the consumer that a business has collected. ",(0,o.jsx)("br",{}),"Request that a business that sells a consumer's personal data, not sell the consumer's personal data. ",(0,o.jsx)("br",{}),"If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."]}),(0,o.jsx)(n.ty,{line:!0}),(0,o.jsx)(n.xv,{subtitle:!0,className:"text-xl",children:"GDPR Data Protection Rights"}),(0,o.jsxs)(n.xv,{p:!0,children:["We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: ",(0,o.jsx)("br",{}),(0,o.jsxs)("ul",{className:"list-disc pl-8",children:[(0,o.jsx)("li",{children:"The right to access: You have the right to request copies of your personal data. We may charge you a small fee for this service."}),(0,o.jsx)("li",{children:"The right to rectification: You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete."}),(0,o.jsx)("li",{children:"The right to erasure: You have the right to request that we erase your personal data, under certain conditions."}),(0,o.jsx)("li",{children:"The right to restrict processing: You have the right to request that we restrict the processing of your personal data, under certain conditions."}),(0,o.jsx)("li",{children:"The right to object to processing: You have the right to object to our processing of your personal data, under certain conditions."}),(0,o.jsx)("li",{children:"The right to data portability: You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions."})]}),(0,o.jsx)("br",{}),"If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."]}),(0,o.jsx)(n.ty,{line:!0}),(0,o.jsx)(n.xv,{subtitle:!0,className:"text-xl",children:"Children's Information"}),(0,o.jsxs)(n.xv,{p:!0,children:["Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. ",(0,o.jsx)("br",{}),"[Website_Name] does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."]})]})})}},4515:function(e,t,r){"use strict";r.d(t,{Xg:function(){return n},xv:function(){return i},Ee:function(){return a},ty:function(){return s},aV:function(){return l},e9:function(){return u},iR:function(){return c},GJ:function(){return d},Y7:function(){return h}});var o=r(5152),n=(0,o.default)((function(){return Promise.all([r.e(874),r.e(228),r.e(13),r.e(933)]).then(r.bind(r,1933))}),{loadableGenerated:{webpack:function(){return[1933]}}}),i=(0,o.default)((function(){return r.e(980).then(r.bind(r,6980))}),{loadableGenerated:{webpack:function(){return[6980]}}}),a=(0,o.default)((function(){return r.e(28).then(r.bind(r,3028))}),{loadableGenerated:{webpack:function(){return[3028]}}}),s=(0,o.default)((function(){return r.e(199).then(r.bind(r,2199))}),{loadableGenerated:{webpack:function(){return[2199]}}}),l=(0,o.default)((function(){return r.e(70).then(r.bind(r,7070))}),{loadableGenerated:{webpack:function(){return[7070]}}}),u=(0,o.default)((function(){return Promise.resolve().then(r.bind(r,534))}),{loadableGenerated:{webpack:function(){return[534]}}}),c=(0,o.default)((function(){return r.e(162).then(r.bind(r,162))}),{loadableGenerated:{webpack:function(){return[162]}}}),d=(0,o.default)((function(){return r.e(354).then(r.bind(r,7354))}),{loadableGenerated:{webpack:function(){return[7354]}}}),h=(0,o.default)((function(){return Promise.all([r.e(4),r.e(931)]).then(r.bind(r,931))}),{loadableGenerated:{webpack:function(){return[931]}}})},5152:function(e,t,r){e.exports=r(638)},8217:function(e,t,r){"use strict";var o=r(6086),n=r(7294);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,i=n.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=i[0];var a=i[1];return i=e.value,e.getCurrentValue===t&&e.subscribe===r||(i=t(),a({getCurrentValue:t,subscribe:r,value:i})),n.useDebugValue(i),n.useEffect((function(){function e(){if(!n){var e=t();a((function(n){return n.getCurrentValue!==t||n.subscribe!==r||n.value===e?n:o({},n,{value:e})}))}}var n=!1,i=r(e);return e(),function(){n=!0,i()}}),[t,r]),i}},7161:function(e,t,r){"use strict";e.exports=r(8217)}},function(e){e.O(0,[774,888,179],(function(){return t=4644,e(e.s=t);var t}));var t=e.O();_N_E=t}]);