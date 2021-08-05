+function(s){"use strict";function e(t,i){var o,r=s.proxy(this.process,this);this.$element=s(s(t).is("body")?window:t),this.$body=s("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",r),this.options=s.extend({},e.DEFAULTS,i),this.selector=(this.options.target||(o=s(t).attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=s([]),this.targets=s([]),this.activeTarget=null,this.refresh(),this.process()}e.DEFAULTS={offset:57},e.prototype.refresh=function(){var e=this.$element[0]==window?"offset":"position";this.offsets=s([]),this.targets=s([]);var t=this,i=(this.$body.find(this.selector).map(function(){var i=s(this),o=i.data("target")||i.attr("href"),r=/^#./.test(o)&&s(o);return r&&r.length&&r.is(":visible")&&[[r[e]().top+(!s.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),o]]||null}).sort(function(s,e){return s[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])}),s(this.options.target).parent());i.hasClass("fixed")&&(i.css({position:"static"}),i.css({left:i.offset().left,right:i.offset().left}),i.css({position:""}))},e.prototype.process=function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset+s(".tabs a.tab").height()-33,i=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,o=i-this.$scrollElement.height(),r=this.offsets,l=this.targets,a=this.activeTarget;if(t<=r[0])return void this.deactivate(1);if(t>=this.options.offset+this.offsets[r.length-1]+s(l.last()[0]).height())return void this.deactivate();if(t>=o)return a!=(e=l.last()[0])&&this.activate(e);if(a&&t<=r[0])return a!=(e=l[0])&&this.activate(e);for(e=r.length;e--;)a!=l[e]&&t>=r[e]&&(!r[e+1]||t<=r[e+1])&&this.activate(l[e])},e.prototype.activate=function(e){this.activeTarget=e;var t=s(this.options.target).parent();s("div.scrollspy-clone").is(".scrollspy-clone")||s("<div/>").addClass("scrollspy-clone").insertAfter(t),"transparent"===jQuery.Color(s(this.activeTarget).css("background-color")).toString()?(t.removeClass("on-gray"),t.addClass("on-white")):(t.removeClass("on-white"),t.addClass("on-gray")),s("div.scrollspy-clone").height(s(this.options.target).height()),t.hasClass("fixed")||(t.css({position:"static"}),t.css({left:t.offset().left,right:t.offset().left}).addClass("fixed"),t.css({position:""})),s(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=s(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},e.prototype.deactivate=function(e){1===e&&this.activate(this.targets.first()[0]);var t=s(this.options.target).parent();s(this.selector).parent(".active"),this.activeTarget=null,t.removeClass("fixed"),t.css({left:"",right:""}),s("div.scrollspy-clone").height(0),t.removeClass("on-gray on-white")};var t=s.fn.scrollspy;s.fn.scrollspy=function(t){return this.each(function(){var i=s(this),o=i.data("bs.scrollspy"),r="object"==typeof t&&t;o||i.data("bs.scrollspy",o=new e(this,r)),"string"==typeof t&&o[t]()})},s.fn.scrollspy.Constructor=e,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load",function(){s('[data-spy="scroll"]').each(function(){var e=s(this);e.scrollspy(e.data())}),s(".multiple .flexslider.slider-out1").flexslider({animation:"fade",slideshow:!1,selector:".slider-wrap > .slide",controlNav:"thumbnails",animationSpeed:1200,slideshowSpeed:5e3,sync:"#slider-out1"}),s("#slider-out1").flexslider({controlNav:!1,touch:!1,slideshow:!1,animationLoop:!1,animationSpeed:1200,slideshowSpeed:5e3}),s(".multiple .flexslider.slider-out2").flexslider({animation:"fade",slideshow:!1,selector:".slider-wrap > .slide",controlNav:"thumbnails",animationSpeed:1200,slideshowSpeed:5e3,sync:"#slider-out2"}),s("#slider-out2").flexslider({controlNav:!1,slideshow:!1,animationLoop:!1,animationSpeed:1200,slideshowSpeed:5e3}),s(".multiple .flexslider.slider-out3").flexslider({animation:"fade",slideshow:!1,selector:".slider-wrap > .slide",controlNav:"thumbnails",animationSpeed:1200,slideshowSpeed:5e3,sync:"#slider-out3"}),s("#slider-out3").flexslider({controlNav:!1,slideshow:!1,animationLoop:!1,animationSpeed:1200,slideshowSpeed:5e3}),s(".multiple .flexslider.slider-out4").flexslider({animation:"fade",slideshow:!1,selector:".slider-wrap > .slide",controlNav:"thumbnails",animationSpeed:1200,slideshowSpeed:5e3,sync:"#slider-out4",start:function(){s(".fix-slider").closest(".fix-slider").addClass("collapse")}}),s("#slider-out4").flexslider({controlNav:!1,slideshow:!1,animationLoop:!1,animationSpeed:1200,slideshowSpeed:5e3}),s(".multiple .flexslider.slider-out5").flexslider({animation:"fade",slideshow:!1,selector:".slider-wrap > .slide",controlNav:"thumbnails",animationSpeed:1200,slideshowSpeed:5e3,sync:"#slider-out5",start:function(){s(".fix-slider").closest(".fix-slider").addClass("collapse")}}),s("#slider-out5").flexslider({controlNav:!1,slideshow:!1,animationLoop:!1,animationSpeed:1200,slideshowSpeed:5e3}),s(".multiple .flexslider.slider-out6").flexslider({animation:"fade",slideshow:!1,selector:".slider-wrap > .slide",controlNav:"thumbnails",animationSpeed:1200,slideshowSpeed:5e3,sync:"#slider-out6",start:function(){s(".fix-slider").closest(".fix-slider").addClass("collapse")}}),s("#slider-out6").flexslider({controlNav:!1,slideshow:!1,animationLoop:!1,animationSpeed:1200,slideshowSpeed:5e3}),s("body").scrollspy("refresh"),riskBar.onResize()})}(jQuery),function(s,e,t,i){"use strict";var o=t.body||t.documentElement,o=o.style;if(""==o.webkitFlexWrap||""==o.msFlexWrap||""==o.flexWrap)return!0;var r=s(".flex"),l=r.find(".flex-item"),a=function(){l.css("height","auto");var e=Math.floor(r.width()/l.width());if(null==e||2>e)return!0;for(var t=0,i=l.length;i>t;t+=e){var o=0,a=l.slice(t,t+e);a.each(function(){var e=parseInt(s(this).outerHeight());e>o&&(o=e)}),a.css("height",o)}};a(),s(e).on("resize",a),r.find("img").on("load",a)}(jQuery,window,document),$(function(){$("#tabs-gray").tabs({active:0,show:{effect:"fade",duration:400}}),riskBar={},riskBar.$fixedBar=$(".edw-risk .risk-bar.fixed"),riskBar.$staticBar=$(".edw-risk .risk-bar.static"),riskBar.scrollEventsCounter=0,riskBar.flag=!1,riskBar.onLoad=function(){var s=parseFloat(cssua.ua.ios);s>=7&&8>s&&this.$fixedBar.hide()},riskBar.onResize=function(){this.$staticBar.offset()&&($(window).scrollTop()+$(window).height()>this.$staticBar.offset().top+this.$staticBar.height()?(this.$fixedBar.addClass("in-hide"),this.$fixedBar.find(".mobile-hidden").remove()):this.$fixedBar.removeClass("in-hide"))},riskBar.onScroll=function(){this.scrollEventsCounter++,this.$staticBar.offset()&&($(window).scrollTop()+window.innerHeight-this.$fixedBar.outerHeight()>=this.$staticBar.offset().top?(this.$fixedBar.addClass("in-hide"),this.scrollEventsCounter>2&&this.$fixedBar.find(".mobile-hidden").remove()):this.$fixedBar.removeClass("in-hide"))},$(".risk-bar.fixed").click(function(){$(this).hasClass("in-hide")||$("html, body").animate({scrollTop:$(".edw-risk .risk-bar.static").offset().top},1e3)}),riskBar.onLoad(),$("body").scrollspy({target:".navbar-scroll"}),$(window).resize(function(){$("body").scrollspy("refresh"),riskBar.onResize(),$(".custom-dropdown").select2("close")}),$(window).scroll(function(){riskBar.onScroll()}),window.edwardsRecount=function(){$("body").scrollspy("refresh"),riskBar.onResize()},$("#accordion").on("hidden.bs.collapse",function(){$("body").scrollspy("refresh"),riskBar.onResize()}).on("shown.bs.collapse",function(){$("body").scrollspy("refresh"),riskBar.onResize()}),$(".custom-dropdown").select2({minimumResultsForSearch:-1,dropdownAutoWidth:!0}),$(document).on("click",".to-top",function(){return $("html, body").animate({scrollTop:0},600),!1})});