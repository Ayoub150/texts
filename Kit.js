/*! * Font Awesome Free 5.13.0 by @fontawesome - https://fontawesome.com * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */ !function(){"use strict";var c={},l={};try{"undefined"!=typeof window&&(c=window),"undefined"!=typeof document&&(l=document)}catch(c){}var h=(c.navigator||{}).userAgent,z=void 0===h?"":h,v=c,a=l,m=(v.document,!!a.documentElement&&!!a.head&&"function"==typeof a.addEventListener&&a.createElement,~z.indexOf("MSIE")||z.indexOf("Trident/"),"___FONT_AWESOME___"),s=function(){try{return!0}catch(c){return!1}}();var e=v||{};e[m]||(e[m]={}),e[m].styles||(e[m].styles={}),e[m].hooks||(e[m].hooks={}),e[m].shims||(e[m].shims=[]);var t=e[m];function M(c,z){var l=(2>>0;h--;)l[h]=c[h];return l}function gc(c){return c.classList?bc(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(c){return c})}function Ac(c,l){var h,z=l.split("-"),v=z[0],a=z.slice(1).join("-");return v!==c||""===a||(h=a,~T.indexOf(h))?null:a}function Sc(c){return"".concat(c).replace(/&/g,"&").replace(/"/g,""").replace(/'/g,"'").replace(//g,">")}function yc(h){return Object.keys(h||{}).reduce(function(c,l){return c+"".concat(l,": ").concat(h[l],";")},"")}function wc(c){return c.size!==Lc.size||c.x!==Lc.x||c.y!==Lc.y||c.rotate!==Lc.rotate||c.flipX||c.flipY}function kc(c){var l=c.transform,h=c.containerWidth,z=c.iconWidth,v={transform:"translate(".concat(h/2," 256)")},a="translate(".concat(32*l.x,", ").concat(32*l.y,") "),m="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),s="rotate(".concat(l.rotate," 0 0)");return{outer:v,inner:{transform:"".concat(a," ").concat(m," ").concat(s)},path:{transform:"translate(".concat(z/2*-1," -256)")}}}var Zc={x:0,y:0,width:"100%",height:"100%"};function xc(c){var l=!(1").concat(m.map(Jc).join(""),"")}var $c=function(){};function cl(c){return"string"==typeof(c.getAttribute?c.getAttribute(J):null)}var ll={replace:function(c){var l=c[0],h=c[1].map(function(c){return Jc(c)}).join("\n");if(l.parentNode&&l.outerHTML)l.outerHTML=h+($.keepOriginalSource&&"svg"!==l.tagName.toLowerCase()?"\x3c!-- ".concat(l.outerHTML," --\x3e"):"");else if(l.parentNode){var z=document.createElement("span");l.parentNode.replaceChild(z,l),z.outerHTML=h}},nest:function(c){var l=c[0],h=c[1];if(~gc(l).indexOf($.replacementClass))return ll.replace(c);var z=new RegExp("".concat($.familyPrefix,"-.*"));delete h[0].attributes.style,delete h[0].attributes.id;var v=h[0].attributes.class.split(" ").reduce(function(c,l){return l===$.replacementClass||l.match(z)?c.toSvg.push(l):c.toNode.push(l),c},{toNode:[],toSvg:[]});h[0].attributes.class=v.toSvg.join(" ");var a=h.map(function(c){return Jc(c)}).join("\n");l.setAttribute("class",v.toNode.join(" ")),l.setAttribute(J,""),l.innerHTML=a}};function hl(c){c()}function zl(h,c){var z="function"==typeof c?c:$c;if(0===h.length)z();else{var l=hl;$.mutateApproach===y&&(l=V.requestAnimationFrame||hl),l(function(){var c=!0===$.autoReplaceSvg?ll.replace:ll[$.autoReplaceSvg]||ll.replace,l=_c.begin("mutate");h.map(c),l(),z()})}}var vl=!1;function al(){vl=!1}var ml=null;function sl(c){if(t&&$.observeMutations){var v=c.treeCallback,a=c.nodeCallback,m=c.pseudoElementsCallback,l=c.observeMutationsRoot,h=void 0===l?o:l;ml=new t(function(c){vl||bc(c).forEach(function(c){if("childList"===c.type&&0<c.addedNodes.length&&!cl(c.addedNodes[0])&&($.searchPseudoElements&&m(c.target),v(c.target)),"attributes"===c.type&&c.target.parentNode&&$.searchPseudoElements&&m(c.target.parentNode),"attributes"===c.type&&cl(c.target)&&~N.indexOf(c.attributeName))if("class"===c.attributeName){var l=Kc(gc(c.target)),h=l.prefix,z=l.iconName;h&&c.target.setAttribute("data-prefix",h),z&&c.target.setAttribute("data-icon",z)}else a(c.target)})}),H&&ml.observe(h,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function el(c){var l,h,z=c.getAttribute("data-prefix"),v=c.getAttribute("data-icon"),a=void 0!==c.innerText?c.innerText.trim():"",m=Kc(gc(c));return z&&v&&(m.prefix=z,m.iconName=v),m.prefix&&1<a.length?m.iconName=(l=m.prefix,h=c.innerText,(Dc[l]||{})[h]):m.prefix&&1===a.length&&(m.iconName=Qc(m.prefix,Ic(c.innerText))),m}var tl=function(c){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c?c.toLowerCase().split(" ").reduce(function(c,l){var h=l.toLowerCase().split("-"),z=h[0],v=h.slice(1).join("-");if(z&&"h"===v)return c.flipX=!0,c;if(z&&"v"===v)return c.flipY=!0,c;if(v=parseFloat(v),isNaN(v))return c;switch(z){case"grow":c.size=c.size+v;break;case"shrink":c.size=c.size-v;break;case"left":c.x=c.x-v;break;case"right":c.x=c.x+v;break;case"up":c.y=c.y-v;break;case"down":c.y=c.y+v;break;case"rotate":c.rotate=c.rotate+v}return c},l):l};function Ml(c){var l,h,z,v,a,m,s,e,t=el(c),M=t.iconName,f=t.prefix,r=t.rest,H=(l=c.getAttribute("style"),h=[],l&&(h=l.split(";").reduce(function(c,l){var h=l.split(":"),z=h[0],v=h.slice(1);return z&&0<v.length&&(c[z]=v.join(":").trim()),c},{})),h),n=tl(c.getAttribute("data-fa-transform")),i=null!==(z=c.getAttribute("data-fa-symbol"))&&(""===z||z),V=(a=bc((v=c).attributes).reduce(function(c,l){return"class"!==c.name&&"style"!==c.name&&(c[l.name]=l.value),c},{}),m=v.getAttribute("title"),s=v.getAttribute("data-fa-title-id"),$.autoA11y&&(m?a["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(s||pc()):(a["aria-hidden"]="true",a.focusable="false")),a),o=(e=c.getAttribute("data-fa-mask"))?Kc(e.split(" ").map(function(c){return c.trim()})):Bc();return{iconName:M,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:f,transform:n,symbol:i,mask:o,maskId:c.getAttribute("data-fa-mask-id"),extra:{classes:r,styles:H,attributes:V}}}function fl(c){this.name="MissingIcon",this.message=c||"Icon unavailable",this.stack=(new Error).stack}(fl.prototype=Object.create(Error.prototype)).constructor=fl;var rl={fill:"currentColor"},Hl={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},nl={tag:"path",attributes:G({},rl,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},il=G({},Hl,{attributeName:"opacity"}),Vl={tag:"g",children:[nl,{tag:"circle",attributes:G({},rl,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:G({},Hl,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:G({},il,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:G({},rl,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:G({},il,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:G({},rl,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:G({},il,{values:"0;0;1;1;0;0;"})}]}]},ol=Y.styles;function Cl(c){var l=c[0],h=c[1],z=n(c.slice(4),1)[0];return{found:!0,width:l,height:h,icon:Array.isArray(z)?{tag:"g",attributes:{class:"".concat($.familyPrefix,"-").concat(_.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(_.SECONDARY),fill:"currentColor",d:z[0]}},{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(_.PRIMARY),fill:"currentColor",d:z[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:z}}}}function Ll(z,v){return new oc(function(c,l){var h={found:!1,width:512,height:512,icon:Vl};if(z&&v&&ol[v]&&ol[v][z])return c(Cl(ol[v][z]));"object"===a(V.FontAwesomeKitConfig)&&"string"==typeof window.FontAwesomeKitConfig.token&&V.FontAwesomeKitConfig.token,z&&v&&!$.showMissingIcons?l(new fl("Icon is missing for prefix ".concat(v," with icon name ").concat(z))):c(h)})}var dl=Y.styles;function ul(c){var a,l,m,s,e,t,M,f,h,r,H,z=Ml(c);return~z.extra.classes.indexOf(q)?function(c,l){var h=l.title,z=l.transform,v=l.extra,a=null,m=null;if(p){var s=parseInt(getComputedStyle(c).fontSize,10),e=c.getBoundingClientRect();a=e.width/s,m=e.height/s}return $.autoA11y&&!h&&(v.attributes["aria-hidden"]="true"),oc.resolve([c,Oc({content:c.innerHTML,width:a,height:m,transform:z,title:h,extra:v,watchable:!0})])}(c,z):(a=c,m=(l=z).iconName,s=l.title,e=l.titleId,t=l.prefix,M=l.transform,f=l.symbol,h=l.mask,r=l.maskId,H=l.extra,new oc(function(v,c){oc.all([Ll(m,t),Ll(h.iconName,h.prefix)]).then(function(c){var l=n(c,2),h=l[0],z=l[1];v([a,qc({icons:{main:h,mask:z},prefix:t,iconName:m,transform:M,symbol:f,mask:z,maskId:r,title:s,titleId:e,extra:H,watchable:!0})])})}))}function pl(c){var h=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;if(H){var l=o.documentElement.classList,z=function(c){return l.add("".concat(S,"-").concat(c))},v=function(c){return l.remove("".concat(S,"-").concat(c))},a=$.autoFetchSvg?Object.keys(Z):Object.keys(dl),m=[".".concat(q,":not([").concat(J,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(J,"])")})).join(", ");if(0!==m.length){var s=[];try{s=bc(c.querySelectorAll(m))}catch(c){}if(0<s.length){z("pending"),v("complete");var e=_c.begin("onTree"),t=s.reduce(function(c,l){try{var h=ul(l);h&&c.push(h)}catch(c){k||c instanceof fl&&console.error(c)}return c},[]);return new oc(function(l,c){oc.all(t).then(function(c){zl(c,function(){z("active"),z("complete"),v("pending"),"function"==typeof h&&h(),e(),l()})}).catch(function(){e(),c()})})}}}}function bl(c){var l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;ul(c).then(function(c){c&&zl([c],l)})}function gl(H,n){var i="".concat(u).concat(n.replace(":","-"));return new oc(function(z,c){if(null!==H.getAttribute(i))return z();var l=bc(H.children).filter(function(c){return c.getAttribute(d)===n})[0],h=V.getComputedStyle(H,n),v=h.getPropertyValue("font-family").match(O),a=h.getPropertyValue("font-weight"),m=h.getPropertyValue("content");if(l&&!v)return H.removeChild(l),z();if(v&&"none"!==m&&""!==m){var s=~["Solid","Regular","Light","Duotone","Brands"].indexOf(v[1])?x[v[1].toLowerCase()]:j[a],e=Ic(3===m.length?m.substr(1,1):m),t=Qc(s,e),M=t;if(!t||l&&l.getAttribute(g)===s&&l.getAttribute(A)===M)z();else{H.setAttribute(i,M),l&&H.removeChild(l);var f={iconName:null,title:null,titleId:null,prefix:null,transform:Lc,symbol:!1,mask:null,maskId:null,extra:{classes:[],styles:{},attributes:{}}},r=f.extra;r.attributes[d]=n,Ll(t,s).then(function(c){var l=qc(G({},f,{icons:{main:c,mask:Bc()},prefix:s,iconName:M,extra:r,watchable:!0})),h=o.createElement("svg");":before"===n?H.insertBefore(h,H.firstChild):H.appendChild(h),h.outerHTML=l.map(function(c){return Jc(c)}).join("\n"),H.removeAttribute(i),z()}).catch(c)}}else z()})}function Al(c){return oc.all([gl(c,":before"),gl(c,":after")])}function Sl(c){return!(c.parentNode===document.head||~w.indexOf(c.tagName.toUpperCase())||c.getAttribute(d)||c.parentNode&&"svg"===c.parentNode.tagName)}function yl(v){if(H)return new oc(function(c,l){var h=bc(v.querySelectorAll("*")).filter(Sl).map(Al),z=_c.begin("searchPseudoElements");vl=!0,oc.all(h).then(function(){z(),al(),c()}).catch(function(){z(),al(),l()})})}var wl="svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";function kl(){var c=C,l=L,h=$.familyPrefix,z=$.replacementClass,v=wl;if(h!==c||z!==l){var a=new RegExp("\\.".concat(c,"\\-"),"g"),m=new RegExp("\\--".concat(c,"\\-"),"g"),s=new RegExp("\\.".concat(l),"g");v=v.replace(a,".".concat(h,"-")).replace(m,"--".concat(h,"-")).replace(s,".".concat(z))}return v}function Zl(){$.autoAddCss&&!Pl&&(dc(kl()),Pl=!0)}function xl(l,c){return Object.defineProperty(l,"abstract",{get:c}),Object.defineProperty(l,"html",{get:function(){return l.abstract.map(function(c){return Jc(c)})}}),Object.defineProperty(l,"node",{get:function(){if(H){var c=o.createElement("div");return c.innerHTML=l.html,c.children}}}),l}function ql(c){var l=c.prefix,h=void 0===l?"fa":l,z=c.iconName;if(z)return Gc(jl.definitions,h,z)||Gc(Y.styles,h,z)}var Ol,jl=new(function(){function c(){!function(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}(this,c),this.definitions={}}var l,h,z;return l=c,(h=[{key:"add",value:function(){for(var l=this,c=arguments.length,h=new Array(c),z=0;z<c;z++)h[z]=arguments[z];var v=h.reduce(this._pullDefinitions,{});Object.keys(v).forEach(function(c){l.definitions[c]=G({},l.definitions[c]||{},v[c]),function c(l,z){var h=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,v=void 0!==h&&h,a=Object.keys(z).reduce(function(c,l){var h=z[l];return h.icon?c[h.iconName]=h.icon:c[l]=h,c},{});"function"!=typeof Y.hooks.addPack||v?Y.styles[l]=G({},Y.styles[l]||{},a):Y.hooks.addPack(l,a),"fas"===l&&c("fa",z)}(c,v[c]),Uc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,c){var m=c.prefix&&c.iconName&&c.icon?{0:c}:c;return Object.keys(m).map(function(c){var l=m[c],h=l.prefix,z=l.iconName,v=l.icon;a[h]||(a[h]={}),a[h][z]=v}),a}}])&&v(l.prototype,h),z&&v(l,z),c}()),Pl=!1,El={i2svg:function(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(H){Zl();var l=c.node,h=void 0===l?o:l,z=c.callback,v=void 0===z?function(){}:z;return $.searchPseudoElements&&yl(h),pl(h,v)}return oc.reject("Operation requires a DOM of some kind.")},css:kl,insertCss:function(){Pl||(dc(kl()),Pl=!0)},watch:function(){var c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},l=c.autoReplaceSvgRoot,h=c.observeMutationsRoot;!1===$.autoReplaceSvg&&($.autoReplaceSvg=!0),$.observeMutations=!0,U(function(){Tl({autoReplaceSvgRoot:l}),sl({treeCallback:pl,nodeCallback:bl,pseudoElementsCallback:yl,observeMutationsRoot:h})})}},Nl=(Ol=function(c){var l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},h=l.transform,z=void 0===h?Lc:h,v=l.symbol,a=void 0!==v&&v,m=l.mask,s=void 0===m?null:m,e=l.maskId,t=void 0===e?null:e,M=l.title,f=void 0===M?null:M,r=l.titleId,H=void 0===r?null:r,n=l.classes,i=void 0===n?[]:n,V=l.attributes,o=void 0===V?{}:V,C=l.styles,L=void 0===C?{}:C;if(c){var d=c.prefix,u=c.iconName,p=c.icon;return xl(G({type:"icon"},c),function(){return Zl(),$.autoA11y&&(f?o["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(H||pc()):(o["aria-hidden"]="true",o.focusable="false")),qc({icons:{main:Cl(p),mask:s?Cl(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:u,transform:G({},Lc,z),symbol:a,title:f,maskId:t,titleId:H,extra:{attributes:o,styles:L,classes:i}})})}},function(c){var l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},h=(c||{}).icon?c:ql(c||{}),z=l.mask;return z&&(z=(z||{}).icon?z:ql(z||{})),Ol(h,G({},l,{mask:z}))}),_l={noAuto:function(){$.autoReplaceSvg=!1,$.observeMutations=!1,ml&&ml.disconnect()},config:$,dom:El,library:jl,parse:{transform:function(c){return tl(c)}},findIconDefinition:ql,icon:Nl,text:function(c){var l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},h=l.transform,z=void 0===h?Lc:h,v=l.title,a=void 0===v?null:v,m=l.classes,s=void 0===m?[]:m,e=l.attributes,t=void 0===e?{}:e,M=l.styles,f=void 0===M?{}:M;return xl({type:"text",content:c},function(){return Zl(),Oc({content:c,transform:G({},Lc,z),title:a,extra:{attributes:t,styles:f,classes:["".concat($.familyPrefix,"-layers-text")].concat(r(s))}})})},counter:function(c){var l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},h=l.title,z=void 0===h?null:h,v=l.classes,a=void 0===v?[]:v,m=l.attributes,s=void 0===m?{}:m,e=l.styles,t=void 0===e?{}:e;return xl({type:"counter",content:c},function(){return Zl(),function(c){var l=c.content,h=c.title,z=c.extra,v=G({},z.attributes,h?{title:h}:{},{class:z.classes.join(" ")}),a=yc(z.styles);0<a.length&&(v.style=a);var m=[];return m.push({tag:"span",attributes:v,children:[l]}),h&&m.push({tag:"span",attributes:{class:"sr-only"},children:[h]}),m}({content:c.toString(),title:z,extra:{attributes:s,styles:t,classes:["".concat($.familyPrefix,"-layers-counter")].concat(r(a))}})})},layer:function(c){var l=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).classes,h=void 0===l?[]:l;return xl({type:"layer"},function(){Zl();var l=[];return c(function(c){Array.isArray(c)?c.map(function(c){l=l.concat(c.abstract)}):l=l.concat(c.abstract)}),[{tag:"span",attributes:{class:["".concat($.familyPrefix,"-layers")].concat(r(h)).join(" ")},children:l}]})},toHtml:Jc},Tl=function(){var c=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,l=void 0===c?o:c;(0<Object.keys(Y.styles).length||$.autoFetchSvg)&&H&&$.autoReplaceSvg&&_l.dom.i2svg({node:l})};!function(c){try{c()}catch(c){if(!k)throw c}}(function(){f&&(V.FontAwesome||(V.FontAwesome=_l),U(function(){Tl(),sl({treeCallback:pl,nodeCallback:bl,pseudoElementsCallback:yl})})),Y.hooks=G({},Y.hooks,{addPack:function(c,l){Y.styles[c]=G({},Y.styles[c]||{},l),Uc(),Tl()},addShims:function(c){var l;(l=Y.shims).push.apply(l,r(c)),Uc(),Tl()}})})}();
