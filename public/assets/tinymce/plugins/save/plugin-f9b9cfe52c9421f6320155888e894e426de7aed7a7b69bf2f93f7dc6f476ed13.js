/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.1 (2019-10-28)
 */

!function(){"use strict";function t(n,e){n.notificationManager.open({text:e,type:"error"})}function e(t){return function(n){function e(){n.setDisabled(a(t)&&!t.isDirty())}return t.on("NodeChange dirty",e),function(){return t.off("NodeChange dirty",e)}}}var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),i=tinymce.util.Tools.resolve("tinymce.util.Tools"),a=function(n){return n.getParam("save_enablewhendirty",!0)},c=function(n){return!!n.getParam("save_onsavecallback")},r=function(n){return!!n.getParam("save_oncancelcallback")},u=function(n){var e;if(e=o.DOM.getParent(n.id,"form"),!a(n)||n.isDirty()){if(n.save(),c(n))return n.execCallback("save_onsavecallback",n),void n.nodeChanged();e?(n.setDirty(!1),e.onsubmit&&!e.onsubmit()||("function"==typeof e.submit?e.submit():t(n,"Error: Form submit field collision.")),n.nodeChanged()):t(n,"Error: No form element found.")}},l=function(n){var e=i.trim(n.startContent);r(n)?n.execCallback("save_oncancelcallback",n):n.resetContent(e)},s=function(n){n.addCommand("mceSave",function(){u(n)}),n.addCommand("mceCancel",function(){l(n)})},d=function(n){n.ui.registry.addButton("save",{icon:"save",tooltip:"Save",disabled:!0,onAction:function(){return n.execCommand("mceSave")},onSetup:e(n)}),n.ui.registry.addButton("cancel",{icon:"cancel",tooltip:"Cancel",disabled:!0,onAction:function(){return n.execCommand("mceCancel")},onSetup:e(n)}),n.addShortcut("Meta+S","","mceSave")};!function m(){n.add("save",function(n){d(n),s(n)})}()}();
