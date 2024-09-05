var me=Object.defineProperty;var _e=(t,e,n)=>e in t?me(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var K=(t,e,n)=>(_e(t,typeof e!="symbol"?e+"":e,n),n);function h(){}function fe(t){return t()}function ce(){return Object.create(null)}function M(t){t.forEach(fe)}function de(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function J(t,e){return t===e?!0:(D||(D=document.createElement("a")),D.href=e,t===D.href)}function he(t){return Object.keys(t).length===0}function Q(t){return t??""}function g(t,e){t.appendChild(e)}function T(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function A(){return y(" ")}function be(){return y("")}function W(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function ve(t){return function(e){return e.preventDefault(),t.call(this,e)}}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $e(t){return Array.from(t.childNodes)}function X(t,e){e=""+e,t.data!==e&&(t.data=e)}function Y(t,e,n,o){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function ye(t,e,{bubbles:n=!1,cancelable:o=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:o})}let L;function O(t){L=t}function we(){if(!L)throw new Error("Function called outside component initialization");return L}function te(){const t=we();return(e,n,{cancelable:o=!1}={})=>{const l=t.$$.callbacks[e];if(l){const r=ye(e,n,{cancelable:o});return l.slice().forEach(c=>{c.call(t,r)}),!r.defaultPrevented}return!0}}const x=[],ie=[];let B=[];const se=[],ke=Promise.resolve();let Z=!1;function Ce(){Z||(Z=!0,ke.then(ge))}function ee(t){B.push(t)}const V=new Set;let C=0;function ge(){if(C!==0)return;const t=L;do{try{for(;C<x.length;){const e=x[C];C++,O(e),xe(e.$$)}}catch(e){throw x.length=0,C=0,e}for(O(null),x.length=0,C=0;ie.length;)ie.pop()();for(let e=0;e<B.length;e+=1){const n=B[e];V.has(n)||(V.add(n),n())}B.length=0}while(x.length);for(;se.length;)se.pop()();Z=!1,V.clear(),O(t)}function xe(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ee)}}function Be(t){const e=[],n=[];B.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),B=e}const I=new Set;let $;function Ee(){$={r:0,c:[],p:$}}function Te(){$.r||M($.c),$=$.p}function E(t,e){t&&t.i&&(I.delete(t),t.i(e))}function S(t,e,n,o){if(t&&t.o){if(I.has(t))return;I.add(t),$.c.push(()=>{I.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function ne(t){t&&t.c()}function H(t,e,n){const{fragment:o,after_update:l}=t.$$;o&&o.m(e,n),ee(()=>{const r=t.$$.on_mount.map(fe).filter(de);t.$$.on_destroy?t.$$.on_destroy.push(...r):M(r),t.$$.on_mount=[]}),l.forEach(ee)}function j(t,e){const n=t.$$;n.fragment!==null&&(Be(n.after_update),M(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(t,e){t.$$.dirty[0]===-1&&(x.push(t),Ce(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,n,o,l,r,c=null,i=[-1]){const f=L;O(t);const s=t.$$={fragment:null,ctx:[],props:r,update:h,not_equal:l,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:ce(),dirty:i,skip_bound:!1,root:e.target||f.$$.root};c&&c(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(d,m,...p)=>{const v=p.length?p[0]:m;return s.ctx&&l(s.ctx[d],s.ctx[d]=v)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](v),a&&Ae(t,d)),m}):[],s.update(),a=!0,M(s.before_update),s.fragment=o?o(s.ctx):!1,e.target){if(e.hydrate){const d=$e(e.target);s.fragment&&s.fragment.l(d),d.forEach(w)}else s.fragment&&s.fragment.c();e.intro&&E(t.$$.fragment),H(t,e.target,e.anchor),ge()}O(f)}class q{constructor(){K(this,"$$");K(this,"$$set")}$destroy(){j(this,1),this.$destroy=h}$on(e,n){if(!de(n))return h;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}$set(e){this.$$set&&!he(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Oe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Oe);function Se(t){let e,n,o,l,r;return{c(){e=_("button"),n=_("img"),u(n,"class","logo svelte-gozc3x"),J(n.src,o=t[0].chatButtonImageUrl)||u(n,"src",o),u(n,"loading","lazy"),u(n,"alt","Open chat widget"),u(e,"class","chat-button svelte-gozc3x"),Y(e,"--color",t[0].brandColor)},m(c,i){T(c,e,i),g(e,n),l||(r=W(e,"click",t[2]),l=!0)},p(c,i){i&1&&!J(n.src,o=c[0].chatButtonImageUrl)&&u(n,"src",o),i&1&&Y(e,"--color",c[0].brandColor)},d(c){c&&w(e),l=!1,r()}}}function Le(t){let e,n,o;return{c(){e=_("button"),e.innerHTML='<img class="chevron svelte-gozc3x" src="https://cdn.prod.website-files.com/65c13900854527089d094087/665dcbcc137dcbf2faee8328_chevron-down-regular.svg" loading="lazy" alt="Close chat widget"/>',u(e,"class","chat-button svelte-gozc3x"),Y(e,"--color","#333")},m(l,r){T(l,e,r),n||(o=W(e,"click",t[2]),n=!0)},p:h,d(l){l&&w(e),n=!1,o()}}}function Me(t){let e;function n(r,c){return r[1]?Le:Se}let o=n(t),l=o(t);return{c(){l.c(),e=be()},m(r,c){l.m(r,c),T(r,e,c)},p(r,[c]){o===(o=n(r))&&l?l.p(r,c):(l.d(1),l=o(r),l&&(l.c(),l.m(e.parentNode,e)))},i:h,o:h,d(r){r&&w(e),l.d(r)}}}function Ne(t,e,n){let{mergedConfig:o}=e,{open:l=!1}=e;const r=te();function c(){r("click")}return t.$$set=i=>{"mergedConfig"in i&&n(0,o=i.mergedConfig),"open"in i&&n(1,l=i.open)},[o,l,c]}class Pe extends q{constructor(e){super(),R(this,e,Ne,Me,U,{mergedConfig:0,open:1})}}function ze(t){let e,n=t[0].chatBubbleText+"",o,l,r,c;return{c(){e=_("button"),o=y(n),l=y(" ›"),u(e,"class","closed svelte-x0bnqf")},m(i,f){T(i,e,f),g(e,o),g(e,l),r||(c=W(e,"click",t[1]),r=!0)},p(i,[f]){f&1&&n!==(n=i[0].chatBubbleText+"")&&X(o,n)},i:h,o:h,d(i){i&&w(e),r=!1,c()}}}function De(t,e,n){let{mergedConfig:o}=e;const l=te();function r(){l("click")}return t.$$set=c=>{"mergedConfig"in c&&n(0,o=c.mergedConfig)},[o,r]}class Ie extends q{constructor(e){super(),R(this,e,De,ze,U,{mergedConfig:0})}}const ae="https://cdn.prod.website-files.com/65c13900854527089d094087/661d3c71f1244a4d88e72ed4_whatsapp-logo.svg",pe="https://assets-global.website-files.com/65c13900854527089d094087/662774e533c005540d1ed454_WhatsApp-48px.svg",ue="https://cdn.prod.website-files.com/65c13900854527089d094087/66742b97cfcfdd2d9be4fb9e_Whatsapp%20logo%20black.svg";function Ue(t){let e,n,o,l,r,c,i,f,s=t[0].welcomeText+"",a,d,m,p,v=t[0].chatBubbleText+"",G,oe,N,P,re,z,F,le;return{c(){e=_("div"),n=_("div"),o=_("button"),o.innerHTML='<img src="https://cdn.prod.website-files.com/65c13900854527089d094087/665dcc3ab5067deb888829aa_xmark-regular.svg" loading="lazy" alt="" class="svelte-1ax73v3"/>',l=A(),r=_("img"),i=A(),f=_("div"),a=y(s),d=A(),m=_("div"),p=_("a"),G=y(v),oe=y(" ›"),re=A(),z=_("div"),z.innerHTML='Powered by <a class="saysimple svelte-1ax73v3" href="https://saysimple.com" target="_blank">Saysimple</a>',u(o,"aria-label","Close chat widget"),u(o,"class","close-button svelte-1ax73v3"),J(r.src,c=pe)||u(r,"src",c),u(r,"alt","WhatsApp logo"),u(r,"class","whatsapp-logo svelte-1ax73v3"),u(f,"class","text svelte-1ax73v3"),u(p,"href",t[1]),u(p,"target","_blank"),u(p,"class",N=Q("button"+(t[0].textColor=="black"?" dark":" light"))+" svelte-1ax73v3"),u(p,"style",P=`background-color: ${t[0].brandColor||"#43d67a"}; --whatsapp-logo: url(${t[0].textColor=="black"?ue:ae})`),u(z,"class","powered-by svelte-1ax73v3"),u(m,"class","button-powered-by svelte-1ax73v3"),u(e,"class","open svelte-1ax73v3")},m(b,k){T(b,e,k),g(e,n),g(n,o),g(e,l),g(e,r),g(e,i),g(e,f),g(f,a),g(e,d),g(e,m),g(m,p),g(p,G),g(p,oe),g(m,re),g(m,z),F||(le=W(o,"click",ve(t[2])),F=!0)},p(b,[k]){k&1&&s!==(s=b[0].welcomeText+"")&&X(a,s),k&1&&v!==(v=b[0].chatBubbleText+"")&&X(G,v),k&1&&N!==(N=Q("button"+(b[0].textColor=="black"?" dark":" light"))+" svelte-1ax73v3")&&u(p,"class",N),k&1&&P!==(P=`background-color: ${b[0].brandColor||"#43d67a"}; --whatsapp-logo: url(${b[0].textColor=="black"?ue:ae})`)&&u(p,"style",P)},i:h,o:h,d(b){b&&w(e),F=!1,le()}}}function We(t,e,n){let{mergedConfig:o}=e;const l=`https://api.whatsapp.com/send?phone=${o.phoneNumber}&text=${encodeURIComponent("Hello!")}`,r=te();function c(i){i.preventDefault(),r("closingButtonClick")}return t.$$set=i=>{"mergedConfig"in i&&n(0,o=i.mergedConfig)},[o,l,c]}class He extends q{constructor(e){super(),R(this,e,We,Ue,U,{mergedConfig:0})}}function je(t){let e,n;return e=new Ie({props:{mergedConfig:t[1]}}),e.$on("click",t[2]),{c(){ne(e.$$.fragment)},m(o,l){H(e,o,l),n=!0},p:h,i(o){n||(E(e.$$.fragment,o),n=!0)},o(o){S(e.$$.fragment,o),n=!1},d(o){j(e,o)}}}function Re(t){let e,n;return e=new He({props:{mergedConfig:t[1]}}),e.$on("closingButtonClick",t[3]),{c(){ne(e.$$.fragment)},m(o,l){H(e,o,l),n=!0},p:h,i(o){n||(E(e.$$.fragment,o),n=!0)},o(o){S(e.$$.fragment,o),n=!1},d(o){j(e,o)}}}function qe(t){let e,n,o,l,r,c;const i=[Re,je],f=[];function s(a,d){return a[0]?0:1}return n=s(t),o=f[n]=i[n](t),r=new Pe({props:{mergedConfig:t[1],open:t[0]}}),r.$on("click",t[4]),{c(){e=_("div"),o.c(),l=A(),ne(r.$$.fragment),u(e,"class",Q(`main ${t[1].position==="left"?"left":"right"}`)+" svelte-1l9ot9g"),u(e,"style",`position: ${t[1].demoMode?"static":"fixed"};`)},m(a,d){T(a,e,d),f[n].m(e,null),g(e,l),H(r,e,null),c=!0},p(a,[d]){let m=n;n=s(a),n===m?f[n].p(a,d):(Ee(),S(f[m],1,1,()=>{f[m]=null}),Te(),o=f[n],o?o.p(a,d):(o=f[n]=i[n](a),o.c()),E(o,1),o.m(e,l));const p={};d&1&&(p.open=a[0]),r.$set(p)},i(a){c||(E(o),E(r.$$.fragment,a),c=!0)},o(a){S(o),S(r.$$.fragment,a),c=!1},d(a){a&&w(e),f[n].d(),j(r)}}}function Ge(t,e,n){let{config:o}=e,r={...{position:"right",brandColor:"#43d67a",emailId:"email@example.com",brandName:"SaySimple",phoneNumber:"+123456",welcomeText:"Do you want to contact us? We're on WhatsApp.",chatBubbleText:"Send us a message",openByDefault:!1,chatButtonImageUrl:pe,demoMode:!1,textColor:"white"},...o},c=r.openByDefault;function i(){r.demoMode||n(0,c=!0)}function f(){r.demoMode||n(0,c=!1)}function s(){r.demoMode||n(0,c=!c)}return t.$$set=a=>{"config"in a&&n(5,o=a.config)},[c,r,i,f,s,o]}class Fe extends q{constructor(e){super(),R(this,e,Ge,qe,U,{config:5})}}window.mountSaysimpleWhatsAppButton=function(t,e){new Fe({target:t,props:{config:e}})};
