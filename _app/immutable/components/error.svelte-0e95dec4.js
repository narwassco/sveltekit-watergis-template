import{S as y,i as B,s as C,k as v,q as k,a as h,e as q,l as E,m as g,r as $,h as p,c as R,b as u,G as P,u as S,B as w,H as G}from"../chunks/index-5cbadba0.js";import{s as O}from"../chunks/singletons-f31f1661.js";const z=()=>{const t=O,r={page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated};return Object.defineProperties(r,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},enumerable:!1},session:{get(){return D(),{}},enumerable:!1}}),r},A={subscribe(t){return z().page.subscribe(t)}};function D(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function H(t){let r,i=t[0].error.frame+"",o;return{c(){r=v("pre"),o=k(i)},l(s){r=E(s,"PRE",{});var a=g(r);o=$(a,i),a.forEach(p)},m(s,a){u(s,r,a),P(r,o)},p(s,a){a&1&&i!==(i=s[0].error.frame+"")&&S(o,i)},d(s){s&&p(r)}}}function N(t){let r,i=t[0].error.stack+"",o;return{c(){r=v("pre"),o=k(i)},l(s){r=E(s,"PRE",{});var a=g(r);o=$(a,i),a.forEach(p)},m(s,a){u(s,r,a),P(r,o)},p(s,a){a&1&&i!==(i=s[0].error.stack+"")&&S(o,i)},d(s){s&&p(r)}}}function F(t){let r,i=t[0].status+"",o,s,a,b=t[0].error.message+"",_,d,c,m,l=t[0].error.frame&&H(t),n=t[0].error.stack&&N(t);return{c(){r=v("h1"),o=k(i),s=h(),a=v("pre"),_=k(b),d=h(),l&&l.c(),c=h(),n&&n.c(),m=q()},l(e){r=E(e,"H1",{});var f=g(r);o=$(f,i),f.forEach(p),s=R(e),a=E(e,"PRE",{});var j=g(a);_=$(j,b),j.forEach(p),d=R(e),l&&l.l(e),c=R(e),n&&n.l(e),m=q()},m(e,f){u(e,r,f),P(r,o),u(e,s,f),u(e,a,f),P(a,_),u(e,d,f),l&&l.m(e,f),u(e,c,f),n&&n.m(e,f),u(e,m,f)},p(e,[f]){f&1&&i!==(i=e[0].status+"")&&S(o,i),f&1&&b!==(b=e[0].error.message+"")&&S(_,b),e[0].error.frame?l?l.p(e,f):(l=H(e),l.c(),l.m(c.parentNode,c)):l&&(l.d(1),l=null),e[0].error.stack?n?n.p(e,f):(n=N(e),n.c(),n.m(m.parentNode,m)):n&&(n.d(1),n=null)},i:w,o:w,d(e){e&&p(r),e&&p(s),e&&p(a),e&&p(d),l&&l.d(e),e&&p(c),n&&n.d(e),e&&p(m)}}}function I(t,r,i){let o;return G(t,A,s=>i(0,o=s)),[o]}let L=class extends y{constructor(r){super(),B(this,r,I,F,C,{})}};export{L as default};
