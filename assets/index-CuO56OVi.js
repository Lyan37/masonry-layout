(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();var W,d,de,j,_e,ue,R,J,z,Y,C={},he=[],je=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q=Array.isArray;function N(_,e){for(var t in e)_[t]=e[t];return _}function me(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function He(_,e,t){var o,n,i,l={};for(i in e)i=="key"?o=e[i]:i=="ref"?n=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?W.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(i in _.defaultProps)l[i]===void 0&&(l[i]=_.defaultProps[i]);return F(_,l,o,n,null)}function F(_,e,t,o,n){var i={type:_,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++de,__i:-1,__u:0};return n==null&&d.vnode!=null&&d.vnode(i),i}function E(_){return _.children}function U(_,e){this.props=_,this.context=e}function H(_,e){if(e==null)return _.__?H(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?H(_):null}function ge(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return ge(_)}}function te(_){(!_.__d&&(_.__d=!0)&&j.push(_)&&!I.__r++||_e!==d.debounceRendering)&&((_e=d.debounceRendering)||ue)(I)}function I(){var _,e,t,o,n,i,l,a;for(j.sort(R);_=j.shift();)_.__d&&(e=j.length,o=void 0,i=(n=(t=_).__v).__e,l=[],a=[],t.__P&&((o=N({},n)).__v=n.__v+1,d.vnode&&d.vnode(o),X(t.__P,o,n,t.__n,t.__P.namespaceURI,32&n.__u?[i]:null,l,i??H(n),!!(32&n.__u),a),o.__v=n.__v,o.__.__k[o.__i]=o,ye(l,o,a),o.__e!=i&&ge(o)),j.length>e&&j.sort(R));I.__r=0}function ve(_,e,t,o,n,i,l,a,s,c,p){var r,u,f,b,w,y=o&&o.__k||he,h=e.length;for(t.__d=s,Pe(t,e,y),s=t.__d,r=0;r<h;r++)(f=t.__k[r])!=null&&(u=f.__i===-1?C:y[f.__i]||C,f.__i=r,X(_,f,u,n,i,l,a,s,c,p),b=f.__e,f.ref&&u.ref!=f.ref&&(u.ref&&Z(u.ref,null,f),p.push(f.ref,f.__c||b,f)),w==null&&b!=null&&(w=b),65536&f.__u||u.__k===f.__k?s=be(f,s,_):typeof f.type=="function"&&f.__d!==void 0?s=f.__d:b&&(s=b.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=s,t.__e=w}function Pe(_,e,t){var o,n,i,l,a,s=e.length,c=t.length,p=c,r=0;for(_.__k=[],o=0;o<s;o++)(n=e[o])!=null&&typeof n!="boolean"&&typeof n!="function"?(l=o+r,(n=_.__k[o]=typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?F(null,n,null,null,null):Q(n)?F(E,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?F(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n).__=_,n.__b=_.__b+1,i=null,(a=n.__i=Se(n,t,l,p))!==-1&&(p--,(i=t[a])&&(i.__u|=131072)),i==null||i.__v===null?(a==-1&&r--,typeof n.type!="function"&&(n.__u|=65536)):a!==l&&(a==l-1?r--:a==l+1?r++:(a>l?r--:r++,n.__u|=65536))):n=_.__k[o]=null;if(p)for(o=0;o<c;o++)(i=t[o])!=null&&!(131072&i.__u)&&(i.__e==_.__d&&(_.__d=H(i)),we(i,i))}function be(_,e,t){var o,n;if(typeof _.type=="function"){for(o=_.__k,n=0;o&&n<o.length;n++)o[n]&&(o[n].__=_,e=be(o[n],e,t));return e}_.__e!=e&&(e&&_.type&&!t.contains(e)&&(e=H(_)),t.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Se(_,e,t,o){var n=_.key,i=_.type,l=t-1,a=t+1,s=e[t];if(s===null||s&&n==s.key&&i===s.type&&!(131072&s.__u))return t;if(o>(s!=null&&!(131072&s.__u)?1:0))for(;l>=0||a<e.length;){if(l>=0){if((s=e[l])&&!(131072&s.__u)&&n==s.key&&i===s.type)return l;l--}if(a<e.length){if((s=e[a])&&!(131072&s.__u)&&n==s.key&&i===s.type)return a;a++}}return-1}function ne(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||je.test(e)?t:t+"px"}function A(_,e,t,o,n){var i;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof o=="string"&&(_.style.cssText=o=""),o)for(e in o)t&&e in t||ne(_.style,e,"");if(t)for(e in t)o&&t[e]===o[e]||ne(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in _||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+i]=t,t?o?t.u=o.u:(t.u=J,_.addEventListener(e,i?Y:z,i)):_.removeEventListener(e,i?Y:z,i);else{if(n=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,e=="popover"&&t==1?"":t))}}function oe(_){return function(e){if(this.l){var t=this.l[e.type+_];if(e.t==null)e.t=J++;else if(e.t<t.u)return;return t(d.event?d.event(e):e)}}}function X(_,e,t,o,n,i,l,a,s,c){var p,r,u,f,b,w,y,h,m,P,$,L,S,ee,M,q,x=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(s=!!(32&t.__u),i=[a=e.__e=t.__e]),(p=d.__b)&&p(e);e:if(typeof x=="function")try{if(h=e.props,m="prototype"in x&&x.prototype.render,P=(p=x.contextType)&&o[p.__c],$=p?P?P.props.value:p.__:o,t.__c?y=(r=e.__c=t.__c).__=r.__E:(m?e.__c=r=new x(h,$):(e.__c=r=new U(h,$),r.constructor=x,r.render=Ee),P&&P.sub(r),r.props=h,r.state||(r.state={}),r.context=$,r.__n=o,u=r.__d=!0,r.__h=[],r._sb=[]),m&&r.__s==null&&(r.__s=r.state),m&&x.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=N({},r.__s)),N(r.__s,x.getDerivedStateFromProps(h,r.__s))),f=r.props,b=r.state,r.__v=e,u)m&&x.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),m&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(m&&x.getDerivedStateFromProps==null&&h!==f&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(h,$),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(h,r.__s,$)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(r.props=h,r.state=r.__s,r.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(T){T&&(T.__=e)}),L=0;L<r._sb.length;L++)r.__h.push(r._sb[L]);r._sb=[],r.__h.length&&l.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(h,r.__s,$),m&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(f,b,w)})}if(r.context=$,r.props=h,r.__P=_,r.__e=!1,S=d.__r,ee=0,m){for(r.state=r.__s,r.__d=!1,S&&S(e),p=r.render(r.props,r.state,r.context),M=0;M<r._sb.length;M++)r.__h.push(r._sb[M]);r._sb=[]}else do r.__d=!1,S&&S(e),p=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++ee<25);r.state=r.__s,r.getChildContext!=null&&(o=N(N({},o),r.getChildContext())),m&&!u&&r.getSnapshotBeforeUpdate!=null&&(w=r.getSnapshotBeforeUpdate(f,b)),ve(_,Q(q=p!=null&&p.type===E&&p.key==null?p.props.children:p)?q:[q],e,t,o,n,i,l,a,s,c),r.base=e.__e,e.__u&=-161,r.__h.length&&l.push(r),y&&(r.__E=r.__=null)}catch(T){if(e.__v=null,s||i!=null){for(e.__u|=s?160:128;a&&a.nodeType===8&&a.nextSibling;)a=a.nextSibling;i[i.indexOf(a)]=null,e.__e=a}else e.__e=t.__e,e.__k=t.__k;d.__e(T,e,t)}else i==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Ce(t.__e,e,t,o,n,i,l,s,c);(p=d.diffed)&&p(e)}function ye(_,e,t){e.__d=void 0;for(var o=0;o<t.length;o++)Z(t[o],t[++o],t[++o]);d.__c&&d.__c(e,_),_.some(function(n){try{_=n.__h,n.__h=[],_.some(function(i){i.call(n)})}catch(i){d.__e(i,n.__v)}})}function Ce(_,e,t,o,n,i,l,a,s){var c,p,r,u,f,b,w,y=t.props,h=e.props,m=e.type;if(m==="svg"?n="http://www.w3.org/2000/svg":m==="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),i!=null){for(c=0;c<i.length;c++)if((f=i[c])&&"setAttribute"in f==!!m&&(m?f.localName===m:f.nodeType===3)){_=f,i[c]=null;break}}if(_==null){if(m===null)return document.createTextNode(h);_=document.createElementNS(n,m,h.is&&h),a&&(d.__m&&d.__m(e,i),a=!1),i=null}if(m===null)y===h||a&&_.data===h||(_.data=h);else{if(i=i&&W.call(_.childNodes),y=t.props||C,!a&&i!=null)for(y={},c=0;c<_.attributes.length;c++)y[(f=_.attributes[c]).name]=f.value;for(c in y)if(f=y[c],c!="children"){if(c=="dangerouslySetInnerHTML")r=f;else if(!(c in h)){if(c=="value"&&"defaultValue"in h||c=="checked"&&"defaultChecked"in h)continue;A(_,c,null,f,n)}}for(c in h)f=h[c],c=="children"?u=f:c=="dangerouslySetInnerHTML"?p=f:c=="value"?b=f:c=="checked"?w=f:a&&typeof f!="function"||y[c]===f||A(_,c,f,y[c],n);if(p)a||r&&(p.__html===r.__html||p.__html===_.innerHTML)||(_.innerHTML=p.__html),e.__k=[];else if(r&&(_.innerHTML=""),ve(_,Q(u)?u:[u],e,t,o,m==="foreignObject"?"http://www.w3.org/1999/xhtml":n,i,l,i?i[0]:t.__k&&H(t,0),a,s),i!=null)for(c=i.length;c--;)me(i[c]);a||(c="value",m==="progress"&&b==null?_.removeAttribute("value"):b!==void 0&&(b!==_[c]||m==="progress"&&!b||m==="option"&&b!==y[c])&&A(_,c,b,y[c],n),c="checked",w!==void 0&&w!==_[c]&&A(_,c,w,y[c],n))}return _}function Z(_,e,t){try{if(typeof _=="function"){var o=typeof _.__u=="function";o&&_.__u(),o&&e==null||(_.__u=_(e))}else _.current=e}catch(n){d.__e(n,t)}}function we(_,e,t){var o,n;if(d.unmount&&d.unmount(_),(o=_.ref)&&(o.current&&o.current!==_.__e||Z(o,null,e)),(o=_.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){d.__e(i,e)}o.base=o.__P=null}if(o=_.__k)for(n=0;n<o.length;n++)o[n]&&we(o[n],e,t||typeof _.type!="function");t||me(_.__e),_.__c=_.__=_.__e=_.__d=void 0}function Ee(_,e,t){return this.constructor(_,t)}function Le(_,e,t){var o,n,i,l;d.__&&d.__(_,e),n=(o=typeof t=="function")?null:e.__k,i=[],l=[],X(e,_=(!o&&t||e).__k=He(E,null,[_]),n||C,C,e.namespaceURI,!o&&t?[t]:n?null:e.firstChild?W.call(e.childNodes):null,i,!o&&t?t:n?n.__e:e.firstChild,o,l),ye(i,_,l)}W=he.slice,d={__e:function(_,e,t,o){for(var n,i,l;e=e.__;)if((n=e.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(_)),l=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(_,o||{}),l=n.__d),l)return n.__E=n}catch(a){_=a}throw _}},de=0,U.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=N({},this.state),typeof _=="function"&&(_=_(N({},t),this.props)),_&&N(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),te(this))},U.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),te(this))},U.prototype.render=E,j=[],ue=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,R=function(_,e){return _.__v.__b-e.__v.__b},I.__r=0,J=0,z=oe(!1),Y=oe(!0);var Me=0;function k(_,e,t,o,n,i){e||(e={});var l,a,s=e;"ref"in e&&(l=e.ref,delete e.ref);var c={type:_,props:s,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Me,__i:-1,__u:0,__source:n,__self:i};if(typeof _=="function"&&(l=_.defaultProps))for(a in l)s[a]===void 0&&(s[a]=l[a]);return d.vnode&&d.vnode(c),c}var O,g,B,ie,V=0,xe=[],v=d,re=v.__b,ce=v.__r,le=v.diffed,ae=v.__c,se=v.unmount,fe=v.__;function ke(_,e){v.__h&&v.__h(g,_,V||e),V=0;var t=g.__H||(g.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({}),t.__[_]}function K(_){return V=1,Te(Ne,_)}function Te(_,e,t){var o=ke(O++,2);if(o.t=_,!o.__c&&(o.__=[Ne(void 0,e),function(a){var s=o.__N?o.__N[0]:o.__[0],c=o.t(s,a);s!==c&&(o.__N=[c,o.__[1]],o.__c.setState({}))}],o.__c=g,!g.u)){var n=function(a,s,c){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(u){return!!u.__c});if(p.every(function(u){return!u.__N}))return!i||i.call(this,a,s,c);var r=!1;return p.forEach(function(u){if(u.__N){var f=u.__[0];u.__=u.__N,u.__N=void 0,f!==u.__[0]&&(r=!0)}}),!(!r&&o.__c.props===a)&&(!i||i.call(this,a,s,c))};g.u=!0;var i=g.shouldComponentUpdate,l=g.componentWillUpdate;g.componentWillUpdate=function(a,s,c){if(this.__e){var p=i;i=void 0,n(a,s,c),i=p}l&&l.call(this,a,s,c)},g.shouldComponentUpdate=n}return o.__N||o.__}function $e(_,e){var t=ke(O++,3);!v.__s&&Ue(t.__H,e)&&(t.__=_,t.i=e,g.__H.__h.push(t))}function Ae(){for(var _;_=xe.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(D),_.__H.__h.forEach(G),_.__H.__h=[]}catch(e){_.__H.__h=[],v.__e(e,_.__v)}}v.__b=function(_){g=null,re&&re(_)},v.__=function(_,e){_&&e.__k&&e.__k.__m&&(_.__m=e.__k.__m),fe&&fe(_,e)},v.__r=function(_){ce&&ce(_),O=0;var e=(g=_.__c).__H;e&&(B===g?(e.__h=[],g.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(e.__h.forEach(D),e.__h.forEach(G),e.__h=[],O=0)),B=g},v.diffed=function(_){le&&le(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(xe.push(e)!==1&&ie===v.requestAnimationFrame||((ie=v.requestAnimationFrame)||Fe)(Ae)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),B=g=null},v.__c=function(_,e){e.some(function(t){try{t.__h.forEach(D),t.__h=t.__h.filter(function(o){return!o.__||G(o)})}catch(o){e.some(function(n){n.__h&&(n.__h=[])}),e=[],v.__e(o,t.__v)}}),ae&&ae(_,e)},v.unmount=function(_){se&&se(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{D(o)}catch(n){e=n}}),t.__H=void 0,e&&v.__e(e,t.__v))};var pe=typeof requestAnimationFrame=="function";function Fe(_){var e,t=function(){clearTimeout(o),pe&&cancelAnimationFrame(e),setTimeout(_)},o=setTimeout(t,100);pe&&(e=requestAnimationFrame(t))}function D(_){var e=g,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),g=e}function G(_){var e=g;_.__c=_.__(),g=e}function Ue(_,e){return!_||_.length!==e.length||e.some(function(t,o){return t!==_[o]})}function Ne(_,e){return typeof e=="function"?e(_):e}function De({}){const[_,e]=K(!0),[t,o]=K(0),n=()=>{typeof window<"u"&&(window.scrollY>t?e(!1):e(!0),o(window.scrollY))};return $e(()=>{if(typeof window<"u")return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[t]),k("nav",{className:`fixed bottom-0 flex items-center w-full sm:h-[10vw] h-[10vh] z-10 transition-transform duration-300 ease-out ${_?"translate-y-0":"translate-y-full"} animate-flicker mix-blend-overlay`,children:[k("img",{src:"src/assets/pinterest.svg",className:"sm:w-[10vw] w-[8vh]"}),k("p",{className:"sm:text-[10vw] text-[8vh] font-thin",children:"Pinterest"})]})}const Ie=["https://i.pinimg.com/enabled_lo/564x/b5/d8/a4/b5d8a4bc88ff16403c78daad5287df8c.jpg","https://i.pinimg.com/enabled_lo/564x/9e/72/2a/9e722ae4d5a28e8195e1a5cd37eb66c6.jpg","https://i.pinimg.com/enabled_lo/564x/6c/fd/bd/6cfdbdf3eb0a553c127949eed1c8cf66.jpg","https://i.pinimg.com/736x/b5/cb/6a/b5cb6a5834e037173d91938e03a09c6e.jpg","https://i.pinimg.com/enabled_lo/564x/3e/23/80/3e23800f28e193c33f9a79a71d91ddca.jpg","https://i.pinimg.com/enabled_lo/564x/e6/4b/45/e64b45dcbe16d9f9ac6f390e2e8a829d.jpg","https://i.pinimg.com/enabled_lo/564x/ce/ef/37/ceef37ea376018d7c0bdde598ae5cfd5.jpg","https://i.pinimg.com/enabled_lo/564x/ce/c2/45/cec245bbc915f324a3d5faccb8d3e324.jpg","https://i.pinimg.com/originals/af/8d/9a/af8d9a28ec64497f39f5c814ea101c3b.gif","https://i.pinimg.com/enabled_lo/564x/e4/e6/70/e4e67010e0085a0a5c25c21483272300.jpg","https://i.pinimg.com/enabled_lo/564x/06/24/d3/0624d330276b6c0df9bcd4c8fc3269e8.jpg","https://i.pinimg.com/enabled_lo/564x/11/3e/68/113e68a479ebed6c02e0ace3ceb8359e.jpg","https://i.pinimg.com/enabled_lo/564x/3f/c7/05/3fc705e80130886dc24d500ed5c3313e.jpg","https://i.pinimg.com/736x/5b/be/11/5bbe11c5a2227db38daeed066842e7f9.jpg","https://i.pinimg.com/736x/4c/f2/63/4cf263d42f00ecbe537d9a2552151069.jpg","https://i.pinimg.com/originals/ad/7a/1a/ad7a1aa6d885fd7c5f1b24a25c474e67.gif","https://i.pinimg.com/enabled_lo/564x/ff/da/0c/ffda0c330b3be8cacb8ae25b1bdcc344.jpg","https://i.pinimg.com/enabled_lo/564x/42/e1/d6/42e1d6cf2b50c427065db4e634edda7d.jpg","https://i.pinimg.com/736x/0c/4a/8c/0c4a8c8bd160bddb029995656b2480bf.jpg","https://i.pinimg.com/enabled_lo/564x/67/00/61/6700615e1972b305e0bab1fa7d107174.jpg","https://i.pinimg.com/enabled_lo/564x/96/12/39/96123917d4f4b97fa4056b116ce6202c.jpg","https://i.pinimg.com/originals/10/e1/e2/10e1e23a2062e8cda9b215a387dc4194.gif","https://i.pinimg.com/enabled_lo/564x/a8/64/c7/a864c746932b02adf3d634474dfc9ba1.jpg","https://i.pinimg.com/enabled_lo/564x/15/90/af/1590af46929d9cd00865bacd5d33f90f.jpg","https://i.pinimg.com/originals/bb/80/94/bb80944d27b353f34d8c8777ec3b2b99.gif","https://i.pinimg.com/originals/ed/f3/0b/edf30b7ad0f9a592e0385ab238da0f9d.gif","https://i.pinimg.com/736x/aa/c8/08/aac8081a70302b02c9fa6c935dab830a.jpg","https://i.pinimg.com/enabled_lo/564x/a0/cf/85/a0cf85b4f40a631a98c2eed7eaea92bf.jpg"];function Oe({}){const[_,e]=K([]);return $e(()=>{e((o=>{let n=[...o];for(let i=n.length-1;i>0;i--){const l=Math.floor(Math.random()*(i+1));[n[i],n[l]]=[n[l],n[i]]}return n})(Ie))},[]),k("div",{className:"w-full sm:columns-3 columns-2 gap-0",children:_.map(t=>k("img",{src:t,className:"sm:w-[33.33vw] w-[50vw]"}))})}function We(){return k(E,{children:[k(De,{}),k(Oe,{})]})}function qe(){return k(We,{})}Le(k(qe,{}),document.getElementById("app"));