"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308],{4308:function(e,t,r){r.d(t,{u:function(){return Xe}});var n=r(6450);function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){return e instanceof o(e).Element||e instanceof Element}function a(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function s(e){return"undefined"!==typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}var f=Math.max,l=Math.min,c=Math.round;function u(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function p(){return!/^((?!chrome|android).)*safari/i.test(u())}function d(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),s=1,f=1;t&&a(e)&&(s=e.offsetWidth>0&&c(n.width)/e.offsetWidth||1,f=e.offsetHeight>0&&c(n.height)/e.offsetHeight||1);var l=(i(e)?o(e):window).visualViewport,u=!p()&&r,d=(n.left+(u&&l?l.offsetLeft:0))/s,v=(n.top+(u&&l?l.offsetTop:0))/f,m=n.width/s,h=n.height/f;return{width:m,height:h,top:v,right:d+m,bottom:v+h,left:d,x:d,y:v}}function v(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function m(e){return e?(e.nodeName||"").toLowerCase():null}function h(e){return((i(e)?e.ownerDocument:e.document)||window.document).documentElement}function g(e){return d(h(e)).left+v(e).scrollLeft}function b(e){return o(e).getComputedStyle(e)}function w(e){var t=b(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function y(e,t,r){void 0===r&&(r=!1);var n=a(t),i=a(t)&&function(e){var t=e.getBoundingClientRect(),r=c(t.width)/e.offsetWidth||1,n=c(t.height)/e.offsetHeight||1;return 1!==r||1!==n}(t),s=h(t),f=d(e,i,r),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(n||!n&&!r)&&(("body"!==m(t)||w(s))&&(l=function(e){return e!==o(e)&&a(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:v(e);var t}(t)),a(t)?((u=d(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=g(s))),{x:f.left+l.scrollLeft-u.x,y:f.top+l.scrollTop-u.y,width:f.width,height:f.height}}function x(e){var t=d(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function O(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||h(e)}function k(e){return["html","body","#document"].indexOf(m(e))>=0?e.ownerDocument.body:a(e)&&w(e)?e:k(O(e))}function E(e,t){var r;void 0===t&&(t=[]);var n=k(e),i=n===(null==(r=e.ownerDocument)?void 0:r.body),a=o(n),s=i?[a].concat(a.visualViewport||[],w(n)?n:[]):n,f=t.concat(s);return i?f:f.concat(E(O(s)))}function C(e){return["table","td","th"].indexOf(m(e))>=0}function P(e){return a(e)&&"fixed"!==b(e).position?e.offsetParent:null}function j(e){for(var t=o(e),r=P(e);r&&C(r)&&"static"===b(r).position;)r=P(r);return r&&("html"===m(r)||"body"===m(r)&&"static"===b(r).position)?t:r||function(e){var t=/firefox/i.test(u());if(/Trident/i.test(u())&&a(e)&&"fixed"===b(e).position)return null;var r=O(e);for(s(r)&&(r=r.host);a(r)&&["html","body"].indexOf(m(r))<0;){var n=b(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var D="top",R="bottom",A="right",W="left",T="auto",S=[D,R,A,W],M="start",z="end",L="viewport",B="popper",H=S.reduce((function(e,t){return e.concat([t+"-"+M,t+"-"+z])}),[]),q=[].concat(S,[T]).reduce((function(e,t){return e.concat([t,t+"-"+M,t+"-"+z])}),[]),I=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function _(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}function N(e){var t;return function(){return t||(t=new Promise((function(r){Promise.resolve().then((function(){t=void 0,r(e())}))}))),t}}var V={placement:"bottom",modifiers:[],strategy:"absolute"};function F(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function U(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,a=void 0===o?V:o;return function(e,t,r){void 0===r&&(r=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},V,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],f=!1,l={state:o,setOptions:function(r){var f="function"===typeof r?r(o.options):r;c(),o.options=Object.assign({},a,o.options,f),o.scrollParents={reference:i(e)?E(e):e.contextElement?E(e.contextElement):[],popper:E(t)};var u=function(e){var t=_(e);return I.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:l,options:n}),f=function(){};s.push(a||f)}})),l.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,r=e.popper;if(F(t,r)){o.rects={reference:y(t,j(r),"fixed"===o.options.strategy),popper:x(r)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<o.orderedModifiers.length;n++)if(!0!==o.reset){var i=o.orderedModifiers[n],a=i.fn,s=i.options,c=void 0===s?{}:s,u=i.name;"function"===typeof a&&(o=a({state:o,options:c,name:u,instance:l})||o)}else o.reset=!1,n=-1}}},update:N((function(){return new Promise((function(e){l.forceUpdate(),e(o)}))})),destroy:function(){c(),f=!0}};if(!F(e,t))return l;function c(){s.forEach((function(e){return e()})),s=[]}return l.setOptions(r).then((function(e){!f&&r.onFirstUpdate&&r.onFirstUpdate(e)})),l}}var $={passive:!0};function X(e){return e.split("-")[0]}function Y(e){return e.split("-")[1]}function G(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function K(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?X(o):null,a=o?Y(o):null,s=r.x+r.width/2-n.width/2,f=r.y+r.height/2-n.height/2;switch(i){case D:t={x:s,y:r.y-n.height};break;case R:t={x:s,y:r.y+r.height};break;case A:t={x:r.x+r.width,y:f};break;case W:t={x:r.x-n.width,y:f};break;default:t={x:r.x,y:r.y}}var l=i?G(i):null;if(null!=l){var c="y"===l?"height":"width";switch(a){case M:t[l]=t[l]-(r[c]/2-n[c]/2);break;case z:t[l]=t[l]+(r[c]/2-n[c]/2)}}return t}var J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,r=e.popper,n=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,f=e.position,l=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,d=e.isFixed,v=s.x,m=void 0===v?0:v,g=s.y,w=void 0===g?0:g,y="function"===typeof p?p({x:m,y:w}):{x:m,y:w};m=y.x,w=y.y;var x=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),k=W,E=D,C=window;if(u){var P=j(r),T="clientHeight",S="clientWidth";if(P===o(r)&&"static"!==b(P=h(r)).position&&"absolute"===f&&(T="scrollHeight",S="scrollWidth"),P=P,i===D||(i===W||i===A)&&a===z)E=R,w-=(d&&P===C&&C.visualViewport?C.visualViewport.height:P[T])-n.height,w*=l?1:-1;if(i===W||(i===D||i===R)&&a===z)k=A,m-=(d&&P===C&&C.visualViewport?C.visualViewport.width:P[S])-n.width,m*=l?1:-1}var M,L=Object.assign({position:f},u&&J),B=!0===p?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:c(t*n)/n||0,y:c(r*n)/n||0}}({x:m,y:w}):{x:m,y:w};return m=B.x,w=B.y,l?Object.assign({},L,((M={})[E]=O?"0":"",M[k]=x?"0":"",M.transform=(C.devicePixelRatio||1)<=1?"translate("+m+"px, "+w+"px)":"translate3d("+m+"px, "+w+"px, 0)",M)):Object.assign({},L,((t={})[E]=O?w+"px":"",t[k]=x?m+"px":"",t.transform="",t))}var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return Z[e]}))}var te={start:"end",end:"start"};function re(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function ne(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&s(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function oe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ie(e,t,r){return t===L?oe(function(e,t){var r=o(e),n=h(e),i=r.visualViewport,a=n.clientWidth,s=n.clientHeight,f=0,l=0;if(i){a=i.width,s=i.height;var c=p();(c||!c&&"fixed"===t)&&(f=i.offsetLeft,l=i.offsetTop)}return{width:a,height:s,x:f+g(e),y:l}}(e,r)):i(t)?function(e,t){var r=d(e,!1,"fixed"===t);return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):oe(function(e){var t,r=h(e),n=v(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=f(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=f(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+g(e),l=-n.scrollTop;return"rtl"===b(o||r).direction&&(s+=f(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}(h(e)))}function ae(e,t,r,n){var o="clippingParents"===t?function(e){var t=E(O(e)),r=["absolute","fixed"].indexOf(b(e).position)>=0&&a(e)?j(e):e;return i(r)?t.filter((function(e){return i(e)&&ne(e,r)&&"body"!==m(e)})):[]}(e):[].concat(t),s=[].concat(o,[r]),c=s[0],u=s.reduce((function(t,r){var o=ie(e,r,n);return t.top=f(o.top,t.top),t.right=l(o.right,t.right),t.bottom=l(o.bottom,t.bottom),t.left=f(o.left,t.left),t}),ie(e,c,n));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function se(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function fe(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function le(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,a=r.strategy,s=void 0===a?e.strategy:a,f=r.boundary,l=void 0===f?"clippingParents":f,c=r.rootBoundary,u=void 0===c?L:c,p=r.elementContext,v=void 0===p?B:p,m=r.altBoundary,g=void 0!==m&&m,b=r.padding,w=void 0===b?0:b,y=se("number"!==typeof w?w:fe(w,S)),x=v===B?"reference":B,O=e.rects.popper,k=e.elements[g?x:v],E=ae(i(k)?k:k.contextElement||h(e.elements.popper),l,u,s),C=d(e.elements.reference),P=K({reference:C,element:O,strategy:"absolute",placement:o}),j=oe(Object.assign({},O,P)),W=v===B?j:C,T={top:E.top-W.top+y.top,bottom:W.bottom-E.bottom+y.bottom,left:E.left-W.left+y.left,right:W.right-E.right+y.right},M=e.modifiersData.offset;if(v===B&&M){var z=M[o];Object.keys(T).forEach((function(e){var t=[A,R].indexOf(e)>=0?1:-1,r=[D,R].indexOf(e)>=0?"y":"x";T[e]+=z[r]*t}))}return T}function ce(e,t,r){return f(e,l(t,r))}function ue(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function pe(e){return[D,A,R,W].some((function(t){return e[t]>=0}))}var de=U({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,a=void 0===i||i,s=n.resize,f=void 0===s||s,l=o(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach((function(e){e.addEventListener("scroll",r.update,$)})),f&&l.addEventListener("resize",r.update,$),function(){a&&c.forEach((function(e){e.removeEventListener("scroll",r.update,$)})),f&&l.removeEventListener("resize",r.update,$)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=K({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,f=void 0===s||s,l={placement:X(t.placement),variation:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];a(o)&&m(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});a(n)&&m(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=q.reduce((function(e,r){return e[r]=function(e,t,r){var n=X(e),o=[W,D].indexOf(n)>=0?-1:1,i="function"===typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[W,A].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],f=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,f=r.fallbackPlacements,l=r.padding,c=r.boundary,u=r.rootBoundary,p=r.altBoundary,d=r.flipVariations,v=void 0===d||d,m=r.allowedAutoPlacements,h=t.options.placement,g=X(h),b=f||(g===h||!v?[ee(h)]:function(e){if(X(e)===T)return[];var t=ee(e);return[re(e),t,re(t)]}(h)),w=[h].concat(b).reduce((function(e,r){return e.concat(X(r)===T?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,f=r.allowedAutoPlacements,l=void 0===f?q:f,c=Y(n),u=c?s?H:H.filter((function(e){return Y(e)===c})):S,p=u.filter((function(e){return l.indexOf(e)>=0}));0===p.length&&(p=u);var d=p.reduce((function(t,r){return t[r]=le(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[X(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:c,rootBoundary:u,padding:l,flipVariations:v,allowedAutoPlacements:m}):r)}),[]),y=t.rects.reference,x=t.rects.popper,O=new Map,k=!0,E=w[0],C=0;C<w.length;C++){var P=w[C],j=X(P),z=Y(P)===M,L=[D,R].indexOf(j)>=0,B=L?"width":"height",I=le(t,{placement:P,boundary:c,rootBoundary:u,altBoundary:p,padding:l}),_=L?z?A:W:z?R:D;y[B]>x[B]&&(_=ee(_));var N=ee(_),V=[];if(i&&V.push(I[j]<=0),s&&V.push(I[_]<=0,I[N]<=0),V.every((function(e){return e}))){E=P,k=!1;break}O.set(P,V)}if(k)for(var F=function(e){var t=w.find((function(t){var r=O.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},U=v?3:1;U>0;U--){if("break"===F(U))break}t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,u=r.rootBoundary,p=r.altBoundary,d=r.padding,v=r.tether,m=void 0===v||v,h=r.tetherOffset,g=void 0===h?0:h,b=le(t,{boundary:c,rootBoundary:u,padding:d,altBoundary:p}),w=X(t.placement),y=Y(t.placement),O=!y,k=G(w),E="x"===k?"y":"x",C=t.modifiersData.popperOffsets,P=t.rects.reference,T=t.rects.popper,S="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,z="number"===typeof S?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(C){if(i){var H,q="y"===k?D:W,I="y"===k?R:A,_="y"===k?"height":"width",N=C[k],V=N+b[q],F=N-b[I],U=m?-T[_]/2:0,$=y===M?P[_]:T[_],K=y===M?-T[_]:-P[_],J=t.elements.arrow,Q=m&&J?x(J):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Z[q],te=Z[I],re=ce(0,P[_],Q[_]),ne=O?P[_]/2-U-re-ee-z.mainAxis:$-re-ee-z.mainAxis,oe=O?-P[_]/2+U+re+te+z.mainAxis:K+re+te+z.mainAxis,ie=t.elements.arrow&&j(t.elements.arrow),ae=ie?"y"===k?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(H=null==L?void 0:L[k])?H:0,fe=N+oe-se,ue=ce(m?l(V,N+ne-se-ae):V,N,m?f(F,fe):F);C[k]=ue,B[k]=ue-N}if(s){var pe,de="x"===k?D:W,ve="x"===k?R:A,me=C[E],he="y"===E?"height":"width",ge=me+b[de],be=me-b[ve],we=-1!==[D,W].indexOf(w),ye=null!=(pe=null==L?void 0:L[E])?pe:0,xe=we?ge:me-P[he]-T[he]-ye+z.altAxis,Oe=we?me+P[he]+T[he]-ye-z.altAxis:be,ke=m&&we?function(e,t,r){var n=ce(e,t,r);return n>r?r:n}(xe,me,Oe):ce(m?xe:ge,me,m?Oe:be);C[E]=ke,B[E]=ke-me}t.modifiersData[n]=B}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=X(r.placement),f=G(s),l=[W,A].indexOf(s)>=0?"height":"width";if(i&&a){var c=function(e,t){return se("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:fe(e,S))}(o.padding,r),u=x(i),p="y"===f?D:W,d="y"===f?R:A,v=r.rects.reference[l]+r.rects.reference[f]-a[f]-r.rects.popper[l],m=a[f]-r.rects.reference[f],h=j(i),g=h?"y"===f?h.clientHeight||0:h.clientWidth||0:0,b=v/2-m/2,w=c[p],y=g-u[l]-c[d],O=g/2-u[l]/2+b,k=ce(w,O,y),E=f;r.modifiersData[n]=((t={})[E]=k,t.centerOffset=k-O,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!==typeof n||(n=t.elements.popper.querySelector(n)))&&ne(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=le(t,{elementContext:"reference"}),s=le(t,{altBoundary:!0}),f=ue(a,n),l=ue(s,o,i),c=pe(f),u=pe(l);t.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}}]}),ve=r(7294);function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var he=function(e,t){return{var:e,varRef:t?"var("+e+", "+t+")":"var("+e+")"}},ge={arrowShadowColor:he("--popper-arrow-shadow-color"),arrowSize:he("--popper-arrow-size","8px"),arrowSizeHalf:he("--popper-arrow-size-half"),arrowBg:he("--popper-arrow-bg"),transformOrigin:he("--popper-transform-origin"),arrowOffset:he("--popper-arrow-offset")};var be={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},we={scroll:!0,resize:!0};var ye={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;t.styles.popper.width=t.rects.reference.width+"px"},effect:function(e){var t=e.state;return function(){var e=t.elements.reference;t.elements.popper.style.width=e.offsetWidth+"px"}}},xe={name:"transformOrigin",enabled:!0,phase:"write",fn:function(e){var t=e.state;Oe(t)},effect:function(e){var t=e.state;return function(){Oe(t)}}},Oe=function(e){var t;e.elements.popper.style.setProperty(ge.transformOrigin.var,(t=e.placement,be[t]))},ke={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;Ee(t)}},Ee=function(e){var t;if(e.placement){var r=Ce(e.placement);if(null!=(t=e.elements)&&t.arrow&&r){var n,o;Object.assign(e.elements.arrow.style,((n={})[r.property]=r.value,n.width=ge.arrowSize.varRef,n.height=ge.arrowSize.varRef,n.zIndex=-1,n));var i=((o={})[ge.arrowSizeHalf.var]="calc("+ge.arrowSize.varRef+" / 2)",o[ge.arrowOffset.var]="calc("+ge.arrowSizeHalf.varRef+" * -1)",o);for(var a in i)e.elements.arrow.style.setProperty(a,i[a])}}},Ce=function(e){return e.startsWith("top")?{property:"bottom",value:ge.arrowOffset.varRef}:e.startsWith("bottom")?{property:"top",value:ge.arrowOffset.varRef}:e.startsWith("left")?{property:"right",value:ge.arrowOffset.varRef}:e.startsWith("right")?{property:"left",value:ge.arrowOffset.varRef}:void 0},Pe={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:function(e){var t=e.state;je(t)},effect:function(e){var t=e.state;return function(){je(t)}}},je=function(e){if(e.elements.arrow){var t,r=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(r)Object.assign(r.style,{transform:"rotate(45deg)",background:ge.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:(t=e.placement,t.includes("top")?"1px 1px 1px 0 var(--popper-arrow-shadow-color)":t.includes("bottom")?"-1px -1px 1px 0 var(--popper-arrow-shadow-color)":t.includes("right")?"-1px 1px 1px 0 var(--popper-arrow-shadow-color)":t.includes("left")?"1px -1px 1px 0 var(--popper-arrow-shadow-color)":void 0)})}},De={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},Re={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};var Ae=["size","shadowColor","bg","style"];function We(e){void 0===e&&(e={});var t=e,r=t.enabled,o=void 0===r||r,i=t.modifiers,a=t.placement,s=void 0===a?"bottom":a,f=t.strategy,l=void 0===f?"absolute":f,c=t.arrowPadding,u=void 0===c?8:c,p=t.eventListeners,d=void 0===p||p,v=t.offset,m=t.gutter,h=void 0===m?8:m,g=t.flip,b=void 0===g||g,w=t.boundary,y=void 0===w?"clippingParents":w,x=t.preventOverflow,O=void 0===x||x,k=t.matchWidth,E=t.direction,C=void 0===E?"ltr":E,P=(0,ve.useRef)(null),j=(0,ve.useRef)(null),D=(0,ve.useRef)(null),R=function(e,t){var r,n;void 0===t&&(t="ltr");var o=(null==(r=De[e])?void 0:r[t])||e;return"ltr"===t?o:null!=(n=Re[e])?n:o}(s,C),A=(0,ve.useRef)((function(){})),W=(0,ve.useCallback)((function(){var e;o&&P.current&&j.current&&(null==A.current||A.current(),D.current=de(P.current,j.current,{placement:R,modifiers:[Pe,ke,xe,me({},ye,{enabled:!!k}),me({name:"eventListeners"},(e=d,"object"===typeof e?{enabled:!0,options:me({},we,e)}:{enabled:e,options:we})),{name:"arrow",options:{padding:u}},{name:"offset",options:{offset:null!=v?v:[0,h]}},{name:"flip",enabled:!!b,options:{padding:8}},{name:"preventOverflow",enabled:!!O,options:{boundary:y}}].concat(null!=i?i:[]),strategy:l}),D.current.forceUpdate(),A.current=D.current.destroy)}),[R,o,i,k,d,u,v,h,b,O,y,l]);(0,ve.useEffect)((function(){return function(){var e;P.current||j.current||(null==(e=D.current)||e.destroy(),D.current=null)}}),[]);var T=(0,ve.useCallback)((function(e){P.current=e,W()}),[W]),S=(0,ve.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),me({},e,{ref:(0,n.lq)(T,t)})}),[T]),M=(0,ve.useCallback)((function(e){j.current=e,W()}),[W]),z=(0,ve.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),me({},e,{ref:(0,n.lq)(M,t),style:me({},e.style,{position:l,minWidth:"max-content",inset:"0 auto auto 0"})})}),[l,M]),L=(0,ve.useCallback)((function(e,t){void 0===e&&(e={}),void 0===t&&(t=null);var r=e;return r.size,r.shadowColor,r.bg,r.style,me({},function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(r,Ae),{ref:t,"data-popper-arrow":"",style:Te(e)})}),[]),B=(0,ve.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),me({},e,{ref:t,"data-popper-arrow-inner":""})}),[]);return{update:function(){var e;null==(e=D.current)||e.update()},forceUpdate:function(){var e;null==(e=D.current)||e.forceUpdate()},transformOrigin:ge.transformOrigin.varRef,referenceRef:T,popperRef:M,getPopperProps:z,getArrowProps:L,getArrowInnerProps:B,getReferenceProps:S}}function Te(e){var t=e.size,r=e.shadowColor,n=e.bg,o=me({},e.style,{position:"absolute"});return t&&(o["--popper-arrow-size"]=t),r&&(o["--popper-arrow-shadow-color"]=r),n&&(o["--popper-arrow-bg"]=n),o}var Se=r(6871),Me=r(1659),ze=r(4592),Le=r(1358),Be=r(9860),He=r(3869),qe=r(7375),Ie=r(4697);function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ne(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var Ve={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},Fe=["openDelay","closeDelay","closeOnClick","closeOnMouseDown","closeOnEsc","onOpen","onClose","placement","id","isOpen","defaultIsOpen","arrowSize","arrowShadowColor","arrowPadding","modifiers","isDisabled","gutter","offset","direction"];var Ue=["children","label","shouldWrapChildren","aria-label","hasArrow","bg","portalProps","background","backgroundColor","bgColor"],$e=(0,Me.m$)(Be.E.div),Xe=(0,Me.Gp)((function(e,t){var r,o,i=(0,Me.mq)("Tooltip",e),a=(0,Me.Lr)(e),s=(0,Me.Fg)(),f=a.children,l=a.label,c=a.shouldWrapChildren,u=a["aria-label"],p=a.hasArrow,d=a.bg,v=a.portalProps,m=a.background,h=a.backgroundColor,g=a.bgColor,b=Ne(a,Ue),w=null!=(r=null!=(o=null!=m?m:h)?o:d)?r:g;w&&(i.bg=w,i[ge.arrowBg.var]=(0,ze.K1)(s,"colors",w));var y,x=function(e){void 0===e&&(e={});var t=e,r=t.openDelay,o=void 0===r?0:r,i=t.closeDelay,a=void 0===i?0:i,s=t.closeOnClick,f=void 0===s||s,l=t.closeOnMouseDown,c=t.closeOnEsc,u=void 0===c||c,p=t.onOpen,d=t.onClose,v=t.placement,m=t.id,h=t.isOpen,g=t.defaultIsOpen,b=t.arrowSize,w=void 0===b?10:b,y=t.arrowShadowColor,x=t.arrowPadding,O=t.modifiers,k=t.isDisabled,E=t.gutter,C=t.offset,P=t.direction,j=Ne(t,Fe),D=(0,qe.qY)({isOpen:h,defaultIsOpen:g,onOpen:p,onClose:d}),R=D.isOpen,A=D.onOpen,W=D.onClose,T=We({enabled:R,placement:v,arrowPadding:x,modifiers:O,gutter:E,offset:C,direction:P}),S=T.referenceRef,M=T.getPopperProps,z=T.getArrowInnerProps,L=T.getArrowProps,B=(0,qe.Me)(m,"tooltip"),H=ve.useRef(null),q=ve.useRef(),I=ve.useRef(),_=ve.useCallback((function(){k||(q.current=window.setTimeout(A,o))}),[k,A,o]),N=ve.useCallback((function(){q.current&&clearTimeout(q.current),I.current=window.setTimeout(W,a)}),[a,W]),V=ve.useCallback((function(){f&&N()}),[f,N]),F=ve.useCallback((function(){l&&N()}),[l,N]),U=ve.useCallback((function(e){R&&"Escape"===e.key&&N()}),[R,N]);(0,Ie.b)("keydown",u?U:void 0),ve.useEffect((function(){return function(){clearTimeout(q.current),clearTimeout(I.current)}}),[]),(0,Ie.b)("mouseleave",N,(function(){return H.current}));var $=ve.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),_e({},e,{ref:(0,n.lq)(H,t,S),onMouseEnter:(0,ze.v0)(e.onMouseEnter,_),onClick:(0,ze.v0)(e.onClick,V),onMouseDown:(0,ze.v0)(e.onMouseDown,F),onFocus:(0,ze.v0)(e.onFocus,_),onBlur:(0,ze.v0)(e.onBlur,N),"aria-describedby":R?B:void 0})}),[_,N,F,R,B,V,S]),X=ve.useCallback((function(e,t){var r;return void 0===e&&(e={}),void 0===t&&(t=null),M(_e({},e,{style:_e({},e.style,(r={},r[ge.arrowSize.var]=w?(0,ze.px)(w):void 0,r[ge.arrowShadowColor.var]=y,r))}),t)}),[M,w,y]),Y=ve.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),_e({ref:t},j,e,{id:B,role:"tooltip",style:_e({},e.style,{position:"relative",transformOrigin:ge.transformOrigin.varRef})})}),[j,B]);return{isOpen:R,show:_,hide:N,getTriggerProps:$,getTooltipProps:Y,getTooltipPositionerProps:X,getArrowProps:L,getArrowInnerProps:z}}(_e({},b,{direction:s.direction}));if((0,ze.HD)(f)||c)y=ve.createElement(Me.m$.span,_e({tabIndex:0},x.getTriggerProps()),f);else{var O=ve.Children.only(f);y=ve.cloneElement(O,x.getTriggerProps(O.props,O.ref))}var k=!!u,E=x.getTooltipProps({},t),C=k?(0,ze.CE)(E,["role","id"]):E,P=(0,ze.ei)(E,["role","id"]);return l?ve.createElement(ve.Fragment,null,y,ve.createElement(He.M,null,x.isOpen&&ve.createElement(Se.h_,v,ve.createElement(Me.m$.div,_e({},x.getTooltipPositionerProps(),{__css:{zIndex:i.zIndex,pointerEvents:"none"}}),ve.createElement($e,_e({variants:Ve},C,{initial:"exit",animate:"enter",exit:"exit",__css:i}),l,k&&ve.createElement(Le.TX,P,u),p&&ve.createElement(Me.m$.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},ve.createElement(Me.m$.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:i.bg}}))))))):ve.createElement(ve.Fragment,null,f)}));ze.Ts&&(Xe.displayName="Tooltip")}}]);