(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var A;function aa(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}var D="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(a==Array.prototype||a==Object.prototype)return a;a[c]=b.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<a.length;++c){var b=a[c];if(b&&b.Math==Math)return b}throw Error("Cannot find global object");}var E=ba(this);function G(a,c){if(c)a:{var b=E;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];if(!(g in b))break a;b=b[g]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&D(b,a,{configurable:!0,writable:!0,value:c})}}
G("Symbol",function(a){function c(h){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new b(d+(h||"")+"_"+g++,h)}function b(h,e){this.g=h;D(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;b.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",g=0;return c});
G("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),b=0;b<c.length;b++){var d=E[c[b]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&D(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ca(aa(this))}})}return a});function ca(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function I(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):{next:aa(a)}}function fa(a){if(!(a instanceof Array)){a=I(a);for(var c,b=[];!(c=a.next()).done;)b.push(c.value);a=b}return a}var L;if("function"==typeof Object.setPrototypeOf)L=Object.setPrototypeOf;else{var M;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;M=ia.a;break a}catch(a){}M=!1}L=M?function(a,c){a.__proto__=c;if(a.__proto__!==c)throw new TypeError(a+" is not extensible");return a}:null}
var ja=L;function Q(){this.l=!1;this.i=null;this.h=void 0;this.g=1;this.s=this.m=0;this.j=null}function R(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}Q.prototype.o=function(a){this.h=a};function S(a,c){a.j={S:c,T:!0};a.g=a.m||a.s}Q.prototype.return=function(a){this.j={return:a};this.g=this.s};function T(a,c,b){a.g=b;return{value:c}}function ka(a){this.g=new Q;this.h=a}
function la(a,c){R(a.g);var b=a.g.i;if(b)return U(a,"return"in b?b["return"]:function(d){return{value:d,done:!0}},c,a.g.return);a.g.return(c);return V(a)}function U(a,c,b,d){try{var g=c.call(a.g.i,b);if(!(g instanceof Object))throw new TypeError("Iterator result "+g+" is not an object");if(!g.done)return a.g.l=!1,g;var h=g.value}catch(e){return a.g.i=null,S(a.g,e),V(a)}a.g.i=null;d.call(a.g,h);return V(a)}
function V(a){for(;a.g.g;)try{var c=a.h(a.g);if(c)return a.g.l=!1,{value:c.value,done:!1}}catch(b){a.g.h=void 0,S(a.g,b)}a.g.l=!1;if(a.g.j){c=a.g.j;a.g.j=null;if(c.T)throw c.S;return{value:c.return,done:!0}}return{value:void 0,done:!0}}
function ma(a){this.next=function(c){R(a.g);a.g.i?c=U(a,a.g.i.next,c,a.g.o):(a.g.o(c),c=V(a));return c};this.throw=function(c){R(a.g);a.g.i?c=U(a,a.g.i["throw"],c,a.g.o):(S(a.g,c),c=V(a));return c};this.return=function(c){return la(a,c)};this[Symbol.iterator]=function(){return this}}function W(a,c){c=new ma(new ka(c));ja&&a.prototype&&ja(c,a.prototype);return c}
var na="function"==typeof Object.assign?Object.assign:function(a,c){for(var b=1;b<arguments.length;b++){var d=arguments[b];if(d)for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(a[g]=d[g])}return a};G("Object.assign",function(a){return a||na});
G("Promise",function(a){function c(e){this.h=0;this.i=void 0;this.g=[];this.o=!1;var f=this.j();try{e(f.resolve,f.reject)}catch(k){f.reject(k)}}function b(){this.g=null}function d(e){return e instanceof c?e:new c(function(f){f(e)})}if(a)return a;b.prototype.h=function(e){if(null==this.g){this.g=[];var f=this;this.i(function(){f.l()})}this.g.push(e)};var g=E.setTimeout;b.prototype.i=function(e){g(e,0)};b.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var f=0;f<e.length;++f){var k=
e[f];e[f]=null;try{k()}catch(m){this.j(m)}}}this.g=null};b.prototype.j=function(e){this.i(function(){throw e;})};c.prototype.j=function(){function e(m){return function(p){k||(k=!0,m.call(f,p))}}var f=this,k=!1;return{resolve:e(this.B),reject:e(this.l)}};c.prototype.B=function(e){if(e===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof c)this.D(e);else{a:switch(typeof e){case "object":var f=null!=e;break a;case "function":f=!0;break a;default:f=!1}f?this.v(e):this.m(e)}};
c.prototype.v=function(e){var f=void 0;try{f=e.then}catch(k){this.l(k);return}"function"==typeof f?this.F(f,e):this.m(e)};c.prototype.l=function(e){this.s(2,e)};c.prototype.m=function(e){this.s(1,e)};c.prototype.s=function(e,f){if(0!=this.h)throw Error("Cannot settle("+e+", "+f+"): Promise already settled in state"+this.h);this.h=e;this.i=f;2===this.h&&this.C();this.u()};c.prototype.C=function(){var e=this;g(function(){if(e.A()){var f=E.console;"undefined"!==typeof f&&f.error(e.i)}},1)};c.prototype.A=
function(){if(this.o)return!1;var e=E.CustomEvent,f=E.Event,k=E.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof f?e=new f("unhandledrejection",{cancelable:!0}):(e=E.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return k(e)};c.prototype.u=function(){if(null!=this.g){for(var e=0;e<this.g.length;++e)h.h(this.g[e]);this.g=null}};var h=new b;c.prototype.D=
function(e){var f=this.j();e.I(f.resolve,f.reject)};c.prototype.F=function(e,f){var k=this.j();try{e.call(f,k.resolve,k.reject)}catch(m){k.reject(m)}};c.prototype.then=function(e,f){function k(u,n){return"function"==typeof u?function(q){try{m(u(q))}catch(l){p(l)}}:n}var m,p,w=new c(function(u,n){m=u;p=n});this.I(k(e,m),k(f,p));return w};c.prototype.catch=function(e){return this.then(void 0,e)};c.prototype.I=function(e,f){function k(){switch(m.h){case 1:e(m.i);break;case 2:f(m.i);break;default:throw Error("Unexpected state: "+
m.h);}}var m=this;null==this.g?h.h(k):this.g.push(k);this.o=!0};c.resolve=d;c.reject=function(e){return new c(function(f,k){k(e)})};c.race=function(e){return new c(function(f,k){for(var m=I(e),p=m.next();!p.done;p=m.next())d(p.value).I(f,k)})};c.all=function(e){var f=I(e),k=f.next();return k.done?d([]):new c(function(m,p){function w(q){return function(l){u[q]=l;n--;0==n&&m(u)}}var u=[],n=0;do u.push(void 0),n++,d(k.value).I(w(u.length-1),p),k=f.next();while(!k.done)})};return c});
G("Object.is",function(a){return a?a:function(c,b){return c===b?0!==c||1/c===1/b:c!==c&&b!==b}});G("Array.prototype.includes",function(a){return a?a:function(c,b){var d=this;d instanceof String&&(d=String(d));var g=d.length;b=b||0;for(0>b&&(b=Math.max(b+g,0));b<g;b++){var h=d[b];if(h===c||Object.is(h,c))return!0}return!1}});
G("String.prototype.includes",function(a){return a?a:function(c,b){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(c,b||0)}});
function oa(a,c){a instanceof String&&(a+="");var b=0,d=!1,g={next:function(){if(!d&&b<a.length){var h=b++;return{value:c(h,a[h]),done:!1}}d=!0;return{done:!0,value:void 0}}};g[Symbol.iterator]=function(){return g};return g}G("Array.prototype.keys",function(a){return a?a:function(){return oa(this,function(c){return c})}});var ta=this||self;
function X(a,c){a=a.split(".");var b=ta;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===c?b[d]&&b[d]!==Object.prototype[d]?b=b[d]:b=b[d]={}:b[d]=c};function Y(a,c){var b=void 0;return new (b||(b=Promise))(function(d,g){function h(k){try{f(c.next(k))}catch(m){g(m)}}function e(k){try{f(c["throw"](k))}catch(m){g(m)}}function f(k){k.done?d(k.value):(new b(function(m){m(k.value)})).then(h,e)}f((c=c.apply(a,void 0)).next())})};function ua(a,c,b){b=a.createShader(0===b?a.VERTEX_SHADER:a.FRAGMENT_SHADER);a.shaderSource(b,c);a.compileShader(b);if(!a.getShaderParameter(b,a.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+a.getShaderInfoLog(b));return b};function va(a,c,b){this.h=a;this.g=c;this.u=b;this.l=0}function wa(a){if("function"===typeof a.g.canvas.transferToImageBitmap)return Promise.resolve(a.g.canvas.transferToImageBitmap());if(a.u)return Promise.resolve(a.g.canvas);if("function"===typeof createImageBitmap)return createImageBitmap(a.g.canvas);void 0===a.j&&(a.j=document.createElement("img"));return new Promise(function(c){a.j.onload=function(){requestAnimationFrame(function(){c(a.j)})};a.j.src=a.g.canvas.toDataURL()})}
function xa(a,c){var b=a.g;if(void 0===a.m){var d=ua(b,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),g=ua(b,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),h=b.createProgram();b.attachShader(h,d);b.attachShader(h,g);b.linkProgram(h);if(!b.getProgramParameter(h,b.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+
b.getProgramInfoLog(h));d=a.m=h;b.useProgram(d);g=b.getUniformLocation(d,"sampler0");a.i={H:b.getAttribLocation(d,"aVertex"),G:b.getAttribLocation(d,"aTex"),W:g};a.s=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,a.s);b.enableVertexAttribArray(a.i.H);b.vertexAttribPointer(a.i.H,2,b.FLOAT,!1,0,0);b.bufferData(b.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),b.STATIC_DRAW);b.bindBuffer(b.ARRAY_BUFFER,null);a.o=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,a.o);b.enableVertexAttribArray(a.i.G);b.vertexAttribPointer(a.i.G,
2,b.FLOAT,!1,0,0);b.bufferData(b.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),b.STATIC_DRAW);b.bindBuffer(b.ARRAY_BUFFER,null);b.uniform1i(g,0)}d=a.i;b.useProgram(a.m);b.canvas.width=c.width;b.canvas.height=c.height;b.viewport(0,0,c.width,c.height);b.activeTexture(b.TEXTURE0);a.h.bindTexture2d(c.glName);b.enableVertexAttribArray(d.H);b.bindBuffer(b.ARRAY_BUFFER,a.s);b.vertexAttribPointer(d.H,2,b.FLOAT,!1,0,0);b.enableVertexAttribArray(d.G);b.bindBuffer(b.ARRAY_BUFFER,a.o);b.vertexAttribPointer(d.G,
2,b.FLOAT,!1,0,0);b.bindFramebuffer(b.DRAW_FRAMEBUFFER?b.DRAW_FRAMEBUFFER:b.FRAMEBUFFER,null);b.clearColor(0,0,0,0);b.clear(b.COLOR_BUFFER_BIT);b.colorMask(!0,!0,!0,!0);b.drawArrays(b.TRIANGLE_FAN,0,4);b.disableVertexAttribArray(d.H);b.disableVertexAttribArray(d.G);b.bindBuffer(b.ARRAY_BUFFER,null);a.h.bindTexture2d(0)}function ya(a){this.g=a};var za=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Aa(a,c){return c+a}function Ba(a,c){window[a]=c}function Ca(a){var c=document.createElement("script");c.setAttribute("src",a);c.setAttribute("crossorigin","anonymous");return new Promise(function(b){c.addEventListener("load",function(){b()},!1);c.addEventListener("error",function(){b()},!1);document.body.appendChild(c)})}
function Da(a){for(var c=[],b=a.size(),d=0;d<b;++d){var g=a.get(d);c.push({x:g.x,y:g.y,z:g.z,visibility:g.hasVisibility?g.visibility:void 0});g.delete()}return c}function Ea(a){for(var c=[],b=a.size(),d=0;d<b;++d){var g=a.get(d);c.push({index:g.index,score:g.score,label:g.hasLabel?g.label:void 0,displayName:g.hasDisplayName?g.displayName:void 0})}return c}
function Fa(){return Y(this,function c(){return W(c,function(b){switch(b.g){case 1:return b.m=2,T(b,WebAssembly.instantiate(za),4);case 4:b.g=3;b.m=0;break;case 2:return b.m=0,b.j=null,b.return(!1);case 3:return b.return(!0)}})})}
function Ga(a){this.g=a;this.listeners={};this.j={};this.D={};this.m={};this.s={};this.B=this.o=this.O=!0;this.F=Promise.resolve();this.N="";this.A={};this.locateFile=a&&a.locateFile||Aa;if("object"===typeof window)var c=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if("undefined"!==typeof location)c=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");
this.P=c;if(a.options){c=I(Object.keys(a.options));for(var b=c.next();!b.done;b=c.next()){b=b.value;var d=a.options[b].default;void 0!==d&&(this.j[b]="function"===typeof d?d():d)}}}A=Ga.prototype;A.close=function(){this.i&&this.i.delete();return Promise.resolve()};function Ha(a,c){return void 0===a.g.files?[]:"function"===typeof a.g.files?a.g.files(c):a.g.files}
function Ia(a){return Y(a,function b(){var d=this,g,h,e,f,k,m,p,w,u,n,q;return W(b,function(l){switch(l.g){case 1:g=d;if(!d.O)return l.return();h=Ha(d,d.j);return T(l,Fa(),2);case 2:e=l.h;if("object"===typeof window)return Ba("createMediapipeSolutionsWasm",{locateFile:d.locateFile}),Ba("createMediapipeSolutionsPackedAssets",{locateFile:d.locateFile}),m=h.filter(function(r){return void 0!==r.data}),p=h.filter(function(r){return void 0===r.data}),w=Promise.all(m.map(function(r){var t=Z(g,r.url);if(void 0!==
r.path){var v=r.path;t=t.then(function(y){g.overrideFile(v,y);return Promise.resolve(y)})}return t})),u=Promise.all(p.map(function(r){return void 0===r.simd||r.simd&&e||!r.simd&&!e?Ca(g.locateFile(r.url,g.P)):Promise.resolve()})).then(function(){return Y(g,function t(){var v,y,z=this;return W(t,function(B){if(1==B.g)return v=window.createMediapipeSolutionsWasm,y=window.createMediapipeSolutionsPackedAssets,T(B,v(y),2);z.h=B.h;B.g=0})})}),n=function(){return Y(g,function t(){var v=this;return W(t,function(y){v.g.graph&&
v.g.graph.url?y=T(y,Z(v,v.g.graph.url),0):(y.g=0,y=void 0);return y})})}(),T(l,Promise.all([u,w,n]),7);if("function"!==typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");f=h.filter(function(r){return void 0===r.simd||r.simd&&e||!r.simd&&!e}).map(function(r){return g.locateFile(r.url,g.P)});importScripts.apply(null,fa(f));return T(l,createMediapipeSolutionsWasm(Module),6);case 6:d.h=l.h;d.l=new OffscreenCanvas(1,1);d.h.canvas=d.l;k=d.h.GL.createContext(d.l,
{antialias:!1,alpha:!1,V:"undefined"!==typeof WebGL2RenderingContext?2:1});d.h.GL.makeContextCurrent(k);l.g=4;break;case 7:d.l=document.createElement("canvas");q=d.l.getContext("webgl2",{});if(!q&&(q=d.l.getContext("webgl",{}),!q))return alert("Failed to create WebGL canvas context when passing video frame."),l.return();d.C=q;d.h.canvas=d.l;d.h.createContext(d.l,!0,!0,{});case 4:d.i=new d.h.SolutionWasm,d.O=!1,l.g=0}})})}
function Ja(a){return Y(a,function b(){var d=this,g,h,e,f,k,m,p,w;return W(b,function(u){if(1==u.g){if(d.g.graph&&d.g.graph.url&&d.N===d.g.graph.url)return u.return();d.o=!0;if(!d.g.graph||!d.g.graph.url){u.g=2;return}d.N=d.g.graph.url;return T(u,Z(d,d.g.graph.url),3)}2!=u.g&&(g=u.h,d.i.loadGraph(g));h=I(Object.keys(d.A));for(e=h.next();!e.done;e=h.next())f=e.value,d.i.overrideFile(f,d.A[f]);d.A={};if(d.g.listeners)for(k=I(d.g.listeners),m=k.next();!m.done;m=k.next())p=m.value,Ka(d,p);w=d.j;d.j={};
d.setOptions(w);u.g=0})})}A.reset=function(){return Y(this,function c(){var b=this;return W(c,function(d){b.i&&(b.i.reset(),b.m={},b.s={});d.g=0})})};
A.setOptions=function(a,c){var b=this;if(c=c||this.g.options){for(var d=[],g=[],h={},e=I(Object.keys(a)),f=e.next();!f.done;h={J:h.J,K:h.K},f=e.next()){var k=f.value;k in this.j&&this.j[k]===a[k]||(this.j[k]=a[k],f=c[k],void 0!==f&&(f.onChange&&(h.J=f.onChange,h.K=a[k],d.push(function(m){return function(){return Y(b,function w(){var u,n=this;return W(w,function(q){if(1==q.g)return T(q,m.J(m.K),2);u=q.h;!0===u&&(n.o=!0);q.g=0})})}}(h))),f.graphOptionXref&&(k={valueNumber:1===f.type?a[k]:0,valueBoolean:0===
f.type?a[k]:!1,valueString:2===f.type?a[k]:""},f=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),f.graphOptionXref),k),g.push(f))))}if(0!==d.length||0!==g.length)this.o=!0,this.u=(void 0===this.u?[]:this.u).concat(g),this.v=(void 0===this.v?[]:this.v).concat(d)}};
function La(a){return Y(a,function b(){var d=this,g,h,e,f,k,m,p;return W(b,function(w){switch(w.g){case 1:if(!d.o)return w.return();if(!d.v){w.g=2;break}g=I(d.v);h=g.next();case 3:if(h.done){w.g=5;break}e=h.value;return T(w,e(),4);case 4:h=g.next();w.g=3;break;case 5:d.v=void 0;case 2:if(d.u){f=new d.h.GraphOptionChangeRequestList;k=I(d.u);for(m=k.next();!m.done;m=k.next())p=m.value,f.push_back(p);d.i.changeOptions(f);f.delete();d.u=void 0}d.o=!1;w.g=0}})})}
A.initialize=function(){return Y(this,function c(){var b=this;return W(c,function(d){return 1==d.g?T(d,Ia(b),2):3!=d.g?T(d,Ja(b),3):T(d,La(b),0)})})};function Z(a,c){return Y(a,function d(){var g=this,h,e;return W(d,function(f){if(c in g.D)return f.return(g.D[c]);h=g.locateFile(c,"");e=fetch(h).then(function(k){return k.arrayBuffer()});g.D[c]=e;return f.return(e)})})}A.overrideFile=function(a,c){this.i?this.i.overrideFile(a,c):this.A[a]=c};A.clearOverriddenFiles=function(){this.A={};this.i&&this.i.clearOverriddenFiles()};
A.send=function(a,c){return Y(this,function d(){var g=this,h,e,f,k,m,p,w,u,n;return W(d,function(q){if(1==q.g){if(!g.g.inputs)return q.return();h=1E3*(void 0===c||null===c?performance.now():c);return T(q,g.F,2)}if(3!=q.g)return T(q,g.initialize(),3);e=new g.h.PacketDataList;f=I(Object.keys(a));for(k=f.next();!k.done;k=f.next())if(m=k.value,p=g.g.inputs[m]){a:{var l=g;var r=a[m];switch(p.type){case "video":var t=l.m[p.stream];t||(t=new va(l.h,l.C,l.B),l.m[p.stream]=t);l=t;0===l.l&&(l.l=l.h.createTexture());
if("undefined"!==typeof HTMLVideoElement&&r instanceof HTMLVideoElement){var v=r.videoWidth;t=r.videoHeight}else"undefined"!==typeof HTMLImageElement&&r instanceof HTMLImageElement?(v=r.naturalWidth,t=r.naturalHeight):(v=r.width,t=r.height);t={glName:l.l,width:v,height:t};v=l.g;v.canvas.width=t.width;v.canvas.height=t.height;v.activeTexture(v.TEXTURE0);l.h.bindTexture2d(l.l);v.texImage2D(v.TEXTURE_2D,0,v.RGBA,v.RGBA,v.UNSIGNED_BYTE,r);l.h.bindTexture2d(0);l=t;break a;case "detections":t=l.m[p.stream];
t||(t=new ya(l.h),l.m[p.stream]=t);l=t;l.data||(l.data=new l.g.DetectionListData);l.data.reset(r.length);for(t=0;t<r.length;++t){v=r[t];l.data.setBoundingBox(t,v.R);if(v.M)for(var y=0;y<v.M.length;++y){var z=v.M[y],B=z.visibility?!0:!1;l.data.addNormalizedLandmark(t,Object.assign(Object.assign({},z),{hasVisibility:B,visibility:B?z.visibility:0}))}if(v.L)for(y=0;y<v.L.length;++y){z=v.L[y];B=z.index?!0:!1;var K=z.label?!0:!1,N=z.displayName?!0:!1;l.data.addClassification(t,{score:z.score,hasIndex:B,
index:B?z.index:-1,hasLabel:K,label:K?z.label:"",hasDisplayName:N,displayName:N?z.displayName:""})}}l=l.data;break a;default:l={}}}w=l;u=p.stream;switch(p.type){case "video":e.pushTexture2d(Object.assign(Object.assign({},w),{stream:u,timestamp:h}));break;case "detections":n=w;n.stream=u;n.timestamp=h;e.pushDetectionList(n);break;default:throw Error("Unknown input config type: '"+p.type+"'");}}g.i.send(e);e.delete();q.g=0})})};
function Ma(a,c,b){return Y(a,function g(){var h,e,f,k,m,p,w=this,u,n,q,l,r,t,v,y,z,B,K,N,pa,qa;return W(g,function(C){switch(C.g){case 1:if(!b)return C.return(c);h={};e=0;f=I(Object.keys(b));for(k=f.next();!k.done;k=f.next())m=k.value,p=b[m],"string"!==typeof p&&"texture"===p.type&&++e;1<e&&(w.B=!1);u=I(Object.keys(b));k=u.next();case 2:if(k.done){C.g=4;break}n=k.value;q=b[n];if("string"===typeof q)return pa=h,qa=n,T(C,Na(w,n,c[q]),17);l=c[q.stream];if(void 0===l){C.g=3;break}if("detection_list"===
q.type){var x=l.getRectList(),H=l.getLandmarksList(),F=l.getClassificationsList(),J=[];if(x)for(var O=0;O<x.size();++O){var da={R:x.get(O),M:Da(H.get(O)),L:Ea(F.get(O))};J.push(da)}h[n]=J;C.g=7;break}if("proto"===q.type){h[n]=l.isProto()?l.getProto():void 0;C.g=7;break}if("proto_list"===q.type){if(r=l.getProtoList()){x=Array(r.size());for(H=0;H<r.size();H++)x[H]=r.get(H);r.delete()}else x=void 0;h[n]=x;C.g=7;break}if("landmarks"===q.type){t=l.getLandmarks();h[n]=t?Da(t):void 0;C.g=7;break}if("landmarks_list"===
q.type){if(v=l.getLandmarksList())for(x=[],H=v.size(),F=0;F<H;++F)J=v.get(F),x.push(Da(J)),J.delete();else x=void 0;h[n]=x;C.g=7;break}if("rect_list"===q.type){if(y=l.getRectList())for(x=[],H=y.size(),F=0;F<H;++F)J=y.get(F),x.push(J);else x=void 0;h[n]=x;C.g=7;break}if("classifications_list"===q.type){if(z=l.getClassificationsList())for(x=[],H=z.size(),F=0;F<H;++F)J=z.get(F),x.push(Ea(J));else x=void 0;h[n]=x;C.g=7;break}if("object_detection_list"===q.type){if(B=l.getObjectDetectionList())for(x=[],
H=B.size(),F=0;F<H;++F){J=B.get(F);O=x;da=O.push;for(var Qa=J.id,ra=J.keypoints,sa=[],Ra=ra.size(),ea=0;ea<Ra;++ea){var P=ra.get(ea);sa.push({id:P.id,point3d:{x:P.point3d.x,y:P.point3d.y,z:P.point3d.z},point2d:{x:P.point2d.x,y:P.point2d.y,depth:P.point2d.depth}})}da.call(O,{id:Qa,keypoints:sa,visibility:J.visibility})}else x=void 0;h[n]=x;C.g=7;break}if("texture"!==q.type)throw Error("Unknown output config type: '"+q.type+"'");K=w.s[n];K||(K=new va(w.h,w.C,w.B),w.s[n]=K);x=K;H=l.getTexture2d();xa(x,
H);x=wa(x);return T(C,x,16);case 16:N=C.h,h[n]=N;case 7:q.transform&&h[n]&&(h[n]=q.transform(h[n]));C.g=3;break;case 17:pa[qa]=C.h;case 3:k=u.next();C.g=2;break;case 4:return C.return(h)}})})}
function Na(a,c,b){return Y(a,function g(){var h=this,e;return W(g,function(f){if(b.isProto())return f.return(b.getProto());if(b.isProtoList())return f.return(b.getProtoList());if(b.isNumber())return f.return(b.getNumber());if(b.isRect())return f.return(b.getRect());if(b.isLandmarks())return f.return(b.getLandmarks());if(b.isLandmarksList())return f.return(b.getLandmarksList());if(b.isClassificationsList())return f.return(b.getClassificationsList());if(b.isObjectDetectionList())return f.return(b.getObjectDetectionList());
if(b.isTexture2d()){e=h.s[c];e||(e=new va(h.h,h.C,h.B),h.s[c]=e);var k=f.return;var m=e;var p=b.getTexture2d();xa(m,p);m=wa(m);return k.call(f,m)}return f.return(void 0)})})}
function Ka(a,c){for(var b=c.name||"$",d=[].concat(fa(c.wants)),g=new a.h.StringList,h=I(c.wants),e=h.next();!e.done;e=h.next())g.push_back(e.value);h=a.h.PacketListener.implement({onResults:function(f){return Y(a,function m(){var p=this,w,u,n,q,l;return W(m,function(r){w=p;u={};for(n=0;n<c.wants.length;++n)u[d[n]]=f.get(n);q=Ma(p,u,c.outs);if(l=p.listeners[b])return r.return(p.F.then(function(){return q}).then(function(t){return Y(w,function y(){var z,B,K=this;return W(y,function(N){z=l(t);for(B=
0;B<c.wants.length;++B)u[d[B]].delete();if(z)return K.F=z,N.return(z);N.g=0})})}));r.g=0})})}});a.i.attachMultiListener(g,h);g.delete()}A.onResults=function(a,c){this.listeners[c||"$"]=a};X("Solution",Ga);X("OptionType",{BOOL:0,NUMBER:1,U:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Oa(a){void 0===a&&(a=0);switch(a){case 1:return"selfie_segmentation_landscape.tflite";default:return"selfie_segmentation.tflite"}}
function Pa(a){var c=this;a=a||{};this.g=new Ga({locateFile:a.locateFile,files:function(b){return[{simd:!0,url:"selfie_segmentation_solution_simd_wasm_bin.js"},{simd:!1,url:"selfie_segmentation_solution_wasm_bin.js"},{data:!0,url:Oa(b.modelSelection)}]},graph:{url:"selfie_segmentation.binarypb"},listeners:[{wants:["segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",
stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelSelection:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",
calculatorName:"ConstantSidePacketCalculatorModelSelection",fieldName:"int_value"},onChange:function(b){return Y(c,function g(){var h,e,f=this,k;return W(g,function(m){if(1==m.g)return h=Oa(b),e="third_party/mediapipe/modules/selfie_segmentation/"+h,T(m,Z(f.g,h),2);k=m.h;f.g.overrideFile(e,k);return m.return(!0)})})}}}})}A=Pa.prototype;A.close=function(){this.g.close();return Promise.resolve()};A.onResults=function(a){this.g.onResults(a)};
A.initialize=function(){return Y(this,function c(){var b=this;return W(c,function(d){return T(d,b.g.initialize(),0)})})};A.reset=function(){this.g.reset()};A.send=function(a){return Y(this,function b(){var d=this;return W(b,function(g){return T(g,d.g.send(a),0)})})};A.setOptions=function(a){this.g.setOptions(a)};X("SelfieSegmentation",Pa);}).call(this);