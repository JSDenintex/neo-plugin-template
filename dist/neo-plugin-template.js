/*! For license information please see neo-plugin-template.js.LICENSE.txt */
(()=>{"use strict";const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(i,t,s)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var l;const h=window,a=h.trustedTypes,d=a?a.emptyScript:"",c=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u},$="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty($))return!1;this[$]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var s;const i=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{e?s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=v){var i;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const o=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:p).toAttribute(e,s.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:p;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var f;_[$]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:_}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.3");const g=window,A=g.trustedTypes,m=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,y="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,b="?"+E,S=`<${b}>`,x=document,C=()=>x.createComment(""),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,P="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,T=/>/g,O=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,k=/"/g,M=/^(?:script|style|textarea|title)$/i,L=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),D=L(1),j=(L(2),Symbol.for("lit-noChange")),z=Symbol.for("lit-nothing"),B=new WeakMap,I=x.createTreeWalker(x,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==m?m.createHTML(e):e}const W=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":"",r=H;for(let e=0;e<s;e++){const s=t[e];let l,h,a=-1,d=0;for(;d<s.length&&(r.lastIndex=d,h=r.exec(s),null!==h);)d=r.lastIndex,r===H?"!--"===h[1]?r=N:void 0!==h[1]?r=T:void 0!==h[2]?(M.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=O):void 0!==h[3]&&(r=O):r===O?">"===h[0]?(r=null!=n?n:H,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?O:'"'===h[3]?k:R):r===k||r===R?r=O:r===N||r===T?r=H:(r=O,n=void 0);const c=r===O&&t[e+1].startsWith("/>")?" ":"";o+=r===H?s+S:a>=0?(i.push(l),s.slice(0,a)+y+s.slice(a)+E+c):s+E+(-2===a?(i.push(void 0),e):c)}return[V(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,a]=W(t,e);if(this.el=q.createElement(h,s),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=I.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(y)||e.startsWith(E)){const s=a[o++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+y).split(E),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?X:"@"===e[1]?Y:F})}else l.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(M.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],C()),I.nextNode(),l.push({type:2,index:++n});i.append(t[e],C())}}}else if(8===i.nodeType)if(i.data===b)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)l.push({type:7,index:n}),t+=E.length-1}n++}}static createElement(t,e){const s=x.createElement("template");return s.innerHTML=t,s}}function J(t,e,s=t,i){var n,o,r,l;if(e===j)return e;let h=void 0!==i?null===(n=s._$Co)||void 0===n?void 0:n[i]:s._$Cl;const a=w(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,s,i)),void 0!==i?(null!==(r=(l=s)._$Co)&&void 0!==r?r:l._$Co=[])[i]=h:s._$Cl=h),void 0!==h&&(e=J(t,h._$AS(t,e.values),h,i)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(s,!0);I.currentNode=n;let o=I.nextNode(),r=0,l=0,h=i[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new Z(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new tt(o,this,t)),this._$AV.push(e),h=i[++l]}r!==(null==h?void 0:h.index)&&(o=I.nextNode(),r++)}return I.currentNode=x,n}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Z{constructor(t,e,s,i){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),w(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>U(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&w(this._$AH)?this._$AA.nextSibling.data=t:this.$(x.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(V(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(s);else{const t=new K(n,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new q(t)),e}T(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new Z(this.k(C()),this.k(C()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,s,i,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=J(this,t,e,0),o=!w(t)||t!==this._$AH&&t!==j,o&&(this._$AH=t);else{const i=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=J(this,i[s+r],e,r),l===j&&(l=this._$AH[r]),o||(o=!w(l)||l!==this._$AH[r]),l===z?t=z:t!==z&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!i&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const Q=A?A.emptyScript:"";class X extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class Y extends F{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=J(this,t,e,0))&&void 0!==s?s:z)===j)return;const i=this._$AH,n=t===z&&i!==z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==z&&(i===z||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const et=g.litHtmlPolyfillSupport;var st,it;null==et||et(q,Z),(null!==(f=g.litHtmlVersions)&&void 0!==f?f:g.litHtmlVersions=[]).push("2.8.0");class nt extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,n;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new Z(e.insertBefore(C(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}nt.finalized=!0,nt._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:nt});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:nt}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");class rt extends nt{static getMetaConfig(){return{controlName:"neo-plugin-template",fallbackDisableSubmit:!1,description:"",iconUrl:"",groupName:"NEO",version:"1.0",properties:{message:{type:"string",title:"Source",description:""},response:{type:"string",title:"Response",description:"",isValueField:!0}},events:["ntx-value-change"],standardProperties:{fieldLabel:!0,description:!0}}}onChange(t){const e={bubbles:!0,cancelable:!1,composed:!0,detail:t.target.value},s=new CustomEvent("ntx-value-change",e);this.dispatchEvent(s)}static properties={message:{type:String},response:{type:String}};static styles=o` // Enter any CSS you want to use here
    :host {
      display: block;
      padding: 16px;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .highlight {
      font-weight: 700;
      color: #E8960A;
    }
    #pluginDiv {
      padding: 16px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    textarea {
      width: 100%;
      height: 100px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }
    textarea:focus {
      border-color: #E8960A;
      outline: none;
    }
  `;constructor(){super(),this.message="",this.response=""}render(){return D`
      <div id="pluginDiv">
        <p>This is a template.</p>
        <p>This is my message: <span class="highlight">${this.message}</span></p>
        <hr>
        <p>Would you like to respond?</p>
        <div>
          <span>Response:</span>
        </div>
        <textarea .value=${this.response} @blur=${this.onChange}></textarea>
      </div>
    `}}customElements.define("neo-plugin-template",rt)})();