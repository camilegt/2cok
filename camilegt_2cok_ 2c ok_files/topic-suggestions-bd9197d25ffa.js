"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["topic-suggestions"],{34892:(e,t,r)=>{r.d(t,{DF:()=>p,Fr:()=>m,a_:()=>d});var n=r(67525);function o(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}let s=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};function a(e,t,r=!1){let n=t.headers.get("content-type")||"";if(!r&&!n.startsWith("text/html"))throw new s(`expected response with text/html, but was ${n}`,t);if(r&&!(n.startsWith("text/html")||n.startsWith("application/json")))throw new s(`expected response with text/html or application/json, but was ${n}`,t);let o=t.headers.get("x-html-safe");if(o){if(!e.includes(o))throw new s("response X-HTML-Safe nonce did not match",t)}else throw new s("missing X-HTML-Safe nonce",t)}var i=r(22490),c=r(7180);let l="server-x-safe-html",u=i.Z.createPolicy(l,{createHTML:(e,t)=>c.O.apply({policy:()=>(a(o(document),t),e),policyName:l,fallback:e})});async function d(e,t,r){let o=new Request(t,r);o.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(o);if(s.status<200||s.status>=300)throw Error(`HTTP ${s.status}${s.statusText||""}`);let a=u.createHTML(await s.text(),s);return(0,n.r)(e,a)}function p(e,t,r=1e3,n=[200]){return async function r(o){let s=new Request(e,t);s.headers.append("X-Requested-With","XMLHttpRequest");let a=await self.fetch(s);if(202===a.status)return await new Promise(e=>setTimeout(e,o)),r(1.5*o);if(n.includes(a.status))return a;if(a.status<200||a.status>=300)throw Error(`HTTP ${a.status}${a.statusText||""}`);throw Error(`Unexpected ${a.status} response status from poll endpoint`)}(r)}async function m(e,t,r){let{wait:n=500,acceptedStatusCodes:o=[200],max:s=3,attempt:a=0}=r||{},i=async()=>new Promise((r,i)=>{setTimeout(async()=>{try{let n=new Request(e,t);n.headers.append("X-Requested-With","XMLHttpRequest");let i=await self.fetch(n);if(o.includes(i.status)||a+1===s)return r(i);r("retry")}catch(e){i(e)}},n*a)}),c=await i();return"retry"!==c?c:m(e,t,{wait:n,acceptedStatusCodes:o,max:s,attempt:a+1})}},67525:(e,t,r)=>{r.d(t,{r:()=>i});var n=r(22490),o=r(7180);let s="parse-html-no-op",a=n.Z.createPolicy(s,{createHTML:e=>o.O.apply({policy:()=>e,policyName:s,fallback:e,fallbackOnError:!0})});function i(e,t){let r=e.createElement("template");return r.innerHTML=a.createHTML(t),e.importNode(r.content,!0)}},29352:(e,t,r)=>{var n=r(34892),o=r(59753),s=r(65935);function a(e){let t=e.querySelector(".js-topic-suggestions-box"),r=t.querySelector(".js-topic-suggestion");r||t.remove()}function i(e){let t=e.closest(".js-topic-save-notice-container"),r=t.querySelector(".js-repo-topics-save-notice");r.classList.remove("d-none"),r.classList.add("d-inline-block","anim-fade-in"),setTimeout(()=>{r.classList.remove("d-inline-block"),r.classList.add("d-none")},1900)}async function c(e){let t=e.querySelector(".js-topic-suggestions-container");if(!t)return;let r=t.getAttribute("data-url");if(!r)throw Error("could not get url");let o=await (0,n.a_)(document,r);t.textContent="",t.appendChild(o)}(0,o.on)("click",".js-accept-topic-button",function(e){let t=e.currentTarget,r=t.closest(".js-topic-form-area"),n=t.closest(".js-topic-suggestion"),o=r.querySelector(".js-template"),s=r.querySelector(".js-tag-input-selected-tags"),i=o.cloneNode(!0),c=t.getAttribute("data-topic-name")||"";i.querySelector("input").value=c,i.querySelector(".js-placeholder-tag-name").replaceWith(c),i.classList.remove("d-none","js-template"),s.appendChild(i),n.remove(),a(r)}),(0,s.AC)(".js-accept-topic-form",async function(e,t){await t.html();let r=e.closest(".js-topic-form-area"),n=e.closest(".js-topic-suggestion"),o=r.querySelector(".js-template"),s=r.querySelector(".js-tag-input-selected-tags"),l=o.cloneNode(!0),u=n.querySelector('input[name="input[name]"]').value;l.querySelector("input").value=u,l.querySelector(".js-placeholder-tag-name").replaceWith(u),l.classList.remove("d-none","js-template"),s.appendChild(l),n.remove(),c(r),a(r),i(e)}),(0,o.on)("click",".js-decline-topic-button",function(e){let t=e.currentTarget,r=t.closest(".js-topic-form-area"),n=t.closest(".js-topic-suggestion");setTimeout(()=>{n.remove(),a(r)},0)}),(0,s.AC)(".js-decline-topic-form",async function(e,t){await t.html(),i(e);let r=e.closest(".js-topic-form-area"),n=e.closest(".js-topic-suggestion");n.remove(),c(r),a(r)})},89359:(e,t,r)=>{function n(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){let e=n("meta[name=analytics-location]");return e?e.content:window.location.pathname}function s(){let e=n("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let r=n("meta[name=analytics-location-params]");for(let e of(r&&(t+=(t?"&":"?")+r.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let r=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${r[0]}($|=)`,"g"),`$1${r[1]}$2`)}return t}function a(){return`${window.location.protocol}//${window.location.host}${o()+s()}`}r.d(t,{S:()=>a})},24601:(e,t,r)=>{r.d(t,{aJ:()=>b,cI:()=>T,eK:()=>h});var n=r(82918),o=r(83314),s=r(28382),a=r(89359),i=r(68202),c=r(53729),l=r(86283);let u=!1,d=0,p=Date.now(),m=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function f(e){return!!("AbortError"===e.name||"TypeError"===e.name&&m.has(e.message)||e.name.startsWith("ApiError")&&m.has(e.message))}function h(e,t={}){f(e)||y(g(w(e),t))}async function y(e){if(!j())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(v(e.error.stacktrace)){u=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function w(e){return{type:e.name,value:e.message,stacktrace:T(e)}}function g(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,a.S)()||window.location.href,readyState:document.readyState,referrer:(0,i.wP)(),timeSinceLoad:Math.round(Date.now()-p),user:b()||void 0,bundler:c.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function T(e){return(0,s.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let S=/(chrome|moz|safari)-extension:\/\//;function v(e){return e.some(e=>S.test(e.filename)||S.test(e.function))}function b(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,n.b)();return`anonymous-${t}`}let _=!1;function j(){return!_&&!u&&d<10&&(0,o.Gb)()}if(l.iG?.addEventListener("pageshow",()=>_=!1),l.iG?.addEventListener("pagehide",()=>_=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{h(e.data.error)})}},7180:(e,t,r)=>{r.d(t,{O:()=>i,d:()=>TrustedTypesPolicyError});var n=r(46426),o=r(71643),s=r(24601);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function a({policy:e,policyName:t,fallback:r,fallbackOnError:a=!1}){try{if((0,n.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return r;return e()}catch(e){if(e instanceof TrustedTypesPolicyError||((0,s.eK)(e),(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!a))throw e}return r}let i={apply:a}},22490:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(86283);function o(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let s={createHTML:o("createHTML"),createScript:o("createScript"),createScriptURL:o("createScriptURL")},a={createPolicy:(e,t)=>({name:e,...s,...t})},i=globalThis.trustedTypes??a,c=!1;n.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||c||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),c=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_index_js","ui_packages_soft-nav_soft-nav_ts"],()=>t(29352));var r=e.O()}]);
//# sourceMappingURL=topic-suggestions-783cce215a5c.js.map