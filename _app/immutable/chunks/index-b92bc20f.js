function j(){}function at(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function J(){return Object.create(null)}function k(t){t.forEach(X)}function Y(t){return typeof t=="function"}function Ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function Mt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function ut(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function jt(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Ht(t,e,n,i){if(t){const s=Z(t,e,n,i);return t[0](s)}}function Z(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Lt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function Dt(t,e,n,i,s,c){if(s){const r=Z(e,n,i,c);t.p(r,s)}}function Pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function qt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function zt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Ot(t){const e={};for(const n in t)e[n]=!0;return e}function Bt(t){return t==null?"":t}function Wt(t,e,n){return t.set(n),e}function Gt(t){return t&&Y(t.destroy)?t.destroy:j}let H=!1;function dt(){H=!0}function _t(){H=!1}function ht(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:ht(1,s,d=>e[n[d]].claim_order,a))-1;i[o]=n[f]+1;const _=f+1;n[_]=o,s=Math.max(_,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;t.insertBefore(r[o],f)}}function pt(t,e){t.appendChild(e)}function yt(t,e){if(H){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){t.insertBefore(e,n||null)}function bt(t,e,n){H&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Ft(){return I(" ")}function Rt(){return I("")}function K(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Jt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Kt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Qt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:et(t,i,e[i])}function Ut(t,e){for(const n in e)et(t,n,e[n])}function wt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,s=!1){nt(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function st(t,e,n,i){return it(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Vt(t,e,n){return st(t,e,n,G)}function Xt(t,e,n){return st(t,e,n,tt)}function xt(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Yt(t){return xt(t," ")}function Q(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Zt(t,e){const n=Q(t,"HTML_TAG_START",0),i=Q(t,"HTML_TAG_END",n);if(n===i)return new U(void 0,e);nt(t);const s=t.splice(n,i-n+1);$(s[0]),$(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new U(c,e)}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e){t.value=e==null?"":e}function ne(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let N;function $t(){if(N===void 0){N=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{N=!0}}return N}function ie(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=G("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=$t();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=K(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=K(i.contentWindow,"resize",e)}),pt(t,i),()=>{(s||c&&i.contentWindow)&&c(),$(i)}}function se(t,e,n){t.classList[n?"add":"remove"](e)}function vt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function re(t,e=document.body){return Array.from(e.querySelectorAll(t))}class kt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=tt(n.nodeName):this.e=G(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)gt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach($)}}class U extends kt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)bt(this.t,this.n[n],e)}}let v;function x(t){v=t}function b(){if(!v)throw new Error("Function called outside component initialization");return v}function oe(t){b().$$.on_mount.push(t)}function ce(t){b().$$.after_update.push(t)}function le(t){b().$$.on_destroy.push(t)}function ae(){const t=b();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=vt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function ue(t,e){return b().$$.context.set(t,e),e}function fe(t){return b().$$.context.get(t)}function de(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],V=[],C=[],O=[],rt=Promise.resolve();let B=!1;function ot(){B||(B=!0,rt.then(ct))}function _e(){return ot(),rt}function W(t){C.push(t)}function he(t){O.push(t)}const z=new Set;let S=0;function ct(){const t=v;do{for(;S<w.length;){const e=w[S];S++,x(e),Et(e.$$)}for(x(null),w.length=0,S=0;V.length;)V.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];z.has(n)||(z.add(n),n())}C.length=0}while(w.length);for(;O.length;)O.pop()();B=!1,z.clear(),x(t)}function Et(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}const M=new Set;let g;function me(){g={r:0,c:[],p:g}}function pe(){g.r||k(g.c),g=g.p}function lt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function At(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ye=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ge(t,e){At(t,1,1,()=>{e.delete(t.key)})}function be(t,e,n,i,s,c,r,l,o,a,f,_){let d=t.length,m=c.length,h=d;const L={};for(;h--;)L[t[h].key]=h;const E=[],D=new Map,P=new Map;for(h=m;h--;){const u=_(s,c,h),p=n(u);let y=r.get(p);y?i&&y.p(u,e):(y=a(p,u),y.c()),D.set(p,E[h]=y),p in L&&P.set(p,Math.abs(h-L[p]))}const F=new Set,R=new Set;function q(u){lt(u,1),u.m(l,f),r.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=E[m-1],p=t[d-1],y=u.key,A=p.key;u===p?(f=u.first,d--,m--):D.has(A)?!r.has(y)||F.has(y)?q(u):R.has(A)?d--:P.get(y)>P.get(A)?(R.add(y),q(u)):(F.add(A),d--):(o(p,r),d--)}for(;d--;){const u=t[d];D.has(u.key)||o(u,r)}for(;m;)q(E[m-1]);return E}function we(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function xe(t){return typeof t=="object"&&t!==null?t:{}}function $e(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ve(t){t&&t.c()}function ke(t,e){t&&t.l(e)}function Tt(t,e,n,i){const{fragment:s,on_mount:c,on_destroy:r,after_update:l}=t.$$;s&&s.m(e,n),i||W(()=>{const o=c.map(X).filter(Y);r?r.push(...o):k(o),t.$$.on_mount=[]}),l.forEach(W)}function Nt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function St(t,e){t.$$.dirty[0]===-1&&(w.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,i,s,c,r,l=[-1]){const o=v;x(t);const a=t.$$={fragment:null,ctx:null,props:c,update:j,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return a.ctx&&s(a.ctx[_],a.ctx[_]=h)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](h),f&&St(t,_)),d}):[],a.update(),f=!0,k(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){dt();const _=wt(e.target);a.fragment&&a.fragment.l(_),_.forEach($)}else a.fragment&&a.fragment.c();e.intro&&lt(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),_t(),ct()}x(o)}class Ae{$destroy(){Nt(this,1),this.$destroy=j}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{tt as $,j as A,Ht as B,Dt as C,Pt as D,Lt as E,yt as F,jt as G,K as H,de as I,Jt as J,Kt as K,at as L,Qt as M,Gt as N,we as O,Y as P,k as Q,zt as R,Ae as S,b as T,qt as U,ye as V,V as W,xe as X,fe as Y,ue as Z,le as _,Ft as a,Xt as a0,Ut as a1,ft as a2,Wt as a3,$e as a4,he as a5,Ot as a6,It as a7,ee as a8,re as a9,Mt as aa,be as ab,ge as ac,Bt as ad,W as ae,ie as af,ae as ag,se as ah,U as ai,Zt as aj,bt as b,Yt as c,pe as d,Rt as e,lt as f,me as g,$ as h,Ee as i,ce as j,G as k,Vt as l,wt as m,et as n,oe as o,ne as p,I as q,xt as r,Ct as s,At as t,te as u,ve as v,ke as w,Tt as x,Nt as y,_e as z};