/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.5 (2019-12-19)
 */

!function(c){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),r=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),t={},n=t,g=void 0!==t?t:"undefined"!=typeof WorkerGlobalScope&&c.self instanceof WorkerGlobalScope?c.self:{},i=function(){var u=/\blang(?:uage)?-(?!\*)(\w+)\b/i,S=g.Prism={util:{encode:function(e){return e instanceof s?new s(e.type,S.util.encode(e.content),e.alias):"Array"===S.util.type(e)?e.map(S.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){switch(S.util.type(e)){case"Object":var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=S.util.clone(e[n]));return t;case"Array":return e.map&&e.map(function(e){return S.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=S.util.clone(S.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(n,e,t,a){var r=(a=a||S.languages)[n];if(2===arguments.length){for(var i in t=e)t.hasOwnProperty(i)&&(r[i]=t[i]);return r}var o={};for(var s in r)if(r.hasOwnProperty(s)){if(s===e)for(var i in t)t.hasOwnProperty(i)&&(o[i]=t[i]);o[s]=r[s]}return S.languages.DFS(S.languages,function(e,t){t===a[n]&&e!==n&&(this[e]=o)}),a[n]=o},DFS:function(e,t,n){for(var a in e)e.hasOwnProperty(a)&&(t.call(e,a,e[a],n||a),"Object"===S.util.type(e[a])?S.languages.DFS(e[a],t):"Array"===S.util.type(e[a])&&S.languages.DFS(e[a],t,a))}},plugins:{},highlightAll:function(e,t){for(var n=c.document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),a=0,r=void 0;r=n[a++];)S.highlightElement(r,!0===e,t)},highlightElement:function(e,t,n){for(var a,r,i=e;i&&!u.test(i.className);)i=i.parentNode;i&&(a=(i.className.match(u)||[,""])[1],r=S.languages[a]),e.className=e.className.replace(u,"").replace(/\s+/g," ")+" language-"+a,i=e.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(u,"").replace(/\s+/g," ")+" language-"+a);var o=e.textContent,s={element:e,language:a,grammar:r,code:o};if(o&&r)if(S.hooks.run("before-highlight",s),t&&g.Worker){var l=new c.Worker(S.filename);l.onmessage=function(e){s.highlightedCode=e.data,S.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,n&&n.call(s.element),S.hooks.run("after-highlight",s),S.hooks.run("complete",s)},l.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=S.highlight(s.code,s.grammar,s.language),S.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,n&&n.call(e),S.hooks.run("after-highlight",s),S.hooks.run("complete",s);else S.hooks.run("complete",s)},highlight:function(e,t,n){var a=S.tokenize(e,t);return s.stringify(S.util.encode(a),n)},tokenize:function(e,t,n){var a=S.Token,r=[e],i=t.rest;if(i){for(var o in i)t[o]=i[o];delete t.rest}e:for(var o in t)if(t.hasOwnProperty(o)&&t[o]){var s=t[o];s="Array"===S.util.type(s)?s:[s];for(var l=0;l<s.length;++l){var u=s[l],c=u.inside,g=!!u.lookbehind,d=0,p=u.alias;u=u.pattern||u;for(var f=0;f<r.length;f++){var h=r[f];if(r.length>e.length)break e;if(!(h instanceof a)){u.lastIndex=0;var m=u.exec(h);if(m){g&&(d=m[1].length);var b=m.index-1+d,y=b+(m=m[0].slice(d)).length,v=h.slice(0,b+1),k=h.slice(y+1),w=[f,1];v&&w.push(v);var x=new a(o,c?S.tokenize(m,c):m,p);w.push(x),k&&w.push(k),Array.prototype.splice.apply(r,w)}}}}}return r},hooks:{all:{},add:function(e,t){var n=S.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=S.hooks.all[e];if(n&&n.length)for(var a=0,r=void 0;r=n[a++];)r(t)}}},s=S.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(s.stringify=function(t,n,e){if("string"==typeof t)return t;if("Array"===S.util.type(t))return t.map(function(e){return s.stringify(e,n,t)}).join("");var a={type:t.type,content:s.stringify(t.content,n,e),tag:"span",classes:["token",t.type],attributes:{},language:n,parent:e};if("comment"===a.type&&(a.attributes.spellcheck="true"),t.alias){var r="Array"===S.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(a.classes,r)}S.hooks.run("wrap",a);var i="";for(var o in a.attributes)i+=(i?" ":"")+o+'="'+(a.attributes[o]||"")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'" '+i+">"+a.content+"</"+a.tag+">"},!g.document)return g.addEventListener&&g.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,a=t.code,r=t.immediateClose;g.postMessage(S.highlight(a,S.languages[n],n)),r&&g.close()},!1),g.Prism}();void 0!==n&&(n.Prism=i),i.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[^\s>\/=.]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},i.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),i.languages.xml=i.languages.markup,i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},i.languages.css.atrule.inside.rest=i.util.clone(i.languages.css),i.languages.markup&&(i.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:i.languages.markup.tag.inside},rest:i.languages.css},alias:"language-css"}}),i.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:i.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:i.languages.css}},alias:"language-css"}},i.languages.markup.tag)),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),i.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),i.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&i.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:i.languages.markup.tag.inside},rest:i.languages.javascript},alias:"language-javascript"}}),i.languages.js=i.languages.javascript,i.languages.c=i.languages.extend("clike",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,operator:/\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i}),i.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,lookbehind:!0,alias:"property",inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,lookbehind:!0}}}}),delete i.languages.c["class-name"],delete i.languages.c["boolean"],i.languages.csharp=i.languages.extend("clike",{keyword:/\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,string:[/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,/("|')(\\?.)*?\1/],number:/\b-?(0x[\da-f]+|\d*\.?\d+)\b/i}),i.languages.insertBefore("csharp","keyword",{preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0}}),i.languages.cpp=i.languages.extend("c",{keyword:/\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,"boolean":/\b(true|false)\b/,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/}),i.languages.insertBefore("cpp","keyword",{"class-name":{pattern:/(class\s+)[a-z0-9_]+/i,lookbehind:!0}}),i.languages.java=i.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}}),i.languages.php=i.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0}}),i.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),i.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),i.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),i.languages.markup&&(i.hooks.add("before-highlight",function(t){"php"===t.language&&(t.tokenStack=[],t.backupCode=t.code,t.code=t.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(e){return t.tokenStack.push(e),"{{{PHP"+t.tokenStack.length+"}}}"}))}),i.hooks.add("before-insert",function(e){"php"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),i.hooks.add("after-highlight",function(e){if("php"===e.language){for(var t=0,n=void 0;n=e.tokenStack[t];t++)e.highlightedCode=e.highlightedCode.replace("{{{PHP"+(t+1)+"}}}",i.highlight(n,e.grammar,"php").replace(/\$/g,"$$$$"));e.element.innerHTML=e.highlightedCode}}),i.hooks.add("wrap",function(e){"php"===e.language&&"markup"===e.type&&(e.content=e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),i.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:i.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/})),i.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:/"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(?:\\?.)*?\1/,"function":{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,"boolean":/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/},function(e){e.languages.ruby=e.languages.extend("clike",{comment:/#(?!\{[^\r\n]*?\}).*/,keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/});var t={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:e.util.clone(e.languages.ruby)}};e.languages.insertBefore("ruby","keyword",{regex:[{pattern:/%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,inside:{interpolation:t}},{pattern:/%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,inside:{interpolation:t}},{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}],variable:/[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,symbol:/:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.insertBefore("ruby","number",{builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/}),e.languages.ruby.string=[{pattern:/%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,inside:{interpolation:t}},{pattern:/%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,inside:{interpolation:t}},{pattern:/("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,inside:{interpolation:t}}]}(i);function a(){}function o(e){return function(){return e}}function s(){return f}var l,u={isCodeSample:function B(e){return e&&"PRE"===e.nodeName&&-1!==e.className.indexOf("language-")},trimArg:function M(n){return function(e,t){return n(t)}}},d=o(!1),p=o(!0),f=(l={fold:function(e,t){return e()},is:d,isSome:d,isNone:p,getOr:b,getOrThunk:m,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:o(null),getOrUndefined:o(undefined),or:b,orThunk:m,map:s,each:a,bind:s,exists:d,forall:p,filter:s,equals:h,equals_:h,toArray:function(){return[]},toString:o("none()")},Object.freeze&&Object.freeze(l),l);function h(e){return e.isNone()}function m(e){return e()}function b(e){return e}function y(e){var t=e.selection?e.selection.getNode():null;return u.isCodeSample(t)?w.some(t):w.none()}var v,k=function(n){function e(){return r}function t(e){return e(n)}var a=o(n),r={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:p,isNone:d,getOr:a,getOrThunk:a,getOrDie:a,getOrNull:a,getOrUndefined:a,or:e,orThunk:e,map:function(e){return k(e(n))},each:function(e){e(n)},bind:t,exists:t,forall:t,filter:function(e){return e(n)?r:f},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(d,function(e){return t(n,e)})}};return r},w={some:k,none:s,from:function(e){return null===e||e===undefined?f:k(e)}},x=y,S=function(t,n,a){t.undoManager.transact(function(){var e=y(t);return a=r.DOM.encode(a),e.fold(function(){t.insertContent('<pre id="__new" class="language-'+n+'">'+a+"</pre>"),t.selection.select(t.$("#__new").removeAttr("id")[0])},function(e){t.dom.setAttrib(e,"class","language-"+n),e.innerHTML=a,i.highlightElement(e),t.selection.select(e)})})},A=function(e){return y(e).fold(function(){return""},function(e){return e.textContent})},C=function(e){return e.settings.codesample_languages},_=function(e){var t=C(e);return t||[{text:"HTML/XML",value:"markup"},{text:"JavaScript",value:"javascript"},{text:"CSS",value:"css"},{text:"PHP",value:"php"},{text:"Ruby",value:"ruby"},{text:"Python",value:"python"},{text:"Java",value:"java"},{text:"C",value:"c"},{text:"C#",value:"csharp"},{text:"C++",value:"cpp"}]},N=function(e,n){return x(e).fold(function(){return n},function(e){var t=e.className.match(/language-(\w+)/);return t?t[1]:n})},O=(v="function",function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"==t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t}(e)===v}),z=Array.prototype.slice,P=(O(Array.from)&&Array.from,function(n){var e=_(n),t=function(e){return 0===e.length?w.none():w.some(e[0])}(e).fold(function(){return""},function(e){return e.value}),a=N(n,t),r=A(n);n.windowManager.open({title:"Insert/Edit Code Sample",size:"large",body:{type:"panel",items:[{type:"selectbox",name:"language",label:"Language",items:e},{type:"textarea",name:"code",label:"Code view"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{language:a,code:r},onSubmit:function(e){var t=e.getData();S(n,t.language,t.code),e.close()}})}),W=function(t){t.addCommand("codesample",function(){var e=t.selection.getNode();t.selection.isCollapsed()||u.isCodeSample(e)?P(t):t.formatter.toggle("code")})},j=function(n){var r=n.$;n.on("PreProcess",function(e){r("pre[contenteditable=false]",e.node).filter(u.trimArg(u.isCodeSample)).each(function(e,t){var n=r(t),a=t.textContent;n.attr("class",r.trim(n.attr("class"))),n.removeAttr("contentEditable"),n.empty().append(r("<code></code>").each(function(){this.textContent=a}))})}),n.on("SetContent",function(){var e=r("pre").filter(u.trimArg(u.isCodeSample)).filter(function(e,t){return"false"!==t.contentEditable});e.length&&n.undoManager.transact(function(){e.each(function(e,t){r(t).find("br").each(function(e,t){t.parentNode.replaceChild(n.getDoc().createTextNode("\n"),t)}),t.contentEditable="false",t.innerHTML=n.dom.encode(t.textContent),i.highlightElement(t),t.className=r.trim(t.className)})})})},T=function(n){n.ui.registry.addToggleButton("codesample",{icon:"code-sample",tooltip:"Insert/edit code sample",onAction:function(){return P(n)},onSetup:function(e){function t(){e.setActive(function(e){var t=e.selection.getStart();return e.dom.is(t,"pre.language-markup")}(n))}return n.on("NodeChange",t),function(){return n.off("NodeChange",t)}}}),n.ui.registry.addMenuItem("codesample",{text:"Code sample...",icon:"code-sample",onAction:function(){return P(n)}})};!function F(){e.add("codesample",function(t){j(t),T(t),W(t),t.on("dblclick",function(e){u.isCodeSample(e.target)&&P(t)})})}()}(window);
