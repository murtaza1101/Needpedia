/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.5 (2019-12-19)
 */

!function(){"use strict";function n(e){return e.getParam("insertdatetime_timeformat",e.translate("%H:%M:%S"))}function r(e){return e.getParam("insertdatetime_formats",["%H:%M:%S","%Y-%m-%d","%I:%M:%S %p","%D"])}function a(e,t){if((e=""+e).length<t)for(var n=0;n<t-e.length;n++)e="0"+e;return e}function i(e,t,n){return n=n||new Date,t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace("%D","%m/%d/%Y")).replace("%r","%I:%M:%S %p")).replace("%Y",""+n.getFullYear())).replace("%y",""+n.getYear())).replace("%m",a(n.getMonth()+1,2))).replace("%d",a(n.getDate(),2))).replace("%H",""+a(n.getHours(),2))).replace("%M",""+a(n.getMinutes(),2))).replace("%S",""+a(n.getSeconds(),2))).replace("%I",""+((n.getHours()+11)%12+1))).replace("%p",n.getHours()<12?"AM":"PM")).replace("%B",""+e.translate(f[n.getMonth()]))).replace("%b",""+e.translate(d[n.getMonth()]))).replace("%A",""+e.translate(s[n.getDay()]))).replace("%a",""+e.translate(l[n.getDay()]))).replace("%%","%")}var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(e){return e.getParam("insertdatetime_dateformat",e.translate("%Y-%m-%d"))},o=n,u=r,c=function(e){var t=r(e);return 0<t.length?t[0]:n(e)},m=function(e){return e.getParam("insertdatetime_element",!1)},l="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),s="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),d="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),f="January February March April May June July August September October November December".split(" "),p=function(e,t){if(m(e)){var n=i(e,t),r=void 0;r=/%[HMSIp]/.test(t)?i(e,"%Y-%m-%dT%H:%M"):i(e,"%Y-%m-%d");var a=e.dom.getParent(e.selection.getStart(),"time");a?function(e,t,n,r){var a=e.dom.create("time",{datetime:n},r);t.parentNode.insertBefore(a,t),e.dom.remove(t),e.selection.select(a,!0),e.selection.collapse(!1)}(e,a,r,n):e.insertContent('<time datetime="'+r+'">'+n+"</time>")}else e.insertContent(i(e,t))},g=i,y=function(e){e.addCommand("mceInsertDate",function(){p(e,t(e))}),e.addCommand("mceInsertTime",function(){p(e,o(e))})},M=tinymce.util.Tools.resolve("tinymce.util.Tools"),S=function(e){function t(){return n}var n=e;return{get:t,set:function(e){n=e},clone:function(){return S(t())}}},v=function(n){var t=u(n),r=S(c(n));n.ui.registry.addSplitButton("insertdatetime",{icon:"insert-time",tooltip:"Insert date/time",select:function(e){return e===r.get()},fetch:function(e){e(M.map(t,function(e){return{type:"choiceitem",text:g(n,e),value:e}}))},onAction:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];p(n,r.get())},onItemAction:function(e,t){r.set(t),p(n,t)}});n.ui.registry.addNestedMenuItem("insertdatetime",{icon:"insert-time",text:"Date/time",getSubmenuItems:function(){return M.map(t,function(e){return{type:"menuitem",text:g(n,e),onAction:function(e){return function(){r.set(e),p(n,e)}}(e)}})}})};!function h(){e.add("insertdatetime",function(e){y(e),v(e)})}()}();
