(function(){'use strict';function g(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.f=document.createElement("span");this.e=document.createElement("span");this.d=-1;this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";
this.e.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;";this.f.style.cssText="display:inline-block;width:200%;height:200%;";this.b.appendChild(this.f);this.c.appendChild(this.e);this.a.appendChild(this.b);this.a.appendChild(this.c)}function u(a,b,c){a.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:"+b+";"+c}
function v(a){var b=a.a.offsetWidth,c=b+100;a.e.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.d!==b?(a.d=b,!0):!1}function w(a,b){a.b.addEventListener("scroll",function(){v(a)&&null!==a.a.parentNode&&b(a.d)},!1);a.c.addEventListener("scroll",function(){v(a)&&null!==a.a.parentNode&&b(a.d)},!1);v(a)};function x(a,b){this.family=a;this.style=b.style||"normal";this.variant=b.variant||"normal";this.weight=b.weight||"normal";this.stretch=b.stretch||"stretch";this.featureSettings=b.featureSettings||"normal"}var y=null;
x.prototype.a=function(a,b){var c=a||"BESbswy",A=b||3E3,h="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",k=document.createElement("div"),m=new g(c),n=new g(c),p=new g(c),d=-1,e=-1,f=-1,q=-1,r=-1,t=-1,l=this;u(m,"sans-serif",h);u(n,"serif",h);u(p,"monospace",h);k.appendChild(m.a);
k.appendChild(n.a);k.appendChild(p.a);document.body.appendChild(k);q=m.a.offsetWidth;r=n.a.offsetWidth;t=p.a.offsetWidth;return new Promise(function(a,b){function c(){null!==k.parentNode&&document.body.removeChild(k)}function z(){if(-1!==d&&-1!==e||-1!==d&&-1!==f||-1!==e&&-1!==f)if(d===e||d===f||e===f){if(null===y){var b=/AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);y=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))}y?d===q&&e===q&&f===q||d===
r&&e===r&&f===r||d===t&&e===t&&f===t||(c(),a(l)):(c(),a(l))}}setTimeout(function(){c();b(l)},A);w(m,function(a){d=a;z()});u(m,l.family+",sans-serif",h);w(n,function(a){e=a;z()});u(n,l.family+",serif",h);w(p,function(a){f=a;z()});u(p,l.family+",monospace",h)})};window.FontFaceObserver=x;window.FontFaceObserver.prototype.check=x.prototype.a;}());
