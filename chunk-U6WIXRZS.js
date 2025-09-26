import{a as Pt,b as dt,c as Xt,d as Jt,e as ct,f as Et,g as te,h as Vt,i as ee,j as ne,k as Tt,l as oe,m as Lt,n as bt,o as $,q as F,r as q}from"./chunk-RHZQ5TX5.js";import{c as Ot,d as Ft,f as mt,h as Ht}from"./chunk-Q3UCUI45.js";import{a as ie,b as re,m as ae,n as se,o as ut,p as O}from"./chunk-JLB2QDTW.js";import{A as Kt,b as Qt,c as Gt,d as vt,e as _t,f as yt,g as z,h as W,p as Yt,w as Ut}from"./chunk-FGD3F3PI.js";import{$ as f,Aa as Rt,Ab as E,Cb as $t,Da as c,Fb as C,Gb as b,Hb as N,Ia as pt,Mb as R,O as Z,Oa as y,Ob as L,P as Q,Pa as U,Qa as rt,Ra as _,Rb as kt,Sa as m,T as k,Ua as at,Va as ft,Wb as qt,Yb as X,Z as G,_ as Y,aa as j,ab as S,da as jt,dc as M,ec as Ct,hb as d,ib as a,jb as s,kb as p,lb as St,ma as wt,mb as Mt,na as v,nb as B,ob as tt,pa as ht,pb as et,qb as nt,rb as st,sb as Wt,ta as Nt,tb as K,ub as g,vb as lt,wb as it,xb as T,yb as It,zb as P}from"./chunk-BD4EB5TD.js";var le=(()=>{class n{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let o=e.trim().split(" ");for(let i=0;i<o.length;i++)t.classList.add(o[i])}else{let o=e.split(" ");for(let i=0;i<o.length;i++)t.className+=" "+o[i]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,o=0;for(var i=0;i<e.length;i++){if(e[i]==t)return o;e[i].nodeType==1&&o++}return-1}static indexWithinGroup(t,e){let o=t.parentNode?t.parentNode.childNodes:[],i=0;for(var r=0;r<o.length;r++){if(o[r]==t)return i;o[r].attributes&&o[r].attributes[e]&&o[r].nodeType==1&&i++}return-1}static appendOverlay(t,e,o="self"){o!=="self"&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,o="self",i=!0){t&&e&&(i&&(t.style.minWidth=`${n.getOuterWidth(e)}px`),o==="self"?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,o=!0){let i=ot=>{if(ot)return getComputedStyle(ot).getPropertyValue("position")==="relative"?ot:i(ot.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),u=e.offsetHeight,h=e.getBoundingClientRect(),V=this.getWindowScrollTop(),x=this.getWindowScrollLeft(),w=this.getViewport(),I=i(t)?.getBoundingClientRect()||{top:-1*V,left:-1*x},D,J,gt="top";h.top+u+r.height>w.height?(D=h.top-I.top-r.height,gt="bottom",h.top+D<0&&(D=-1*h.top)):(D=u+h.top-I.top,gt="top");let Zt=h.left+r.width-w.width,Le=h.left-I.left;if(r.width>w.width?J=(h.left-I.left)*-1:Zt>0?J=Le-Zt:J=h.left-I.left,t.style.top=D+"px",t.style.left=J+"px",t.style.transformOrigin=gt,o){let ot=Xt(/-anchor-gutter$/)?.value;t.style.marginTop=gt==="bottom"?`calc(${ot??"2px"} * -1)`:ot??""}}static absolutePosition(t,e,o=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=i.height,u=i.width,h=e.offsetHeight,V=e.offsetWidth,x=e.getBoundingClientRect(),w=this.getWindowScrollTop(),H=this.getWindowScrollLeft(),I=this.getViewport(),D,J;x.top+h+r>I.height?(D=x.top+w-r,t.style.transformOrigin="bottom",D<0&&(D=w)):(D=h+x.top+w,t.style.transformOrigin="top"),x.left+u>I.width?J=Math.max(0,x.left+H+V-u):J=x.left+H,t.style.top=D+"px",t.style.left=J+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let o=this.getParents(t),i=/(auto|scroll)/,r=u=>{let h=window.getComputedStyle(u,null);return i.test(h.getPropertyValue("overflow"))||i.test(h.getPropertyValue("overflowX"))||i.test(h.getPropertyValue("overflowY"))};for(let u of o){let h=u.nodeType===1&&u.dataset.scrollselectors;if(h){let V=h.split(",");for(let x of V){let w=this.findSingle(u,x);w&&r(w)&&e.push(w)}}u.nodeType!==9&&r(u)&&e.push(u)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=o?parseFloat(o):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),u=r?parseFloat(r):0,h=t.getBoundingClientRect(),x=e.getBoundingClientRect().top+document.body.scrollTop-(h.top+document.body.scrollTop)-i-u,w=t.scrollTop,H=t.clientHeight,I=this.getOuterHeight(e);x<0?t.scrollTop=w+x:x+I>H&&(t.scrollTop=w+x-H+I)}static fadeIn(t,e){t.style.opacity=0;let o=+new Date,i=0,r=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/e,t.style.opacity=i,o=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}static fadeOut(t,e){var o=1,i=50,r=e,u=i/r;let h=setInterval(()=>{o=o-u,o<=0&&(o=0,clearInterval(h)),t.style.opacity=o},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var o=Element.prototype,i=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return i.call(t,e)}static getOuterWidth(t,e){let o=t.offsetWidth;if(e){let i=getComputedStyle(t);o+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return o}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,o=getComputedStyle(t);return e+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),e}static width(t){let e=t.offsetWidth,o=getComputedStyle(t);return e-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,o=getComputedStyle(t);return e+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),e}static getOuterHeight(t,e){let o=t.offsetHeight;if(e){let i=getComputedStyle(t);o+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return o}static getHeight(t){let e=t.offsetHeight,o=getComputedStyle(t);return e-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,o=getComputedStyle(t);return e-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),e}static getViewport(){let t=window,e=document,o=e.documentElement,i=e.getElementsByTagName("body")[0],r=t.innerWidth||o.clientWidth||i.clientWidth,u=t.innerHeight||o.clientHeight||i.clientHeight;return{width:r,height:u}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return!0;var o=t.indexOf("Trident/");if(o>0){var i=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw"Cannot append "+e+" to "+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+e}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let o=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,o){t[e].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=""){let o=this.find(t,this.getFocusableSelectorString(e)),i=[];for(let r of o){let u=getComputedStyle(r);this.isVisible(r)&&u.display!="none"&&u.visibility!="hidden"&&i.push(r)}return i}static getFocusableElement(t,e=""){let o=this.findSingle(t,this.getFocusableSelectorString(e));if(o){let i=getComputedStyle(o);if(this.isVisible(o)&&i.display!="none"&&i.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,e=""){let o=this.getFocusableElements(t,e);return o.length>0?o[0]:null}static getLastFocusableElement(t,e){let o=this.getFocusableElements(t,e);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,e=!1){let o=n.getFocusableElements(t),i=0;if(o&&o.length>0){let r=o.indexOf(o[0].ownerDocument.activeElement);e?r==-1||r===0?i=o.length-1:i=r-1:r!=-1&&r!==o.length-1&&(i=r+1)}return o[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return e?.nextElementSibling;case"@prev":return e?.previousElementSibling;case"@parent":return e?.parentElement;case"@grandparent":return e?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(u=>!!(u&&u.constructor&&u.call&&u.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let o=t.getAttribute(e);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,e={},...o){if(t){let i=document.createElement(t);return this.setAttributes(i,e),i.append(...o),i}}static setAttribute(t,e="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(e,o)}static setAttributes(t,e={}){if(this.isElement(t)){let o=(i,r)=>{let u=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[r].flat().reduce((h,V)=>{if(V!=null){let x=typeof V;if(x==="string"||x==="number")h.push(V);else if(x==="object"){let w=Array.isArray(V)?o(i,V):Object.entries(V).map(([H,I])=>i==="style"&&(I||I===0)?`${H.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${I}`:I?H:void 0);h=w.length?h.concat(w.filter(H=>!!H)):h}}return h},u)};Object.entries(e).forEach(([i,r])=>{if(r!=null){let u=i.match(/^on(.+)/);u?t.addEventListener(u[1].toLowerCase(),r):i==="pBind"?this.setAttributes(t,r):(r=i==="class"?[...new Set(o("class",r))].join(" ").trim():i==="style"?o("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=r),t.setAttribute(i,r))}})}}static isFocusableElement(t,e=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return n})();var de=(()=>{class n extends F{autofocus=!1;focused=!1;platformId=k(Nt);document=k(jt);host=k(ht);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){W(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=le.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275dir=rt({type:n,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[_]})}return n})();var ce=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Oe=`
    ${ce}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Fe={root:({instance:n})=>["p-badge p-component",{"p-badge-circle":re(n.value())&&String(n.value()).length===1,"p-badge-dot":ie(n.value()),"p-badge-sm":n.size()==="small"||n.badgeSize()==="small","p-badge-lg":n.size()==="large"||n.badgeSize()==="large","p-badge-xl":n.size()==="xlarge"||n.badgeSize()==="xlarge","p-badge-info":n.severity()==="info","p-badge-success":n.severity()==="success","p-badge-warn":n.severity()==="warn","p-badge-danger":n.severity()==="danger","p-badge-secondary":n.severity()==="secondary","p-badge-contrast":n.severity()==="contrast"}]},ue=(()=>{class n extends ${name="badge";theme=Oe;classes=Fe;static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275prov=Z({token:n,factory:n.\u0275fac})}return n})();var Dt=(()=>{class n extends F{styleClass=X();badgeSize=X();size=X();severity=X();value=X();badgeDisabled=X(!1,{transform:M});_componentStyle=k(ue);static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275cmp=y({type:n,selectors:[["p-badge"]],hostVars:4,hostBindings:function(e,o){e&2&&(C(o.cn(o.cx("root"),o.styleClass())),$t("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[R([ue]),_],decls:1,vars:1,template:function(e,o){e&1&&b(0),e&2&&N(o.value())},dependencies:[z,O],encapsulation:2,changeDetection:0})}return n})(),pe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=U({type:n});static \u0275inj=Q({imports:[Dt,O,O]})}return n})();var be=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var De=["*"],Be={root:"p-fluid"},me=(()=>{class n extends ${name="fluid";classes=Be;theme=be;static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275prov=Z({token:n,factory:n.\u0275fac})}return n})();var ge=(()=>{class n extends F{_componentStyle=k(me);static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275cmp=y({type:n,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(e,o){e&2&&C(o.cx("root"))},features:[R([me]),_],ngContentSelectors:De,decls:1,vars:0,template:function(e,o){e&1&&(lt(),it(0))},dependencies:[z],encapsulation:2,changeDetection:0})}return n})();var ze=["data-p-icon","chevron-down"],he=(()=>{class n extends q{static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275cmp=y({type:n,selectors:[["","data-p-icon","chevron-down"]],features:[_],attrs:ze,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(e,o){e&1&&(f(),B(0,"path",0))},encapsulation:2})}return n})();var Ae=["data-p-icon","chevron-left"],fe=(()=>{class n extends q{static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275cmp=y({type:n,selectors:[["","data-p-icon","chevron-left"]],features:[_],attrs:Ae,decls:1,vars:0,consts:[["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(e,o){e&1&&(f(),B(0,"path",0))},encapsulation:2})}return n})();var Ze=["data-p-icon","chevron-right"],Ce=(()=>{class n extends q{static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275cmp=y({type:n,selectors:[["","data-p-icon","chevron-right"]],features:[_],attrs:Ze,decls:1,vars:0,consts:[["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(e,o){e&1&&(f(),B(0,"path",0))},encapsulation:2})}return n})();var je=["data-p-icon","chevron-up"],ve=(()=>{class n extends q{static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275cmp=y({type:n,selectors:[["","data-p-icon","chevron-up"]],features:[_],attrs:je,decls:1,vars:0,consts:[["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(e,o){e&1&&(f(),B(0,"path",0))},encapsulation:2})}return n})();var Ne=["data-p-icon","spinner"],_e=(()=>{class n extends q{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+bt()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275cmp=y({type:n,selectors:[["","data-p-icon","spinner"]],features:[_],attrs:Ne,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(e,o){e&1&&(f(),St(0,"g"),B(1,"path",0),Mt(),St(2,"defs")(3,"clipPath",1),B(4,"rect",2),Mt()()),e&2&&(S("clip-path",o.pathId),c(3),Wt("id",o.pathId))},encapsulation:2})}return n})();var ye=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Re=`
    ${ye}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,We={root:"p-ink"},xe=(()=>{class n extends ${name="ripple";theme=Re;classes=We;static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275prov=Z({token:n,factory:n.\u0275fac})}return n})();var we=(()=>{class n extends F{zone=k(ft);_componentStyle=k(xe);animationListener;mouseDownListener;timeout;constructor(){super(),qt(()=>{W(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display==="none")return;if(dt(e,"p-ink-active"),!Vt(e)&&!Tt(e)){let u=Math.max(Jt(this.el.nativeElement),ne(this.el.nativeElement));e.style.height=u+"px",e.style.width=u+"px"}let o=ee(this.el.nativeElement),i=t.pageX-o.left+this.document.body.scrollTop-Tt(e)/2,r=t.pageY-o.top+this.document.body.scrollLeft-Vt(e)/2;this.renderer.setStyle(e,"top",r+"px"),this.renderer.setStyle(e,"left",i+"px"),Pt(e,"p-ink-active"),this.timeout=setTimeout(()=>{let u=this.getInk();u&&dt(u,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className=="string"&&t[e].className.indexOf("p-ink")!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&dt(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),dt(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,oe(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=rt({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[R([xe]),_]})}return n})();var Se=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var qe=["content"],Qe=["loadingicon"],Ge=["icon"],Ye=["*"],Ie=n=>({class:n});function Ue(n,l){n&1&&nt(0)}function Ke(n,l){if(n&1&&p(0,"span"),n&2){let t=g(3);C(t.cx("loadingIcon")),S("aria-hidden",!0)("data-pc-section","loadingicon")}}function Xe(n,l){if(n&1&&(f(),p(0,"svg",7)),n&2){let t=g(3);C(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),d("spin",!0),S("aria-hidden",!0)("data-pc-section","loadingicon")}}function Je(n,l){if(n&1&&(tt(0),m(1,Ke,1,4,"span",3)(2,Xe,1,5,"svg",6),et()),n&2){let t=g(2);c(),d("ngIf",t.loadingIcon),c(),d("ngIf",!t.loadingIcon)}}function tn(n,l){}function en(n,l){if(n&1&&m(0,tn,0,0,"ng-template",8),n&2){let t=g(2);d("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function nn(n,l){if(n&1&&(tt(0),m(1,Je,3,2,"ng-container",2)(2,en,1,1,null,5),et()),n&2){let t=g();c(),d("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),c(),d("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",L(3,Ie,t.cx("loadingIcon")))}}function on(n,l){if(n&1&&p(0,"span"),n&2){let t=g(2);C(t.cx("icon")),S("data-pc-section","icon")}}function rn(n,l){}function an(n,l){if(n&1&&m(0,rn,0,0,"ng-template",8),n&2){let t=g(2);d("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function sn(n,l){if(n&1&&(tt(0),m(1,on,1,3,"span",3)(2,an,1,1,null,5),et()),n&2){let t=g();c(),d("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),c(),d("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",L(3,Ie,t.cx("icon")))}}function ln(n,l){if(n&1&&(a(0,"span"),b(1),s()),n&2){let t=g();C(t.cx("label")),S("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),c(),N(t.label)}}function dn(n,l){if(n&1&&p(0,"p-badge",9),n&2){let t=g();d("value",t.badge)("severity",t.badgeSeverity)}}var cn={root:({instance:n})=>["p-button p-component",{"p-button-icon-only":(n.icon||n.buttonProps?.icon||n.iconTemplate||n._iconTemplate||n.loadingIcon||n.loadingIconTemplate||n._loadingIconTemplate)&&!n.label&&!n.buttonProps?.label,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading||n.buttonProps?.loading,"p-button-link":n.link||n.buttonProps?.link,[`p-button-${n.severity||n.buttonProps?.severity}`]:n.severity||n.buttonProps?.severity,"p-button-raised":n.raised||n.buttonProps?.raised,"p-button-rounded":n.rounded||n.buttonProps?.rounded,"p-button-text":n.text||n.variant==="text"||n.buttonProps?.text||n.buttonProps?.variant==="text","p-button-outlined":n.outlined||n.variant==="outlined"||n.buttonProps?.outlined||n.buttonProps?.variant==="outlined","p-button-sm":n.size==="small"||n.buttonProps?.size==="small","p-button-lg":n.size==="large"||n.buttonProps?.size==="large","p-button-plain":n.plain||n.buttonProps?.plain,"p-button-fluid":n.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:n})=>["p-button-icon",{[`p-button-icon-${n.iconPos||n.buttonProps?.iconPos}`]:n.label||n.buttonProps?.label,"p-button-icon-left":(n.iconPos==="left"||n.buttonProps?.iconPos==="left")&&n.label||n.buttonProps?.label,"p-button-icon-right":(n.iconPos==="right"||n.buttonProps?.iconPos==="right")&&n.label||n.buttonProps?.label},n.icon,n.buttonProps?.icon],spinnerIcon:({instance:n})=>Object.entries(n.iconClass()).filter(([,l])=>!!l).reduce((l,[t])=>l+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},Me=(()=>{class n extends ${name="button";theme=Se;classes=cn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275prov=Z({token:n,factory:n.\u0275fac})}return n})();var Bt=(()=>{class n extends F{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=X(void 0,{transform:M});onClick=new at;onFocus=new at;onBlur=new at;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=k(ge,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=k(Me);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[e])=>t+` ${e}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275cmp=y({type:n,selectors:[["p-button"]],contentQueries:function(e,o,i){if(e&1&&(T(i,qe,5),T(i,Qe,5),T(i,Ge,5),T(i,ut,4)),e&2){let r;P(r=E())&&(o.contentTemplate=r.first),P(r=E())&&(o.loadingIconTemplate=r.first),P(r=E())&&(o.iconTemplate=r.first),P(r=E())&&(o.templates=r)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",M],loading:[2,"loading","loading",M],loadingIcon:"loadingIcon",raised:[2,"raised","raised",M],rounded:[2,"rounded","rounded",M],text:[2,"text","text",M],plain:[2,"plain","plain",M],severity:"severity",outlined:[2,"outlined","outlined",M],link:[2,"link","link",M],tabindex:[2,"tabindex","tabindex",Ct],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",M],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[R([Me]),_],ngContentSelectors:Ye,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(e,o){e&1&&(lt(),a(0,"button",0),K("click",function(r){return o.onClick.emit(r)})("focus",function(r){return o.onFocus.emit(r)})("blur",function(r){return o.onBlur.emit(r)}),it(1),m(2,Ue,1,0,"ng-container",1)(3,nn,3,5,"ng-container",2)(4,sn,3,5,"ng-container",2)(5,ln,2,5,"span",3)(6,dn,1,2,"p-badge",4),s()),e&2&&(C(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),d("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus)),S("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),c(2),d("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),c(),d("ngIf",o.loading),c(),d("ngIf",!o.loading),c(),d("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),c(),d("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[z,vt,yt,_t,we,de,_e,pe,Dt,O],encapsulation:2,changeDetection:0})}return n})(),ke=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=U({type:n});static \u0275inj=Q({imports:[z,Bt,O,O]})}return n})();var Pe=`
    .p-carousel {
        display: flex;
        flex-direction: column;
    }

    .p-carousel-content-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .p-carousel-content {
        display: flex;
        flex-direction: row;
        gap: dt('carousel.content.gap');
    }

    .p-carousel-content:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-carousel-item-list {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-item-list:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-carousel-prev-button,
    .p-carousel-next-button {
        align-self: center;
        flex-shrink: 0;
    }

    .p-carousel-indicator-list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        padding: dt('carousel.indicator.list.padding');
        gap: dt('carousel.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-carousel-indicator-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('carousel.indicator.background');
        width: dt('carousel.indicator.width');
        height: dt('carousel.indicator.height');
        border: 0 none;
        transition:
            background dt('carousel.transition.duration'),
            color dt('carousel.transition.duration'),
            outline-color dt('carousel.transition.duration'),
            box-shadow dt('carousel.transition.duration');
        outline-color: transparent;
        border-radius: dt('carousel.indicator.border.radius');
        padding: 0;
        margin: 0;
        user-select: none;
        cursor: pointer;
    }

    .p-carousel-indicator-button:focus-visible {
        box-shadow: dt('carousel.indicator.focus.ring.shadow');
        outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');
        outline-offset: dt('carousel.indicator.focus.ring.offset');
    }

    .p-carousel-indicator-button:hover {
        background: dt('carousel.indicator.hover.background');
    }

    .p-carousel-indicator-active .p-carousel-indicator-button {
        background: dt('carousel.indicator.active.background');
    }

    .p-carousel-vertical .p-carousel-content {
        flex-direction: column;
    }

    .p-carousel-vertical .p-carousel-item-list {
        flex-direction: column;
        height: 100%;
    }

    .p-items-hidden .p-carousel-item {
        visibility: hidden;
    }

    .p-items-hidden .p-carousel-item.p-carousel-item-active {
        visibility: visible;
    }
`;var pn=["item"],bn=["header"],mn=["footer"],gn=["previousicon"],hn=["nexticon"],fn=["itemsContainer"],Cn=["indicatorContent"],vn=[[["p-header"]],[["p-footer"]]],_n=["p-header","p-footer"],yn=n=>({height:n}),xt=n=>({index:n}),zt=n=>({$implicit:n});function xn(n,l){n&1&&nt(0)}function wn(n,l){if(n&1&&(a(0,"div"),it(1),m(2,xn,1,0,"ng-container",11),s()),n&2){let t=g();C(t.cx("header")),c(2),d("ngTemplateOutlet",t.headerTemplate)}}function Sn(n,l){n&1&&(f(),p(0,"svg",16))}function Mn(n,l){n&1&&(f(),p(0,"svg",17))}function In(n,l){if(n&1&&(tt(0),m(1,Sn,1,0,"svg",14)(2,Mn,1,0,"svg",15),et()),n&2){let t=g(3);c(),d("ngIf",!t.isVertical()),c(),d("ngIf",t.isVertical())}}function kn(n,l){}function Pn(n,l){n&1&&m(0,kn,0,0,"ng-template")}function En(n,l){if(n&1&&(tt(0),m(1,Pn,1,0,null,11),et()),n&2){let t=g(3);c(),d("ngTemplateOutlet",t.previousIconTemplate||t._previousIconTemplate)}}function Vn(n,l){if(n&1&&m(0,In,3,2,"ng-container",13)(1,En,2,1,"ng-container",13),n&2){let t=g(2);d("ngIf",!t.previousIconTemplate&&!t._previousIconTemplate&&!(t.prevButtonProps!=null&&t.prevButtonProps.icon)),c(),d("ngIf",(t.previousIconTemplate||t._previousIconTemplate)&&!(t.prevButtonProps!=null&&t.prevButtonProps.icon))}}function Tn(n,l){if(n&1){let t=st();a(0,"p-button",12),K("click",function(o){G(t);let i=g();return Y(i.navBackward(o))}),m(1,Vn,2,2,"ng-template",null,1,kt),s()}if(n&2){let t=g();C(t.cx("pcPrevButton")),d("text",!0)("buttonProps",t.prevButtonProps),S("aria-label",t.ariaPrevButtonLabel())}}function Ln(n,l){n&1&&nt(0)}function On(n,l){if(n&1&&(a(0,"div"),m(1,Ln,1,0,"ng-container",18),s()),n&2){let t=l.$implicit,e=l.index,o=g();C(o.cx("itemClone",L(7,xt,e))),S("aria-hidden",o.totalShiftedItems*-1!==o.value.length)("aria-label",o.ariaSlideNumber(e))("aria-roledescription",o.ariaSlideLabel()),c(),d("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",L(9,zt,t))}}function Fn(n,l){n&1&&nt(0)}function Hn(n,l){if(n&1&&(a(0,"div"),m(1,Fn,1,0,"ng-container",18),s()),n&2){let t=l.$implicit,e=l.index,o=g();C(o.cx("item",L(7,xt,e))),S("aria-hidden",!(o.firstIndex()<=e&&o.lastIndex()>=e))("aria-label",o.ariaSlideNumber(e))("aria-roledescription",o.ariaSlideLabel()),c(),d("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",L(9,zt,t))}}function Dn(n,l){n&1&&nt(0)}function Bn(n,l){if(n&1&&(a(0,"div"),m(1,Dn,1,0,"ng-container",18),s()),n&2){let t=l.$implicit,e=l.index,o=g();C(o.cx("itemClone",L(4,xt,e))),c(),d("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",L(6,zt,t))}}function zn(n,l){n&1&&(f(),p(0,"svg",22))}function An(n,l){n&1&&(f(),p(0,"svg",23))}function Zn(n,l){if(n&1&&(tt(0),m(1,zn,1,0,"svg",20)(2,An,1,0,"svg",21),et()),n&2){let t=g(3);c(),d("ngIf",!t.isVertical()),c(),d("ngIf",t.isVertical())}}function jn(n,l){}function Nn(n,l){n&1&&m(0,jn,0,0,"ng-template")}function Rn(n,l){if(n&1&&(a(0,"span"),m(1,Nn,1,0,null,11),s()),n&2){let t=g(3);c(),d("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function Wn(n,l){if(n&1&&m(0,Zn,3,2,"ng-container",13)(1,Rn,2,1,"span",13),n&2){let t=g(2);d("ngIf",!t.nextIconTemplate&&!t._nextIconTemplate&&!(t.nextButtonProps!=null&&t.nextButtonProps.icon)),c(),d("ngIf",t.nextIconTemplate||t._nextIconTemplate&&!(t.nextButtonProps!=null&&t.nextButtonProps.icon))}}function $n(n,l){if(n&1){let t=st();a(0,"p-button",19),K("click",function(o){G(t);let i=g();return Y(i.navForward(o))}),m(1,Wn,2,2,"ng-template",null,1,kt),s()}if(n&2){let t=g();C(t.cx("pcNextButton")),d("buttonProps",t.nextButtonProps)("text",!0),S("aria-label",t.ariaNextButtonLabel())}}function qn(n,l){if(n&1){let t=st();a(0,"li")(1,"button",25),K("click",function(o){let i=G(t).index,r=g(2);return Y(r.onDotClick(o,i))}),s()()}if(n&2){let t=l.index,e=g(2);C(e.cx("indicator",L(9,xt,t))),S("data-pc-section","indicator"),c(),C(e.cx("indicatorButton")),d("ngStyle",e.indicatorStyle)("tabindex",e._page===t?0:-1),S("aria-label",e.ariaPageLabel(t+1))("aria-current",e._page===t?"page":void 0)}}function Qn(n,l){if(n&1){let t=st();a(0,"ul",24,2),K("keydown",function(o){G(t);let i=g();return Y(i.onIndicatorKeydown(o))}),m(2,qn,2,11,"li",8),s()}if(n&2){let t=g();C(t.cx("indicatorList")),d("ngStyle",t.indicatorsContentStyle),c(2),d("ngForOf",t.totalDotsArray())}}function Gn(n,l){n&1&&nt(0)}function Yn(n,l){if(n&1&&(a(0,"div"),it(1,1),m(2,Gn,1,0,"ng-container",11),s()),n&2){let t=g();C(t.cx("footer")),c(2),d("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Un={root:({instance:n})=>["p-carousel p-component",{"p-carousel-vertical":n.isVertical(),"p-carousel-horizontal":!n.isVertical()}],header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:({instance:n})=>["p-carousel-prev-button",{"p-disabled":n.isBackwardNavDisabled()}],viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:({instance:n,index:l})=>["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":n.totalShiftedItems*-1===n.value.length,"p-carousel-item-start":l===0,"p-carousel-item-end":n.clonedItemsForStarting.length-1===l}],item:({instance:n,index:l})=>["p-carousel-item",{"p-carousel-item-active":n.firstIndex()<=l&&n.lastIndex()>=l,"p-carousel-item-start":n.firstIndex()===l,"p-carousel-item-end":n.lastIndex()===l}],pcNextButton:({instance:n})=>["p-carousel-next-button",{"p-disabled":n.isForwardNavDisabled()}],indicatorList:({instance:n})=>["p-carousel-indicator-list",n.indicatorsContentClass],indicator:({instance:n,index:l})=>["p-carousel-indicator",{"p-carousel-indicator-active":n._page===l}],indicatorButton:({instance:n})=>["p-carousel-indicator-button",n.indicatorStyleClass],footer:"p-carousel-footer"},Ee=(()=>{class n extends ${name="carousel";theme=Pe;classes=Un;static \u0275fac=(()=>{let t;return function(o){return(t||(t=v(n)))(o||n)}})();static \u0275prov=Z({token:n,factory:n.\u0275fac})}return n})();var At=(()=>{class n extends F{el;zone;get page(){return this._page}set page(t){this.isCreated&&t!==this._page&&(this.autoplayInterval&&this.stopAutoplay(),t>this._page&&t<=this.totalDots()-1?this.step(-1,t):t<this._page&&this.step(1,t)),this._page=t}get numVisible(){return this._numVisible}set numVisible(t){this._numVisible=t}get numScroll(){return this._numVisible}set numScroll(t){this._numScroll=t}responsiveOptions;orientation="horizontal";verticalViewPortHeight="300px";contentClass="";indicatorsContentClass="";indicatorsContentStyle;indicatorStyleClass="";indicatorStyle;get value(){return this._value}set value(t){this._value=t}circular=!1;showIndicators=!0;showNavigators=!0;autoplayInterval=0;styleClass;prevButtonProps={severity:"secondary",text:!0,rounded:!0};nextButtonProps={severity:"secondary",text:!0,rounded:!0};onPage=new at;itemsContainer;indicatorContent;headerFacet;footerFacet;_numVisible=1;_numScroll=1;_oldNumScroll=0;prevState={numScroll:0,numVisible:0,value:[]};defaultNumScroll=1;defaultNumVisible=1;_page=0;_value;carouselStyle;id;totalShiftedItems;isRemainingItemsAdded=!1;animationTimeout;translateTimeout;remainingItems=0;_items;startPos;documentResizeListener;clonedItemsForStarting;clonedItemsForFinishing;allowAutoplay;interval;isCreated;swipeThreshold=20;itemTemplate;headerTemplate;footerTemplate;previousIconTemplate;nextIconTemplate;_itemTemplate;_headerTemplate;_footerTemplate;_previousIconTemplate;_nextIconTemplate;window;_componentStyle=k(Ee);constructor(t,e){super(),this.el=t,this.zone=e,this.totalShiftedItems=this.page*this.numScroll*-1,this.window=this.document.defaultView}ngOnChanges(t){W(this.platformId)&&(t.value&&this.circular&&this._value&&this.setCloneItems(),this.isCreated&&(t.numVisible&&(this.responsiveOptions&&(this.defaultNumVisible=this.numVisible),this.isCircular()&&this.setCloneItems(),this.createStyle(),this.calculatePosition()),t.numScroll&&this.responsiveOptions&&(this.defaultNumScroll=this.numScroll))),this.cd.markForCheck()}templates;ngAfterContentInit(){this.id=bt("pn_id_"),W(this.platformId)&&(this.allowAutoplay=!!this.autoplayInterval,this.circular&&this.setCloneItems(),this.responsiveOptions&&(this.defaultNumScroll=this._numScroll,this.defaultNumVisible=this._numVisible),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()),this.templates?.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break;case"header":this._headerTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"previousicon":this._previousIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break;default:this._itemTemplate=t.template;break}}),this.cd.detectChanges()}ngAfterContentChecked(){if(W(this.platformId)){let t=this.isCircular(),e=this.totalShiftedItems;if(this.value&&this.itemsContainer&&(this.prevState.numScroll!==this._numScroll||this.prevState.numVisible!==this._numVisible||this.prevState.value.length!==this.value.length)){this.autoplayInterval&&this.stopAutoplay(!1),this.remainingItems=(this.value.length-this._numVisible)%this._numScroll;let o=this._page;this.totalDots()!==0&&o>=this.totalDots()&&(o=this.totalDots()-1,this._page=o,this.onPage.emit({page:this.page})),e=o*this._numScroll*-1,t&&(e-=this._numVisible),o===this.totalDots()-1&&this.remainingItems>0?(e+=-1*this.remainingItems+this._numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this._oldNumScroll=this._numScroll,this.prevState.numScroll=this._numScroll,this.prevState.numVisible=this._numVisible,this.prevState.value=[...this._value],this.totalDots()>0&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${e*(100/this._numVisible)}%, 0)`:`translate3d(${e*(100/this._numVisible)}%, 0, 0)`),this.isCreated=!0,this.autoplayInterval&&this.isAutoplay()&&this.startAutoplay()}t&&(this.page===0?e=-1*this._numVisible:e===0&&(e=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),e!==this.totalShiftedItems&&(this.totalShiftedItems=e))}}createStyle(){this.carouselStyle||(this.carouselStyle=this.renderer.createElement("style"),this.carouselStyle.type="text/css",Lt(this.carouselStyle,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.carouselStyle),Lt(this.carouselStyle,"nonce",this.config?.csp()?.nonce));let t=`
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100/this.numVisible}%
			}
        `;if(this.responsiveOptions){this.responsiveOptions.sort((e,o)=>{let i=e.breakpoint,r=o.breakpoint,u=null;return i==null&&r!=null?u=-1:i!=null&&r==null?u=1:i==null&&r==null?u=0:typeof i=="string"&&typeof r=="string"?u=i.localeCompare(r,void 0,{numeric:!0}):u=i<r?-1:i>r?1:0,-1*u});for(let e=0;e<this.responsiveOptions.length;e++){let o=this.responsiveOptions[e];t+=`
                    @media screen and (max-width: ${o.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100/o.numVisible}%
                        }
                    }
                `}}this.carouselStyle.innerHTML=t}calculatePosition(){if(this.responsiveOptions){let t={numVisible:this.defaultNumVisible,numScroll:this.defaultNumScroll};if(typeof window<"u"){let e=window.innerWidth;for(let o=0;o<this.responsiveOptions.length;o++){let i=this.responsiveOptions[o];parseInt(i.breakpoint,10)>=e&&(t=i)}}if(this._numScroll!==t.numScroll){let e=this._page;e=Math.floor(e*this._numScroll/t.numScroll);let o=t.numScroll*this.page*-1;this.isCircular()&&(o-=t.numVisible),this.totalShiftedItems=o,this._numScroll=t.numScroll,this._page=e,this.onPage.emit({page:this.page})}this._numVisible!==t.numVisible&&(this._numVisible=t.numVisible,this.setCloneItems()),this.cd.markForCheck()}}setCloneItems(){this.clonedItemsForStarting=[],this.clonedItemsForFinishing=[],this.isCircular()&&(this.clonedItemsForStarting.push(...this.value.slice(-1*this._numVisible)),this.clonedItemsForFinishing.push(...this.value.slice(0,this._numVisible)))}firstIndex(){return this.isCircular()?-1*(this.totalShiftedItems+this.numVisible):this.totalShiftedItems*-1}lastIndex(){return this.firstIndex()+this.numVisible-1}totalDots(){return this.value?.length?Math.ceil((this.value.length-this._numVisible)/this._numScroll)+1:0}totalDotsArray(){let t=this.totalDots();return t<=0?[]:Array(t).fill(0)}isVertical(){return this.orientation==="vertical"}isCircular(){return this.circular&&this.value&&this.value.length>=this.numVisible}isAutoplay(){return this.autoplayInterval&&this.allowAutoplay}isForwardNavDisabled(){return this.isEmpty()||this._page>=this.totalDots()-1&&!this.isCircular()}isBackwardNavDisabled(){return this.isEmpty()||this._page<=0&&!this.isCircular()}isEmpty(){return!this.value||this.value.length===0}navForward(t,e){(this.isCircular()||this._page<this.totalDots()-1)&&this.step(-1,e),this.autoplayInterval&&this.stopAutoplay(),t&&t.cancelable&&t.preventDefault()}navBackward(t,e){(this.isCircular()||this._page!==0)&&this.step(1,e),this.autoplayInterval&&this.stopAutoplay(),t&&t.cancelable&&t.preventDefault()}onDotClick(t,e){let o=this._page;this.autoplayInterval&&this.stopAutoplay(),e>o?this.navForward(t,e):e<o&&this.navBackward(t,e)}onIndicatorKeydown(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break}}onRightKey(){let t=[...ct(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e+1===t.length?t.length-1:e+1)}onLeftKey(){let t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)}onHomeKey(){let t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)}onEndKey(){let t=[...ct(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]r')],e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,t.length-1)}onTabKey(){let t=[...ct(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],e=t.findIndex(r=>te(r,"data-p-highlight")===!0),o=Et(this.indicatorContent.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]'),i=t.findIndex(r=>r===o.parentElement);t[i].children[0].tabIndex="-1",t[e].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let t=[...ct(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],e=Et(this.indicatorContent.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(o=>o===e.parentElement)}changedFocusedIndicator(t,e){let o=[...ct(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')];o[t].children[0].tabIndex="-1",o[e].children[0].tabIndex="0",o[e].children[0].focus()}step(t,e){let o=this.totalShiftedItems,i=this.isCircular();if(e!=null)o=this._numScroll*e*-1,i&&(o-=this._numVisible),this.isRemainingItemsAdded=!1;else{o+=this._numScroll*t,this.isRemainingItemsAdded&&(o+=this.remainingItems-this._numScroll*t,this.isRemainingItemsAdded=!1);let r=i?o+this._numVisible:o;e=Math.abs(Math.floor(r/this._numScroll))}i&&this.page===this.totalDots()-1&&t===-1?(o=-1*(this.value.length+this._numVisible),e=0):i&&this.page===0&&t===1?(o=0,e=this.totalDots()-1):e===this.totalDots()-1&&this.remainingItems>0&&(o+=this.remainingItems*-1-this._numScroll*t,this.isRemainingItemsAdded=!0),this.itemsContainer&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${o*(100/this._numVisible)}%, 0)`:`translate3d(${o*(100/this._numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=o,this._page=e,this.onPage.emit({page:this.page}),this.cd.markForCheck()}startAutoplay(){this.interval=setInterval(()=>{this.totalDots()>0&&(this.page===this.totalDots()-1?this.step(-1,0):this.step(-1,this.page+1))},this.autoplayInterval),this.allowAutoplay=!0,this.cd.markForCheck()}stopAutoplay(t=!0){this.interval&&(clearInterval(this.interval),this.interval=void 0,t&&(this.allowAutoplay=!1)),this.cd.markForCheck()}isPlaying(){return!!this.interval}onTransitionEnd(){this.itemsContainer&&(this.itemsContainer.nativeElement.style.transition="",(this.page===0||this.page===this.totalDots()-1)&&this.isCircular()&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${this.totalShiftedItems*(100/this._numVisible)}%, 0)`:`translate3d(${this.totalShiftedItems*(100/this._numVisible)}%, 0, 0)`))}onTouchStart(t){let e=t.changedTouches[0];this.startPos={x:e.pageX,y:e.pageY}}onTouchMove(t){t.cancelable&&t.preventDefault()}onTouchEnd(t){let e=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,e.pageY-this.startPos.y):this.changePageOnTouch(t,e.pageX-this.startPos.x)}changePageOnTouch(t,e){Math.abs(e)>this.swipeThreshold&&(e<0?this.navForward(t):this.navBackward(t))}ariaPrevButtonLabel(){return this.config.translation.aria?this.config.translation.aria.prevPageLabel:void 0}ariaSlideLabel(){return this.config.translation.aria?this.config.translation.aria.slide:void 0}ariaNextButtonLabel(){return this.config.translation.aria?this.config.translation.aria.nextPageLabel:void 0}ariaSlideNumber(t){return this.config.translation.aria?this.config.translation.aria.slideNumber.replace(/{slideNumber}/g,t):void 0}ariaPageLabel(t){return this.config.translation.aria?this.config.translation.aria.pageLabel.replace(/{page}/g,t):void 0}bindDocumentListeners(){W(this.platformId)&&(this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",t=>{this.calculatePosition()})))}unbindDocumentListeners(){W(this.platformId)&&this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()}static \u0275fac=function(e){return new(e||n)(pt(ht),pt(ft))};static \u0275cmp=y({type:n,selectors:[["p-carousel"]],contentQueries:function(e,o,i){if(e&1&&(T(i,ae,5),T(i,se,5),T(i,pn,4),T(i,bn,4),T(i,mn,4),T(i,gn,4),T(i,hn,4),T(i,ut,4)),e&2){let r;P(r=E())&&(o.headerFacet=r.first),P(r=E())&&(o.footerFacet=r.first),P(r=E())&&(o.itemTemplate=r.first),P(r=E())&&(o.headerTemplate=r.first),P(r=E())&&(o.footerTemplate=r.first),P(r=E())&&(o.previousIconTemplate=r.first),P(r=E())&&(o.nextIconTemplate=r.first),P(r=E())&&(o.templates=r)}},viewQuery:function(e,o){if(e&1&&(It(fn,5),It(Cn,5)),e&2){let i;P(i=E())&&(o.itemsContainer=i.first),P(i=E())&&(o.indicatorContent=i.first)}},hostVars:4,hostBindings:function(e,o){e&2&&(S("id",o.id)("role","region"),C(o.cn(o.cx("root"),o.styleClass)))},inputs:{page:"page",numVisible:"numVisible",numScroll:"numScroll",responsiveOptions:"responsiveOptions",orientation:"orientation",verticalViewPortHeight:"verticalViewPortHeight",contentClass:"contentClass",indicatorsContentClass:"indicatorsContentClass",indicatorsContentStyle:"indicatorsContentStyle",indicatorStyleClass:"indicatorStyleClass",indicatorStyle:"indicatorStyle",value:"value",circular:[2,"circular","circular",M],showIndicators:[2,"showIndicators","showIndicators",M],showNavigators:[2,"showNavigators","showNavigators",M],autoplayInterval:[2,"autoplayInterval","autoplayInterval",Ct],styleClass:"styleClass",prevButtonProps:"prevButtonProps",nextButtonProps:"nextButtonProps"},outputs:{onPage:"onPage"},features:[R([Ee]),_,wt],ngContentSelectors:_n,decls:13,vars:21,consts:[["itemsContainer",""],["icon",""],["indicatorContent",""],[3,"class",4,"ngIf"],[3,"ngClass"],[3,"class","text","buttonProps","click",4,"ngIf"],[3,"touchend","touchstart","touchmove","ngStyle"],[3,"transitionend"],[3,"class",4,"ngFor","ngForOf"],["type","button",3,"class","buttonProps","text","click",4,"ngIf"],[3,"class","ngStyle","keydown",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"click","text","buttonProps"],[4,"ngIf"],["data-p-icon","chevron-left",4,"ngIf"],["data-p-icon","chevron-up",4,"ngIf"],["data-p-icon","chevron-left"],["data-p-icon","chevron-up"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button",3,"click","buttonProps","text"],["data-p-icon","chevron-right",4,"ngIf"],["data-p-icon","chevron-down",4,"ngIf"],["data-p-icon","chevron-right"],["data-p-icon","chevron-down"],[3,"keydown","ngStyle"],["type","button",3,"click","ngStyle","tabindex"]],template:function(e,o){if(e&1){let i=st();lt(vn),m(0,wn,3,3,"div",3),a(1,"div",4)(2,"div"),m(3,Tn,3,5,"p-button",5),a(4,"div",6),K("touchend",function(u){return G(i),Y(o.onTouchEnd(u))})("touchstart",function(u){return G(i),Y(o.onTouchStart(u))})("touchmove",function(u){return G(i),Y(o.onTouchMove(u))}),a(5,"div",7,0),K("transitionend",function(){return G(i),Y(o.onTransitionEnd())}),m(7,On,2,11,"div",8)(8,Hn,2,11,"div",8)(9,Bn,2,8,"div",8),s()(),m(10,$n,3,5,"p-button",9),s(),m(11,Qn,3,4,"ul",10),s(),m(12,Yn,3,3,"div",3)}e&2&&(d("ngIf",o.headerFacet||o.headerTemplate),c(),C(o.contentClass),d("ngClass",o.cx("contentContainer")),c(),C(o.cx("content")),S("aria-live",o.allowAutoplay?"polite":"off"),c(),d("ngIf",o.showNavigators),c(),C(o.cx("viewport")),d("ngStyle",L(19,yn,o.isVertical()?o.verticalViewPortHeight:"auto")),c(),C(o.cx("itemList")),c(2),d("ngForOf",o.clonedItemsForStarting),c(),d("ngForOf",o.value),c(),d("ngForOf",o.clonedItemsForFinishing),c(),d("ngIf",o.showNavigators),c(),d("ngIf",o.showIndicators),c(),d("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[z,Qt,Gt,vt,yt,_t,Ce,ke,Bt,fe,he,ve,O],encapsulation:2,changeDetection:0})}return n})(),Ve=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=U({type:n});static \u0275inj=Q({imports:[At,O,O]})}return n})();function Xn(n,l){if(n&1&&(a(0,"article",93)(1,"figure",94),p(2,"img",95),s(),a(3,"h4",96),b(4),s(),a(5,"p",97),b(6),s(),a(7,"a",98),b(8,"View more "),a(9,"span",9),b(10,"\u2192"),s()()()),n&2){let t=l.$implicit;c(2),d("src",t.image,Rt),c(2),N(t.title),c(2),N(t.text)}}var Te=class n{constructor(l){this.title=l;this.title.setTitle("Motahda Group - Home")}hero={title:"Your Trusted Partner In Fire Protection",subtitle:"HVAC, Electrical, And Plumbing Systems Since 2003.",description:"We provide design, supply, installation, and maintenance services aligned with NFPA, European, and Egyptian standards."};services=[{icon:"\u{1F9EF}",title:"Automatic Sprinklers (Wet/Dry)"},{icon:"\u{1F9F1}",title:"Standpipe Systems"},{icon:"\u{1F4A8}",title:"CO\u2082 and FM200 Systems"},{icon:"\u{1F4A7}",title:"Water Mist & Clean Agent Systems"},{icon:"\u{1F6B0}",title:"Fire Pumps and Fire Tanks"},{icon:"\u{1F4DF}",title:"Addressable & Conventional Alarms"}];projects=Array.from({length:8}).map((l,t)=>({image:"assets/Images/home/AdobeStock_894712151-1-png.webp",title:"General authority for economic zones",text:"Raising the efficiency of the fire network, changing the fire..."}));partners=Array.from({length:10}).map((l,t)=>"assets/Images/cropped-logo-180x180.png");scroll(l,t){let e=document.getElementById(l==="proj"?"projTrack":"logoTrack");if(!e)return;let o=l==="proj"?320:240;e.scrollBy({left:o*t,behavior:"smooth"})}responsiveOptions=[{breakpoint:"1360px",numVisible:4,numScroll:1},{breakpoint:"1200px",numVisible:3,numScroll:1},{breakpoint:"992px",numVisible:2,numScroll:1},{breakpoint:"576px",numVisible:1,numScroll:1}];static \u0275fac=function(t){return new(t||n)(pt(Yt))};static \u0275cmp=y({type:n,selectors:[["app-home"]],decls:168,vars:20,consts:[[1,"home"],["role","banner",1,"hero"],["aria-hidden","true",1,"hero__bg"],[1,"hero__content"],[1,"hero__title"],[1,"hero__subtitle"],[1,"hero__desc"],[1,"hero__actions"],["routerLink","/contact",1,"btn","btn--primary"],[1,"btn__icon"],["routerLink","/services",1,"btn","btn--ghost"],["id","about",1,"about"],[1,"container","about__grid"],[1,"about__text"],[1,"about__heading"],[1,"about__lead"],[1,"about__list"],[1,"about__item"],[1,"about__bullet"],["viewBox","0 0 24 24","fill","currentColor","aria-hidden","true"],["d","M12 14.17C9.87 14.17 8.13 12.44 8.13 10.3C8.13 8.16 9.87 6.44 12 6.44C14.13 6.44 15.87 8.17 15.87 10.31C15.87 12.45 14.13 14.17 12 14.17ZM12 7.94C10.7 7.94 9.63 9 9.63 10.31C9.63 11.62 10.69 12.68 12 12.68C13.31 12.68 14.37 11.62 14.37 10.31C14.37 9 13.3 7.94 12 7.94Z"],["d","M12 22.76C10.52 22.76 9.03 22.2 7.87 21.09C4.92 18.25 1.66 13.72 2.89 8.33C4 3.44 8.27 1.25 12 1.25C12 1.25 12 1.25 12.01 1.25C15.74 1.25 20.01 3.44 21.12 8.34C22.34 13.73 19.08 18.25 16.13 21.09C14.97 22.2 13.48 22.76 12 22.76ZM12 2.75C9.09 2.75 5.35 4.3 4.36 8.66C3.28 13.37 6.24 17.43 8.92 20C10.65 21.67 13.36 21.67 15.09 20C17.76 17.43 20.72 13.37 19.66 8.66C18.66 4.3 14.91 2.75 12 2.75Z"],["d","M9.4802 20.69C8.9802 20.69 8.6302 20.52 8.4202 20.36C8.0202 20.07 7.40019 19.32 7.79019 17.64L8.36017 15.18C8.41017 14.97 8.30018 14.59 8.15018 14.43L6.16019 12.44C5.11019 11.39 5.20018 10.48 5.34018 10.03C5.48018 9.58 5.94018 8.78999 7.40018 8.53999L9.9502 8.12C10.1402 8.08999 10.4502 7.86 10.5302 7.69L11.9402 4.87C12.6202 3.51 13.5202 3.31 14.0002 3.31C14.4802 3.31 15.3802 3.51 16.0602 4.87L17.4702 7.69C17.5602 7.86 17.8602 8.08999 18.0502 8.12L20.6002 8.53999C22.0602 8.77999 22.5202 9.58 22.6602 10.03C22.8002 10.48 22.8902 11.39 21.8402 12.44L19.8502 14.43C19.7002 14.58 19.5902 14.97 19.6402 15.18L20.2102 17.64C20.6002 19.33 19.9802 20.07 19.5802 20.36C19.1802 20.65 18.2902 21.02 16.7902 20.13L14.4002 18.71C14.2002 18.59 13.7802 18.59 13.5802 18.71L11.1902 20.13C10.5002 20.55 9.9202 20.69 9.4802 20.69ZM14.0002 4.81C13.8402 4.81 13.5502 4.99999 13.2802 5.53999L11.8702 8.36C11.5702 8.97 10.8602 9.49001 10.1902 9.60001L7.6402 10.02C7.0702 10.12 6.8102 10.33 6.7602 10.49C6.7102 10.65 6.80018 10.97 7.21018 11.38L9.2002 13.37C9.7102 13.88 9.98019 14.81 9.82019 15.51L9.25019 17.97C9.08019 18.68 9.19017 19.06 9.30017 19.15C9.41017 19.23 9.81018 19.22 10.4302 18.84L12.8302 17.42C13.5002 17.02 14.5102 17.02 15.1702 17.42L17.5602 18.84C18.1902 19.21 18.5902 19.23 18.7002 19.15C18.8102 19.07 18.9202 18.69 18.7502 17.97L18.1802 15.51C18.0202 14.8 18.2802 13.88 18.8002 13.37L20.7902 11.38C21.2002 10.97 21.2902 10.64 21.2402 10.49C21.1902 10.34 20.9302 10.12 20.3602 10.02L17.8102 9.60001C17.1402 9.49001 16.4302 8.97 16.1302 8.36L14.7202 5.53999C14.4502 4.99999 14.1602 4.81 14.0002 4.81Z"],["d","M8 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H8C8.41 4.25 8.75 4.59 8.75 5C8.75 5.41 8.41 5.75 8 5.75Z"],["d","M5 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.59 18.25 2 18.25H5C5.41 18.25 5.75 18.59 5.75 19C5.75 19.41 5.41 19.75 5 19.75Z"],["d","M3 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75Z"],["d","M12 22.75C11.3 22.75 10.59 22.48 10.06 21.95L8.35001 20.26C7.92001 19.84 7.35999 19.61 6.75999 19.61H6C3.93 19.61 2.25 17.94 2.25 15.89V4.97998C2.25 2.92998 3.93 1.26001 6 1.26001H18C20.07 1.26001 21.75 2.92998 21.75 4.97998V15.89C21.75 17.94 20.07 19.61 18 19.61H17.24C16.64 19.61 16.07 19.84 15.65 20.26L13.94 21.95C13.41 22.48 12.7 22.75 12 22.75ZM6 2.75C4.76 2.75 3.75 3.74997 3.75 4.96997V15.88C3.75 17.11 4.76 18.1 6 18.1H6.75999C7.75999 18.1 8.7 18.4899 9.41 19.1899L11.12 20.88C11.61 21.36 12.4 21.36 12.89 20.88L14.6 19.1899C15.31 18.4899 16.25 18.1 17.25 18.1H18C19.24 18.1 20.25 17.1 20.25 15.88V4.96997C20.25 3.73997 19.24 2.75 18 2.75H6Z"],["d","M10.3802 14.51H7.70023C7.26023 14.51 6.85023 14.2999 6.59023 13.9399C6.34023 13.5999 6.28022 13.18 6.40022 12.78C6.75022 11.71 7.61022 11.13 8.37022 10.61C9.17022 10.07 9.62022 9.73002 9.62022 9.15002C9.62022 8.63002 9.20022 8.20996 8.68022 8.20996C8.16022 8.20996 7.74023 8.63002 7.74023 9.15002C7.74023 9.56002 7.40023 9.90002 6.99023 9.90002C6.58023 9.90002 6.24023 9.56002 6.24023 9.15002C6.24023 7.81002 7.33022 6.70996 8.68022 6.70996C10.0302 6.70996 11.1202 7.80002 11.1202 9.15002C11.1202 10.56 10.0602 11.28 9.21024 11.86C8.68024 12.22 8.18022 12.56 7.93022 13.01H10.3702C10.7802 13.01 11.1202 13.35 11.1202 13.76C11.1202 14.17 10.7902 14.51 10.3802 14.51Z"],["d","M16.0399 14.5101C15.6299 14.5101 15.2899 14.1701 15.2899 13.7601V13.07H13.3299C13.3299 13.07 13.3299 13.07 13.3199 13.07C12.8299 13.07 12.3799 12.8101 12.1299 12.3901C11.8799 11.9601 11.8799 11.4301 12.1299 11.0101C12.8099 9.84007 13.5999 8.51003 14.3199 7.35003C14.6399 6.84003 15.2499 6.61008 15.8199 6.77008C16.3899 6.94008 16.7899 7.46012 16.7799 8.06012V11.58H16.9999C17.4099 11.58 17.7499 11.92 17.7499 12.33C17.7499 12.74 17.4099 13.08 16.9999 13.08H16.7899V13.7701C16.7899 14.1801 16.4599 14.5101 16.0399 14.5101ZM15.2899 8.64007C14.6999 9.60007 14.0899 10.63 13.5399 11.57H15.2899V8.64007Z"],[1,"about__badges"],["src","assets/Images/home/ISO_9001-2015-1.svg","alt","ISO 9001:2015"],["src","assets/Images/home/image-2.svg","alt","OHSAS 18001"],["routerLink","/about",1,"btn","btn--ghost","about__cta"],[1,"about__media"],[1,"about__frame"],["src","assets/Images/home/9ebf693ee8908d9f1cf5edfb57f7a2e82e055497-scaled.webp","alt","About Motahda"],["id","services",1,"services"],[1,"container"],[1,"services__panel"],[1,"services__header"],[1,"services__eyebrow"],[1,"services__headline"],[1,"services__grid"],[1,"service-card"],[1,"service-card__icon"],["viewBox","0 0 40 40","fill","currentColor","xmlns","http://www.w3.org/2000/svg","aria-hidden","true"],["d","M2.72024 0H37.2781C40.9073 0 40.9073 5.41733 37.2781 5.41733H29.8049V7.11111C29.8033 7.76807 29.5367 8.39769 29.0634 8.86227C28.59 9.32685 27.9484 9.58858 27.2789 9.59022H23.805V12.2124C23.8052 12.2937 23.7865 12.374 23.7502 12.4471L22.9001 14.4498H26.2055C26.2776 14.4496 26.349 14.4637 26.4154 14.4911C26.4818 14.5185 26.542 14.5587 26.5923 14.6093L28.1255 16.1138C28.1759 16.1633 28.2158 16.2222 28.2429 16.2869C28.2701 16.3517 28.2839 16.4211 28.2835 16.4911V18.8667C28.2835 18.9367 28.2695 19.0061 28.2421 19.0708C28.2148 19.1355 28.1748 19.1943 28.1243 19.2438C28.0739 19.2933 28.0139 19.3326 27.948 19.3594C27.8821 19.3862 27.8114 19.4 27.74 19.4H22.0228L22.9676 19.9333C23.081 20.0092 23.1609 20.1244 23.1913 20.2557C23.2218 20.387 23.2004 20.5248 23.1316 20.6413C23.0628 20.7579 22.9516 20.8445 22.8204 20.8839C22.6891 20.9234 22.5476 20.9126 22.4241 20.8538L21.7447 20.468L22.1818 21.108C22.2571 21.2249 22.283 21.366 22.2538 21.5013C22.2247 21.6367 22.1429 21.7555 22.0258 21.8325C21.9087 21.9095 21.7656 21.9386 21.627 21.9136C21.4884 21.8886 21.3652 21.8115 21.2836 21.6987L20.544 20.6102V21.9187C20.544 22.0601 20.4868 22.1958 20.3848 22.2958C20.2829 22.3958 20.1447 22.452 20.0005 22.452C19.8564 22.452 19.7181 22.3958 19.6162 22.2958C19.5143 22.1958 19.457 22.0601 19.457 21.9187V20.6769L18.774 21.72C18.7356 21.7786 18.6859 21.8292 18.6276 21.8689C18.5693 21.9087 18.5036 21.9367 18.4342 21.9516C18.3649 21.9664 18.2932 21.9676 18.2234 21.9553C18.1535 21.9429 18.0869 21.9172 18.0271 21.8796C17.9674 21.8419 17.9158 21.7931 17.8754 21.7359C17.8349 21.6787 17.8063 21.6142 17.7912 21.5462C17.7761 21.4781 17.7748 21.4078 17.7874 21.3393C17.7999 21.2707 17.8262 21.2053 17.8645 21.1467L18.341 20.4182L17.5765 20.8516C17.453 20.9104 17.3114 20.9211 17.1802 20.8817C17.0489 20.8423 16.9377 20.7556 16.8689 20.6391C16.8001 20.5226 16.7788 20.3848 16.8092 20.2535C16.8397 20.1222 16.9196 20.007 17.033 19.9311L17.9778 19.3978H12.2606C12.1164 19.3978 11.9782 19.3416 11.8762 19.2416C11.7743 19.1416 11.717 19.0059 11.717 18.8644V16.4889C11.717 16.4177 11.7316 16.3473 11.76 16.2818C11.7883 16.2163 11.8298 16.157 11.8819 16.1076L13.415 14.6027C13.4652 14.5534 13.5248 14.5143 13.5904 14.4877C13.656 14.4611 13.7263 14.4474 13.7973 14.4476H17.1018L16.2367 12.412C16.2093 12.348 16.1951 12.2792 16.1951 12.2098V9.58756H12.7221C12.053 9.58603 11.4117 9.32472 10.9383 8.8607C10.4649 8.39668 10.198 7.76768 10.1957 7.11111V5.41733H2.72024C-0.906746 5.41733 -0.906746 0 2.72024 0ZM15.4613 24.82C15.4963 24.7545 15.5448 24.6968 15.6037 24.6507C15.6626 24.6046 15.7306 24.571 15.8035 24.552C15.8763 24.5331 15.9524 24.5292 16.0269 24.5406C16.1013 24.5521 16.1726 24.5786 16.236 24.6185C16.2995 24.6584 16.3538 24.7108 16.3955 24.7724C16.4372 24.834 16.4654 24.9035 16.4783 24.9763C16.4911 25.0492 16.4884 25.1239 16.4703 25.1957C16.4522 25.2675 16.4191 25.3348 16.3731 25.3933L14.9889 27.5058C14.954 27.5713 14.9055 27.6289 14.8466 27.6751C14.7877 27.7212 14.7196 27.7548 14.6468 27.7738C14.5739 27.7927 14.4979 27.7966 14.4234 27.7851C14.349 27.7737 14.2777 27.7472 14.2143 27.7073C14.1508 27.6674 14.0965 27.615 14.0548 27.5534C14.0131 27.4918 13.9849 27.4223 13.972 27.3495C13.9591 27.2766 13.9618 27.2019 13.9799 27.1301C13.9981 27.0583 14.0312 26.991 14.0772 26.9324L15.4613 24.82ZM11.4806 30.9009C11.5624 30.7907 11.684 30.7153 11.8206 30.6904C11.9571 30.6654 12.0982 30.6927 12.2149 30.7667C12.3316 30.8406 12.415 30.9556 12.448 31.088C12.481 31.2204 12.4611 31.3602 12.3924 31.4787L11.184 33.3262C11.1476 33.3897 11.0984 33.4452 11.0394 33.4893C10.9803 33.5334 10.9127 33.5652 10.8407 33.5826C10.7687 33.6001 10.6938 33.603 10.6206 33.591C10.5474 33.579 10.4775 33.5524 10.4152 33.5129C10.3529 33.4734 10.2995 33.4218 10.2582 33.3612C10.217 33.3007 10.1889 33.2325 10.1755 33.1609C10.1622 33.0893 10.1639 33.0157 10.1806 32.9448C10.1973 32.8739 10.2287 32.807 10.2727 32.7484L11.4806 30.9009ZM9.25769 34.3027C9.29606 34.2441 9.34581 34.1935 9.4041 34.1537C9.4624 34.114 9.5281 34.0859 9.59745 34.0711C9.6668 34.0563 9.73845 34.055 9.8083 34.0674C9.87815 34.0797 9.94484 34.1055 10.0046 34.1431C10.0643 34.1808 10.1158 34.2296 10.1563 34.2868C10.1968 34.344 10.2254 34.4085 10.2405 34.4765C10.2556 34.5446 10.2569 34.6149 10.2443 34.6834C10.2317 34.752 10.2055 34.8174 10.1672 34.876L9.11276 36.4889C9.02971 36.5945 8.90934 36.6658 8.7754 36.6886C8.64145 36.7114 8.50366 36.6841 8.3892 36.6121C8.27473 36.5402 8.19192 36.4287 8.15708 36.2998C8.12225 36.1708 8.13793 36.0337 8.20103 35.9156L9.25769 34.3027ZM13.1854 22.1124C13.3096 22.0457 13.4555 22.0293 13.5918 22.067C13.7281 22.1046 13.844 22.1932 13.9144 22.3138C13.9849 22.4343 14.0043 22.5771 13.9686 22.7116C13.9329 22.8461 13.8449 22.9614 13.7235 23.0329L11.5069 24.2876C11.4454 24.3244 11.3769 24.3487 11.3057 24.3592C11.2344 24.3696 11.1617 24.366 11.0919 24.3485C11.0221 24.3309 10.9566 24.2998 10.8992 24.257C10.8418 24.2143 10.7937 24.1606 10.7578 24.0993C10.7219 24.038 10.6988 23.9703 10.69 23.9001C10.6812 23.8299 10.6868 23.7587 10.7064 23.6907C10.7261 23.6226 10.7595 23.5591 10.8045 23.504C10.8496 23.4488 10.9054 23.403 10.9688 23.3693L13.1854 22.1124ZM6.80377 25.7276C6.92786 25.6568 7.07549 25.6374 7.2142 25.6735C7.3529 25.7096 7.47132 25.7982 7.54339 25.92C7.61546 26.0418 7.63529 26.1866 7.59851 26.3227C7.56173 26.4589 7.47136 26.5751 7.34727 26.6458L5.40968 27.7453C5.2862 27.8041 5.14463 27.8149 5.01338 27.7755C4.88214 27.7361 4.77095 27.6494 4.70214 27.5329C4.63333 27.4164 4.612 27.2786 4.64243 27.1473C4.67285 27.0159 4.75279 26.9008 4.86618 26.8249L6.80377 25.7276ZM3.23838 27.7471C3.36133 27.6922 3.5007 27.6843 3.62932 27.7247C3.75794 27.7652 3.86659 27.8512 3.9341 27.966C4.00162 28.0808 4.02315 28.2162 3.99451 28.3457C3.96586 28.4752 3.8891 28.5897 3.77917 28.6667L2.08751 29.6249C1.96342 29.6956 1.81579 29.7151 1.67708 29.679C1.53838 29.6429 1.41996 29.5542 1.34789 29.4324C1.27582 29.3107 1.25599 29.1658 1.29277 29.0297C1.32955 28.8936 1.41992 28.7774 1.54401 28.7067L3.23838 27.7471ZM26.278 23.0329C26.1566 22.9614 26.0685 22.8461 26.0328 22.7116C25.9971 22.5771 26.0166 22.4343 26.0871 22.3138C26.1575 22.1932 26.2733 22.1046 26.4097 22.067C26.546 22.0293 26.6919 22.0457 26.8161 22.1124L29.0326 23.3693C29.096 23.403 29.1519 23.4488 29.197 23.504C29.242 23.5591 29.2754 23.6226 29.295 23.6907C29.3147 23.7587 29.3203 23.8299 29.3115 23.9001C29.3026 23.9703 29.2796 24.038 29.2437 24.0993C29.2077 24.1606 29.1597 24.2143 29.1023 24.257C29.0449 24.2998 28.9794 24.3309 28.9096 24.3485C28.8398 24.366 28.7671 24.3696 28.6958 24.3592C28.6245 24.3487 28.5561 24.3244 28.4946 24.2876L26.278 23.0329ZM32.6551 26.6458C32.5937 26.6108 32.5399 26.5642 32.4967 26.5088C32.4536 26.4534 32.4221 26.3901 32.4039 26.3227C32.3857 26.2554 32.3811 26.1851 32.3906 26.116C32.4001 26.0469 32.4233 25.9803 32.459 25.92C32.4947 25.8597 32.5421 25.8069 32.5986 25.7646C32.6551 25.7223 32.7195 25.6913 32.7882 25.6735C32.8569 25.6556 32.9285 25.6512 32.9989 25.6605C33.0693 25.6697 33.1372 25.6925 33.1986 25.7276L35.1362 26.8249C35.2496 26.9008 35.3295 27.0159 35.36 27.1473C35.3904 27.2786 35.369 27.4164 35.3002 27.5329C35.2314 27.6494 35.1202 27.7361 34.989 27.7755C34.8577 27.8149 34.7162 27.8041 34.5927 27.7453L32.6551 26.6458ZM36.2205 28.6667C36.1071 28.5908 36.0272 28.4756 35.9967 28.3443C35.9663 28.213 35.9876 28.0752 36.0565 27.9587C36.1253 27.8421 36.2365 27.7555 36.3677 27.7161C36.4989 27.6766 36.6405 27.6874 36.764 27.7462L38.4552 28.7058C38.5166 28.7408 38.5705 28.7873 38.6136 28.8428C38.6567 28.8982 38.6882 28.9614 38.7064 29.0288C38.7246 29.0962 38.7292 29.1665 38.7197 29.2356C38.7102 29.3047 38.687 29.3713 38.6513 29.4316C38.6156 29.4918 38.5682 29.5447 38.5117 29.587C38.4552 29.6293 38.3908 29.6602 38.3221 29.6781C38.2534 29.696 38.1818 29.7004 38.1114 29.6911C38.041 29.6818 37.9731 29.659 37.9117 29.624L36.2205 28.6667ZM23.7625 25.32C23.6831 25.2031 23.6543 25.06 23.6823 24.9223C23.7102 24.7845 23.7927 24.6632 23.9117 24.585C24.0306 24.5069 24.1763 24.4781 24.3168 24.5052C24.4572 24.5322 24.581 24.6128 24.6611 24.7293L26.0869 26.8182C26.1662 26.9352 26.195 27.0782 26.1671 27.216C26.1391 27.3537 26.0566 27.475 25.9377 27.5532C25.8187 27.6314 25.673 27.6601 25.5326 27.633C25.3921 27.606 25.2683 27.5254 25.1883 27.4089L23.7625 25.32ZM27.8641 31.3236C27.8223 31.2657 27.7928 31.2003 27.7772 31.1311C27.7616 31.0619 27.7603 30.9903 27.7733 30.9206C27.7864 30.8509 27.8135 30.7845 27.8532 30.7253C27.8928 30.666 27.9441 30.6152 28.0041 30.5757C28.0641 30.5362 28.1316 30.509 28.2025 30.4955C28.2734 30.4821 28.3463 30.4827 28.417 30.4973C28.4877 30.512 28.5546 30.5404 28.6139 30.5808C28.6732 30.6213 28.7236 30.673 28.7623 30.7329L30.0078 32.5551C30.0496 32.6129 30.0791 32.6784 30.0947 32.7476C30.1103 32.8168 30.1116 32.8883 30.0986 32.958C30.0855 33.0277 30.0584 33.0942 30.0187 33.1534C29.9791 33.2127 29.9278 33.2635 29.8678 33.303C29.8078 33.3424 29.7403 33.3697 29.6694 33.3831C29.5985 33.3966 29.5256 33.396 29.4549 33.3813C29.3842 33.3667 29.3173 33.3383 29.258 33.2978C29.1987 33.2574 29.1482 33.2057 29.1096 33.1458L27.8641 31.3236ZM30.1572 34.68C30.1177 34.6221 30.0901 34.5571 30.0762 34.4888C30.0622 34.4204 30.0621 34.3501 30.0759 34.2817C30.0896 34.2133 30.117 34.1482 30.1563 34.0902C30.1957 34.0322 30.2463 33.9824 30.3054 33.9436C30.3644 33.9047 30.4306 33.8777 30.5002 33.864C30.5699 33.8503 30.6416 33.8502 30.7113 33.8637C30.781 33.8772 30.8473 33.904 30.9064 33.9427C30.9655 33.9813 31.0163 34.031 31.0558 34.0889L32.1456 35.6796C32.1853 35.7374 32.2131 35.8025 32.2272 35.8709C32.2413 35.9393 32.2415 36.0098 32.2278 36.0783C32.2141 36.1468 32.1868 36.212 32.1473 36.2701C32.1079 36.3283 32.0572 36.3782 31.9981 36.417C31.939 36.4559 31.8726 36.4829 31.8029 36.4966C31.7331 36.5102 31.6613 36.5102 31.5915 36.4966C31.5217 36.483 31.4554 36.4559 31.3962 36.4171C31.3371 36.3783 31.2864 36.3283 31.247 36.2702L30.1572 34.68ZM19.457 26.2813C19.457 26.1399 19.5143 26.0042 19.6162 25.9042C19.7181 25.8042 19.8564 25.748 20.0005 25.748C20.1447 25.748 20.2829 25.8042 20.3848 25.9042C20.4868 26.0042 20.544 26.1399 20.544 26.2813V28.7929C20.544 28.9343 20.4868 29.07 20.3848 29.17C20.2829 29.27 20.1447 29.3262 20.0005 29.3262C19.8564 29.3262 19.7181 29.27 19.6162 29.17C19.5143 29.07 19.457 28.9343 19.457 28.7929V26.2813ZM19.457 33.5093C19.457 33.3679 19.5143 33.2322 19.6162 33.1322C19.7181 33.0322 19.8564 32.976 20.0005 32.976C20.1447 32.976 20.2829 33.0322 20.3848 33.1322C20.4868 33.2322 20.544 33.3679 20.544 33.5093V35.7058C20.544 35.8472 20.4868 35.9829 20.3848 36.0829C20.2829 36.1829 20.1447 36.2391 20.0005 36.2391C19.8564 36.2391 19.7181 36.1829 19.6162 36.0829C19.5143 35.9829 19.457 35.8472 19.457 35.7058V33.5093ZM19.457 37.5511C19.457 37.4097 19.5143 37.274 19.6162 37.174C19.7181 37.074 19.8564 37.0178 20.0005 37.0178C20.1447 37.0178 20.2829 37.074 20.3848 37.174C20.4868 37.274 20.544 37.4097 20.544 37.5511V39.4667C20.544 39.6081 20.4868 39.7438 20.3848 39.8438C20.2829 39.9438 20.1447 40 20.0005 40C19.8564 40 19.7181 39.9438 19.6162 39.8438C19.5143 39.7438 19.457 39.6081 19.457 39.4667V37.5511ZM21.7284 14.4471L22.7217 12.104V9.58844H17.2803V12.104L18.2731 14.4471H21.7284ZM25.9791 15.5111H14.0247L12.8018 16.7111V18.3342H27.1983V16.7084L25.9791 15.5111ZM28.7229 5.41867H11.2854V7.11111C11.287 7.48592 11.4392 7.84499 11.7091 8.11023C11.979 8.37547 12.3447 8.52545 12.7266 8.52756H27.2798C27.6617 8.52533 28.0273 8.3753 28.2971 8.11007C28.5668 7.84484 28.719 7.48585 28.7206 7.11111L28.7229 5.41867ZM37.279 1.06667H2.72115C0.493683 1.06667 0.541693 4.35556 2.72115 4.35556H37.279C39.5087 4.35556 39.4584 1.06667 37.279 1.06667Z"],[1,"service-card__title"],["viewBox","0 0 22 40","fill","currentColor","xmlns","http://www.w3.org/2000/svg","aria-hidden","true"],["d","M13.2358 5.72349C13.8907 5.72349 14.4234 5.18302 14.4234 4.51865C14.4234 3.85429 13.8907 3.31381 13.2358 3.31381C12.5809 3.31381 12.0481 3.85429 12.0481 4.51865C12.0481 5.18302 12.5809 5.72349 13.2358 5.72349ZM13.2358 3.94881C13.5455 3.94881 13.7976 4.20452 13.7976 4.51873C13.7976 4.83294 13.5455 5.08865 13.2358 5.08865C12.926 5.08865 12.674 4.83294 12.674 4.51873C12.674 4.20452 12.926 3.94881 13.2358 3.94881ZM7.75849 12.9312C7.66274 12.8634 7.53812 12.8555 7.43462 12.91C7.33128 12.9647 7.26643 13.0733 7.26643 13.1915V29.4017C7.26643 30.0326 7.6316 30.9116 9.37119 31.5163C10.4206 31.881 11.8292 32.0902 13.2357 32.0902C14.6422 32.0902 16.0507 31.881 17.1002 31.5163C18.8398 30.9117 19.2049 30.0327 19.2049 29.4017V13.1915C19.2049 13.074 19.1401 12.9665 19.0376 12.9115C18.9351 12.8566 18.8104 12.864 18.7144 12.9301C18.6999 12.9401 17.2163 13.9317 13.2356 13.9317C9.2551 13.9317 7.7714 12.9401 7.75849 12.9312ZM18.5792 29.4017C18.5792 30.7356 15.8261 31.4552 13.2357 31.4552C10.6453 31.4552 7.89218 30.7356 7.89218 29.4017V13.7124C8.63748 14.0424 10.2859 14.5667 13.2357 14.5667C16.1855 14.5667 17.8338 14.0425 18.5792 13.7124V29.4017ZM13.0088 17.7046C12.8688 17.8542 9.58186 21.403 9.58186 24.4514C9.58186 27.5171 11.417 28.8894 13.2357 28.8894C15.0544 28.8894 16.8895 27.5171 16.8895 24.4514C16.8895 21.403 13.6026 17.8542 13.4627 17.7046C13.4036 17.6414 13.3215 17.6057 13.2357 17.6057C13.15 17.6057 13.0678 17.6414 13.0088 17.7046ZM11.8745 25.837C11.8745 24.6996 12.7723 22.8509 13.2357 21.9725C13.6992 22.8509 14.5969 24.6995 14.5969 25.837C14.5969 27.2152 14.0118 28.2544 13.2357 28.2544C12.4597 28.2544 11.8745 27.2152 11.8745 25.837ZM16.2637 24.4514C16.2637 26.2164 15.6188 27.2649 14.7928 27.8005C15.0652 27.2808 15.2228 26.6047 15.2228 25.837C15.2228 24.139 13.5756 21.278 13.5055 21.1571C13.4493 21.06 13.3467 21.0005 13.2358 21.0005C13.1249 21.0005 13.0223 21.06 12.9661 21.1571C12.896 21.2779 11.2487 24.139 11.2487 25.837C11.2487 26.6047 11.4063 27.2808 11.6787 27.8005C10.8528 27.2648 10.2078 26.2163 10.2078 24.4514C10.2078 22.0962 12.4966 19.254 13.2358 18.3976C13.975 19.254 16.2637 22.0962 16.2637 24.4514ZM21.6871 0H12.8888C12.2722 0 11.7707 0.50881 11.7707 1.13421V2.19278C11.4008 2.43349 11.0919 2.76222 10.8728 3.14992H8.78204C6.86683 3.14992 5.01303 3.7454 3.56234 4.82667C1.81086 6.13222 0.649156 8.12945 0.202779 10.6023C-0.338099 13.5981 0.30612 17.076 0.929296 20.44C1.37685 22.8559 1.83957 25.354 1.83957 27.5718V28.0512H1.71957C1.23079 28.0512 0.833074 28.4547 0.833074 28.9506V30.2269C0.833074 30.7228 1.23079 31.1263 1.71957 31.1263H1.83957V32.1833H1.71957C1.23079 32.1833 0.833074 32.5868 0.833074 33.0827V34.3591C0.833074 34.8549 1.23079 35.2584 1.71957 35.2584H1.83957V35.974C1.83957 36.5317 2.28689 36.9856 2.83669 36.9856H3.54091C4.09062 36.9856 4.53794 36.5317 4.53794 35.974V35.2584H5.34112V36.6429C5.34112 38.8234 9.40866 40 13.2358 40C17.0629 40 21.1305 38.8234 21.1305 36.6429V12.6237C21.1305 10.2413 17.9627 8.37397 15.6209 7.90016V5.84833C15.6974 5.7077 15.7617 5.55944 15.8134 5.40524C16.6909 5.42944 17.5333 5.58865 18.3199 5.88278C19.2381 6.22611 20.0573 6.7381 20.7545 7.40444C20.8138 7.46111 20.8909 7.49087 20.9692 7.49087C21.011 7.49087 21.0532 7.48238 21.0932 7.46484C21.2078 7.4146 21.282 7.30008 21.282 7.17341V4.85611C21.282 4.74786 21.2276 4.64698 21.1377 4.58865C20.3807 4.09754 19.4454 3.68635 18.433 3.3996C17.7467 3.20524 17.038 3.07349 16.3408 3.00619C17.6027 2.38024 19.3345 2.08444 21.6871 2.08444C21.8599 2.08444 22 1.9423 22 1.76698V0.31746C22 0.142143 21.8599 0 21.6871 0ZM13.2358 2.39183C14.3918 2.39183 15.3323 3.34587 15.3323 4.51873C15.3323 5.69159 14.3919 6.64564 13.2358 6.64564C12.0797 6.64564 11.1393 5.69159 11.1393 4.51873C11.1393 3.34587 12.0797 2.39183 13.2358 2.39183ZM10.6118 5.25254H9.09496V3.78476H10.6118C10.5482 4.01865 10.5135 4.26452 10.5135 4.51865C10.5135 4.77278 10.5482 5.01865 10.6118 5.25254ZM1.54434 20.3222C0.931799 17.0157 0.298375 13.5967 0.818445 10.7167C1.23556 8.40611 2.31263 6.54627 3.93299 5.33833C5.1982 4.39524 6.79846 3.85143 8.46913 3.79087V5.26032C5.88091 5.37468 2.97421 6.92191 2.24144 10.9812C1.76979 13.5935 2.35072 16.7297 2.96608 20.0506C3.43115 22.561 3.91218 25.1571 3.91218 27.5719V28.0513H2.46541V27.5719C2.46541 25.2949 1.99721 22.7672 1.54434 20.3222ZM1.45891 30.2269V28.9506C1.45891 28.8048 1.57586 28.6861 1.71957 28.6861H5.34112V30.4914H1.71957C1.57586 30.4914 1.45891 30.3727 1.45891 30.2269ZM5.34112 31.1263V32.1833H4.53794V31.1263H5.34112ZM2.46541 31.1263H3.91211V32.1833H2.46541V31.1263ZM3.91211 35.974C3.91211 36.1817 3.74555 36.3506 3.54091 36.3506H2.83669C2.63196 36.3506 2.46541 36.1817 2.46541 35.974V35.2584H3.91211V35.974ZM1.71957 34.6236C1.57586 34.6236 1.45891 34.5049 1.45891 34.3591V33.0828C1.45891 32.937 1.57586 32.8183 1.71957 32.8183H5.34112V34.6236H1.71957ZM5.34112 12.6237V28.0513H4.53794V27.5719C4.53794 25.0979 4.05143 22.4724 3.58096 19.9326C2.97687 16.6719 2.40627 13.592 2.85702 11.0956C3.55022 7.25564 6.37226 5.88746 8.78204 5.88746H10.8506V7.90016C8.50887 8.37397 5.34112 10.2413 5.34112 12.6237ZM20.5046 12.6237V36.6429C20.5046 38.1185 17.1759 39.3651 13.2358 39.3651C9.2957 39.3651 5.96696 38.1185 5.96696 36.6429V12.6237C5.96696 10.7356 8.73643 8.87841 11.2127 8.47913C11.3646 8.4546 11.4765 8.32175 11.4765 8.16564V6.62389C11.9514 7.03302 12.5655 7.28056 13.2358 7.28056C13.9061 7.28056 14.5202 7.03302 14.9951 6.62389V8.16564C14.9951 8.32175 15.107 8.45468 15.2589 8.47913C17.7351 8.87833 20.5046 10.7356 20.5046 12.6237ZM20.6562 5.03238V6.48214C20.0219 5.9777 19.3114 5.5769 18.5362 5.28706C17.7201 4.9819 16.8503 4.80976 15.946 4.77317C15.9536 4.68929 15.958 4.60452 15.958 4.51865C15.958 4.1977 15.9032 3.88968 15.8036 3.60294C16.6145 3.64381 17.4555 3.78183 18.2646 4.01103C19.1542 4.26302 19.9771 4.61476 20.6562 5.03238ZM21.3742 1.45103C19.5579 1.46913 17.1288 1.66611 15.3868 2.82897C14.8884 2.17738 14.1098 1.7569 13.2357 1.7569C12.9429 1.7569 12.661 1.8046 12.3965 1.89175V1.13421C12.3965 0.858889 12.6172 0.634921 12.8887 0.634921H21.3741V1.45103H21.3742Z"],["viewBox","0 0 36 40","fill","currentColor","xmlns","http://www.w3.org/2000/svg","aria-hidden","true"],["d","M35.4251 7.77924C35.3591 7.53158 35.1413 7.35562 34.8839 7.33607C28.9114 6.78211 29.0236 0.884097 29.0302 0.636446C29.0368 0.447448 28.951 0.264968 28.7992 0.141143C28.6474 0.0173168 28.4494 -0.021786 28.2646 0.0173168C22.4769 1.39243 18.0552 1.1904 18.009 1.1904C17.9892 1.1904 17.9694 1.1904 17.943 1.1904C17.8968 1.1904 13.4686 1.39243 7.68082 0.0173168C7.49603 -0.0283032 7.29805 0.0173168 7.14626 0.141143C6.99447 0.264968 6.91528 0.447448 6.91528 0.636446C6.92188 0.884097 7.03407 6.78211 1.06152 7.33607C0.804143 7.36214 0.592959 7.5381 0.520364 7.77924C0.493966 7.94216 -3.77591 24.0656 12.604 33.1765C13.033 35.3989 14.4453 38.1752 18.6294 39.3939C19.6787 39.7067 20.86 39.9022 22.1469 39.9804C22.4043 39.9935 22.6617 40 22.9191 40C24.074 40 25.2025 39.8566 26.2914 39.5764C29.7231 38.6901 32.4949 36.4742 33.7026 33.6653C34.5342 31.7297 35.0423 28.5754 32.7457 24.5153C37.7415 16.4079 35.5241 8.13116 35.4251 7.77924ZM1.63568 8.49612C6.96807 7.7662 7.9514 3.21723 8.12958 1.36637C13.5412 2.559 17.5603 2.42214 17.9826 2.40259C18.4116 2.42214 22.4175 2.559 27.8291 1.36637C28.0073 3.21723 28.9906 7.75969 34.3164 8.49612C34.6728 10.1645 35.7287 16.8185 32.0066 23.3226C31.406 22.4298 30.7263 21.5695 30.0135 20.7093C32.2639 15.4304 30.9704 10.6142 30.911 10.4122C30.8451 10.1645 30.6273 9.98855 30.3699 9.969C26.1528 9.57145 26.2188 5.40048 26.2254 5.22451C26.232 5.03552 26.1462 4.85304 26.001 4.72921C25.8492 4.60539 25.6512 4.56628 25.4665 4.60539C21.2494 5.60251 18.0354 5.45913 18.0024 5.45913C17.9826 5.45913 17.9628 5.45913 17.943 5.45913C17.91 5.45913 14.6895 5.60251 10.4724 4.60539C10.2876 4.55977 10.083 4.60539 9.93785 4.72921C9.78606 4.85304 9.70686 5.03552 9.71346 5.22451C9.72006 5.40048 9.81245 9.57145 5.57558 9.969C5.3182 9.99507 5.10701 10.171 5.03442 10.4122C5.00142 10.523 2.05145 21.6803 12.7822 28.5038C12.5314 29.5791 12.4061 30.6479 12.4391 31.6581C-1.00412 23.6615 1.08132 10.9531 1.63568 8.49612ZM24.4897 7.65541C24.3115 7.51203 24.074 7.47945 23.8694 7.55765C23.7902 7.59024 16.7023 10.4838 17.1445 17.8547C16.5175 17.4442 15.6728 17.0857 14.6367 17.0596C14.4123 17.0531 14.2011 17.1704 14.0889 17.3594C13.9767 17.5484 13.9767 17.7896 14.0889 17.9786C14.1681 18.1154 16.0622 21.4001 14.0757 25.0888C13.7062 25.7731 13.3828 26.516 13.132 27.2655C4.51306 21.563 5.72737 13.0712 6.14313 11.129C9.56827 10.5946 10.7298 7.86396 10.9278 5.96095C14.7819 6.78211 17.6329 6.69739 17.9826 6.68436C18.3324 6.69739 21.1768 6.78863 25.0309 5.96095C25.2289 7.86396 26.3904 10.5946 29.8155 11.129C30.0465 12.2761 30.5547 15.7888 29.1226 19.6209C26.4432 16.3623 23.8166 12.9538 24.7009 8.24195C24.7471 8.02037 24.6679 7.79879 24.4897 7.65541ZM22.2195 38.7552C21.124 38.6901 20.1209 38.5271 19.2167 38.2795C17.9496 36.0311 18.3126 32.8898 20.0747 31.1628C22.7145 28.582 23.1434 26.3792 23.0774 25.0627C23.4008 25.356 23.7572 25.8448 24.0542 26.6529C24.4105 27.6239 23.909 28.8492 23.4602 29.931C23.051 30.9281 22.6947 31.7884 23.0378 32.4727C23.1566 32.7008 23.4074 33.0071 23.942 33.144C25.3939 33.5089 26.5092 32.2967 27.1823 31.078C29.0236 34.5647 26.9777 37.2758 25.8162 38.4294C24.6613 38.7096 23.4536 38.8204 22.2195 38.7552ZM32.5675 33.1831C31.7558 35.0796 30.1059 36.6632 28.0007 37.6538C29.1622 35.803 30.0597 32.8572 27.6113 29.4096C27.4793 29.2206 27.2483 29.1229 27.0173 29.1555C26.7864 29.1881 26.595 29.3445 26.5158 29.5595C26.265 30.2634 25.3147 32.225 24.2522 31.9513C24.173 31.9318 24.1466 31.9187 24.1466 31.9187C24.0674 31.7102 24.4039 30.8825 24.6085 30.3937C25.1167 29.1685 25.7436 27.65 25.2223 26.2358C24.1862 23.4399 22.3185 23.4073 22.2393 23.4073C22.0281 23.4073 21.8301 23.5116 21.7179 23.6941C21.6058 23.8701 21.5926 24.0917 21.6783 24.2806C21.6915 24.3067 22.8069 26.7767 19.2035 30.3025C17.3293 32.1338 16.7419 35.1512 17.6131 37.706C15.4418 36.7088 14.1483 35.0339 13.7722 32.7073C13.5676 31.3974 13.6732 29.9049 14.0823 28.393C14.3397 27.4545 14.7093 26.516 15.1646 25.6753C16.7617 22.7035 16.2008 19.9663 15.6596 18.4934C16.8145 18.904 17.4613 19.7968 17.4679 19.8099C17.6329 20.051 17.9496 20.1357 18.2202 20.025C18.4908 19.9142 18.6426 19.6274 18.5832 19.3407C17.3689 13.384 21.3748 10.3209 23.3282 9.20649C22.9125 14.0227 25.737 17.4507 28.4692 20.7744L28.8322 21.2111C29.8221 22.4102 30.7725 23.5898 31.5182 24.8542C31.5446 24.8998 31.571 24.9454 31.5974 24.991L31.6568 25.0953C33.3001 27.9563 33.6102 30.7587 32.5675 33.1831Z"],["viewBox","0 0 42 40","fill","currentColor","xmlns","http://www.w3.org/2000/svg","aria-hidden","true"],["fill-rule","evenodd","clip-rule","evenodd","d","M1.12106 1.24666C0.777612 1.24666 0.5 0.968039 0.5 0.62333C0.5 0.278622 0.777608 0 1.12106 0H40.8789C41.2224 0 41.5 0.278622 41.5 0.62333C41.5 0.968039 41.2224 1.24666 40.8789 1.24666H31.0184V3.66134C31.0131 5.68134 29.383 7.31911 27.3704 7.32268H24.8719V11.2001H25.9806C26.9059 11.2019 27.6569 11.9556 27.6587 12.8861V14.7329C27.6569 15.6616 26.9059 16.4154 25.9806 16.4171H16.0171C15.0917 16.4153 14.3408 15.6617 14.339 14.7329V12.8861C14.3408 11.9556 15.0899 11.2019 16.0171 11.2001H17.1275V7.32268H14.629C12.6164 7.31911 10.9863 5.68134 10.981 3.66134V1.24666H1.12106ZM22.5696 15.1704V14.3632C22.5696 14.0185 22.849 13.738 23.1907 13.738C23.5341 13.738 23.8135 14.0184 23.8135 14.3632V15.1722H25.9827V15.1704C26.223 15.1686 26.417 14.974 26.4187 14.7329V12.8861C26.417 12.6432 26.223 12.4485 25.9827 12.4467H16.0174C15.7772 12.4485 15.5832 12.6432 15.5814 12.8861V14.7329C15.5832 14.974 15.7772 15.1686 16.0174 15.1704H18.1867V14.3632C18.1867 14.0185 18.466 13.738 18.8095 13.738C19.1512 13.738 19.4306 14.0184 19.4306 14.3632V15.1722L22.5696 15.1704ZM2.32237 21.9286C2.61777 21.7572 2.99682 21.859 3.16943 22.1554C3.34026 22.4519 3.24061 22.8341 2.94343 23.0056L1.43973 23.8772C1.14433 24.0486 0.765276 23.9468 0.592665 23.6503C0.421831 23.3521 0.523265 22.9716 0.818663 22.8002L2.32237 21.9286ZM5.87075 19.8711C6.16615 19.6997 6.5452 19.8015 6.71781 20.0979C6.88865 20.3962 6.78721 20.7766 6.49182 20.9481L4.98811 21.8161C4.69093 21.9893 4.31188 21.8875 4.14105 21.5911C3.97021 21.2928 4.06987 20.9124 4.36705 20.7409L5.87075 19.8729V19.8711ZM9.42091 17.8136C9.71631 17.644 10.0936 17.7475 10.2644 18.044C10.4335 18.3405 10.332 18.7192 10.0366 18.8906L8.53294 19.7586V19.7604C8.39058 19.8461 8.21974 19.8729 8.05779 19.83C7.89585 19.789 7.75883 19.6836 7.6752 19.5389C7.59156 19.3943 7.5702 19.221 7.61647 19.0603C7.66274 18.8995 7.77129 18.7638 7.91721 18.6834L9.42092 17.8119L9.42091 17.8136ZM12.9657 15.7561L11.462 16.6241V16.6259C11.1737 16.8009 11.0776 17.176 11.2467 17.4689C11.4157 17.7636 11.7894 17.8672 12.0848 17.7029L13.5885 16.8313H13.5867C13.8839 16.6599 13.9853 16.2795 13.8127 15.9812C13.6419 15.6847 13.2629 15.5829 12.9657 15.7544L12.9657 15.7561ZM10.727 28.4404C10.8053 28.2903 10.9424 28.1814 11.1025 28.135C11.2645 28.0885 11.4388 28.11 11.583 28.1939C11.7289 28.2796 11.8339 28.4189 11.8748 28.5833C11.914 28.7458 11.8873 28.919 11.7983 29.0619L10.9335 30.5711H10.9317C10.7573 30.8622 10.3836 30.9569 10.0917 30.7872C9.79813 30.6176 9.69669 30.2443 9.86041 29.9478L10.7288 28.4386L10.727 28.4404ZM12.777 24.879C12.8553 24.7308 12.9924 24.6201 13.1525 24.5736C13.3145 24.5272 13.4889 24.5486 13.633 24.6343C13.7789 24.7183 13.8839 24.8576 13.9248 25.0219C13.964 25.1862 13.9373 25.3595 13.8483 25.5024L12.9835 27.0116H12.9817C12.8109 27.308 12.4319 27.4098 12.1347 27.2366C11.8392 27.0651 11.7378 26.6847 11.9104 26.3864L12.7753 24.8772L12.777 24.879ZM30.2021 29.0619C30.0313 28.7654 30.1327 28.385 30.4281 28.2135C30.7235 28.0403 31.1026 28.1421 31.2752 28.4403L32.14 29.9495V29.9477C32.2948 30.2442 32.1898 30.6086 31.9016 30.7764C31.6133 30.9425 31.2467 30.8532 31.0688 30.5711L30.2039 29.0619L30.2021 29.0619ZM28.1521 25.5005V25.5023C27.9813 25.2041 28.0827 24.8236 28.3781 24.6522C28.6735 24.4807 29.0526 24.5807 29.2252 24.879L30.09 26.3882C30.2626 26.6847 30.1612 27.0651 29.8658 27.2366C29.5686 27.4098 29.1896 27.308 29.0187 27.0115L28.1539 25.5023L28.1521 25.5005ZM39.0573 23.0037V23.0055C38.9131 22.9251 38.8063 22.7876 38.7619 22.6268C38.7174 22.4661 38.7405 22.2946 38.8224 22.15C38.906 22.0071 39.043 21.9017 39.2049 21.8606C39.3651 21.8178 39.5359 21.8428 39.6783 21.9285L41.182 22.7965V22.7983C41.4703 22.9733 41.5664 23.3484 41.3973 23.6413C41.2283 23.936 40.8564 24.0396 40.561 23.8753L39.0573 23.0037ZM35.5089 20.9462L35.5106 20.948C35.2135 20.7765 35.112 20.3961 35.2847 20.0978C35.4555 19.8013 35.8345 19.6995 36.1317 19.871L37.6354 20.739L37.6336 20.7408C37.9308 20.9122 38.0305 21.2926 37.8596 21.5909C37.6888 21.8874 37.3098 21.9892 37.0126 21.816L35.5089 20.948V20.9462ZM31.9605 18.8887L31.9623 18.8905C31.6651 18.719 31.5654 18.3386 31.7363 18.0403C31.9071 17.7438 32.2861 17.642 32.5833 17.8135L34.087 18.6851C34.3824 18.8565 34.4839 19.2369 34.3113 19.5352C34.1404 19.8317 33.7614 19.9335 33.4642 19.7603L31.9605 18.8923V18.8887ZM28.4121 16.8312L29.9158 17.7028L29.9176 17.7045C30.213 17.8689 30.5849 17.7653 30.7539 17.4706C30.923 17.1777 30.8287 16.8026 30.5386 16.6275L29.0349 15.7596V15.7578C28.7395 15.5863 28.3605 15.6881 28.1879 15.9846C28.017 16.2811 28.1185 16.6633 28.4139 16.8347L28.4121 16.8312ZM26.1041 21.9393C25.935 21.641 26.0382 21.2624 26.3336 21.0927C26.629 20.9212 27.0081 21.023 27.1771 21.3195L28.042 22.8287H28.0437C28.1897 23.1234 28.0811 23.4806 27.7982 23.6449C27.5152 23.8075 27.1522 23.7217 26.9725 23.4467L26.1041 21.9375L26.1041 21.9393ZM24.0541 18.3815C23.8832 18.0833 23.9864 17.7028 24.2818 17.5314C24.579 17.3599 24.9581 17.4617 25.1289 17.76L25.9973 19.2692V19.2674C26.0827 19.4103 26.1076 19.5835 26.0667 19.7443C26.0258 19.9068 25.9208 20.0443 25.7766 20.1283C25.6325 20.2122 25.4616 20.2354 25.3015 20.1908C25.1413 20.1461 25.0043 20.0372 24.9242 19.8925L24.0594 18.3833L24.0541 18.3815ZM14.8235 21.3196C14.9926 21.0213 15.3716 20.9195 15.6688 21.0892C15.966 21.2606 16.0674 21.641 15.8984 21.9393L15.0336 23.4485L15.0318 23.4467C14.8627 23.745 14.4837 23.8468 14.1883 23.6753C13.8929 23.5057 13.7897 23.127 13.9605 22.8287L14.8253 21.3195L14.8235 21.3196ZM16.8736 17.7564C17.0444 17.4599 17.4234 17.3581 17.7206 17.5314C18.016 17.7028 18.1175 18.0833 17.9448 18.3815L17.08 19.8907V19.889C16.9999 20.0354 16.8629 20.1426 16.7028 20.1872C16.5426 20.2319 16.37 20.2104 16.2258 20.1265C16.0817 20.0426 15.9785 19.905 15.9376 19.7425C15.8948 19.58 15.9215 19.4085 16.007 19.2656L16.8753 17.7564L16.8736 17.7564ZM20.381 18.1636C20.381 17.8207 20.6586 17.5403 21.002 17.5403C21.3455 17.5403 21.6231 17.8207 21.6231 18.1636V19.905C21.6231 20.2497 21.3455 20.5283 21.002 20.5283C20.6586 20.5283 20.381 20.2497 20.381 19.905V18.1636ZM18.0854 37.9348C17.3024 36.1595 17.523 34.0985 18.6602 32.5268C18.8168 32.3 19.1068 32.2053 19.3684 32.2946C19.6282 32.3839 19.8008 32.6357 19.7884 32.9126C19.7831 32.9823 19.7866 33.0537 19.7937 33.1251C20.0838 32.1357 20.6443 31.248 21.4095 30.5622C21.6017 30.3907 21.8793 30.3568 22.1071 30.4747C22.3349 30.5943 22.4666 30.8408 22.4363 31.0962C22.2904 32.3053 22.8776 33.3073 23.4168 34.2271C24.0539 35.3166 24.6429 36.3186 24.335 37.4706C25.2817 36.6365 25.9295 35.5185 26.1857 34.2807C26.6235 32.4197 26.4438 30.4657 25.6732 28.7154C25.2177 29.2762 24.5557 29.6263 23.8386 29.6888C23.6268 29.7067 23.4222 29.6156 23.294 29.4477C23.1659 29.278 23.1321 29.0565 23.2033 28.8565C23.5022 27.7867 23.4026 26.6436 22.9239 25.6417C22.5769 24.8112 22.0697 24.0593 21.4291 23.4288C21.107 25.0773 20.1354 26.0703 19.2065 27.0205C18.0729 28.1797 17.0141 29.2602 17.879 31.7587C17.9697 31.9927 17.9145 32.257 17.7366 32.4321C17.5604 32.6089 17.2953 32.6607 17.0639 32.5642C16.6013 32.391 16.1813 32.1177 15.8343 31.7641C15.094 34.0949 16.0193 36.6344 18.0854 37.9366L18.0854 37.9348ZM21.5981 39.9637C23.0129 39.7905 24.3368 39.1725 25.3796 38.1974C26.4207 37.2222 27.1289 35.9398 27.3994 34.536C27.6521 33.4322 27.7197 32.2946 27.6005 31.1676C27.4047 29.687 26.935 28.2563 26.216 26.9472C26.0986 26.69 25.8245 26.5435 25.5469 26.59C25.2693 26.6364 25.0575 26.865 25.0308 27.1454C25.0023 27.4848 24.8546 27.8009 24.6126 28.0384C24.6482 27.0489 24.4614 26.0649 24.0663 25.1576C23.4951 23.7698 22.5306 22.5768 21.2938 21.7284C21.1052 21.5873 20.8543 21.5641 20.6443 21.6695C20.4326 21.7748 20.2991 21.9909 20.3009 22.2267C20.3009 25.9131 16.4571 26.4078 16.2969 29.7672C16.1617 29.6404 15.9766 29.5797 15.7933 29.6029C15.61 29.6261 15.4463 29.7315 15.3466 29.8887C14.5085 31.2264 14.1775 32.8213 14.4124 34.3841C14.6473 35.9468 15.4338 37.3739 16.6279 38.4044C17.822 39.4332 19.3434 39.9993 20.9183 39.9993C21.1461 40.0029 21.3721 39.9923 21.5981 39.9637ZM20.0179 38.4617H20.0161C19.4573 38.008 19.0819 37.3686 18.9555 36.6596C18.7972 35.9416 18.8328 35.1951 19.057 34.4949C19.283 34.795 19.573 35.0396 19.9076 35.2093C20.1051 35.3111 20.3436 35.2986 20.5304 35.1754C20.7155 35.0522 20.8223 34.8396 20.808 34.6163C20.8223 33.9287 20.9985 33.2572 21.3223 32.6517C21.5608 33.4322 21.9078 34.1752 22.3509 34.8592C23.0307 36.0184 23.6268 37.0382 22.3651 38.3241C21.8544 38.8456 20.6301 38.8885 20.0162 38.4634L20.0179 38.4617ZM23.6339 11.1998L23.6321 7.32237H18.3681V11.1998H23.6339ZM29.7766 1.24612H12.2235V3.6608C12.2289 4.99319 13.3037 6.07013 14.6294 6.07548H27.3709C28.6967 6.07012 29.7715 4.99314 29.7768 3.6608L29.7766 1.24612Z"],["viewBox","0 0 34 40","fill","currentColor","xmlns","http://www.w3.org/2000/svg","aria-hidden","true"],["clip-path","url(#clip0_88_402)"],["d","M33.3335 3.31152H14.2334V0.5C14.2334 0.223877 14.0098 0 13.7334 0H10.5327C10.2563 0 10.0327 0.223877 10.0327 0.5V3.31152H7.45215V0.5C7.45215 0.223877 7.22852 0 6.95215 0H3.75195C3.47559 0 3.25195 0.223877 3.25195 0.5V3.31152H0.666504C0.390137 3.31152 0.166504 3.5354 0.166504 3.81152V7.45508C0.166504 7.7312 0.390137 7.95508 0.666504 7.95508H1.45605V39.5C1.45605 39.7761 1.67969 40 1.95605 40H32.0439C32.3203 40 32.5439 39.7761 32.5439 39.5V7.95508H33.3335C33.6099 7.95508 33.8335 7.7312 33.8335 7.45508V3.81152C33.8335 3.5354 33.6099 3.31152 33.3335 3.31152ZM11.0327 1H13.2334V3.31152H11.0327V1ZM4.25195 1H6.45215V3.31152H4.25195V1ZM26.0435 30.2598H8.09912V26.6426H26.0435V30.2598ZM8.09912 31.2598H26.0435V34.8767H8.09912V31.2598ZM26.0435 25.6426H8.09912V22.1667H26.0435V25.6426ZM8.09912 35.8767H26.0435V39H8.09912V35.8767ZM31.5439 39H27.0435V21.6667C27.0435 21.3906 26.8198 21.1667 26.5435 21.1667H7.59912C7.32275 21.1667 7.09912 21.3906 7.09912 21.6667V39H2.45605V7.95508H31.5439V39ZM32.8335 6.95508H1.1665V4.31152H32.8335V6.95508Z"],["d","M16.9061 19.1921C16.922 19.1924 16.9367 19.1968 16.9526 19.1968C16.9579 19.1968 16.9628 19.1953 16.9681 19.1952C16.9785 19.1953 16.9886 19.1968 16.999 19.1968C19.0195 19.1968 20.6631 17.553 20.6631 15.5322C20.6631 13.6589 17.7197 10.0452 17.3843 9.6394C17.2896 9.52441 17.1479 9.45801 16.999 9.45801C16.8501 9.45801 16.7085 9.52441 16.6138 9.6394C16.2778 10.0452 13.3345 13.6587 13.3345 15.5322C13.3345 17.5216 14.9288 19.1422 16.9061 19.1921ZM15.811 17.0549C15.811 16.6853 16.3506 15.7788 16.9521 14.9736C17.5034 15.7141 18.0942 16.656 18.0942 17.0549C18.0942 17.6766 17.5943 18.1817 16.9758 18.1944C16.8817 18.1936 16.7921 18.177 16.7005 18.1666C16.1924 18.0512 15.811 17.5977 15.811 17.0549ZM16.999 10.7566C18.1597 12.2422 19.6631 14.5083 19.6631 15.5322C19.6631 16.1537 19.4403 16.7188 19.0823 17.1725C19.0845 17.1328 19.0942 17.0952 19.0942 17.0549C19.0942 16.021 17.6313 14.1992 17.3379 13.8445C17.1484 13.6145 16.7568 13.6145 16.5674 13.8445C16.2746 14.1984 14.8188 16.0118 14.8117 17.047C14.5124 16.6163 14.3345 16.0953 14.3345 15.5322C14.3345 14.5095 15.8384 12.2427 16.999 10.7566Z"],["id","clip0_88_402"],["width","34","height","40"],["viewBox","0 0 46 40","fill","currentColor","xmlns","http://www.w3.org/2000/svg","aria-hidden","true"],["clip-path","url(#clip0_88_770)"],["d","M30.6811 12.6154C31.069 12.4615 31.3018 12 31.1466 11.6154C29.5949 7.84616 26.3363 4.92308 22.3794 3.84616C21.9914 3.76924 21.5259 4.00001 21.4483 4.38462C21.3708 4.76924 21.6035 5.23077 21.9914 5.3077C25.4828 6.23077 28.4311 8.84616 29.7501 12.1539C29.9052 12.4615 30.138 12.6154 30.4483 12.6154C30.4483 12.6923 30.5259 12.6154 30.6811 12.6154Z"],["d","M41.6207 15.7693H41.5431H41.3104V15.1539C41.3104 13.9231 39.6035 13.3847 37.9742 13.3847H35.6466C34.0948 5.92312 27.5 0.307739 19.5862 0.307739C10.5862 0.307739 3.29312 7.53851 3.29312 16.4616C3.29312 22.9231 7.17243 28.4616 12.6811 31.077H6.00864C2.90519 31.077 0.344849 33.6154 0.344849 36.7693V38C0.344849 38.4616 0.655193 38.7693 1.12071 38.7693H38.0517C38.5173 38.7693 38.8276 38.4616 38.8276 38V36.7693C38.8276 36.2308 38.75 35.6924 38.5948 35.1539H40.9224C43.3276 35.1539 45.2673 33.2308 45.2673 30.8462V20.077C45.3448 17.9231 43.7155 16.077 41.6207 15.7693ZM37.8966 14.8462C38.8276 14.8462 39.5259 15.077 39.6811 15.2308V17.6154C39.4483 17.7693 38.8276 18 37.8966 18H35.8017C35.8793 17.4616 35.8793 16.9231 35.8793 16.3847C35.8793 15.8462 35.8793 15.3077 35.8017 14.7693H37.8966V14.8462ZM4.84485 16.4616C4.84485 8.38466 11.4397 1.8462 19.5862 1.8462C27.7328 1.8462 34.3276 8.38466 34.3276 16.4616C34.3276 24.5385 27.7328 31.077 19.5862 31.077C11.4397 31.077 4.84485 24.5385 4.84485 16.4616ZM37.2759 37.2308H1.89657V36.7693C1.89657 34.4616 3.75864 32.6154 6.08623 32.6154H33.1638C35.4914 32.6154 37.3535 34.4616 37.3535 36.7693V37.2308H37.2759ZM43.7931 30.8462C43.7931 32.3847 42.5517 33.6154 41 33.6154H37.9742C36.9655 32.077 35.1811 31.077 33.1638 31.077H26.4914C31.1466 28.9231 34.5604 24.6924 35.569 19.6154H37.8966C39.5259 19.6154 41.2328 19.077 41.2328 17.8462V17.2308H41.388C42.7069 17.4616 43.7155 18.6154 43.7155 20V30.8462H43.7931Z"],["d","M19.5862 11.3077C16.7155 11.3077 14.3879 13.6154 14.3879 16.4616C14.3879 19.3077 16.7155 21.6154 19.5862 21.6154C22.4569 21.6154 24.7845 19.3077 24.7845 16.4616C24.7845 13.6154 22.4569 11.3077 19.5862 11.3077ZM19.5862 20.077C17.569 20.077 15.9397 18.4616 15.9397 16.4616C15.9397 14.4616 17.569 12.8462 19.5862 12.8462C21.6035 12.8462 23.2328 14.4616 23.2328 16.4616C23.2328 18.4616 21.6035 20.077 19.5862 20.077Z"],["d","M36.8879 12C37.3534 12 37.6638 11.6923 37.6638 11.2308V8.69233C37.6638 8.23079 37.3534 7.9231 36.8879 7.9231C36.4224 7.9231 36.1121 8.23079 36.1121 8.69233V11.2308C36.1121 11.6154 36.5 12 36.8879 12Z"],["d","M36.8879 20.9231C36.4224 20.9231 36.1121 21.2308 36.1121 21.6923V24.2308C36.1121 24.6923 36.4224 25 36.8879 25C37.3534 25 37.6638 24.6923 37.6638 24.2308V21.6923C37.6638 21.3077 37.3534 20.9231 36.8879 20.9231Z"],["d","M41.2328 19.6154C40.9224 19.3077 40.4569 19.3077 40.1466 19.6154C39.8362 19.9231 39.8362 20.3846 40.1466 20.6923L41.9311 22.4616C42.0862 22.6154 42.319 22.6923 42.4742 22.6923C42.6293 22.6923 42.8621 22.6154 43.0173 22.4616C43.3276 22.1539 43.3276 21.6923 43.0173 21.3846L41.2328 19.6154Z"],["d","M40.6897 13.5385C40.9224 13.5385 41.0776 13.4616 41.2328 13.3078L43.0173 11.5385C43.3276 11.2308 43.3276 10.7693 43.0173 10.4616C42.7069 10.1539 42.2414 10.1539 41.9311 10.4616L40.1466 12.2308C39.8362 12.5385 39.8362 13.0001 40.1466 13.3078C40.3017 13.4616 40.4569 13.5385 40.6897 13.5385Z"],["id","clip0_88_770"],["width","45","height","40","transform","translate(0.5)"],[1,"center"],["routerLink","/services",1,"btn","btn--primary","services__cta"],[1,"clients-section"],[1,"section-title"],[1,"marquee-container"],[1,"marquee"],[1,"marquee-content"],[1,"client-logo"],["src","assets/Images/qatalum/qatalum-6.jpg","alt","TAV Construction",1,"logo-img"],["src","assets/Images/qatalum/qatalum-7.jpg","alt","Saudi Binladin Group",1,"logo-img"],["src","assets/Images/qatalum/qatalum-8.jpg","alt","Hill International",1,"logo-img"],["src","assets/Images/qatalum/qatalum-9.jpg","alt","Athena SA",1,"logo-img"],["src","assets/Images/qatalum/qatalum-10.jpg","alt","VATECH",1,"logo-img"],["src","assets/Images/qatalum/qatalum-11.jpg","alt","Siemens",1,"logo-img"],["src","assets/Images/qatalum/qatalum-12.jpg","alt","Client Logo",1,"logo-img"],["src","assets/Images/qatalum/qatalum-13.jpg","alt","Client Logo",1,"logo-img"],["id","projects",1,"projects"],[1,"projects__header"],[1,"projects__eyebrow"],[1,"projects__headline"],["styleClass","projects-carousel",3,"value","numVisible","numScroll","circular","autoplayInterval","responsiveOptions"],["pTemplate","item"],[1,"project-card"],[1,"project-card__figure"],["alt","Project",3,"src"],[1,"project-card__title"],[1,"project-card__text"],["routerLink","/projects",1,"btn","btn--ghost","btn--sm"]],template:function(t,e){t&1&&(a(0,"main",0)(1,"section",1),p(2,"figure",2),a(3,"div",3)(4,"h1",4),b(5),s(),a(6,"h2",5),b(7),s(),a(8,"p",6),b(9),s(),a(10,"div",7)(11,"a",8)(12,"span",9),b(13,"\u{1F4DE}"),s(),b(14," Request a Quote "),s(),a(15,"a",10),b(16,"Explore Our Services"),s()()()(),a(17,"section",11)(18,"div",12)(19,"article",13)(20,"h3",14),b(21,"About Us"),s(),a(22,"p",15),b(23," Founded in 2003, Motahda has grown into one of Egypt\u2019s leading MEP contractors and fire protection solution providers. "),s(),a(24,"ul",16)(25,"li",17)(26,"span",18),f(),a(27,"svg",19),p(28,"path",20)(29,"path",21),s()(),j(),a(30,"span"),b(31,"Based in Cairo, serving Egypt & Rwanda."),s()(),a(32,"li",17)(33,"span",18),f(),a(34,"svg",19),p(35,"path",22)(36,"path",23)(37,"path",24)(38,"path",25),s()(),j(),a(39,"span"),b(40,"Experienced engineering & technical teams."),s()(),a(41,"li",17)(42,"span",18),f(),a(43,"svg",19),p(44,"path",26)(45,"path",27)(46,"path",28),s()(),j(),a(47,"span"),b(48,"Collaboration with V.E.C engineering support."),s()()(),a(49,"div",29),p(50,"img",30)(51,"img",31),s(),a(52,"a",32),b(53,"Learn More"),s()(),a(54,"figure",33),p(55,"span",34)(56,"img",35),s()()(),a(57,"section",36)(58,"div",37)(59,"div",38)(60,"div",39)(61,"div",40),b(62,"Our Services"),s(),a(63,"h3",41),b(64,"Motahda delivers turnkey MEP solutions across various sectors we specialize in"),s()(),a(65,"div",42)(66,"article",43)(67,"div",44),f(),a(68,"svg",45),p(69,"path",46),s()(),j(),a(70,"h4",47),b(71,"Automatic Sprinklers (Wet/Dry)"),s()(),a(72,"article",43)(73,"div",44),f(),a(74,"svg",48),p(75,"path",49),s()(),j(),a(76,"h4",47),b(77,"Standpipe Systems"),s()(),a(78,"article",43)(79,"div",44),f(),a(80,"svg",50),p(81,"path",51),s()(),j(),a(82,"h4",47),b(83,"CO\u2082 and FM200 Systems"),s()(),a(84,"article",43)(85,"div",44),f(),a(86,"svg",52),p(87,"path",53),s()(),j(),a(88,"h4",47),b(89,"Water Mist & Clean Agent Systems"),s()(),a(90,"article",43)(91,"div",44),f(),a(92,"svg",54)(93,"g",55),p(94,"path",56)(95,"path",57),s(),a(96,"defs")(97,"clipPath",58),p(98,"rect",59),s()()()(),j(),a(99,"h4",47),b(100,"Fire Pumps and Fire Tanks"),s()(),a(101,"article",43)(102,"div",44),f(),a(103,"svg",60)(104,"g",61),p(105,"path",62)(106,"path",63)(107,"path",64)(108,"path",65)(109,"path",66)(110,"path",67)(111,"path",68),s(),a(112,"defs")(113,"clipPath",69),p(114,"rect",70),s()()()(),j(),a(115,"h4",47),b(116,"Addressable & Conventional Alarms"),s()()()(),a(117,"div",71)(118,"a",72),b(119,"Explore Our Services"),s()()()(),a(120,"section",73)(121,"div",37)(122,"h2",74),b(123,"Partners & Clients "),s(),a(124,"div",75)(125,"div",76)(126,"div",77)(127,"div",78),p(128,"img",79),s(),a(129,"div",78),p(130,"img",80),s(),a(131,"div",78),p(132,"img",81),s(),a(133,"div",78),p(134,"img",82),s(),a(135,"div",78),p(136,"img",83),s(),a(137,"div",78),p(138,"img",84),s(),a(139,"div",78),p(140,"img",85),s(),a(141,"div",78),p(142,"img",86),s(),a(143,"div",78),p(144,"img",79),s(),a(145,"div",78),p(146,"img",80),s(),a(147,"div",78),p(148,"img",81),s(),a(149,"div",78),p(150,"img",82),s(),a(151,"div",78),p(152,"img",83),s(),a(153,"div",78),p(154,"img",84),s(),a(155,"div",78),p(156,"img",85),s(),a(157,"div",78),p(158,"img",86),s()()()()()(),a(159,"section",87)(160,"div",37)(161,"div",88)(162,"div",89),b(163,"Our Projects"),s(),a(164,"h3",90),b(165,"Motahda has successfully executed large-scale projects across Egypt and beyond"),s()(),a(166,"p-carousel",91),m(167,Xn,11,3,"ng-template",92),s()()()()),t&2&&(c(3),d("@fadeIn",void 0),c(2),N(e.hero.title),c(2),N(e.hero.subtitle),c(2),N(e.hero.description),c(9),d("@fadeInDelayed",void 0),c(42),d("@fadeIn",void 0),c(6),d("@fadeInDelayed",void 0),c(6),d("@fadeInDelayed",void 0),c(6),d("@fadeInDelayed",void 0),c(6),d("@fadeInDelayed",void 0),c(6),d("@fadeInDelayed",void 0),c(11),d("@fadeInDelayed",void 0),c(60),d("@fadeIn",void 0),c(5),d("value",e.projects)("numVisible",3)("numScroll",1)("circular",!0)("autoplayInterval",0)("responsiveOptions",e.responsiveOptions)("@fadeInDelayed",void 0))},dependencies:[z,Kt,Ut,Ve,At,ut],styles:['.home[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 1.25rem}.section-title[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:800;margin:0 0 1rem;text-align:center}.hero[_ngcontent-%COMP%]{position:relative;min-height:68vh;display:grid;place-items:center;color:#fff}.hero__bg[_ngcontent-%COMP%]{position:absolute;inset:0;background:url(/assets/Images/home/AdobeStock_894712151.png) center/cover no-repeat;z-index:0;pointer-events:none}.hero[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;z-index:1;pointer-events:none}.hero__content[_ngcontent-%COMP%]{position:relative;z-index:2;text-align:center;max-width:1100px;padding:3rem 1rem}.hero__content[_ngcontent-%COMP%], .hero__content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:#fff;text-shadow:none}.hero__title[_ngcontent-%COMP%]{font-size:clamp(2.25rem,4vw + 1.25rem,4rem);font-weight:900;margin:0 0 1rem;letter-spacing:.2px}.hero__subtitle[_ngcontent-%COMP%]{font-size:clamp(1.25rem,1.2vw + 1rem,2rem);font-weight:800;margin:0 0 1rem}.hero__desc[_ngcontent-%COMP%]{opacity:.95;margin:0 0 1.75rem;font-size:clamp(.95rem,.35vw + .9rem,1.125rem)}.hero__actions[_ngcontent-%COMP%]{display:inline-flex;gap:1rem}.btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;border-radius:18px;padding:1rem 1.5rem;font-weight:800;text-decoration:none;transition:transform .15s ease,background-color .2s ease,box-shadow .2s ease;cursor:pointer;will-change:transform}.btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px) scale(1.01)}.btn[_ngcontent-%COMP%]:active{transform:translateY(0) scale(.99)}.btn__icon[_ngcontent-%COMP%]{margin-right:.6rem;font-size:1.15em;line-height:0}.btn--primary[_ngcontent-%COMP%]{background:#c62828;color:#fff;box-shadow:0 6px 16px #c6282859}.btn--primary[_ngcontent-%COMP%]:hover{background:#b71c1c;box-shadow:0 8px 22px #c6282873}.btn--ghost[_ngcontent-%COMP%]{background:#ffffff14;color:#fff;border:1px solid rgba(255,255,255,.35)}.btn--ghost[_ngcontent-%COMP%]:hover{background:#ffffff2e;border-color:#fff9;box-shadow:0 6px 18px #00000040}.btn--sm[_ngcontent-%COMP%]{padding:.5rem .9rem;border-radius:10px}.about[_ngcontent-%COMP%]{background:#f3f4f6;padding:3rem 0}.about__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1.25fr;gap:2rem;align-items:center}.about__text[_ngcontent-%COMP%]{text-align:left}.about__heading[_ngcontent-%COMP%]{font-size:2.25rem;margin:0 0 .5rem;font-weight:900}.about__lead[_ngcontent-%COMP%]{font-size:1.1rem;color:#111;margin:0 0 1rem}.about__list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:1rem 0 1.5rem;display:grid;gap:.75rem}.about__item[_ngcontent-%COMP%]{display:grid;grid-template-columns:28px 1fr;align-items:start;gap:.75rem;font-size:1.05rem}.about__bullet[_ngcontent-%COMP%]{width:28px;height:28px;color:#c62828;display:inline-grid;place-items:center}.about__badges[_ngcontent-%COMP%]{display:flex;gap:2rem;align-items:center;margin:1rem 0 1.25rem}.about__badges[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:90px}.about__cta[_ngcontent-%COMP%]{border-radius:18px;background:#fff;color:#111;border:2px solid #dadada;padding:.9rem 4.75rem;font-weight:800;box-shadow:0 1px #0000000a inset}.about__cta[_ngcontent-%COMP%]:hover{background:#f2f2f2;border-color:#cfcfcf}.about__media[_ngcontent-%COMP%]{position:relative;border-radius:20px;overflow:hidden}.about__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;display:block;border-radius:16px;transition:transform .5s ease}.about__media[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.06)}.about__frame[_ngcontent-%COMP%]{position:absolute;inset:-14px;border:2px solid #d33232;border-radius:24px;z-index:0}.services[_ngcontent-%COMP%]{padding:3rem 0}.services__panel[_ngcontent-%COMP%]{background:linear-gradient(#00000080,#00000019),url(/assets/Images/home/8505b1b2b2eac08b01f7ff6b2df31b949b518886-scaled.webp) center/cover no-repeat;color:#fff;padding:2rem;border-radius:28px}.services__header[_ngcontent-%COMP%]{text-align:center;margin-bottom:1.25rem}.services__eyebrow[_ngcontent-%COMP%]{font-weight:800;opacity:.9;font-size:1.5rem}.services__headline[_ngcontent-%COMP%]{font-size:clamp(1.25rem,1.8vw + 1rem,2rem);margin:1.25rem auto 2rem;max-width:920px;font-weight:700}.services__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.service-card[_ngcontent-%COMP%]{background:#fff;color:#111;border:1px solid #e6e6e6;border-radius:18px;text-align:center;padding:1.25rem .75rem;transition:transform .15s ease,box-shadow .2s ease}.service-card[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 10px 24px #00000014}.service-card__icon[_ngcontent-%COMP%]{margin:.25rem auto .75rem;width:76px;height:76px;border:2px solid #e5e7eb;border-radius:12px;background:#fff;display:grid;place-items:center;color:#c62828}.service-card__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:36px;height:36px}.services[_ngcontent-%COMP%]   .service-card__title[_ngcontent-%COMP%]{margin:0;text-align:center;color:#111;font-size:1.125rem;letter-spacing:0;line-height:1.4}.center[_ngcontent-%COMP%]{text-align:center;margin-top:1.25rem}.services__cta[_ngcontent-%COMP%]{margin-top:.5rem}.projects[_ngcontent-%COMP%]{padding:3rem 0;background:#fafafa}.projects__header[_ngcontent-%COMP%]{text-align:center;margin-bottom:1rem}.projects__eyebrow[_ngcontent-%COMP%]{color:#c62828;font-weight:800;font-size:1.5rem}.projects__headline[_ngcontent-%COMP%]{font-weight:800;font-size:clamp(1.4rem,2.5vw + 1rem,2.25rem);margin:.5rem auto 2rem;max-width:1100px}.carousel[_ngcontent-%COMP%]{position:relative;overflow:hidden}.carousel__track[_ngcontent-%COMP%]{display:grid;grid-auto-flow:column;gap:1rem;overflow-x:auto;scroll-snap-type:x mandatory;padding:.5rem 0 1rem;scrollbar-width:none}.carousel__track[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.carousel__track[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{scroll-snap-align:start}.carousel__nav[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);background:#fff;border:1px solid #e6e6e6;width:36px;height:36px;border-radius:50%;display:grid;place-items:center;cursor:pointer;z-index:3;box-shadow:0 6px 16px #0000001f}.carousel__nav--prev[_ngcontent-%COMP%]{left:8px}.carousel__nav--next[_ngcontent-%COMP%]{right:8px}.project-card[_ngcontent-%COMP%]{background:#fff;border:1px solid #e4e4e7;border-radius:16px;padding:1rem;width:320px;box-shadow:none}.project-card__figure[_ngcontent-%COMP%]{height:200px;overflow:hidden;border-radius:12px;margin:0 0 1rem}.project-card__figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.project-card__title[_ngcontent-%COMP%]{font-weight:800;margin:.25rem 0;font-size:1.05rem}.project-card__text[_ngcontent-%COMP%]{font-size:.85rem;color:#555;margin:0 0 .5rem}.project-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-weight:500;width:100%;justify-content:center;border:1.5px solid #dadada;background:#fff;color:#111;border-radius:14px;padding:.85rem 1.1rem}.project-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn__icon[_ngcontent-%COMP%]{margin-left:.5rem}.projects-carousel[_ngcontent-%COMP%]   .p-carousel-items-content[_ngcontent-%COMP%]{box-shadow:none}.projects-carousel[_ngcontent-%COMP%]   .p-carousel-item[_ngcontent-%COMP%]{padding:0}.projects-carousel[_ngcontent-%COMP%]   .p-carousel-content[_ngcontent-%COMP%], .projects-carousel[_ngcontent-%COMP%]   .p-carousel-items-content[_ngcontent-%COMP%], .projects-carousel[_ngcontent-%COMP%]   .p-carousel-container[_ngcontent-%COMP%]{border:0!important;outline:0!important}.projects-carousel[_ngcontent-%COMP%]   .p-carousel-items-content[_ngcontent-%COMP%]:before, .projects-carousel[_ngcontent-%COMP%]   .p-carousel-items-content[_ngcontent-%COMP%]:after{content:none!important}.carousel__dots[_ngcontent-%COMP%]{display:flex;gap:.5rem;justify-content:center;margin-top:.5rem}.carousel__dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#c7c7c7}.carousel__dots[_ngcontent-%COMP%]   .dot.is-active[_ngcontent-%COMP%]{background:#e24a4a}@media (max-width: 1024px){.services__grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 768px){.about__grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.services__grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.project-card[_ngcontent-%COMP%]{width:260px}}@media (max-width: 480px){.services__grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.hero[_ngcontent-%COMP%]{min-height:420px}}.p-carousel-indicator-active[_ngcontent-%COMP%]   .p-carousel-indicator-button[_ngcontent-%COMP%]{background:#c62828!important}.clients-section[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2c3e50,#db343c);padding:4rem 0;overflow:hidden;position:relative}.clients-section[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:#0000001a;z-index:1}.clients-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;z-index:2}.clients-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{color:#fff;text-align:center;margin-bottom:3rem;font-size:2.5rem;font-weight:700;text-shadow:2px 2px 4px rgba(0,0,0,.3)}.marquee-container[_ngcontent-%COMP%]{margin-top:3rem;overflow:hidden;position:relative}.marquee[_ngcontent-%COMP%]{display:flex;animation:_ngcontent-%COMP%_scroll 10s linear infinite}.marquee-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4rem;white-space:nowrap}.client-logo[_ngcontent-%COMP%]{flex-shrink:0;display:flex;align-items:center;justify-content:center;height:80px;min-width:200px;background:#fff;border-radius:12px;box-shadow:0 4px 15px #0003;transition:transform .3s ease,box-shadow .3s ease;padding:1rem;border:2px solid rgba(255,255,255,.3)}.client-logo[_ngcontent-%COMP%]:hover{transform:translateY(-5px) scale(1.05);box-shadow:0 8px 25px #0000004d}.logo-img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain}@keyframes _ngcontent-%COMP%_scroll{0%{transform:translate(0)}to{transform:translate(-50%)}}.marquee-container[_ngcontent-%COMP%]:hover   .marquee[_ngcontent-%COMP%]{animation-play-state:paused}'],data:{animation:[Ot("fadeIn",[Ht(":enter",[mt({opacity:0,transform:"translateY(12px)"}),Ft("500ms ease-out",mt({opacity:1,transform:"none"}))])]),Ot("fadeInDelayed",[Ht(":enter",[mt({opacity:0,transform:"translateY(16px)"}),Ft("700ms 150ms ease-out",mt({opacity:1,transform:"none"}))])])]}})};export{Te as HomeComponent};
