/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.1 (2019-10-28)
 */

!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),l=tinymce.util.Tools.resolve("tinymce.util.Tools"),m=function(e){return e.getParam("content_style","")},u=function(e){return e.getParam("content_css_cors",!1,"boolean")},y=tinymce.util.Tools.resolve("tinymce.Env"),n=function(t){var n="",i=t.dom.encode,e=m(t);n+='<base href="'+i(t.documentBaseURI.getURI())+'">',e&&(n+='<style type="text/css">'+e+"</style>");var o=u(t)?' crossorigin="anonymous"':"";l.each(t.contentCSS,function(e){n+='<link type="text/css" rel="stylesheet" href="'+i(t.documentBaseURI.toAbsolute(e))+'"'+o+">"});var r=t.settings.body_id||"tinymce";-1!==r.indexOf("=")&&(r=(r=t.getParam("body_id","","hash"))[t.id]||r);var a=t.settings.body_class||"";-1!==a.indexOf("=")&&(a=(a=t.getParam("body_class","","hash"))[t.id]||"");var c='<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A" && !('+(y.mac?"e.metaKey":"e.ctrlKey && !e.altKey")+")) {e.preventDefault();}}}, false);<\/script> ",s=t.getBody().dir,d=s?' dir="'+i(s)+'"':"";return"<!DOCTYPE html><html><head>"+n+'</head><body id="'+i(r)+'" class="mce-content-body '+i(a)+'"'+d+">"+t.getContent()+c+"</body></html>"},t=function(e){e.addCommand("mcePreview",function(){!function(e){var t=n(e);e.windowManager.open({title:"Preview",size:"large",body:{type:"panel",items:[{name:"preview",type:"iframe",sandboxed:!0}]},buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}],initialData:{preview:t}}).focus("close")}(e)})},i=function(e){e.ui.registry.addButton("preview",{icon:"preview",tooltip:"Preview",onAction:function(){return e.execCommand("mcePreview")}}),e.ui.registry.addMenuItem("preview",{icon:"preview",text:"Preview",onAction:function(){return e.execCommand("mcePreview")}})};!function o(){e.add("preview",function(e){t(e),i(e)})}()}();