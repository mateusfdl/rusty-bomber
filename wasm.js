(()=>{"use strict";var e={125:(e,n,_)=>{function t(e,n,_,t){var r={};return r.web_malloc=_,r.web_free=t,r.web_table=n,Object.defineProperty(r,"HEAP8",{get:function(){return new Int8Array(e.buffer)}}),Object.defineProperty(r,"HEAP16",{get:function(){return new Int16Array(e.buffer)}}),Object.defineProperty(r,"HEAP32",{get:function(){return new Int32Array(e.buffer)}}),Object.defineProperty(r,"HEAPU8",{get:function(){return new Uint8Array(e.buffer)}}),Object.defineProperty(r,"HEAPU16",{get:function(){return new Uint16Array(e.buffer)}}),Object.defineProperty(r,"HEAPU32",{get:function(){return new Uint32Array(e.buffer)}}),Object.defineProperty(r,"HEAPF32",{get:function(){return new Float32Array(e.buffer)}}),Object.defineProperty(r,"HEAPF64",{get:function(){return new Float64Array(e.buffer)}}),r}_.d(n,{i:()=>t})},449:(e,n,_)=>{function t(e,n,_){var t=e.STDWEB_PRIVATE.acquire_js_reference(n);e.STDWEB_PRIVATE.serialize_array(_,t)}_.d(n,{q:()=>t})},34:(e,n,_)=>{function t(e,n){e.STDWEB_PRIVATE.decrement_refcount(n)}_.d(n,{W:()=>t})},307:(e,n,_)=>{function t(e,n){e.STDWEB_PRIVATE.from_js(n,Array.from(navigator.getGamepads()))}_.d(n,{a:()=>t})},647:(e,n,_)=>{function t(e,n){return e.STDWEB_PRIVATE.acquire_js_reference(n)instanceof Gamepad}_.d(n,{S:()=>t})},705:(e,n,_)=>{function t(e,n){return e.STDWEB_PRIVATE.acquire_js_reference(n)instanceof Array}_.d(n,{V:()=>t})},117:(e,n,_)=>{function t(e,n,_,t){console.error("Panic location:",e.STDWEB_PRIVATE.to_js_string(n,_)+":"+t)}_.d(n,{c:()=>t})},696:(e,n,_)=>{function t(e,n,_){console.error("Panic error message:",e.STDWEB_PRIVATE.to_js_string(n,_))}_.d(n,{I:()=>t})},483:(e,n,_)=>{function t(e){console.error("Encountered a panic!")}_.d(n,{k:()=>t})},362:(e,n,_)=>{function t(e){e.STDWEB_PRIVATE={},e.STDWEB_PRIVATE.to_utf8=function(n,_){for(var t=e.HEAPU8,r=0;r<n.length;++r){var c=n.charCodeAt(r);c>=55296&&c<=57343&&(c=65536+((1023&c)<<10)|1023&n.charCodeAt(++r)),c<=127?t[_++]=c:c<=2047?(t[_++]=192|c>>6,t[_++]=128|63&c):c<=65535?(t[_++]=224|c>>12,t[_++]=128|c>>6&63,t[_++]=128|63&c):c<=2097151?(t[_++]=240|c>>18,t[_++]=128|c>>12&63,t[_++]=128|c>>6&63,t[_++]=128|63&c):c<=67108863?(t[_++]=248|c>>24,t[_++]=128|c>>18&63,t[_++]=128|c>>12&63,t[_++]=128|c>>6&63,t[_++]=128|63&c):(t[_++]=252|c>>30,t[_++]=128|c>>24&63,t[_++]=128|c>>18&63,t[_++]=128|c>>12&63,t[_++]=128|c>>6&63,t[_++]=128|63&c)}},e.STDWEB_PRIVATE.noop=function(){},e.STDWEB_PRIVATE.to_js=function(n){var _=e.HEAPU8[n+12];if(0!==_){if(1===_)return null;if(2===_)return e.HEAP32[n/4];if(3===_)return e.HEAPF64[n/8];if(4===_){var t=e.HEAPU32[n/4],r=e.HEAPU32[(n+4)/4];return e.STDWEB_PRIVATE.to_js_string(t,r)}if(5===_)return!1;if(6===_)return!0;if(7===_){t=e.STDWEB_PRIVATE.arena+e.HEAPU32[n/4],r=e.HEAPU32[(n+4)/4];for(var c=[],o=0;o<r;++o)c.push(e.STDWEB_PRIVATE.to_js(t+16*o));return c}if(8===_){var a=e.STDWEB_PRIVATE.arena,f=a+e.HEAPU32[n/4],u=(r=e.HEAPU32[(n+4)/4],a+e.HEAPU32[(n+8)/4]);for(c={},o=0;o<r;++o){var i=e.HEAPU32[(u+8*o)/4],b=e.HEAPU32[(u+4+8*o)/4],d=e.STDWEB_PRIVATE.to_js_string(i,b),l=e.STDWEB_PRIVATE.to_js(f+16*o);c[d]=l}return c}if(9===_)return e.STDWEB_PRIVATE.acquire_js_reference(e.HEAP32[n/4]);if(10===_||12===_||13===_){var s=e.HEAPU32[n/4],g=(t=e.HEAPU32[(n+4)/4],e.HEAPU32[(n+8)/4]),w=0,E=!1;return(c=function(){if(0===t||!0===E)throw 10===_?new ReferenceError("Already dropped Rust function called!"):12===_?new ReferenceError("Already dropped FnMut function called!"):new ReferenceError("Already called or dropped FnOnce function called!");var n=t;if(13===_&&(c.drop=e.STDWEB_PRIVATE.noop,t=0),0!==w&&(12===_||13===_))throw new ReferenceError("FnMut function called multiple times concurrently!");var r=e.STDWEB_PRIVATE.alloc(16);e.STDWEB_PRIVATE.serialize_array(r,arguments);try{w+=1,e.STDWEB_PRIVATE.dyncall("vii",s,[n,r]);var o=e.STDWEB_PRIVATE.tmp;e.STDWEB_PRIVATE.tmp=null}finally{w-=1}return!0===E&&0===w&&c.drop(),o}).drop=function(){if(0===w){c.drop=e.STDWEB_PRIVATE.noop;var n=t;t=0,0!=n&&e.STDWEB_PRIVATE.dyncall("vi",g,[n])}else E=!0},c}if(14===_){t=e.HEAPU32[n/4],r=e.HEAPU32[(n+4)/4];var m=e.HEAPU32[(n+8)/4],A=t+r;switch(m){case 0:return e.HEAPU8.subarray(t,A);case 1:return e.HEAP8.subarray(t,A);case 2:return e.HEAPU16.subarray(t,A);case 3:return e.HEAP16.subarray(t,A);case 4:return e.HEAPU32.subarray(t,A);case 5:return e.HEAP32.subarray(t,A);case 6:return e.HEAPF32.subarray(t,A);case 7:return e.HEAPF64.subarray(t,A)}}else if(15===_)return e.STDWEB_PRIVATE.get_raw_value(e.HEAPU32[n/4])}},e.STDWEB_PRIVATE.serialize_object=function(n,_){var t=Object.keys(_),r=t.length,c=e.STDWEB_PRIVATE.alloc(8*r),o=e.STDWEB_PRIVATE.alloc(16*r);e.HEAPU8[n+12]=8,e.HEAPU32[n/4]=o,e.HEAPU32[(n+4)/4]=r,e.HEAPU32[(n+8)/4]=c;for(var a=0;a<r;++a){var f=t[a],u=c+8*a;e.STDWEB_PRIVATE.to_utf8_string(u,f),e.STDWEB_PRIVATE.from_js(o+16*a,_[f])}},e.STDWEB_PRIVATE.serialize_array=function(n,_){var t=_.length,r=e.STDWEB_PRIVATE.alloc(16*t);e.HEAPU8[n+12]=7,e.HEAPU32[n/4]=r,e.HEAPU32[(n+4)/4]=t;for(var c=0;c<t;++c)e.STDWEB_PRIVATE.from_js(r+16*c,_[c])};var n="function"==typeof TextEncoder?new TextEncoder("utf-8"):"object"==typeof util&&util&&"function"==typeof util.TextEncoder?new util.TextEncoder("utf-8"):null;e.STDWEB_PRIVATE.to_utf8_string=null!=n?function(_,t){var r=n.encode(t),c=r.length,o=0;c>0&&(o=e.STDWEB_PRIVATE.alloc(c),e.HEAPU8.set(r,o)),e.HEAPU32[_/4]=o,e.HEAPU32[(_+4)/4]=c}:function(n,_){var t=e.STDWEB_PRIVATE.utf8_len(_),r=0;t>0&&(r=e.STDWEB_PRIVATE.alloc(t),e.STDWEB_PRIVATE.to_utf8(_,r)),e.HEAPU32[n/4]=r,e.HEAPU32[(n+4)/4]=t},e.STDWEB_PRIVATE.from_js=function(n,_){var t=Object.prototype.toString.call(_);if("[object String]"===t)e.HEAPU8[n+12]=4,e.STDWEB_PRIVATE.to_utf8_string(n,_);else if("[object Number]"===t)_===(0|_)?(e.HEAPU8[n+12]=2,e.HEAP32[n/4]=_):(e.HEAPU8[n+12]=3,e.HEAPF64[n/8]=_);else if(null===_)e.HEAPU8[n+12]=1;else if(void 0===_)e.HEAPU8[n+12]=0;else if(!1===_)e.HEAPU8[n+12]=5;else if(!0===_)e.HEAPU8[n+12]=6;else if("[object Symbol]"===t){var r=e.STDWEB_PRIVATE.register_raw_value(_);e.HEAPU8[n+12]=15,e.HEAP32[n/4]=r}else{var c=e.STDWEB_PRIVATE.acquire_rust_reference(_);e.HEAPU8[n+12]=9,e.HEAP32[n/4]=c}};var _="function"==typeof TextDecoder?new TextDecoder("utf-8"):"object"==typeof util&&util&&"function"==typeof util.TextDecoder?new util.TextDecoder("utf-8"):null;e.STDWEB_PRIVATE.to_js_string=null!=_?function(n,t){return _.decode(e.HEAPU8.subarray(n,n+t))}:function(n,_){for(var t=e.HEAPU8,r=(0|(n|=0))+(0|(_|=0)),c="";n<r;){var o=t[n++];if(o<128)c+=String.fromCharCode(o);else{var a=31&o,f=0;n<r&&(f=t[n++]);var u=a<<6|63&f;if(o>=224){var i=0;n<r&&(i=t[n++]);var b=(63&f)<<6|63&i;if(u=a<<12|b,o>=240){var d=0;n<r&&(d=t[n++]),u=(7&a)<<18|b<<6|63&d,c+=String.fromCharCode(55232+(u>>10)),u=56320+(1023&u)}}c+=String.fromCharCode(u)}}return c},e.STDWEB_PRIVATE.id_to_ref_map={},e.STDWEB_PRIVATE.id_to_refcount_map={},e.STDWEB_PRIVATE.ref_to_id_map=new WeakMap,e.STDWEB_PRIVATE.ref_to_id_map_fallback=new Map,e.STDWEB_PRIVATE.last_refid=1,e.STDWEB_PRIVATE.id_to_raw_value_map={},e.STDWEB_PRIVATE.last_raw_value_id=1,e.STDWEB_PRIVATE.acquire_rust_reference=function(n){if(null==n)return 0;var _=e.STDWEB_PRIVATE.id_to_refcount_map,t=e.STDWEB_PRIVATE.id_to_ref_map,r=e.STDWEB_PRIVATE.ref_to_id_map,c=e.STDWEB_PRIVATE.ref_to_id_map_fallback,o=r.get(n);if(void 0===o&&(o=c.get(n)),void 0===o){o=e.STDWEB_PRIVATE.last_refid++;try{r.set(n,o)}catch(e){c.set(n,o)}}return o in t?_[o]++:(t[o]=n,_[o]=1),o},e.STDWEB_PRIVATE.acquire_js_reference=function(n){return e.STDWEB_PRIVATE.id_to_ref_map[n]},e.STDWEB_PRIVATE.increment_refcount=function(n){e.STDWEB_PRIVATE.id_to_refcount_map[n]++},e.STDWEB_PRIVATE.decrement_refcount=function(n){var _=e.STDWEB_PRIVATE.id_to_refcount_map;if(0==--_[n]){var t=e.STDWEB_PRIVATE.id_to_ref_map,r=e.STDWEB_PRIVATE.ref_to_id_map_fallback,c=t[n];delete t[n],delete _[n],r.delete(c)}},e.STDWEB_PRIVATE.register_raw_value=function(n){var _=e.STDWEB_PRIVATE.last_raw_value_id++;return e.STDWEB_PRIVATE.id_to_raw_value_map[_]=n,_},e.STDWEB_PRIVATE.unregister_raw_value=function(n){delete e.STDWEB_PRIVATE.id_to_raw_value_map[n]},e.STDWEB_PRIVATE.get_raw_value=function(n){return e.STDWEB_PRIVATE.id_to_raw_value_map[n]},e.STDWEB_PRIVATE.alloc=function(n){return e.web_malloc(n)},e.STDWEB_PRIVATE.dyncall=function(n,_,t){return e.web_table.get(_).apply(null,t)},e.STDWEB_PRIVATE.utf8_len=function(e){for(var n=0,_=0;_<e.length;++_){var t=e.charCodeAt(_);t>=55296&&t<=57343&&(t=65536+((1023&t)<<10)|1023&e.charCodeAt(++_)),t<=127?++n:n+=t<=2047?2:t<=65535?3:t<=2097151?4:t<=67108863?5:6}return n},e.STDWEB_PRIVATE.prepare_any_arg=function(n){var _=e.STDWEB_PRIVATE.alloc(16);return e.STDWEB_PRIVATE.from_js(_,n),_},e.STDWEB_PRIVATE.acquire_tmp=function(n){var _=e.STDWEB_PRIVATE.tmp;return e.STDWEB_PRIVATE.tmp=null,_}}_.d(n,{b:()=>t})},781:(e,n,_)=>{function t(e,n){e.STDWEB_PRIVATE.from_js(n,new Date)}_.d(n,{A:()=>t})},354:(e,n,_)=>{function t(e,n){return e.STDWEB_PRIVATE.acquire_js_reference(n)instanceof Date}_.d(n,{g:()=>t})},396:(e,n,_)=>{e.exports=(async()=>{var e=_(690),n=_(955);[e,n]=await Promise.all([e,n]),e.__wbindgen_start()})()},955:(e,n,_)=>{e.exports=(async()=>{_.d(n,{G6U:()=>X,nJ7:()=>N,ENX:()=>Q,Rr7:()=>z,XbV:()=>ee,Zmj:()=>ne,oHO:()=>_e,kUV:()=>te,ug$:()=>re,g6G:()=>ce,Qzg:()=>oe,Ob9:()=>ae,Tkq:()=>fe,Sm3:()=>ue,XSP:()=>ie,e9R:()=>be,k73:()=>de,PDM:()=>le,HT5:()=>se,O3u:()=>ge,zFm:()=>we,ZcJ:()=>Ee,bVw:()=>me,XWi:()=>Ae,rMt:()=>pe,M19:()=>Te,fF9:()=>Pe,MK4:()=>ye,IzM:()=>ve,Rj_:()=>he,i6Z:()=>Se,pvY:()=>Re,jfG:()=>Be,VrP:()=>Ie,VOE:()=>We,KMS:()=>De,QED:()=>Ve,aMZ:()=>He,w7S:()=>xe,cEq:()=>Ue,N2g:()=>je,t8Z:()=>Fe,cq:()=>ke,yxJ:()=>Oe,pay:()=>Me,QOG:()=>Ce,HiO:()=>qe,rqi:()=>Le,L9s:()=>Ke,fno:()=>Je,h4u:()=>Ye,e7P:()=>Ze,NjW:()=>$e,xW3:()=>Ge,Nso:()=>Xe,W1A:()=>Ne,LT0:()=>Qe,mru:()=>ze,BGT:()=>en,sif:()=>nn,yFq:()=>_n,lYO:()=>tn,Ld6:()=>rn,e7$:()=>cn,RiB:()=>on,FhD:()=>an,LuL:()=>fn,Jv8:()=>un,U03:()=>bn,hky:()=>dn,TRW:()=>ln,MIU:()=>sn,JNt:()=>gn,AE0:()=>wn,YR6:()=>En,pxu:()=>mn,hxf:()=>An,SZ1:()=>pn,JPV:()=>Tn,IUK:()=>Pn,uh6:()=>yn,FEY:()=>vn,M$g:()=>hn,cot:()=>Sn,eAF:()=>Rn,boe:()=>Bn,jAk:()=>In,F0K:()=>Wn,u0o:()=>Dn,bgo:()=>Vn,sW1:()=>Hn,dSA:()=>xn,Fa0:()=>Un,Ym2:()=>jn,ZBF:()=>Fn,m_1:()=>kn,YgK:()=>On,coI:()=>Mn,ogE:()=>Cn,XMY:()=>qn,p9b:()=>Ln,y1k:()=>Kn,SL8:()=>Jn,$ms:()=>Yn,ZcF:()=>Zn,JLQ:()=>$n,mPW:()=>Gn,IO$:()=>Xn,W2I:()=>Nn,kAu:()=>Qn,$un:()=>zn,gyn:()=>e_,eII:()=>n_,dDb:()=>__,LQd:()=>t_,WTr:()=>r_,h9:()=>c_,Dze:()=>o_,kFF:()=>a_,jQK:()=>f_,w2E:()=>u_,zog:()=>i_,ktX:()=>b_,r00:()=>d_,Ncq:()=>l_,QI:()=>s_,vTc:()=>g_,O1u:()=>w_,t5h:()=>E_,aZ6:()=>m_,koV:()=>A_,PGu:()=>p_,PAs:()=>T_,XP4:()=>P_,yNB:()=>y_,Bsm:()=>v_,FQo:()=>h_,tEn:()=>S_,bdv:()=>R_,JG:()=>B_,GZC:()=>I_,_Hl:()=>W_,CpX:()=>D_,GJE:()=>V_,SZD:()=>H_,J1i:()=>x_,Bai:()=>U_,wQj:()=>j_,jVH:()=>F_,n9f:()=>k_,fYP:()=>O_,Or8:()=>M_,YD_:()=>C_,$dM:()=>q_,cJK:()=>L_,apE:()=>K_,mfs:()=>J_,xoM:()=>Y_,tQJ:()=>Z_,xMZ:()=>$_,UPp:()=>G_,U_U:()=>X_,kTZ:()=>N_,lF0:()=>Q_,aXv:()=>z_,sI4:()=>et,Jth:()=>nt,o3z:()=>_t,qGb:()=>tt,Aj7:()=>rt,fBP:()=>ct,v$3:()=>ot,wsK:()=>at,K1r:()=>ft,dhA:()=>ut,ZTo:()=>it,in4:()=>bt,q60:()=>dt,HTb:()=>lt,qeY:()=>st,eOK:()=>gt,lhC:()=>wt,pod:()=>Et,sYu:()=>mt,SV0:()=>At,Gj9:()=>pt,BhR:()=>Tt,skm:()=>Pt,Ev8:()=>yt,c$r:()=>vt,dJw:()=>ht,MrH:()=>St,NRT:()=>Rt,x9s:()=>Bt});var t=_(125),r=_(449),c=_(34),o=_(307),a=_(647),f=_(705),u=_(117),i=_(696),b=_(483),d=_(362),l=_(781),s=_(354),g=_(690);e=_.hmd(e),g=await Promise.resolve(g);const w=new Array(32).fill(void 0);function E(e){return w[e]}w.push(void 0,null,!0,!1);let m=w.length;function A(e){const n=E(e);return function(e){e<36||(w[e]=m,m=e)}(e),n}function p(e){m===w.length&&w.push(w.length+1);const n=m;return m=w[n],w[n]=e,n}function T(e){return null==e}let P=null,y=null;function v(){return null!==y&&y.buffer===g.memory.buffer||(y=new Int32Array(g.memory.buffer)),y}let h=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});h.decode();let S=null;function R(){return null!==S&&S.buffer===g.memory.buffer||(S=new Uint8Array(g.memory.buffer)),S}function B(e,n){return h.decode(R().subarray(e,e+n))}function I(e){const n=typeof e;if("number"==n||"boolean"==n||null==e)return`${e}`;if("string"==n)return`"${e}"`;if("symbol"==n){const n=e.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==n){const n=e.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(e)){const n=e.length;let _="[";n>0&&(_+=I(e[0]));for(let t=1;t<n;t++)_+=", "+I(e[t]);return _+="]",_}const _=/\[object ([^\]]+)\]/.exec(toString.call(e));let t;if(!(_.length>1))return toString.call(e);if(t=_[1],"Object"==t)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:t}let W=0,D=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const V="function"==typeof D.encodeInto?function(e,n){return D.encodeInto(e,n)}:function(e,n){const _=D.encode(e);return n.set(_),{read:e.length,written:_.length}};function H(e,n,_){if(void 0===_){const _=D.encode(e),t=n(_.length);return R().subarray(t,t+_.length).set(_),W=_.length,t}let t=e.length,r=n(t);const c=R();let o=0;for(;o<t;o++){const n=e.charCodeAt(o);if(n>127)break;c[r+o]=n}if(o!==t){0!==o&&(e=e.slice(o)),r=_(r,t,t=o+3*e.length);const n=R().subarray(r+o,r+t);o+=V(e,n).written}return W=o,r}function x(e,n,_,t){const r={a:e,b:n,cnt:1,dtor:_},c=(...e)=>{r.cnt++;const n=r.a;r.a=0;try{return t(n,r.b,...e)}finally{0==--r.cnt?g.__wbindgen_export_0.get(r.dtor)(n,r.b):r.a=n}};return c.original=r,c}function U(e,n){g._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc7ad94c66343ac4a(e,n)}function j(e,n,_){g._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4adc68ff16d39926(e,n,p(_))}function F(e,n,_){g._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1fa619a87e7cde70(e,n,p(_))}function k(e,n,_){g._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3befa7c965223f1b(e,n,p(_))}function O(e,n,_){g._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h7ddcae3a591615d5(e,n,p(_))}function M(e,n,_){g._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h67fad3802870c570(e,n,p(_))}function C(e,n,_){g._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h44c8023343226119(e,n,p(_))}function q(e,n,_){g._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h173ce9b035829c93(e,n,p(_))}function L(e,n,_){g._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd8cf5c51d3f7fea5(e,n,p(_))}function K(e,n,_,t){const r={a:e,b:n,cnt:1,dtor:_},c=(...e)=>{r.cnt++;try{return t(r.a,r.b,...e)}finally{0==--r.cnt&&(g.__wbindgen_export_0.get(r.dtor)(r.a,r.b),r.a=0)}};return c.original=r,c}function J(e,n,_){return g._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd2ab8374e60f8e68(e,n,_)}function Y(e,n,_,t){g._dyn_core__ops__function__Fn__A_B___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h36d8d359db62299f(e,n,_,t)}function Z(e,n,_){g._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h820141750c7f2558(e,n,p(_))}function $(e){return function(){try{return e.apply(this,arguments)}catch(e){g.__wbindgen_exn_store(p(e))}}}function G(e,n){return R().subarray(e/1,e/1+n)}const X=function(e){const n=A(e).original;return 1==n.cnt--&&(n.a=0,!0)},N=function(e,n,_){return p(E(e).fetch(B(n,_)))},Q=function(e){return E(e)instanceof Response},z=$((function(e){return p(E(e).arrayBuffer())})),ee=function(e){return p(new Uint8Array(E(e)))},ne=function(e){return E(e).length},_e=function(){return p(g.memory)},te=function(e){return p(E(e).buffer)},re=function(e){A(e)},ce=function(e,n,_){E(e).set(E(n),_>>>0)},oe=function(e,n,_,t){performance.measure(B(e,n),B(_,t))},ae=function(e,n){performance.mark(B(e,n))},fe=function(e,n){console.log(B(e,n))},ue=function(e,n,_,t,r,c,o,a){console.log(B(e,n),B(_,t),B(r,c),B(o,a))},ie=function(e,n){var _=E(e).createShader(n>>>0);return T(_)?0:p(_)},be=function(e,n,_,t){E(e).shaderSource(E(n),B(_,t))},de=function(e,n){E(e).compileShader(E(n))},le=function(e,n,_){return p(E(e).getShaderParameter(E(n),_>>>0))},se=function(e){const n=E(e);return"boolean"==typeof n?n?1:0:2},ge=function(e,n,_){var t=E(n).getShaderInfoLog(E(_)),r=T(t)?0:H(t,g.__wbindgen_malloc,g.__wbindgen_realloc),c=W;v()[e/4+1]=c,v()[e/4+0]=r},we=function(e){var n=E(e).createProgram();return T(n)?0:p(n)},Ee=function(e,n,_){E(e).attachShader(E(n),E(_))},me=function(e,n){E(e).linkProgram(E(n))},Ae=function(e,n,_){return p(E(e).getProgramParameter(E(n),_>>>0))},pe=function(e,n,_){var t=E(n).getProgramInfoLog(E(_)),r=T(t)?0:H(t,g.__wbindgen_malloc,g.__wbindgen_realloc),c=W;v()[e/4+1]=c,v()[e/4+0]=r},Te=function(e,n){const _=E(n);var t="number"==typeof _?_:void 0;(null!==P&&P.buffer===g.memory.buffer||(P=new Float64Array(g.memory.buffer)),P)[e/8+1]=T(t)?0:t,v()[e/4+0]=!T(t)},Pe=function(e,n,_){var t=E(e).getActiveAttrib(E(n),_>>>0);return T(t)?0:p(t)},ye=function(e,n){var _=H(E(n).name,g.__wbindgen_malloc,g.__wbindgen_realloc),t=W;v()[e/4+1]=t,v()[e/4+0]=_},ve=function(e){return E(e).type},he=function(e,n,_,t){var r=E(n).getActiveUniformBlockName(E(_),t>>>0),c=T(r)?0:H(r,g.__wbindgen_malloc,g.__wbindgen_realloc),o=W;v()[e/4+1]=o,v()[e/4+0]=c},Se=function(e,n,_){var t=E(e).getActiveUniform(E(n),_>>>0);return T(t)?0:p(t)},Re=function(e,n,_,t,r){E(e).viewport(n,_,t,r)},Be=function(e){var n=E(e).createTexture();return T(n)?0:p(n)},Ie=function(e){var n=E(e).createBuffer();return T(n)?0:p(n)},We=function(e,n,_){E(e).bindBuffer(n>>>0,E(_))},De=function(e,n,_,t){E(e).bufferData(n>>>0,_,t>>>0)},Ve=function(e,n,_,t,r,c,o){E(e).bufferSubData(n>>>0,_,G(t,r),c>>>0,o>>>0)},He=function(e,n,_,t,r){E(e).bufferData(n>>>0,G(_,t),r>>>0)},xe=function(e,n){E(e).deleteBuffer(E(n))},Ue=function(e,n){E(e).deleteTexture(E(n))},je=function(e,n){E(e).useProgram(E(n))},Fe=function(e,n,_,t){return E(e).getUniformBlockIndex(E(n),B(_,t))},ke=function(e,n,_,t){E(e).uniformBlockBinding(E(n),_>>>0,t>>>0)},Oe=function(e,n,_,t){var r=E(e).getUniformLocation(E(n),B(_,t));return T(r)?0:p(r)},Me=function(e,n,_){E(e).uniform1i(E(n),_)},Ce=function(e,n,_,t){return E(e).getAttribLocation(E(n),B(_,t))},qe=function(e){var n=E(e).createVertexArray();return T(n)?0:p(n)},Le=function(e){return E(e).width},Ke=function(e){return E(e).height},Je=function(){return p(new Object)},Ye=function(e,n){return p(B(e,n))},Ze=$((function(e,n,_,t){var r=E(e).getContext(B(n,_),E(t));return T(r)?0:p(r)})),$e=function(e){return E(e)instanceof WebGL2RenderingContext},Ge=function(e,n){E(e).enable(n>>>0)},Xe=function(e,n,_,t,r,c){E(e).copyBufferSubData(n>>>0,_>>>0,t,r,c)},Ne=function(e,n,_){E(e).bindTexture(n>>>0,E(_))},Qe=$((function(e,n,_,t,r,c,o,a,f,u){E(e).texImage2D(n>>>0,_,t,r,c,o,a>>>0,f>>>0,u)})),ze=function(e,n){E(e).generateMipmap(n>>>0)},en=function(e,n,_,t){E(e).texParameteri(n>>>0,_>>>0,t)},nn=function(e,n,_,t,r){E(e).clearColor(n,_,t,r)},_n=function(e,n){E(e).clear(n>>>0)},tn=function(e,n){E(e).bindVertexArray(E(n))},rn=function(e,n){E(e).enableVertexAttribArray(n>>>0)},cn=function(e,n,_,t,r,c,o){E(e).vertexAttribPointer(n>>>0,_,t>>>0,0!==r,c,o)},on=function(e){return E(e)instanceof Int32Array},an=function(e,n){return E(e)[n>>>0]},fn=function(e,n,_,t,r){E(e).scissor(n,_,t,r)},un=function(e,n,_,t,r,c){E(e).drawElementsInstanced(n>>>0,_,t>>>0,r,c)},bn=function(e,n,_,t){E(e).drawArrays(n>>>0,_,t)},dn=function(e,n,_,t,r,c){E(e).bindBufferRange(n>>>0,_>>>0,E(t),r,c)},ln=function(e,n){E(e).activeTexture(n>>>0)},sn=function(e,n){E(e).cullFace(n>>>0)},gn=function(e,n){E(e).disable(n>>>0)},wn=function(e,n){E(e).depthFunc(n>>>0)},En=function(e,n,_,t,r){E(e).blendFuncSeparate(n>>>0,_>>>0,t>>>0,r>>>0)},mn=function(e,n){E(e).blendEquation(n>>>0)},An=function(e){return E(e).matches},pn=function(e){E(e).stopPropagation()},Tn=function(e){return E(e).cancelBubble},Pn=function(e){E(e).preventDefault()},yn=function(e){return E(e).deltaX},vn=function(e){return E(e).deltaY},hn=function(e){return E(e).deltaMode},Sn=function(e,n){var _=H(E(n).key,g.__wbindgen_malloc,g.__wbindgen_realloc),t=W;v()[e/4+1]=t,v()[e/4+0]=_},Rn=function(e){return E(e).ctrlKey},Bn=function(e){return E(e).altKey},In=function(e,n,_){return E(e).getModifierState(B(n,_))},Wn=function(e){return E(e).keyCode},Dn=function(e){return E(e).charCode},Vn=$((function(e){return p(E(e).innerWidth)})),Hn=$((function(e){return p(E(e).innerHeight)})),xn=function(e){return E(e).pointerId},Un=function(e){return E(e).offsetX},jn=function(e){return E(e).offsetY},Fn=$((function(e,n){E(e).setPointerCapture(n)})),kn=function(e){return p(E(e))},On=function(e){var n=E(e).target;return T(n)?0:p(n)},Mn=function(e,n){return Object.is(E(e),E(n))},Cn=function(e){return E(e).buttons},qn=function(e){return p(E(e).getBoundingClientRect())},Ln=function(e){return E(e).clientX},Kn=function(e){return E(e).x},Jn=function(e){return E(e).clientY},Yn=function(e){return E(e).y},Zn=function(e,n){console.error(E(e),E(n))},$n=$((function(e,n,_,t,r){E(e).addEventListener(B(n,_),E(t),E(r))})),Gn=function(e){var n=E(e).document;return T(n)?0:p(n)},Xn=function(e){E(e).exitFullscreen()},Nn=$((function(e,n){return E(e).requestAnimationFrame(E(n))})),Qn=$((function(e,n,_){return E(e).setTimeout(E(n),_)})),zn=$((function(e,n,_){var t=E(e).querySelector(B(n,_));return T(t)?0:p(t)})),e_=function(e){return E(e)instanceof HTMLCanvasElement},n_=$((function(e,n,_){return p(E(e).createElement(B(n,_)))})),__=function(e,n,_){var t=E(e)[B(n,_)];return T(t)?0:p(t)},t_=function(e){var n=E(e).body;return T(n)?0:p(n)},r_=$((function(e,n){return p(E(e).appendChild(E(n)))})),c_=function(){return p(new Error)},o_=function(e,n){var _=H(E(n).stack,g.__wbindgen_malloc,g.__wbindgen_realloc),t=W;v()[e/4+1]=t,v()[e/4+0]=_},a_=function(e,n){try{console.error(B(e,n))}finally{g.__wbindgen_free(e,n)}},f_=function(){return p(e)},u_=function(e,n){(0,l.A)(A(e),n)},i_=function(e,n){(0,c.W)(A(e),n)},b_=function(e,n){return(0,s.g)(A(e),n)},d_=function(e,n){(0,o.a)(A(e),n)},l_=function(e,n){return(0,f.V)(A(e),n)},s_=function(e,n,_){(0,r.q)(A(e),n,_)},g_=function(e,n){return(0,a.S)(A(e),n)},w_=$((function(e,n){return p(Reflect.get(E(e),E(n)))})),E_=function(e){return E(e).now()},m_=$((function(){return p(self.self)})),A_=$((function(){return p(window.window)})),p_=$((function(){return p(globalThis.globalThis)})),T_=$((function(){return p(_.g.global)})),P_=function(e){return void 0===E(e)},y_=function(e,n){return p(new Function(B(e,n)))},v_=$((function(e,n){return p(E(e).call(E(n)))})),h_=$((function(e,n,_){return Reflect.set(E(e),E(n),E(_))})),S_=$((function(){return p(self.self)})),R_=function(e,n,_){return p(E(e).require(B(n,_)))},B_=function(e){return p(E(e).crypto)},I_=function(e){return p(E(e).msCrypto)},W_=function(e){return p(E(e).getRandomValues)},D_=function(e,n,_){E(e).getRandomValues(G(n,_))},V_=function(e,n,_){E(e).randomFillSync(G(n,_))},H_=function(){return p(g.__wbindgen_export_0)},x_=function(e,n,_,r){return p((0,t.i)(A(e),A(n),E(_),E(r)))},U_=function(e){(0,d.b)(A(e))},j_=function(e){(0,b.k)(A(e))},F_=function(e,n,_){(0,i.I)(A(e),n,_)},k_=function(e,n,_,t){(0,u.c)(A(e),n,_,t)},O_=function(e,n){var _=H(I(E(n)),g.__wbindgen_malloc,g.__wbindgen_realloc),t=W;v()[e/4+1]=t,v()[e/4+0]=_},M_=function(e,n){throw new Error(B(e,n))},C_=function(e,n,_){return p(E(e).then(E(n),E(_)))},q_=function(e,n){return p(E(e).then(E(n)))},L_=function(e){return p(Promise.resolve(E(e)))},K_=$((function(e,n,_,t){return p(E(e).getActiveUniformBlockParameter(E(n),_>>>0,t>>>0))})),J_=$((function(e,n){return p(E(e).getParameter(n>>>0))})),Y_=function(e){return E(e)instanceof Window},Z_=$((function(e,n,_,t){E(e).addEventListener(B(n,_),E(t))})),$_=$((function(e,n,_,t){E(e).removeEventListener(B(n,_),E(t))})),G_=$((function(e){E(e).requestFullscreen()})),X_=$((function(e,n,_,t,r){E(e).setAttribute(B(n,_),B(t,r))})),N_=function(e){return E(e).devicePixelRatio},Q_=function(e,n){E(e).width=n>>>0},z_=function(e,n){E(e).height=n>>>0},et=function(e){return p(E(e).style)},nt=$((function(e,n,_,t,r){E(e).setProperty(B(n,_),B(t,r))})),_t=function(e){var n=E(e).fullscreenElement;return T(n)?0:p(n)},tt=$((function(e,n,_){var t=E(e).matchMedia(B(n,_));return T(t)?0:p(t)})),rt=$((function(e,n){E(e).addListener(E(n))})),ct=$((function(e,n){E(e).removeListener(E(n))})),ot=function(e){return E(e).matches},at=function(e,n){E(e).clearTimeout(n)},ft=$((function(e,n){E(e).cancelAnimationFrame(n)})),ut=function(e){return E(e).button},it=function(e){return E(e).shiftKey},bt=function(e){return E(e).ctrlKey},dt=function(e){return E(e).altKey},lt=function(e){return E(e).metaKey},st=function(e,n){var _=H(E(n).code,g.__wbindgen_malloc,g.__wbindgen_realloc),t=W;v()[e/4+1]=t,v()[e/4+0]=_},gt=function(e){return E(e).shiftKey},wt=function(e){return E(e).metaKey},Et=function(e,n,_){return p(x(e,n,43,U))},mt=function(e,n,_){return p(x(e,n,497,j))},At=function(e,n,_){return p(x(e,n,504,F))},pt=function(e,n,_){return p(x(e,n,501,k))},Tt=function(e,n,_){return p(x(e,n,508,O))},Pt=function(e,n,_){return p(x(e,n,512,M))},yt=function(e,n,_){return p(x(e,n,516,C))},vt=function(e,n,_){return p(x(e,n,520,q))},ht=function(e,n,_){return p(x(e,n,524,L))},St=function(e,n,_){return p(K(e,n,650,J))},Rt=function(e,n,_){return p(K(e,n,654,Y))},Bt=function(e,n,_){return p(x(e,n,665,Z))};return n})()},690:(e,n,_)=>{var t=_(955);e.exports=Promise.resolve(t).then((t=>_.v(n,e.id,"886e779d510deaf596cd",{"./wasm_bg.js":{__wbindgen_cb_drop:t.G6U,__wbg_fetch_8fd2e4322bb8dc59:t.nJ7,__wbg_instanceof_Response_328c03967a8e8902:t.ENX,__wbg_arrayBuffer_dc33ab7b8cdf0d63:t.Rr7,__wbg_new_9b295d24cf1d706f:t.XbV,__wbg_length_2b13641a9d906653:t.Zmj,__wbindgen_memory:t.oHO,__wbg_buffer_49131c283a06686f:t.kUV,__wbindgen_object_drop_ref:t.ug$,__wbg_set_3bb960a9975f3cd2:t.g6G,__wbg_measure_0c2a5c5e55e16643:t.Qzg,__wbg_mark_e32edf3b52687c6a:t.Ob9,__wbg_log_75fc43480a5907a7:t.Tkq,__wbg_log_a73f6bdd88fae982:t.Sm3,__wbg_createShader_bc89b940e81883dd:t.XSP,__wbg_shaderSource_1804c02eec34a9c2:t.e9R,__wbg_compileShader_18c92b61889a02b6:t.k73,__wbg_getShaderParameter_f942fc2044b16ba0:t.PDM,__wbindgen_boolean_get:t.HT5,__wbg_getShaderInfoLog_1071a8467544f43b:t.O3u,__wbg_createProgram_8d6f13ab051f686a:t.zFm,__wbg_attachShader_1924aa4a49a31418:t.ZcJ,__wbg_linkProgram_a5fd2d3a29f244c0:t.bVw,__wbg_getProgramParameter_d2854e9210e85494:t.XWi,__wbg_getProgramInfoLog_221be6701c636176:t.rMt,__wbindgen_number_get:t.M19,__wbg_getActiveAttrib_5d4589560031c141:t.fF9,__wbg_name_27b4012d3621bcc1:t.MK4,__wbg_type_43500effee613c7d:t.IzM,__wbg_getActiveUniformBlockName_9307faa56eb4763e:t.Rj_,__wbg_getActiveUniform_f736b9cae4dcb0b0:t.i6Z,__wbg_viewport_30b14839e31d0b61:t.pvY,__wbg_createTexture_e172faa9d6a303c1:t.jfG,__wbg_createBuffer_7fadf474857a2122:t.VrP,__wbg_bindBuffer_6a7df3ea760a2c83:t.VOE,__wbg_bufferData_12efaaa2e1cd74e4:t.KMS,__wbg_bufferSubData_8f079a5244d6c9d3:t.QED,__wbg_bufferData_a49730b56e5517bc:t.aMZ,__wbg_deleteBuffer_e06fcb6201291d2e:t.w7S,__wbg_deleteTexture_71c09d0186504319:t.cEq,__wbg_useProgram_9523fdac78894a60:t.N2g,__wbg_getUniformBlockIndex_ffda6282b14d7087:t.t8Z,__wbg_uniformBlockBinding_762aa6c06bda445f:t.cq,__wbg_getUniformLocation_d6e4f5bee8a84579:t.yxJ,__wbg_uniform1i_a34df477d48c37e2:t.pay,__wbg_getAttribLocation_67060fc7496f8cf6:t.QOG,__wbg_createVertexArray_fd08eb7c8f8e86a3:t.HiO,__wbg_width_a22f9855caa54b53:t.rqi,__wbg_height_9a404a6b3c61c7ef:t.L9s,__wbg_new_3e06d4f36713e4cb:t.fno,__wbindgen_string_new:t.h4u,__wbg_getContext_e7747f5b022c18e9:t.e7P,__wbg_instanceof_WebGl2RenderingContext_836e46859b2055b5:t.NjW,__wbg_enable_28a715ea384ce803:t.xW3,__wbg_copyBufferSubData_dffbb05a383b306f:t.Nso,__wbg_bindTexture_a03a7320443c8a4d:t.W1A,__wbg_texImage2D_6e9c8af5cdb39ad6:t.LT0,__wbg_generateMipmap_e4fa2d997c6d5f54:t.mru,__wbg_texParameteri_f3be7a9c7fc03dac:t.BGT,__wbg_clearColor_5941bfbf220e0165:t.sif,__wbg_clear_256f95c85e2d5b47:t.yFq,__wbg_bindVertexArray_8bb02f8645a29e05:t.lYO,__wbg_enableVertexAttribArray_fafa57fbcd454495:t.Ld6,__wbg_vertexAttribPointer_88010123ef756633:t.e7$,__wbg_instanceof_Int32Array_9180e5b90ab36f2b:t.RiB,__wbg_getindex_e8f2294046c64658:t.FhD,__wbg_scissor_9d616e9402e84ad4:t.LuL,__wbg_drawElementsInstanced_8d8af84227d0e1e7:t.Jv8,__wbg_drawArrays_3a2dad7dfe033972:t.U03,__wbg_bindBufferRange_3dfb690311ada5c0:t.hky,__wbg_activeTexture_9d96cecdacbe1a7d:t.TRW,__wbg_cullFace_82d5cfe3fcb99968:t.MIU,__wbg_disable_edb7c38f0be19a38:t.JNt,__wbg_depthFunc_b6ca07790535145e:t.AE0,__wbg_blendFuncSeparate_202782033cc0fb52:t.YR6,__wbg_blendEquation_b63f57b532a75180:t.pxu,__wbg_matches_9d45aa12636791b2:t.hxf,__wbg_stopPropagation_a47dd3b6ffe6b400:t.SZ1,__wbg_cancelBubble_ba020b9735aa529e:t.JPV,__wbg_preventDefault_93d06688748bfc14:t.IUK,__wbg_deltaX_ee242e8414135d41:t.uh6,__wbg_deltaY_35bf8632b9f25820:t.FEY,__wbg_deltaMode_1fd222964cdbb5af:t.M$g,__wbg_key_590d4d2a765d1b58:t.cot,__wbg_ctrlKey_f080ec163dcc2703:t.eAF,__wbg_altKey_1b58e09f218a0f4b:t.boe,__wbg_getModifierState_b6cb98c792c66e40:t.jAk,__wbg_keyCode_689d196ab65a93d7:t.F0K,__wbg_charCode_96fab95517f6f4f4:t.u0o,__wbg_innerWidth_60241abd729ed26f:t.bgo,__wbg_innerHeight_2f860a67225f1fbd:t.sW1,__wbg_pointerId_e7b9f2d5782623b5:t.dSA,__wbg_offsetX_204ab4b52fb9d668:t.Fa0,__wbg_offsetY_3d8860ff1285d58d:t.Ym2,__wbg_setPointerCapture_625b38d5daedd8cc:t.ZBF,__wbindgen_object_clone_ref:t.m_1,__wbg_target_02b2c4e71f788cc6:t.YgK,__wbg_is_333329c4a02916de:t.coI,__wbg_buttons_dff0494da85871b5:t.ogE,__wbg_getBoundingClientRect_c6d612c06726983e:t.XMY,__wbg_clientX_c1a2c3a6a07188a2:t.p9b,__wbg_x_b6f5535a24742b80:t.y1k,__wbg_clientY_090f8ba07f76875d:t.SL8,__wbg_y_580fdbaf51490604:t.$ms,__wbg_error_1305f569bc9e150d:t.ZcF,__wbg_addEventListener_f0baf69c9c7425c9:t.JLQ,__wbg_document_6cc8d0b87c0a99b9:t.mPW,__wbg_exitFullscreen_cbab2d88768d31dc:t.IO$,__wbg_requestAnimationFrame_89935c9d6ac25d2f:t.W2I,__wbg_setTimeout_eaf00c9296a6ab88:t.kAu,__wbg_querySelector_69fd5cd784bcc892:t.$un,__wbg_instanceof_HtmlCanvasElement_4f5b5ec6cd53ccf3:t.gyn,__wbg_createElement_5bdf88a5af9f17c5:t.eII,__wbg_get_a0f7f23dc0b8d32b:t.dDb,__wbg_body_8c888fe47d81765f:t.LQd,__wbg_appendChild_77215fd672b162c5:t.WTr,__wbg_new_59cb74e423758ede:t.h9,__wbg_stack_558ba5917b466edd:t.Dze,__wbg_error_4bb6c2a97407129a:t.kFF,__wbg_static_accessor_MODULE_abf5ae284bffdf45:t.jQK,__wbg_cargowebsnippet9a7eca60ef721cc6257c116658f2fcdd49070cd1_da979f7a7a4ebfc0:t.w2E,__wbg_cargowebsnippet80d6d56760c65e49b7be8b6b01c1ea861b046bf0_5a8953894b8affd6:t.zog,__wbg_cargowebsnippet7da4da5c1d6778b3677e0a3133c1c2613594e3f4_df29dfefa4c72388:t.ktX,__wbg_cargowebsnippet5c57e16ebd22655f976d87fae8039e282d7bab59_ad29da5ae967b2d2:t.r00,__wbg_cargowebsnippet5c3091ae7fa9c42123eec37f64de99a5808e7ef2_fc0bd84666f3fba5:t.Ncq,__wbg_cargowebsnippet8c32019649bb581b1b742eeedfc410e2bedd56a6_fe72322db9f33c63:t.QI,__wbg_cargowebsnippetecd8f83530fd9b57edbdc4822b4ea5b373e3a927_4b05cce5d27da5ee:t.vTc,__wbg_get_0e3f2950cdf758ae:t.O1u,__wbg_now_49847177a6d1d57e:t.t5h,__wbg_self_07b2f89e82ceb76d:t.aZ6,__wbg_window_ba85d88572adc0dc:t.koV,__wbg_globalThis_b9277fc37e201fe5:t.PGu,__wbg_global_e16303fe83e1d57f:t.PAs,__wbindgen_is_undefined:t.XP4,__wbg_newnoargs_f3b8a801d5d4b079:t.yNB,__wbg_call_8e95613cc6524977:t.Bsm,__wbg_set_304f2ec1a3ab3b79:t.FQo,__wbg_self_1c83eb4471d9eb9b:t.tEn,__wbg_require_5b2b5b594d809d9f:t.bdv,__wbg_crypto_c12f14e810edcaa2:t.JG,__wbg_msCrypto_679be765111ba775:t.GZC,__wbg_getRandomValues_05a60bf171bfc2be:t._Hl,__wbg_getRandomValues_3ac1b33c90b52596:t.CpX,__wbg_randomFillSync_6f956029658662ec:t.GJE,__wbindgen_function_table:t.SZD,__wbg_wasmbindgeninitialize_c1c4df6b494511ad:t.J1i,__wbg_cargowebsnippet1c30acb32a1994a07c75e804ae9855b43f191d63_6d353463ef525961:t.Bai,__wbg_cargowebsnippetdc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf_ce5c721cab10d020:t.wQj,__wbg_cargowebsnippet97495987af1720d8a9a923fa4683a7b683e3acd6_a438202dc16f44c0:t.jVH,__wbg_cargowebsnippet72fc447820458c720c68d0d8e078ede631edd723_ece3da0a4474dbeb:t.n9f,__wbindgen_debug_string:t.fYP,__wbindgen_throw:t.Or8,__wbg_then_3b7ac098cfda2fa5:t.YD_,__wbg_then_4a7a614abbbe6d81:t.$dM,__wbg_resolve_2529512c3bb73938:t.cJK,__wbg_getActiveUniformBlockParameter_6f20ffcfa5fe017f:t.apE,__wbg_getParameter_d680f5c6d50aba30:t.mfs,__wbg_instanceof_Window_adf3196bdc02b386:t.xoM,__wbg_addEventListener_9e7b0c3f65ebc0d7:t.tQJ,__wbg_removeEventListener_e118aefce350c930:t.xMZ,__wbg_requestFullscreen_7c9e8be46f97059a:t.UPp,__wbg_setAttribute_727bdb9763037624:t.U_U,__wbg_devicePixelRatio_599d41a9267fa1ca:t.kTZ,__wbg_setwidth_5f26a8ba9dbfa0d0:t.lF0,__wbg_setheight_70f62727aa9383c2:t.aXv,__wbg_style_9a41d46c005f7596:t.sI4,__wbg_setProperty_42eabadfcd7d6199:t.Jth,__wbg_fullscreenElement_449980d04fa17948:t.o3z,__wbg_matchMedia_443fe61cbc261085:t.qGb,__wbg_addListener_4c9824b666156827:t.Aj7,__wbg_removeListener_41c93a0631902b08:t.fBP,__wbg_matches_5d4345bfa1b9551b:t.v$3,__wbg_clearTimeout_dd3fc8919742efa0:t.wsK,__wbg_cancelAnimationFrame_7f3ba4191e67c86b:t.K1r,__wbg_button_13536d578538c005:t.dhA,__wbg_shiftKey_3ed819c2157c6170:t.ZTo,__wbg_ctrlKey_6ff5d3368ab5c157:t.in4,__wbg_altKey_70d44f4345c386d7:t.q60,__wbg_metaKey_bd8efb2d7ff639ad:t.HTb,__wbg_code_c3b28f37b4149e68:t.qeY,__wbg_shiftKey_d11f615955404512:t.eOK,__wbg_metaKey_9bc40bb1d5972ef2:t.lhC,__wbindgen_closure_wrapper867:t.pod,__wbindgen_closure_wrapper10408:t.sYu,__wbindgen_closure_wrapper10410:t.SV0,__wbindgen_closure_wrapper10444:t.Gj9,__wbindgen_closure_wrapper10455:t.BhR,__wbindgen_closure_wrapper10461:t.skm,__wbindgen_closure_wrapper10467:t.Ev8,__wbindgen_closure_wrapper10473:t.c$r,__wbindgen_closure_wrapper10479:t.dJw,__wbindgen_closure_wrapper14635:t.MrH,__wbindgen_closure_wrapper14639:t.NRT,__wbindgen_closure_wrapper15221:t.x9s}})))}},n={};function _(t){if(n[t])return n[t].exports;var r=n[t]={id:t,loaded:!1,exports:{}};return e[t](r,r.exports,_),r.loaded=!0,r.exports}_.d=(e,n)=>{for(var t in n)_.o(n,t)&&!_.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},_.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),_.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),_.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;_.g.importScripts&&(e=_.g.location+"");var n=_.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),_.p=e})(),_.v=(e,n,t,r)=>{var c=fetch(_.p+""+t+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(c,r).then((n=>Object.assign(e,n.instance.exports))):c.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,r))).then((n=>Object.assign(e,n.instance.exports)))},_(396)})();