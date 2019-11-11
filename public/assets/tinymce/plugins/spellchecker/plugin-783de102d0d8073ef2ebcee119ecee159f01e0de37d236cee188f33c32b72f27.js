/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.1 (2019-10-28)
 */

!function(t){"use strict";var a=function(e){function t(){return n}var n=e;return{get:t,set:function(e){n=e},clone:function(){return a(t())}}},n=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=function(e){return!(!/(^|[ ,])tinymcespellchecker([, ]|$)/.test(e.settings.plugins)||!n.get("tinymcespellchecker"))&&("undefined"!=typeof t.window.console&&t.window.console.log&&t.window.console.log("Spell Checker Pro is incompatible with Spell Checker plugin! Remove 'spellchecker' from the 'plugins' option."),!0)},l=tinymce.util.Tools.resolve("tinymce.util.Tools"),u=tinymce.util.Tools.resolve("tinymce.util.URI"),d=tinymce.util.Tools.resolve("tinymce.util.XHR"),f=function(e){return e.fire("SpellcheckStart")},o=function(e){return e.fire("SpellcheckEnd")},g=function(e){return e.getParam("spellchecker_languages","English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv")},s=function(e){var t=e.getParam("language","en");return e.getParam("spellchecker_language",t)},h=function(e){return e.getParam("spellchecker_rpc_url")},p=function(e){return e.getParam("spellchecker_callback")},m=function(e){var t=new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e\xa0\u2002\u2003\u2009]+',"g");return e.getParam("spellchecker_wordchar_pattern",t)};function b(e){return e&&1===e.nodeType&&"false"===e.contentEditable}function r(a,r){var n,o,g,h,p,i=[],v=r.dom;function c(e,t){if(!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");return{start:e.index,end:e.index+e[0].length,text:e[0],data:t}}function s(e){var t=a.getElementsByTagName("*"),n=[];e="number"==typeof e?""+e:null;for(var r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-mce-index");null!==i&&i.length&&-1!==o.className.indexOf("mce-spellchecker-word")&&(i!==e&&null!==e||n.push(o))}return n}function u(e){for(var t=i.length;t--;)if(i[t]===e)return t;return-1}function e(e){for(var t=0,n=i.length;t<n&&!1!==e(i[t],t);t++);return this}function t(e){var t,n,r=s(e?u(e):null);for(t=r.length;t--;)(n=r[t]).parentNode.insertBefore(n.firstChild,n),n.parentNode.removeChild(n);return this}function l(e){var t=s(u(e)),n=r.dom.createRng();return n.setStartBefore(t[0]),n.setEndAfter(t[t.length-1]),n}return g=r.schema.getBlockElements(),h=r.schema.getWhiteSpaceElements(),p=r.schema.getShortEndedElements(),{text:o=function d(e){var t;if(3===e.nodeType)return e.data;if(h[e.nodeName]&&!g[e.nodeName])return"";if(b(e))return"\n";if(t="",(g[e.nodeName]||p[e.nodeName])&&(t+="\n"),e=e.firstChild)for(;t+=d(e),e=e.nextSibling;);return t}(a),matches:i,each:e,filter:function f(n){var r=[];return e(function(e,t){n(e,t)&&r.push(e)}),i=r,this},reset:function m(){return i.splice(0,i.length),t(),this},matchFromElement:function x(e){return i[e.getAttribute("data-mce-index")]},elementFromMatch:function k(e){return s(u(e))[0]},find:function N(e,t){if(o&&e.global)for(;n=e.exec(o);)i.push(c(n,t));return this},add:function y(e,t,n){return i.push({start:e,end:e+t,text:o.substr(e,t),data:n}),this},wrap:function S(e){return i.length&&function f(e,t,n){var r,o,i,a,c,s=[],u=0,l=e,d=0;(t=t.slice(0)).sort(function(e,t){return e.start-t.start}),c=t.shift();e:for(;;){if((g[l.nodeName]||p[l.nodeName]||b(l))&&u++,3===l.nodeType&&(!o&&l.length+u>=c.end?(o=l,a=c.end-u):r&&s.push(l),!r&&l.length+u>c.start&&(r=l,i=c.start-u),u+=l.length),r&&o){if(l=n({startNode:r,startNodeIndex:i,endNode:o,endNodeIndex:a,innerNodes:s,match:c.text,matchIndex:d}),u-=o.length-a,o=r=null,s=[],d++,!(c=t.shift()))break}else if(h[l.nodeName]&&!g[l.nodeName]||!l.firstChild){if(l.nextSibling){l=l.nextSibling;continue}}else if(!b(l)){l=l.firstChild;continue}for(;;){if(l.nextSibling){l=l.nextSibling;break}if(l.parentNode===e)break e;l=l.parentNode}}}(a,i,function t(o){function m(e,t){var n=i[t];n.stencil||(n.stencil=o(n));var r=n.stencil.cloneNode(!1);return r.setAttribute("data-mce-index",t),e&&r.appendChild(v.doc.createTextNode(e)),r}return function(e){var t,n,r,o=e.startNode,i=e.endNode,a=e.matchIndex,c=v.doc;if(o===i){var s=o;r=s.parentNode,0<e.startNodeIndex&&(t=c.createTextNode(s.data.substring(0,e.startNodeIndex)),r.insertBefore(t,s));var u=m(e.match,a);return r.insertBefore(u,s),e.endNodeIndex<s.length&&(n=c.createTextNode(s.data.substring(e.endNodeIndex)),r.insertBefore(n,s)),s.parentNode.removeChild(s),u}t=c.createTextNode(o.data.substring(0,e.startNodeIndex)),n=c.createTextNode(i.data.substring(e.endNodeIndex));for(var l=m(o.data.substring(e.startNodeIndex),a),d=0,f=e.innerNodes.length;d<f;++d){var g=e.innerNodes[d],h=m(g.data,a);g.parentNode.replaceChild(h,g)}var p=m(i.data.substring(0,e.endNodeIndex),a);return(r=o.parentNode).insertBefore(t,o),r.insertBefore(l,o),r.removeChild(o),(r=i.parentNode).insertBefore(p,i),r.insertBefore(n,i),r.removeChild(i),p}}(e)),this},unwrap:t,replace:function w(e,t){var n=l(e);return n.deleteContents(),0<t.length&&n.insertNode(r.dom.doc.createTextNode(t)),n},rangeFromMatch:l,indexOf:u}}function v(e,t){if(!t.get()){var n=r(e.getBody(),e);t.set(n)}return t.get()}function x(e,t,n,r,o,i,a){var c=p(e);(c||function(a,c,s){return function(e,t,r,o){var n={method:e,lang:s.get()},i="";n["addToDictionary"===e?"word":"text"]=t,l.each(n,function(e,t){i&&(i+="&"),i+=t+"="+encodeURIComponent(e)}),d.send({url:new u(c).toAbsolute(h(a)),type:"post",content_type:"application/x-www-form-urlencoded",data:i,success:function(e){var t=JSON.parse(e);if(t)t.error?o(t.error):r(t);else{var n=a.translate("Server response wasn't proper JSON.");o(n)}},error:function(){var e=a.translate("The spelling service was not found: (")+h(a)+a.translate(")");o(e)}})}}(e,t,n)).call(e.plugins.spellchecker,r,o,i,a)}function k(e,t,n){e.dom.select("span.mce-spellchecker-word").length||y(e,t,n)}function N(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t}var y=function(e,t,n){var r=e.selection.getBookmark();if(v(e,n).reset(),e.selection.moveToBookmark(r),n.set(null),t.get())return t.set(!1),o(e),!0},S=function(t,e,n,r,o){var i=!!o.dictionary,a=o.words;if(t.setProgressState(!1),function(e){for(var t in e)return!1;return!0}(a)){var c=t.translate("No misspellings found.");return t.notificationManager.open({text:c,type:"info"}),void e.set(!1)}r.set({suggestions:a,hasDictionarySupport:i});var s=t.selection.getBookmark();v(t,n).find(m(t)).filter(function(e){return!!a[e.text]}).wrap(function(e){return t.dom.create("span",{"class":"mce-spellchecker-word","aria-invalid":"spelling","data-mce-bogus":1,"data-mce-word":e.text})}),t.selection.moveToBookmark(s),e.set(!0),f(t)},w={spellcheck:function(t, e, n, r, o, i){if(!y(t,n,r)){t.setProgressState(!0),x(t,e,i,"spellcheck",v(t,r).text,function(e){S(t,n,r,o,e)},function(e){t.notificationManager.open({text:e,type:"error"}),t.setProgressState(!1),y(t,n,r)}),t.focus()}},checkIfFinished:k,addToDictionary:function(t, e, n, r, o, i, a){t.setProgressState(!0),x(t,e,o,"addToDictionary",i,function(){t.setProgressState(!1),t.dom.remove(a,!0),k(t,n,r)},function(e){t.notificationManager.open({text:e,type:"error"}),t.setProgressState(!1)})},ignoreWord:function(t,e,n,r,o,i){t.selection.collapse(),i?l.each(t.dom.select("span.mce-spellchecker-word"),function(e){e.getAttribute("data-mce-word")===r&&t.dom.remove(e,!0)}):t.dom.remove(o,!0),k(t,e,n)},findSpansByIndex:function(e,t){var n,r=[];if((n=l.toArray(e.getBody().getElementsByTagName("span"))).length)for(var o=0;o<n.length;o++){var i=N(n[o]);null!==i&&i.length&&i===t.toString()&&r.push(n[o])}return r},getElmIndex:N,markErrors:S},T=function(t,n,r,o,e,i){return{getTextMatcher:function(){return o.get()},getWordCharPattern:function(){return m(t)},markErrors:function(e){w.markErrors(t,n,o,r,e)},getLanguage:function(){return e.get()}}},I=function(e,t,n,r,o,i){e.addCommand("mceSpellCheck",function(){w.spellcheck(e,t,n,r,o,i)})},B=function(){return(B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},A="SpellcheckStart SpellcheckEnd",E=function(n,e,r,t,o,i){function a(){w.spellcheck(n,e,r,t,i,o)}var c=function(e,t){var n=[];return l.each(t,function(e){n.push({selectable:!0,text:e.name,data:e.value})}),n}(0,function(e){return l.map(g(e).split(","),function(e){return{name:(e=e.split("="))[0],value:e[1]}})}(n)),s={tooltip:"Spellcheck",onAction:a,icon:"spell-check",onSetup:function(e){function t(){e.setActive(r.get())}return n.on(A,t),function(){n.off(A,t)}}},u=B(B({},s),{type:"splitbutton",select:function(e){return e===o.get()},fetch:function(e){e(l.map(c,function(e){return{type:"choiceitem",value:e.data,text:e.text}}))},onItemAction:function(e,t){o.set(t)}});1<c.length?n.ui.registry.addSplitButton("spellchecker",u):n.ui.registry.addToggleButton("spellchecker",s),n.ui.registry.addToggleMenuItem("spellchecker",{text:"Spellcheck",onSetup:function(e){e.setActive(r.get());function t(){e.setActive(r.get())}return n.on(A,t),function(){n.off(A,t)}},onAction:a})},C=function(o,i,a,c,s,u){o.ui.registry.addContextMenu("spellchecker",{update:function(e){var t=e;if("mce-spellchecker-word"!==t.className)return[];var n=w.findSpansByIndex(o,w.getElmIndex(t));if(0<n.length){var r=o.dom.createRng();return r.setStartBefore(n[0]),r.setEndAfter(n[n.length-1]),o.selection.setRng(r),function(t,e,n,r,o,i,a,c){var s=[],u=n.get().suggestions[a];return l.each(u,function(e){s.push({text:e,onAction:function(){t.insertContent(t.dom.encode(e)),t.dom.remove(c),w.checkIfFinished(t,r,o)}})}),n.get().hasDictionarySupport&&(s.push({type:"separator"}),s.push({text:"Add to dictionary",onAction:function(){w.addToDictionary(t,e,r,o,i,a,c)}})),s.push.apply(s,[{type:"separator"},{text:"Ignore",onAction:function(){w.ignoreWord(t,r,o,a,c)}},{text:"Ignore all",onAction:function(){w.ignoreWord(t,r,o,a,c,!0)}}]),s}(o,i,a,c,s,u,t.getAttribute("data-mce-word"),n)}}})};!function e(){n.add("spellchecker",function(e,t){if(!1===c(e)){var n=a(!1),r=a(s(e)),o=a(null),i=a(null);return E(e,t,n,o,r,i),C(e,t,i,n,o,r),I(e,t,n,o,i,r),T(e,n,i,o,r,t)}})}()}(window);
