/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.5 (2019-12-19)
 */

!function(r){"use strict";function e(){}function l(e){return function(){return e}}function t(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return!t.apply(null,e)}}function n(){return a}var o,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=l(!1),s=l(!0),a=(o={fold:function(e,n){return e()},is:u,isSome:u,isNone:s,getOr:d,getOrThunk:f,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:l(null),getOrUndefined:l(undefined),or:d,orThunk:f,map:n,each:e,bind:n,exists:u,forall:s,filter:n,equals:c,equals_:c,toArray:function(){return[]},toString:l("none()")},Object.freeze&&Object.freeze(o),o);function c(e){return e.isNone()}function f(e){return e()}function d(e){return e}function m(n){return function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"==n&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":n}(e)===n}}function g(e,n){for(var t=e.length,r=new Array(t),o=0;o<t;o++){var i=e[o];r[o]=n(i,o)}return r}function p(e,n){for(var t=0,r=e.length;t<r;t++){n(e[t],t)}}function v(e,n){for(var t=[],r=0,o=e.length;r<o;r++){var i=e[r];n(i,r)&&t.push(i)}return t}function h(e,n,t){return p(e,function(e){t=n(t,e)}),t}function N(e,n){for(var t=0,r=e.length;t<r;t++){var o=e[t];if(n(o,t))return $e.some(o)}return $e.none()}function y(e,n){return function(e){for(var n=[],t=0,r=e.length;t<r;++t){if(!We(e[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+e);Qe.apply(n,e[t])}return n}(g(e,n))}function S(e){return 0===e.length?$e.none():$e.some(e[0])}function O(e){return 0===e.length?$e.none():$e.some(e[e.length-1])}function C(e,n,t){return 0!=(e.compareDocumentPosition(n)&t)}function b(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t];if(r.test(n))return r}return undefined}(e,n);if(!t)return{major:0,minor:0};function r(e){return Number(n.replace(t,"$"+e))}return Ze(r(1),r(2))}function L(e,n){return function(){return n===e}}function T(e,n){return function(){return n===e}}function D(e,n){var t=String(n).toLowerCase();return N(e,function(e){return e.search(t)})}function E(e,n){return-1!==e.indexOf(n)}function w(n){return function(e){return E(e,n)}}function k(e,n){return e.dom()===n.dom()}function A(e,n,t){return e.isSome()&&n.isSome()?$e.some(t(e.getOrDie(),n.getOrDie())):$e.none()}function x(e){return $e.from(e.dom().parentNode).map(bn.fromDom)}function R(e){return g(e.dom().childNodes,bn.fromDom)}function I(e,n){var t=e.dom().childNodes;return $e.from(t[n]).map(bn.fromDom)}function _(e){return I(e,0)}function B(e){return I(e,e.dom().childNodes.length-1)}function P(n,t){x(n).each(function(e){e.dom().insertBefore(t.dom(),n.dom())})}function M(e,n){e.dom().appendChild(n.dom())}function U(n,e){p(e,function(e){M(n,e)})}function F(e){var n=e.dom();null!==n.parentNode&&n.parentNode.removeChild(n)}function j(e,n,t){return e.fire("ListMutation",{action:n,element:t})}function H(e,n){return function(e,n){for(var t=n!==undefined&&null!==n?n:Rn,r=0;r<e.length&&t!==undefined&&null!==t;++r)t=t[e[r]];return t}(e.split("."),n)}function $(e){return e&&"BR"===e.nodeName}function q(e){var n=e.selection.getStart(!0);return e.dom.getParent(n,"OL,UL,DL",Yn(e,n))}function W(e){var n=e.selection.getSelectedBlocks();return Pn.grep(function(t,e){var n=Pn.map(e,function(e){var n=t.dom.getParent(e,"li,dd,dt",Yn(t,e));return n||e});return Bn.unique(n)}(e,n),function(e){return Hn(e)})}function V(e,n){var t=e.dom.getParents(n,"ol,ul",Yn(e,n));return O(t)}function z(e,n){var t,r,o,i,u=e.dom,s=e.schema.getBlockElements(),a=u.createFragment();if(e.settings.forced_root_block&&(o=e.settings.forced_root_block),o&&((r=u.create(o)).tagName===e.settings.forced_root_block&&u.setAttribs(r,e.settings.forced_root_block_attrs),zn(n.firstChild,s)||a.appendChild(r)),n)for(;t=n.firstChild;){var c=t.nodeName;i||"SPAN"===c&&"bookmark"===t.getAttribute("data-mce-type")||(i=!0),zn(t,s)?(a.appendChild(t),r=null):o?(r||(r=u.create(o),a.appendChild(r)),r.appendChild(t)):a.appendChild(t)}return e.settings.forced_root_block?i||r.appendChild(u.create("br",{"data-mce-bogus":"1"})):a.appendChild(u.create("br")),a}function K(e){return e.dom().nodeName.toLowerCase()}function X(e,n){var t=e.dom();!function(e,n){for(var t=xn(e),r=0,o=t.length;r<o;r++){var i=t[r];n(e[i],i)}}(n,function(e,n){!function(e,n,t){if(!(qe(t)||Ve(t)||Ke(t)))throw r.console.error("Invalid call to Attr.set. Key ",n,":: Value ",t,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(n,t+"")}(t,n,e)})}function Q(e){return h(e.dom().attributes,function(e,n){return e[n.name]=n.value,e},{})}function Y(e,n,t){if(!qe(t))throw r.console.error("Invalid call to CSS.set. Property ",n,":: Value ",t,":: Element ",e),new Error("CSS value must be a string: "+t);!function(e){return e.style!==undefined&&ze(e.style.getPropertyValue)}(e)||e.style.setProperty(n,t)}function G(e){return function(e,n){return bn.fromDom(e.dom().cloneNode(n))}(e,!0)}function J(e,n){var t=function(e,n){var t=bn.fromTag(n),r=Q(e);return X(t,r),t}(e,n);P(e,t);var r=R(e);return U(t,r),F(e),t}function Z(e,n){M(e.item,n.list)}function ee(n,e,t){var r=e.slice(0,t.depth);return O(r).each(function(e){!function(e,n){M(e.list,n),e.item=n}(e,function(e,n,t){var r=bn.fromTag("li",e);return X(r,n),U(r,t),r}(n,t.itemAttributes,t.content)),function(e,n){K(e.list)!==n.listType&&(e.list=J(e.list,n.listType)),X(e.list,n.listAttributes)}(e,t)}),r}function ne(e,n,t){var r=function(e,n,t){for(var r,o,i,u=[],s=0;s<t;s++)u.push((r=e,o=n.listType,void 0,i={list:bn.fromTag(o,r),item:bn.fromTag("li",r)},M(i.list,i.item),i));return u}(e,t,t.depth-n.length);return function(e){for(var n=1;n<e.length;n++)Z(e[n-1],e[n])}(r),function(e,n){for(var t=0;t<e.length-1;t++)r=e[t].item,o="list-style-type",i="none",void 0,u=r.dom(),Y(u,o,i);var r,o,i,u;O(e).each(function(e){X(e.list,n.listAttributes),X(e.item,n.itemAttributes),U(e.item,n.content)})}(r,t),function(e,n){A(O(e),S(n),Z)}(n,r),n.concat(r)}function te(e){return En(e,"OL,UL")}function re(e){return _(e).map(te).getOr(!1)}function oe(e){return 0<e.depth}function ie(e){return e.isSelected}function ue(e){var n=R(e),t=function(e){return B(e).map(te).getOr(!1)}(e)?n.slice(0,-1):n;return g(t,G)}function se(t){p(t,function(n,e){(function(e,n){for(var t=e[n].depth,r=n-1;0<=r;r--){if(e[r].depth===t)return $e.some(e[r]);if(e[r].depth<t)break}return $e.none()})(t,e).each(function(e){!function(e,n){e.listType=n.listType,e.listAttributes=nt({},n.listAttributes)}(n,e)})})}function ae(t,r,o,i){return _(i).filter(te).fold(function(){r.each(function(e){k(e.start,i)&&o.set(!0)});var e=function(n,t,r){return x(n).filter(Zn).map(function(e){return{depth:t,isSelected:r,content:ue(n),itemAttributes:Q(n),listAttributes:Q(e),listType:K(e)}})}(i,t,o.get());r.each(function(e){k(e.end,i)&&o.set(!1)});var n=B(i).filter(te).map(function(e){return tt(t,r,o,e)}).getOr([]);return e.toArray().concat(n)},function(e){return tt(t,r,o,e)})}function ce(t,e){return g(e,function(e){var n=function(e,n){var t=(n||r.document).createDocumentFragment();return p(e,function(e){t.appendChild(e.dom())}),bn.fromDom(t)}(e.content);return bn.fromDom(z(t,n.dom()))})}function fe(e,n){return se(n),function(t,e){var n=h(e,function(e,n){return n.depth>e.length?ne(t,e,n):ee(t,e,n)},[]);return S(n).map(function(e){return e.list})}(e.contentDocument,n).toArray()}function de(e){var n=g(Jn.getSelectedListItems(e),bn.fromDom);return A(N(n,t(re)),N(function(e){var n=Xe.call(e,0);return n.reverse(),n}(n),t(re)),function(e,n){return{start:e,end:n}})}function le(t,e,r){var n=function(e,n){var t=Ge(!1);return g(e,function(e){return{sourceList:e,entries:tt(0,n,t,e)}})}(e,de(t));p(n,function(e){!function(e,n){p(v(e,ie),function(e){return function(e,n){switch(e){case"Indent":n.depth++;break;case"Outdent":n.depth--;break;case"Flatten":n.depth=0}}(n,e)})}(e.entries,r);var n=function(n,e){return y(function(e,n){if(0===e.length)return[];for(var t=n(e[0]),r=[],o=[],i=0,u=e.length;i<u;i++){var s=e[i],a=n(s);a!==t&&(r.push(o),o=[]),t=a,o.push(s)}return 0!==o.length&&r.push(o),r}(e,oe),function(e){return S(e).map(oe).getOr(!1)?fe(n,e):ce(n,e)})}(t,e.entries);p(n,function(e){j(t,"Indent"===r?"IndentList":"OutdentList",e.dom())}),function(n,e){p(e,function(e){P(n,e)})}(e.sourceList,n),F(e.sourceList)})}function me(e){En(e,"dt")&&J(e,"dd")}function ge(n,e,t){p(t,"Indent"===e?me:function(e){return function(n,t){En(t,"dd")?J(t,"dt"):En(t,"dt")&&x(t).each(function(e){return it(n,e.dom(),t.dom())})}(n,e)})}function pe(e,n){if(Mn(e))return{container:e,offset:n};var t=wn.getNode(e,n);return Mn(t)?{container:t,offset:n>=e.childNodes.length?t.data.length:0}:t.previousSibling&&Mn(t.previousSibling)?{container:t.previousSibling,offset:t.previousSibling.data.length}:t.nextSibling&&Mn(t.nextSibling)?{container:t.nextSibling,offset:0}:{container:e,offset:n}}function ve(e,n){var t=g(Jn.getSelectedListRoots(e),bn.fromDom),r=g(Jn.getSelectedDlItems(e),bn.fromDom),o=!1;if(t.length||r.length){var i=e.selection.getBookmark();le(e,t,n),ge(e,n,r),e.selection.moveToBookmark(i),e.selection.setRng(ut(e.selection.getRng())),e.nodeChanged(),o=!0}return o}function he(e){return ve(e,"Indent")}function Ne(e){return ve(e,"Outdent")}function ye(e){return ve(e,"Flatten")}function Se(e){return/\btox\-/.test(e.className)}function Oe(e){switch(e){case"UL":return"ToggleUlList";case"OL":return"ToggleOlList";case"DL":return"ToggleDLList"}}function Ce(t,e){Pn.each(e,function(e,n){t.setAttribute(n,e)})}function be(e,n,t){!function(e,n,t){var r=t["list-style-type"]?t["list-style-type"]:null;e.setStyle(n,"list-style-type",r)}(e,n,t),function(e,n,t){Ce(n,t["list-attributes"]),Pn.each(e.select("li",n),function(e){Ce(e,t["list-item-attributes"])})}(e,n,t)}function Le(e,n,t,r){var o,i;for(o=n[t?"startContainer":"endContainer"],i=n[t?"startOffset":"endOffset"],1===o.nodeType&&(o=o.childNodes[Math.min(i,o.childNodes.length-1)]||o),!t&&qn(o.nextSibling)&&(o=o.nextSibling);o.parentNode!==r;){if(Vn(e,o))return o;if(/^(TD|TH)$/.test(o.parentNode.nodeName))return o;o=o.parentNode}return o}function Te(r,o,i){void 0===i&&(i={});var e,n=r.selection.getRng(!0),u="LI",t=Jn.getClosestListRootElm(r,r.selection.getStart(!0)),s=r.dom;"false"!==s.getContentEditable(r.selection.getNode())&&("DL"===(o=o.toUpperCase())&&(u="DT"),e=ct(n),Pn.each(function(t,e,r){for(var o,i=[],u=t.dom,n=Le(t,e,!0,r),s=Le(t,e,!1,r),a=[],c=n;c&&(a.push(c),c!==s);c=c.nextSibling);return Pn.each(a,function(e){if(Vn(t,e))return i.push(e),void(o=null);if(u.isBlock(e)||qn(e))return qn(e)&&u.remove(e),void(o=null);var n=e.nextSibling;st.isBookmarkNode(e)&&(Vn(t,n)||!n&&e.parentNode===r)?o=null:(o||(o=u.create("p"),e.parentNode.insertBefore(o,e),i.push(o)),o.appendChild(e))}),i}(r,n,t),function(e){var n,t;(t=e.previousSibling)&&Un(t)&&t.nodeName===o&&function(e,n,t){var r=e.getStyle(n,"list-style-type"),o=t?t["list-style-type"]:"";return r===(o=null===o?"":o)}(s,t,i)?(n=t,e=s.rename(e,u),t.appendChild(e)):(n=s.create(o),e.parentNode.insertBefore(n,e),n.appendChild(e),e=s.rename(e,u)),function(t,r,e){Pn.each(e,function(e){var n;return t.setStyle(r,((n={})[e]="",n))})}(s,e,["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"]),be(s,n,i),dt(r.dom,n)}),r.selection.setRng(ft(e)))}function De(e,n,t){return function(e,n){return e&&n&&Un(e)&&e.nodeName===n.nodeName}(n,t)&&function(e,n,t){return e.getStyle(n,"list-style-type",!0)===e.getStyle(t,"list-style-type",!0)}(e,n,t)&&function(e,n){return e.className===n.className}(n,t)}function Ee(n,e,t,r,o){if(e.nodeName!==r||lt(o)){var i=ct(n.selection.getRng(!0));Pn.each([e].concat(t),function(e){!function(e,n,t,r){if(n.nodeName!==t){var o=e.dom.rename(n,t);be(e.dom,o,r),j(e,Oe(t),o)}else be(e.dom,n,r),j(e,Oe(t),n)}(n,e,r,o)}),n.selection.setRng(ft(i))}else ye(n)}function we(e,n){var t,r=n.parentNode;"LI"===r.nodeName&&r.firstChild===n&&((t=r.previousSibling)&&"LI"===t.nodeName?(t.appendChild(n),Xn(e,r)&&gt.remove(r)):gt.setStyle(r,"listStyleType","none")),Un(r)&&(t=r.previousSibling)&&"LI"===t.nodeName&&t.appendChild(n)}function ke(e,n,t,r){var o=n.startContainer,i=n.startOffset;if(Mn(o)&&(t?i<o.data.length:0<i))return o;var u=e.schema.getNonEmptyElements();1===o.nodeType&&(o=wn.getNode(o,i));var s=new kn(o,r);for(t&&Kn(e.dom,o)&&s.next();o=s[t?"next":"prev2"]();){if("LI"===o.nodeName&&!o.hasChildNodes())return o;if(u[o.nodeName])return o;if(Mn(o)&&0<o.data.length)return o}}function Ae(e,n){var t=n.childNodes;return 1===t.length&&!Un(t[0])&&e.isBlock(t[0])}function xe(e,n,t){var r,o;if(o=Ae(e,t)?t.firstChild:t,function(e,n){Ae(e,n)&&e.remove(n.firstChild,!0)}(e,n),!Xn(e,n,!0))for(;r=n.firstChild;)o.appendChild(r)}function Re(n,e,t){var r,o,i=e.parentNode;if(Qn(n,e)&&Qn(n,t)){Un(t.lastChild)&&(o=t.lastChild),i===t.lastChild&&qn(i.previousSibling)&&n.remove(i.previousSibling),(r=t.lastChild)&&qn(r)&&e.hasChildNodes()&&n.remove(r),Xn(n,t,!0)&&n.$(t).empty(),xe(n,e,t),o&&t.appendChild(o);var u=Dn(bn.fromDom(t),bn.fromDom(e))?n.getParents(e,Un,t):[];n.remove(e),p(u,function(e){Xn(n,e)&&e!==n.getRoot()&&n.remove(e)})}}function Ie(e,n,t,r){var o=e.dom;if(o.isEmpty(r))!function(e,n,t){e.dom.$(t).empty(),Re(e.dom,n,t),e.selection.setCursorLocation(t)}(e,t,r);else{var i=ct(n);Re(o,t,r),e.selection.setRng(ft(i))}}function _e(e,n){var t=e.dom,r=e.selection,o=r.getStart(),i=Jn.getClosestListRootElm(e,o),u=t.getParent(r.getStart(),"LI",i);if(u){var s=u.parentNode;if(s===e.getBody()&&Xn(t,s))return!0;var a=ut(r.getRng()),c=t.getParent(ke(e,a,n,i),"LI",i);if(c&&c!==u)return e.undoManager.transact(function(){n?Ie(e,a,c,u):Wn(u)?Ne(e):function(e,n,t,r){var o=ct(n);Re(e.dom,t,r);var i=ft(o);e.selection.setRng(i)}(e,a,u,c)}),!0;if(!c&&!n&&0===a.startOffset&&0===a.endOffset)return e.undoManager.transact(function(){ye(e)}),!0}return!1}function Be(e,n){return _e(e,n)||function(e,n){var t=e.dom,r=e.selection.getStart(),o=Jn.getClosestListRootElm(e,r),i=t.getParent(r,t.isBlock,o);if(i&&t.isEmpty(i)){var u=ut(e.selection.getRng()),s=t.getParent(ke(e,u,n,o),"LI",o);if(s)return e.undoManager.transact(function(){!function(e,n,t){var r=e.getParent(n.parentNode,e.isBlock,t);e.remove(n),r&&e.isEmpty(r)&&e.remove(r)}(t,i,o),mt.mergeWithAdjacentLists(t,s.parentNode),e.selection.select(s,!0),e.selection.collapse(n)}),!0}return!1}(e,n)}function Pe(e,n){return e.selection.isCollapsed()?Be(e,n):function(e){var n=e.selection.getStart(),t=Jn.getClosestListRootElm(e,n);return!!(e.dom.getParent(n,"LI,DT,DD",t)||0<Jn.getSelectedListItems(e).length)&&(e.undoManager.transact(function(){e.execCommand("Delete"),pt(e.dom,e.getBody())}),!0)}(e)}function Me(n,t){return function(){var e=n.dom.getParent(n.selection.getStart(),"UL,OL,DL");return e&&e.nodeName===t}}function Ue(n,i){return function(o){function e(e){var n=function(e,n){for(var t=0;t<e.length;t++){if(n(e[t]))return t}return-1}(e.parents,$n),t=-1!==n?e.parents.slice(0,n):e.parents,r=Pn.grep(t,Un);o.setActive(0<r.length&&r[0].nodeName===i&&!Se(r[0]))}return n.on("NodeChange",e),function(){return n.off("NodeChange",e)}}}var Fe,je,He=function(t){function e(){return o}function n(e){return e(t)}var r=l(t),o={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:s,isNone:u,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:e,orThunk:e,map:function(e){return He(e(t))},each:function(e){e(t)},bind:n,exists:n,forall:n,filter:function(e){return e(t)?o:a},toArray:function(){return[t]},toString:function(){return"some("+t+")"},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(u,function(e){return n(t,e)})}};return o},$e={some:He,none:n,from:function(e){return null===e||e===undefined?a:He(e)}},qe=m("string"),We=m("array"),Ve=m("boolean"),ze=m("function"),Ke=m("number"),Xe=Array.prototype.slice,Qe=Array.prototype.push,Ye=(ze(Array.from)&&Array.from,function(e,n){return C(e,n,r.Node.DOCUMENT_POSITION_CONTAINED_BY)}),Ge=function(e){function n(){return t}var t=e;return{get:n,set:function(e){t=e},clone:function(){return Ge(n())}}},Je=function(){return Ze(0,0)},Ze=function(e,n){return{major:e,minor:n}},en={nu:Ze,detect:function(e,n){var t=String(n).toLowerCase();return 0===e.length?Je():b(e,t)},unknown:Je},nn="Edge",tn="Chrome",rn="Opera",on="Firefox",un="Safari",sn=function(e){var n=e.current;return{current:n,version:e.version,isEdge:L(nn,n),isChrome:L(tn,n),isIE:L("IE",n),isOpera:L(rn,n),isFirefox:L(on,n),isSafari:L(un,n)}},an={unknown:function(){return sn({current:undefined,version:en.unknown()})},nu:sn,edge:l(nn),chrome:l(tn),ie:l("IE"),opera:l(rn),firefox:l(on),safari:l(un)},cn="Windows",fn="Android",dn="Solaris",ln="FreeBSD",mn=function(e){var n=e.current;return{current:n,version:e.version,isWindows:T(cn,n),isiOS:T("iOS",n),isAndroid:T(fn,n),isOSX:T("OSX",n),isLinux:T("Linux",n),isSolaris:T(dn,n),isFreeBSD:T(ln,n)}},gn={unknown:function(){return mn({current:undefined,version:en.unknown()})},nu:mn,windows:l(cn),ios:l("iOS"),android:l(fn),linux:l("Linux"),osx:l("OSX"),solaris:l(dn),freebsd:l(ln)},pn=function(e,t){return D(e,t).map(function(e){var n=en.detect(e.versionRegexes,t);return{current:e.name,version:n}})},vn=function(e,t){return D(e,t).map(function(e){var n=en.detect(e.versionRegexes,t);return{current:e.name,version:n}})},hn=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Nn=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return E(e,"edge/")&&E(e,"chrome")&&E(e,"safari")&&E(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,hn],search:function(e){return E(e,"chrome")&&!E(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return E(e,"msie")||E(e,"trident")}},{name:"Opera",versionRegexes:[hn,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:w("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:w("firefox")},{name:"Safari",versionRegexes:[hn,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(E(e,"safari")||E(e,"mobile/"))&&E(e,"applewebkit")}}],yn=[{name:"Windows",search:w("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return E(e,"iphone")||E(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:w("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:w("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:w("linux"),versionRegexes:[]},{name:"Solaris",search:w("sunos"),versionRegexes:[]},{name:"FreeBSD",search:w("freebsd"),versionRegexes:[]}],Sn={browsers:l(Nn),oses:l(yn)},On=Ge(function(e,n){var t=Sn.browsers(),r=Sn.oses(),o=pn(t,e).fold(an.unknown,an.nu),i=vn(r,e).fold(gn.unknown,gn.nu);return{browser:o,os:i,deviceType:function(e,n,t,r){var o=e.isiOS()&&!0===/ipad/i.test(t),i=e.isiOS()&&!o,u=e.isiOS()||e.isAndroid(),s=u||r("(pointer:coarse)"),a=o||!i&&u&&r("(min-device-width:768px)"),c=i||u&&!a,f=n.isSafari()&&e.isiOS()&&!1===/safari/i.test(t),d=!c&&!a&&!f;return{isiPad:l(o),isiPhone:l(i),isTablet:l(a),isPhone:l(c),isTouch:l(s),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:l(f),isDesktop:l(d)}}(i,o,e,n)}}(r.navigator.userAgent,function(e){return r.window.matchMedia(e).matches})),Cn=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:l(e)}},bn={fromHtml:function(e,n){var t=(n||r.document).createElement("div");if(t.innerHTML=e,!t.hasChildNodes()||1<t.childNodes.length)throw r.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return Cn(t.childNodes[0])},fromTag:function(e,n){var t=(n||r.document).createElement(e);return Cn(t)},fromText:function(e,n){var t=(n||r.document).createTextNode(e);return Cn(t)},fromDom:Cn,fromPoint:function(e,n,t){var r=e.dom();return $e.from(r.elementFromPoint(n,t)).map(Cn)}},Ln=(r.Node.ATTRIBUTE_NODE,r.Node.CDATA_SECTION_NODE,r.Node.COMMENT_NODE,r.Node.DOCUMENT_NODE,r.Node.DOCUMENT_TYPE_NODE,r.Node.DOCUMENT_FRAGMENT_NODE,r.Node.ELEMENT_NODE),Tn=(r.Node.TEXT_NODE,r.Node.PROCESSING_INSTRUCTION_NODE,r.Node.ENTITY_REFERENCE_NODE,r.Node.ENTITY_NODE,r.Node.NOTATION_NODE,Ln),Dn=On.get().browser.isIE()?function(e,n){return Ye(e.dom(),n.dom())}:function(e,n){var t=e.dom(),r=n.dom();return t!==r&&t.contains(r)},En=function(e,n){var t=e.dom();if(t.nodeType!==Tn)return!1;var r=t;if(r.matches!==undefined)return r.matches(n);if(r.msMatchesSelector!==undefined)return r.msMatchesSelector(n);if(r.webkitMatchesSelector!==undefined)return r.webkitMatchesSelector(n);if(r.mozMatchesSelector!==undefined)return r.mozMatchesSelector(n);throw new Error("Browser lacks native selectors")},wn=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),kn=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),An=tinymce.util.Tools.resolve("tinymce.util.VK"),xn=Object.keys,Rn=(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]}("element","offset"),"undefined"!=typeof r.window?r.window:Function("return this;")()),In=function(e,n){var t=function(e,n){return H(e,n)}(e,n);if(t===undefined||null===t)throw new Error(e+" not available on this browser");return t},_n=function(e){return function(e){return In("HTMLElement",e)}(H("ownerDocument.defaultView",e)).prototype.isPrototypeOf(e)},Bn=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),Pn=tinymce.util.Tools.resolve("tinymce.util.Tools"),Mn=function(e){return e&&3===e.nodeType},Un=function(e){return e&&/^(OL|UL|DL)$/.test(e.nodeName)},Fn=function(e){return e&&/^(OL|UL)$/.test(e.nodeName)},jn=function(e){return e&&/^(DT|DD)$/.test(e.nodeName)},Hn=function(e){return e&&/^(LI|DT|DD)$/.test(e.nodeName)},$n=function(e){return e&&/^(TH|TD)$/.test(e.nodeName)},qn=$,Wn=function(e){return e.parentNode.firstChild===e},Vn=function(e,n){return n&&!!e.schema.getTextBlockElements()[n.nodeName]},zn=function(e,n){return e&&e.nodeName in n},Kn=function(e,n){return!!$(n)&&!(!e.isBlock(n.nextSibling)||$(n.previousSibling))},Xn=function(e,n,t){var r=e.isEmpty(n);return!(t&&0<e.select("span[data-mce-type=bookmark]",n).length)&&r},Qn=function(e,n){return e.isChildOf(n,e.getRoot())},Yn=function(e,n){var t=e.dom.getParents(n,"TD,TH");return 0<t.length?t[0]:e.getBody()},Gn=function(n,e){var t=g(e,function(e){return V(n,e).getOr(e)});return Bn.unique(t)},Jn={isList:function(e){var n=q(e);return _n(n)},getParentList:q,getSelectedSubLists:function(e){var n=q(e),t=e.selection.getSelectedBlocks();return function(e,n){return e&&1===n.length&&n[0]===e}(n,t)?function(e){return Pn.grep(e.querySelectorAll("ol,ul,dl"),function(e){return Un(e)})}(n):Pn.grep(t,function(e){return Un(e)&&n!==e})},getSelectedListItems:W,getClosestListRootElm:Yn,getSelectedDlItems:function(e){return v(W(e),jn)},getSelectedListRoots:function(e){var n=function(e){var n=V(e,e.selection.getStart()),t=v(e.selection.getSelectedBlocks(),Fn);return n.toArray().concat(t)}(e);return Gn(e,n)}},Zn=(Fe=Ln,function(e){return function(e){return e.dom().nodeType}(e)===Fe}),et=Object.prototype.hasOwnProperty,nt=(je=function(e,n){return n},function(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];if(0===e.length)throw new Error("Can't merge zero objects");for(var t={},r=0;r<e.length;r++){var o=e[r];for(var i in o)et.call(o,i)&&(t[i]=je(t[i],o[i]))}return t}),tt=function(n,t,r,e){return y(R(e),function(e){return(te(e)?tt:ae)(n+1,t,r,e)})},rt=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),ot=rt.DOM,it=function(e,n,t){var r,o,i,u,s,a;for(i=ot.select('span[data-mce-type="bookmark"]',n),s=z(e,t),(r=ot.createRng()).setStartAfter(t),r.setEndAfter(n),u=(o=r.extractContents()).firstChild;u;u=u.firstChild)if("LI"===u.nodeName&&e.dom.isEmpty(u)){ot.remove(u);break}e.dom.isEmpty(o)||ot.insertAfter(o,n),ot.insertAfter(s,n),Xn(e.dom,t.parentNode)&&(a=t.parentNode,Pn.each(i,function(e){a.parentNode.insertBefore(e,t.parentNode)}),ot.remove(a)),ot.remove(t),Xn(e.dom,n)&&ot.remove(n)},ut=function(e){var n=e.cloneRange(),t=pe(e.startContainer,e.startOffset);n.setStart(t.container,t.offset);var r=pe(e.endContainer,e.endOffset);return n.setEnd(r.container,r.offset),n},st=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager"),at=rt.DOM,ct=function(o){function e(e){var n,t,r;t=o[e?"startContainer":"endContainer"],r=o[e?"startOffset":"endOffset"],1===t.nodeType&&(n=at.create("span",{"data-mce-type":"bookmark"}),t.hasChildNodes()?(r=Math.min(r,t.childNodes.length-1),e?t.insertBefore(n,t.childNodes[r]):at.insertAfter(n,t.childNodes[r])):t.appendChild(n),t=n,r=0),i[e?"startContainer":"endContainer"]=t,i[e?"startOffset":"endOffset"]=r}var i={};return e(!0),o.collapsed||e(),i},ft=function(o){function e(e){var n,t,r;n=r=o[e?"startContainer":"endContainer"],t=o[e?"startOffset":"endOffset"],n&&(1===n.nodeType&&(t=function(e){for(var n=e.parentNode.firstChild,t=0;n;){if(n===e)return t;1===n.nodeType&&"bookmark"===n.getAttribute("data-mce-type")||t++,n=n.nextSibling}return-1}(n),n=n.parentNode,at.remove(r),!n.hasChildNodes()&&at.isBlock(n)&&n.appendChild(at.create("br"))),o[e?"startContainer":"endContainer"]=n,o[e?"startOffset":"endOffset"]=t)}e(!0),e();var n=at.createRng();return n.setStart(o.startContainer,o.startOffset),o.endContainer&&n.setEnd(o.endContainer,o.endOffset),ut(n)},dt=function(e,n){var t,r;if(t=n.nextSibling,De(e,n,t)){for(;r=t.firstChild;)n.appendChild(r);e.remove(t)}if(t=n.previousSibling,De(e,n,t)){for(;r=t.lastChild;)n.insertBefore(r,n.firstChild);e.remove(t)}},lt=function(e){return"list-style-type"in e},mt={toggleList:function(e,n,t){var r=Jn.getParentList(e),o=Jn.getSelectedSubLists(e);t=t||{},r&&0<o.length?Ee(e,r,o,n,t):function(e,n,t,r){if(n!==e.getBody())if(n)if(n.nodeName!==t||lt(r)||Se(n)){var o=ct(e.selection.getRng(!0));be(e.dom,n,r);var i=e.dom.rename(n,t);dt(e.dom,i),e.selection.setRng(ft(o)),j(e,Oe(t),i)}else ye(e);else Te(e,t,r),j(e,Oe(t),n)}(e,r,n,t)},mergeWithAdjacentLists:dt},gt=rt.DOM,pt=function(n,e){Pn.each(Pn.grep(n.select("ol,ul",e)),function(e){we(n,e)})},vt=function(n){n.on("keydown",function(e){e.keyCode===An.BACKSPACE?Pe(n,!1)&&e.preventDefault():e.keyCode===An.DELETE&&Pe(n,!0)&&e.preventDefault()})},ht=Pe,Nt=function(n){return{backspaceDelete:function(e){ht(n,e)}}},yt=function(t){t.on("BeforeExecCommand",function(e){var n=e.command.toLowerCase();"indent"===n?he(t):"outdent"===n&&Ne(t)}),t.addCommand("InsertUnorderedList",function(e,n){mt.toggleList(t,"UL",n)}),t.addCommand("InsertOrderedList",function(e,n){mt.toggleList(t,"OL",n)}),t.addCommand("InsertDefinitionList",function(e,n){mt.toggleList(t,"DL",n)}),t.addCommand("RemoveList",function(){ye(t)}),t.addQueryStateHandler("InsertUnorderedList",Me(t,"UL")),t.addQueryStateHandler("InsertOrderedList",Me(t,"OL")),t.addQueryStateHandler("InsertDefinitionList",Me(t,"DL"))},St=function(e){return e.getParam("lists_indent_on_tab",!0)},Ot=function(e){St(e)&&function(n){n.on("keydown",function(e){e.keyCode!==An.TAB||An.metaKeyPressed(e)||n.undoManager.transact(function(){(e.shiftKey?Ne(n):he(n))&&e.preventDefault()})})}(e),vt(e)},Ct=function(n){function e(e){return function(){return n.execCommand(e)}}var t,r,o;r="advlist",o=(t=n).settings.plugins?t.settings.plugins:"",-1===Pn.inArray(o.split(/[ ,]/),r)&&(n.ui.registry.addToggleButton("numlist",{icon:"ordered-list",active:!1,tooltip:"Numbered list",onAction:e("InsertOrderedList"),onSetup:Ue(n,"OL")}),n.ui.registry.addToggleButton("bullist",{icon:"unordered-list",active:!1,tooltip:"Bullet list",onAction:e("InsertUnorderedList"),onSetup:Ue(n,"UL")}))};!function bt(){i.add("lists",function(e){return Ot(e),Ct(e),yt(e),Nt(e)})}()}(window);
