var $=jQuery.noConflict();$.fn.inlineStyle=function(e){return this.prop("style")[$.camelCase(e)]},$.fn.doOnce=function(e){return this.length&&e.apply(this),this},$.extend($.infinitescroll.prototype,{_setup_portfolioinfiniteitemsloader:function(){var e=this.options,t=this;$(e.nextSelector).click(function(e){1!=e.which||e.metaKey||e.shiftKey||(e.preventDefault(),t.retrieve())}),t.options.loading.start=function(e){e.loading.msg.appendTo(e.loading.selector).show(e.loading.speed,function(){t.beginAjax(e)})}},_showdonemsg_portfolioinfiniteitemsloader:function(){var e=this.options;e.loading.msg.find("img").hide().parent().find("div").html(e.loading.finishedMsg).animate({opacity:1},2e3,function(){$(this).parent().fadeOut("normal")}),$(e.navSelector).fadeOut("normal"),e.errorCallback.call($(e.contentSelector)[0],"done")}});var SEMICOLON=SEMICOLON||{};!function(e){"use strict";SEMICOLON.initialize={init:function(){SEMICOLON.initialize.responsiveClasses(),SEMICOLON.initialize.imagePreload(".portfolio-item:not(:has(.fslider)) img"),SEMICOLON.initialize.stickyElements(),SEMICOLON.initialize.goToTop(),SEMICOLON.initialize.fullScreen(),SEMICOLON.initialize.verticalMiddle(),SEMICOLON.initialize.lightbox(),SEMICOLON.initialize.resizeVideos(),SEMICOLON.initialize.imageFade(),SEMICOLON.initialize.pageTransition(),SEMICOLON.initialize.dataStyles(),SEMICOLON.initialize.dataResponsiveHeights(),e(".fslider").addClass("preloader2")},responsiveClasses:function(){var e=jRespond([{label:"smallest",enter:0,exit:479},{label:"handheld",enter:480,exit:767},{label:"tablet",enter:768,exit:991},{label:"laptop",enter:992,exit:1199},{label:"desktop",enter:1200,exit:1e4}]);e.addFunc([{breakpoint:"desktop",enter:function(){a.addClass("device-lg")},exit:function(){a.removeClass("device-lg")}},{breakpoint:"laptop",enter:function(){a.addClass("device-md")},exit:function(){a.removeClass("device-md")}},{breakpoint:"tablet",enter:function(){a.addClass("device-sm")},exit:function(){a.removeClass("device-sm")}},{breakpoint:"handheld",enter:function(){a.addClass("device-xs")},exit:function(){a.removeClass("device-xs")}},{breakpoint:"smallest",enter:function(){a.addClass("device-xxs")},exit:function(){a.removeClass("device-xxs")}}])},imagePreload:function(t,a){var i={delay:250,transition:400,easing:"linear"};e.extend(i,a),e(t).each(function(){var t=e(this);t.css({visibility:"hidden",opacity:0,display:"block"}),t.wrap('<span class="preloader" />'),t.one("load",function(t){e(this).delay(i.delay).css({visibility:"visible"}).animate({opacity:1},i.transition,i.easing,function(){e(this).unwrap('<span class="preloader" />')})}).each(function(){this.complete&&e(this).trigger("load")})})},verticalMiddle:function(){b.length>0&&b.each(function(){var t=e(this),i=t.outerHeight();t.parents("#slider").length>0&&s.hasClass("transparent-header")&&(a.hasClass("device-lg")||a.hasClass("device-md"))&&(i-=70,O.next("#header").length>0&&(i+=100)),(a.hasClass("device-xs")||a.hasClass("device-xxs"))&&t.parents(".full-screen").length&&!t.parents(".force-full-screen").length?t.css({position:"relative",top:"0",width:"auto",marginTop:"0",padding:"60px 0"}).addClass("clearfix"):t.css({position:"absolute",top:"50%",width:"100%",marginTop:-(i/2)+"px"})})},stickyElements:function(){if(w.length>0){var e=w.outerHeight();w.css({marginTop:-(e/2)+"px"})}if(z.length>0){var t=z.outerHeight();z.css({marginTop:-(t/2)+"px"})}},goToTop:function(){T.click(function(){return e("body,html").stop(!0).animate({scrollTop:0},400),!1})},goToTopScroll:function(){(a.hasClass("device-lg")||a.hasClass("device-md")||a.hasClass("device-sm"))&&(t.scrollTop()>450?T.fadeIn():T.fadeOut())},fullScreen:function(){P.length>0&&P.each(function(){var i=e(this),n=t.height();if("slider"==i.attr("id")){var o=O.offset().top;if(n-=o,e("#slider.with-header").next("#header:not(.transparent-header)").length>0&&(a.hasClass("device-lg")||a.hasClass("device-md"))){var r=s.outerHeight();n-=r}}i.parents(".full-screen").length>0&&(n=i.parents(".full-screen").height()),(a.hasClass("device-xs")||a.hasClass("device-xxs"))&&(i.hasClass("force-full-screen")||(n="auto")),i.css("height",n),"slider"!=i.attr("id")||i.hasClass("canvas-slider-grid")||i.has(".swiper-slide")&&i.find(".swiper-slide").css("height",n)})},maxHeight:function(){j.length>0&&j.each(function(){var t=e(this),a=0;t.children("[class^=col-]").each(function(){var t=e(this).children("div");t.outerHeight()>a&&(a=t.outerHeight())}),t.children("[class^=col-]").each(function(){e(this).height(a)})})},testimonialsGrid:function(){if(_.length>0)if(a.hasClass("device-sm")||a.hasClass("device-md")||a.hasClass("device-lg")){var t=0;_.each(function(){e(this).find("li > .testimonial").each(function(){e(this).height()>t&&(t=e(this).height())}),e(this).find("li").height(t),t=0})}else _.find("li").css({height:"auto"})},lightbox:function(){var t=e('[data-lightbox="image"]'),a=e('[data-lightbox="gallery"]'),i=e('[data-lightbox="iframe"]'),s=e('[data-lightbox="ajax"]');t.length>0&&t.magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-fade",image:{verticalFit:!0}}),a.length>0&&a.each(function(){var t=e(this);t.find('a[data-lightbox="gallery-item"]').parent(".clone").hasClass("clone")&&t.find('a[data-lightbox="gallery-item"]').parent(".clone").find('a[data-lightbox="gallery-item"]').attr("data-lightbox",""),t.magnificPopup({delegate:'a[data-lightbox="gallery-item"]',type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-fade",image:{verticalFit:!0},gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}})}),i.length>0&&i.magnificPopup({disableOn:320,type:"iframe",removalDelay:160,preloader:!1,fixedContentPos:!1}),s.length>0&&s.magnificPopup({type:"ajax",closeBtnInside:!1,callbacks:{ajaxContentAdded:function(e){SEMICOLON.widget.loadFlexSlider(),SEMICOLON.initialize.resizeVideos(),SEMICOLON.widget.masonryThumbs()}}})},resizeVideos:function(){e().fitVids&&e("#content,#footer,#slider:not(.revslider-wrap),.landing-offer-media,.portfolio-ajax-modal").fitVids({customSelector:"iframe[src^='http://www.dailymotion.com/embed']",ignore:".no-fv"})},imageFade:function(){e(".image_fade").hover(function(){e(this).filter(":not(:animated)").animate({opacity:.8},400)},function(){e(this).animate({opacity:1},400)})},blogTimelineEntries:function(){e(".post-timeline.grid-2").find(".entry").each(function(){var t=e(this).inlineStyle("left");"0px"==t?e(this).removeClass("alt"):e(this).addClass("alt"),e(this).find(".entry-timeline").fadeIn()})},pageTransition:function(){a.hasClass("no-transition")||i.animsition({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:'#primary-menu ul li a:not([target="_blank"]):not([href^=#])',loading:!0,loadingParentElement:"body",loadingClass:"css3-spinner",unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"})},topScrollOffset:function(){var e=0;return!a.hasClass("device-lg")&&!a.hasClass("device-md")||SEMICOLON.isMobile.any()?e=40:(e=s.hasClass("sticky-header")?g.hasClass("dots-menu")?100:144:g.hasClass("dots-menu")?140:184,g.length||(e=s.hasClass("sticky-header")?100:140)),e},defineColumns:function(e){var t=4;return e.hasClass("portfolio-full")?(t=e.hasClass("portfolio-3")?3:e.hasClass("portfolio-5")?5:e.hasClass("portfolio-6")?6:4,!a.hasClass("device-sm")||4!=t&&5!=t&&6!=t?!a.hasClass("device-xs")||3!=t&&4!=t&&5!=t&&6!=t?a.hasClass("device-xxs")&&(t=1):t=2:t=3):e.hasClass("masonry-thumbs")&&(t=e.hasClass("col-2")?2:e.hasClass("col-3")?3:e.hasClass("col-5")?5:e.hasClass("col-6")?6:4),t},setFullColumnWidth:function(i){if(i.hasClass("portfolio-full")){var s=SEMICOLON.initialize.defineColumns(i),n=i.width();n==Math.floor(n/s)*s&&(n-=1);var o=Math.floor(n/s);if(a.hasClass("device-xxs"))var r=1;else var r=0;i.find(".portfolio-item").each(function(t){if(0==r&&e(this).hasClass("wide"))var a=2*o;else var a=o;e(this).css({width:a+"px"})})}else if(i.hasClass("masonry-thumbs")){var s=SEMICOLON.initialize.defineColumns(i),n=i.innerWidth(),l=t.width();n==l&&(n=1.004*l,i.css({width:n+"px"}));var o=n/s;o=Math.floor(o),o*s>=n&&i.css({"margin-right":"-1px"}),i.children("a").css({width:o+"px"});var d=i.attr("data-big");d&&(d=Number(d)-1);var c=i.find("a:eq(0)").outerWidth();if(i.isotope({masonry:{columnWidth:c}}),e.isNumeric(d)){setTimeout(function(){i.find("a:eq("+d+")").css({width:2*c+"px"}),i.isotope("layout")},1e3)}}},aspectResizer:function(){var t=e(".aspect-resizer");t.length>0&&t.each(function(){var t=e(this);t.inlineStyle("width"),t.inlineStyle("height"),t.parent().innerWidth()})},dataStyles:function(){var t=e("[data-style-xxs]"),i=e("[data-style-xs]"),s=e("[data-style-sm]"),n=e("[data-style-md]"),o=e("[data-style-lg]");t.length>0&&t.each(function(){var t=e(this),i=t.attr("data-style-xxs");a.hasClass("device-xxs")&&""!=i&&t.attr("style",i)}),i.length>0&&i.each(function(){var t=e(this),i=t.attr("data-style-xs");a.hasClass("device-xs")&&""!=i&&t.attr("style",i)}),s.length>0&&s.each(function(){var t=e(this),i=t.attr("data-style-sm");a.hasClass("device-sm")&&""!=i&&t.attr("style",i)}),n.length>0&&n.each(function(){var t=e(this),i=t.attr("data-style-md");a.hasClass("device-md")&&""!=i&&t.attr("style",i)}),o.length>0&&o.each(function(){var t=e(this),i=t.attr("data-style-lg");a.hasClass("device-lg")&&""!=i&&t.attr("style",i)})},dataResponsiveHeights:function(){var t=e("[data-height-xxs]"),i=e("[data-height-xs]"),s=e("[data-height-sm]"),n=e("[data-height-md]"),o=e("[data-height-lg]");t.length>0&&t.each(function(){var t=e(this),i=t.attr("data-height-xxs");a.hasClass("device-xxs")&&""!=i&&t.css("height",i)}),i.length>0&&i.each(function(){var t=e(this),i=t.attr("data-height-xs");a.hasClass("device-xs")&&""!=i&&t.css("height",i)}),s.length>0&&s.each(function(){var t=e(this),i=t.attr("data-height-sm");a.hasClass("device-sm")&&""!=i&&t.css("height",i)}),n.length>0&&n.each(function(){var t=e(this),i=t.attr("data-height-md");a.hasClass("device-md")&&""!=i&&t.css("height",i)}),o.length>0&&o.each(function(){var t=e(this),i=t.attr("data-height-lg");a.hasClass("device-lg")&&""!=i&&t.css("height",i)})}},SEMICOLON.header={init:function(){SEMICOLON.header.superfish(),SEMICOLON.header.menufunctions(),SEMICOLON.header.fullWidthMenu(),SEMICOLON.header.stickyMenu(),SEMICOLON.header.sideHeader(),SEMICOLON.header.onePageScroll(),SEMICOLON.header.onepageScroller(),SEMICOLON.header.darkLogo(),SEMICOLON.header.topsearch(),SEMICOLON.header.topcart(),SEMICOLON.header.topsocial()},superfish:function(){e().superfish&&(a.hasClass("device-lg")||a.hasClass("device-md"))},menuInvert:function(){e("#primary-menu .mega-menu-content, #primary-menu ul ul").each(function(a,i){var s=e(i),n=t.width(),o=s.offset(),r=s.width(),l=o.left;0>n-(r+l)&&s.addClass("menu-pos-invert")})},menufunctions:function(){e("#primary-menu ul li:has(ul)").addClass("sub-menu"),e(".top-links ul li:has(ul) > a").append(' <i class="icon-angle-down"></i>'),e(".top-links > ul").addClass("clearfix"),(a.hasClass("device-lg")||a.hasClass("device-md"))&&(e("#primary-menu.sub-title > ul > li,#primary-menu.sub-title > div > ul > li").hover(function(){e(this).prev().css({backgroundImage:"none"})},function(){e(this).prev().css({backgroundImage:'url("images/icons/menu-divider.png")'})}),e("#primary-menu.sub-title").children("ul").children(".current").prev().css({backgroundImage:"none"}),e("#primary-menu.sub-title").children("div").children("ul").children(".current").prev().css({backgroundImage:"none"})),SEMICOLON.isMobile.Android()&&e("#primary-menu ul li.sub-menu").children("a").on("touchend",function(t){e(this).parent("li.sub-menu").hasClass("sfHover")||t.preventDefault()})},fullWidthMenu:function(){a.hasClass("stretched")?(s.find(".container-fullwidth").length>0&&e(".mega-menu .mega-menu-content").css({width:i.width()-120}),s.hasClass("full-header")&&e(".mega-menu .mega-menu-content").css({width:i.width()-60})):(s.find(".container-fullwidth").length>0&&e(".mega-menu .mega-menu-content").css({width:i.width()-120}),s.hasClass("full-header")&&e(".mega-menu .mega-menu-content").css({width:i.width()-80}))},stickyMenu:function(i){!a.hasClass("device-lg")&&!a.hasClass("device-md")||SEMICOLON.isMobile.any()?SEMICOLON.header.removeStickyness():t.scrollTop()>i?(e("body:not(.side-header) #header:not(.no-sticky)").addClass("sticky-header"),e("#page-menu:not(.dots-menu,.no-sticky)").addClass("sticky-page-menu"),n.hasClass("force-not-dark")||n.removeClass("not-dark"),SEMICOLON.header.stickyMenuClass()):SEMICOLON.header.removeStickyness()},removeStickyness:function(){s.hasClass("sticky-header")&&(e("body:not(.side-header) #header:not(.no-sticky)").removeClass("sticky-header"),e("#page-menu:not(.dots-menu,.no-sticky)").removeClass("sticky-page-menu"),s.removeClass().addClass(o),n.removeClass().addClass(r),n.hasClass("force-not-dark")||n.removeClass("not-dark"),SEMICOLON.slider.swiperSliderMenu(),SEMICOLON.slider.revolutionSliderMenu())},sideHeader:function(){e("#header-trigger").click(function(){return e("body.open-header").toggleClass("side-header-open"),!1})},onePageScroll:function(){m.find("a[data-href]").click(function(){var t=e(this).attr("data-href");if(e(t).length>0){var a=SEMICOLON.initialize.topScrollOffset();m.hasClass("no-offset")&&(a=0),m.find("li").removeClass("current"),m.find('a[data-href="'+t+'"]').parent("li").addClass("current"),e("html,body").stop(!0).animate({scrollTop:e(t).offset().top-a},1e3,"easeOutQuad")}return!1})},onepageScroller:function(){m.find("li").removeClass("current"),m.find('a[data-href="#'+SEMICOLON.header.onePageCurrentSection()+'"]').parent("li").addClass("current")},onePageCurrentSection:function(){var a="home";return H.each(function(i){var s=e(this).offset().top,n=t.scrollTop();n+150>=s&&n<s+e(this).height()&&e(this).attr("id")!=a&&(a=e(this).attr("id"))}),a},darkLogo:function(){!s.hasClass("dark")&&!a.hasClass("dark")||n.hasClass("not-dark")?(h&&d.find("img").attr("src",h),u&&c.find("img").attr("src",u)):(f&&d.find("img").attr("src",f),p&&c.find("img").attr("src",p))},stickyMenuClass:function(){if(l)var e=l.split(/ +/);else var e="";var t=e.length;if(t>0){var a=0;for(a=0;t>a;a++)"not-dark"==e[a]?n.addClass("not-dark"):"dark"==e[a]?n.removeClass("not-dark force-not-dark"):s.hasClass(e[a])||s.addClass(e[a])}},topsocial:function(){k.length>0&&(a.hasClass("device-md")||a.hasClass("device-lg")?(k.show(),k.find("a").css({width:40}),k.find("a").hover(function(){if(e(this).find(".ts-text").length){var t=e(this).find(".ts-text").outerWidth()+52;e(this).css({width:t})}},function(){e(this).css({width:40})})):(k.show(),k.find("a").css({width:40}),k.find("a").each(function(){var t=e(this).find(".ts-text").text();e(this).attr("title",t)}),k.find("a").hover(function(){e(this).css({width:40})},function(){e(this).css({width:40})}),a.hasClass("device-xxs")&&(k.hide(),k.slice(0,8).show())))},topsearch:function(){e(document).on("click",function(t){e(t.target).closest("#top-search").length||a.toggleClass("top-search-open",!1),e(t.target).closest("#top-cart").length||L.toggleClass("top-cart-open",!1),e(t.target).closest("#page-menu").length||g.toggleClass("pagemenu-active",!1)}),e("#top-search-trigger").click(function(t){a.toggleClass("top-search-open"),L.toggleClass("top-cart-open",!1),e("#primary-menu > ul, #primary-menu > div > ul").toggleClass("show",!1),g.toggleClass("pagemenu-active",!1),a.hasClass("top-search-open")&&E.find("input").focus(),t.stopPropagation(),t.preventDefault()})},topcart:function(){e("#top-cart-trigger").click(function(e){g.toggleClass("pagemenu-active",!1),L.toggleClass("top-cart-open"),e.stopPropagation(),e.preventDefault()})}},SEMICOLON.slider={init:function(){SEMICOLON.slider.sliderParallax(),SEMICOLON.slider.sliderElementsFade(),SEMICOLON.slider.captionPosition()},sliderParallaxOffset:function(){var t=0,a=s.outerHeight();if(e("body").hasClass("side-header")&&(a=0),S.length>0){var i=S.outerHeight();t=i+a}else t=a;return O.next("#header").length>0&&(t=0),t},sliderParallax:function(){if(!a.hasClass("device-lg")&&!a.hasClass("device-md")||SEMICOLON.isMobile.any())e(".slider-parallax,.slider-parallax .slider-caption,.ei-title").css({transform:"translateY(0)"});else{var i=SEMICOLON.slider.sliderParallaxOffset();t.scrollTop()>i?(v.css({transform:"translateY("+(t.scrollTop()-i)/1.5+"px)"}),e(".slider-parallax .slider-caption,.ei-title").css({transform:"translateY(-"+(t.scrollTop()-i)/7+"px)"})):e(".slider-parallax,.slider-parallax .slider-caption,.ei-title").css({transform:"translateY(0)"})}},sliderElementsFade:function(){if(!a.hasClass("device-lg")&&!a.hasClass("device-md")||SEMICOLON.isMobile.any())v.find("#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next").css({opacity:1});else{var i=SEMICOLON.slider.sliderParallaxOffset();if(O.length>0){if(s.hasClass("transparent-header")||e("body").hasClass("side-header"))var n=100;else var n=0;v.find("#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next").css({opacity:(100+(O.offset().top+i+n)-t.scrollTop())/90})}}},captionPosition:function(){O.find(".slider-caption").each(function(){var t=e(this).outerHeight(),i=O.outerHeight();e(this).parents("#slider").prev("#header").hasClass("transparent-header")&&(a.hasClass("device-lg")||a.hasClass("device-md"))?e(this).parents("#slider").prev("#header").hasClass("floating-header")?e(this).css({top:(i+160-t)/2+"px"}):e(this).css({top:(i+100-t)/2+"px"}):e(this).css({top:(i-t)/2+"px"})})},swiperSliderMenu:function(){if(a.hasClass("device-lg")||a.hasClass("device-md")){var e=O.find(".swiper-slide.swiper-slide-visible");SEMICOLON.slider.headerSchemeChanger(e)}},revolutionSliderMenu:function(){if(a.hasClass("device-lg")||a.hasClass("device-md")){var e=O.find(".current-sr-slide-visible");SEMICOLON.slider.headerSchemeChanger(e)}},headerSchemeChanger:function(t){t.length>0&&(t.hasClass("dark")?(e("#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)").addClass("dark"),e("#header.transparent-header.sticky-header,#header.transparent-header.semi-transparent.sticky-header,#header.transparent-header.floating-header.sticky-header").removeClass("dark"),n.removeClass("not-dark")):a.hasClass("dark")?(t.addClass("not-dark"),e("#header.transparent-header:not(.semi-transparent,.floating-header)").removeClass("dark"),e("#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)").find("#header-wrap").addClass("not-dark")):(e("#header.transparent-header:not(.semi-transparent,.floating-header)").removeClass("dark"),n.removeClass("not-dark")),SEMICOLON.header.darkLogo())},owlCaptionInit:function(){F.length>0&&F.each(function(){var t=e(this);t.find(".owl-dot").length>0&&t.find(".owl-controls").addClass("with-carousel-dots")})}},SEMICOLON.portfolio={init:function(){SEMICOLON.portfolio.ajaxload()},portfolioDescMargin:function(){var t=e(".portfolio-overlay");t.length>0&&t.each(function(){var t=e(this);if(t.find(".portfolio-desc").length>0){var a=t.outerHeight(),i=t.find(".portfolio-desc").outerHeight();if(t.find("a.left-icon").length>0||t.find("a.right-icon").length>0||t.find("a.center-icon").length>0)var s=60;else var s=0;var n=(a-i-s)/2;t.find(".portfolio-desc").css({"margin-top":n})}})},arrange:function(){SEMICOLON.initialize.setFullColumnWidth(C),e("#portfolio.portfolio-full").isotope("layout")},ajaxload:function(){e(".portfolio-ajax .portfolio-item a.center-icon").click(function(t){var a=e(this).parents(".portfolio-item").attr("id");e(this).parents(".portfolio-item").hasClass("portfolio-active")||SEMICOLON.portfolio.loadItem(a,N),t.preventDefault()})},newNextPrev:function(t){var a=SEMICOLON.portfolio.getNextItem(t),i=SEMICOLON.portfolio.getPrevItem(t);e("#next-portfolio").attr("data-id",a),e("#prev-portfolio").attr("data-id",i)},loadItem:function(t,a,i){i||(i=!1);var s=SEMICOLON.portfolio.getNextItem(t),n=SEMICOLON.portfolio.getPrevItem(t);if(0==i){SEMICOLON.portfolio.closeItem(),x.fadeIn();var o=e("#"+t).attr("data-loader");I.load(o,{portid:t,portnext:s,portprev:n},function(){SEMICOLON.portfolio.initializeAjax(t),SEMICOLON.portfolio.openItem(),M.removeClass("portfolio-active"),e("#"+t).addClass("portfolio-active")})}},closeItem:function(){y&&y.height()>32&&(x.fadeIn(),y.find("#portfolio-ajax-single").fadeOut("600",function(){e(this).remove()}),y.removeClass("portfolio-ajax-opened"))},openItem:function(){var t=y.find("img").length,a=0;if(t>0)y.find("img").on("load",function(){a++;var i=SEMICOLON.initialize.topScrollOffset();if(t===a){I.css({display:"block"}),y.addClass("portfolio-ajax-opened"),x.fadeOut();setTimeout(function(){SEMICOLON.widget.loadFlexSlider(),SEMICOLON.initialize.lightbox(),SEMICOLON.initialize.resizeVideos(),SEMICOLON.widget.masonryThumbs(),e("html,body").stop(!0).animate({scrollTop:y.offset().top-i},900,"easeOutQuad")},500)}});else{var i=SEMICOLON.initialize.topScrollOffset();I.css({display:"block"}),y.addClass("portfolio-ajax-opened"),x.fadeOut();setTimeout(function(){SEMICOLON.widget.loadFlexSlider(),SEMICOLON.initialize.lightbox(),SEMICOLON.initialize.resizeVideos(),SEMICOLON.widget.masonryThumbs(),e("html,body").stop(!0).animate({scrollTop:y.offset().top-i},900,"easeOutQuad")},500)}},getNextItem:function(t){var a="",i=e("#"+t).next();return 0!=i.length&&(a=i.attr("id")),a},getPrevItem:function(t){var a="",i=e("#"+t).prev();return 0!=i.length&&(a=i.attr("id")),a},initializeAjax:function(t){N=e("#"+t),e("#next-portfolio, #prev-portfolio").click(function(){var t=e(this).attr("data-id");return M.removeClass("portfolio-active"),e("#"+t).addClass("portfolio-active"),SEMICOLON.portfolio.loadItem(t,N),!1}),e("#close-portfolio").click(function(){return I.fadeOut("600",function(){y.find("#portfolio-ajax-single").remove()}),y.removeClass("portfolio-ajax-opened"),M.removeClass("portfolio-active"),!1})}},SEMICOLON.widget={init:function(){SEMICOLON.widget.parallax(),SEMICOLON.widget.animations(),SEMICOLON.widget.youtubeBgVideo(),SEMICOLON.widget.toggles(),SEMICOLON.widget.accordions(),SEMICOLON.widget.counter(),SEMICOLON.widget.roundedSkill(),SEMICOLON.widget.progress(),SEMICOLON.widget.flickrFeed(),SEMICOLON.widget.instagramPhotos("36286274.b9e559e.4824cbc1d0c94c23827dc4a2267a9f6b","b9e559ec7c284375bf41e9a9fb72ae01"),SEMICOLON.widget.dribbbleShots(),SEMICOLON.widget.textRotater(),SEMICOLON.widget.linkScroll(),SEMICOLON.widget.extras()},parallax:function(){SEMICOLON.isMobile.any()?A.addClass("mobile-parallax"):e.stellar({horizontalScrolling:!1,verticalOffset:150,responsive:!0})},animations:function(){var t=e("[data-animate]");t.length>0&&(a.hasClass("device-lg")||a.hasClass("device-md")||a.hasClass("device-sm"))&&t.each(function(){var t=e(this),a=t.attr("data-delay"),i=0;if(i=a?Number(a)+500:500,!t.hasClass("animated")){t.addClass("not-animated");var s=t.attr("data-animate");t.appear(function(){setTimeout(function(){t.removeClass("not-animated").addClass(s+" animated")},i)},{accX:0,accY:-120},"easeInCubic")}})},loadFlexSlider:function(){var t=0,a=e(".fslider:not(.multiple)").find(".flexslider");a.length>0&&a.each(function(){if(""!=this.id&&null!=this.id){var a=(this.id,"ms"+t),i=getURLParam(a);(""==i||null==i)&&(i=0);var s="msn",n=getURLParam(s),o=new Array;if(null==n||""==n)o.push(i);else{o=n.split(",");var r=this;e.each(o,function(t,a){var s=e(r).parents(".edwMediaSlider").children(".multiple").find("[data-msn='"+a+"']");return i=s.attr("data-slide-number"),void 0!=i&&null!=i&&""!=i?!1:void 0})}t++}var l=e(this),d=l.parent(".fslider").attr("data-animation"),c=l.parent(".fslider").attr("data-easing"),h=l.parent(".fslider").attr("data-direction"),u=l.parent(".fslider").attr("data-slideshow"),f=l.parent(".fslider").attr("data-pause"),p=l.parent(".fslider").attr("data-speed"),g=l.parent(".fslider").attr("data-video"),m=l.parent(".fslider").attr("data-pagi"),O=l.parent(".fslider").attr("data-arrows"),v=l.parent(".fslider").attr("data-thumbs"),S=!0,M=!1;d||(d="slide"),c&&"swing"!=c||(c="swing",M=!0),h||(h="horizontal"),u=u?!1:!0,f||(f=5e3),p||(p=600),g||(g=!1),"vertical"==h&&(S=!1),m="false"==m?!1:!0,m="true"==v?"thumbnails":m,O="false"==O?!1:!0,l.flexslider({selector:".slider-wrap > .slide",animation:"fade",touch:!1,easing:c,direction:h,slideshow:!1,slideshowSpeed:Number(f),animationSpeed:Number(p),pauseOnHover:!0,video:g,controlNav:m,directionNav:!1,smoothHeight:S,useCSS:M,startAt:i,start:function(t){SEMICOLON.widget.animations(),SEMICOLON.initialize.verticalMiddle(),t.parent().removeClass("preloader2");setTimeout(function(){e("#portfolio.portfolio-masonry,#portfolio.portfolio-full,#posts.post-masonry").isotope("layout")},1200);SEMICOLON.initialize.lightbox(),e(".flex-prev").html('<i class="icon-angle-left"></i>'),e(".flex-next").html('<i class="icon-angle-right"></i>'),SEMICOLON.portfolio.portfolioDescMargin(),edwardsRecount()},after:function(t){C.has("portfolio-full")&&(e("#portfolio.portfolio-full").isotope("layout"),SEMICOLON.portfolio.portfolioDescMargin())}})})},html5Video:function(){e(".portfolio-single-image:has(video),.entry-image.parallax:has(video),#page-title:has(video),#slider:not(.revoslider-wrap):has(video),.section:has(video)").each(function(){var t=e(this).outerWidth(),a=e(this).outerHeight(),i=e(this).find("video").outerWidth(),s=e(this).find("video").outerHeight();if(a>s){var n=i/s,o=a*n,r=(o-t)/2;e(this).find("video").css({width:o+"px",height:a+"px",left:-r+"px"})}else{var r=(s-a)/2;e(this).find("video").css({width:i+"px",height:s+"px",top:-r+"px"})}})},youtubeBgVideo:function(){W.length>0&&W.each(function(){var t=e(this),a=t.attr("data-video"),i=t.attr("data-mute"),s=t.attr("data-ratio"),n=t.attr("data-quality"),o=t.attr("data-opacity"),r=t.attr("data-container"),l=t.attr("data-optimize"),d=t.attr("data-loop"),c=t.attr("data-volume"),h=t.attr("data-start"),u=t.attr("data-stop"),f=t.attr("data-autoplay"),p=t.attr("data-fullscreen");i="false"==i?!1:!0,s||(s="16/9"),n||(n="hd720"),o||(o=1),r||(r="self"),l="false"==l?!1:!0,d="false"==d?!1:!0,c||(c=1),h||(h=0),u||(u=0),f="false"==f?!1:!0,p="true"==p?!0:!1,t.mb_YTPlayer({videoURL:a,mute:i,ratio:s,quality:n,opacity:o,containment:r,optimizeDisplay:l,loop:d,vol:c,startAt:h,stopAt:u,autoplay:f,realfullscreen:p,showYTLogo:!1,showControls:!1})})},toggles:function(){e(".togglec").hide(),e(".togglet").click(function(){return e(this).toggleClass("toggleta").next(".togglec").slideToggle(300,function(){e(".togglec .scroll-pane").jScrollPane(),riskBar.$toggleClone.height(riskBar.$toggle.height()),riskBar.onScroll()}),!0})},accordions:function(){var t=e(".accordion");t.length>0&&t.each(function(){var t=e(this),a=t.attr("data-state");t.find(".acc_content").hide(),"closed"!=a&&t.find(".acctitle:first").addClass("acctitlec").next().show(),t.find(".acctitle").click(function(){return e(this).next().is(":hidden")&&(t.find(".acctitle").removeClass("acctitlec").next().slideUp("normal"),e(this).toggleClass("acctitlec").next().slideDown("normal")),!1})})},counter:function(){var t=e(".counter:not(.counter-instant)");t.length>0&&t.each(function(){var t=e(this),i=e(this).find("span").attr("data-comma");i=i?!0:!1,a.hasClass("device-lg")||a.hasClass("device-md")?t.appear(function(){SEMICOLON.widget.runCounter(t,i)},{accX:0,accY:-120},"easeInCubic"):SEMICOLON.widget.runCounter(t,i)})},runCounter:function(e,t){1==t?e.find("span").countTo({formatter:function(e,t){return e=e.toFixed(t.decimals),e=e.replace(/\B(?=(\d{3})+(?!\d))/g,",")}}):e.find("span").countTo()},roundedSkill:function(){var t=e(".rounded-skill");t.length>0&&t.each(function(){var t=e(this),i=t.attr("data-size"),s=t.attr("data-animate"),n=t.attr("data-width"),o=t.attr("data-color"),r=t.attr("data-trackcolor");i||(i=140),s||(s=2e3),n||(n=8),o||(o="#0093BF"),r||(r="rgba(0,0,0,0.04)");var l={roundSkillSize:i,roundSkillAnimate:s,roundSkillWidth:n,roundSkillColor:o,roundSkillTrackColor:r};a.hasClass("device-lg")||a.hasClass("device-md")?(t.css({width:i+"px",height:i+"px"}).animate({opacity:"0"},10),t.appear(function(){t.hasClass("skills-animated")||(t.css({opacity:"1"}),SEMICOLON.widget.runRoundedSkills(t,l),t.addClass("skills-animated"))},{accX:0,accY:-120},"easeInCubic")):SEMICOLON.widget.runRoundedSkills(t,l)})},runRoundedSkills:function(e,t){e.easyPieChart({size:Number(t.roundSkillSize),animate:Number(t.roundSkillAnimate),scaleColor:!1,trackColor:t.roundSkillTrackColor,lineWidth:Number(t.roundSkillWidth),lineCap:"square",barColor:t.roundSkillColor})},progress:function(){var t=e(".progress");t.length>0&&t.each(function(){var t=e(this),i=t.parent("li"),s=i.attr("data-percent");a.hasClass("device-lg")||a.hasClass("device-md")?t.appear(function(){i.hasClass("skills-animated")||(t.find(".counter-instant span").countTo(),i.find(".progress").css({width:s+"%"}).addClass("skills-animated"))},{accX:0,accY:-120},"easeInCubic"):(t.find(".counter-instant span").countTo(),i.find(".progress").css({width:s+"%"}))})},flickrFeed:function(){var t=e(".flickr-feed");t.length>0&&t.each(function(){var t=e(this),a=t.attr("data-id"),i=t.attr("data-count"),s=t.attr("data-type"),n="photos_public.gne";"group"==s&&(n="groups_pool.gne"),i||(i=9),t.jflickrfeed({feedapi:n,limit:Number(i),qstrings:{id:a},itemTemplate:'<a href="{{image_b}}" title="{{title}}" data-lightbox="gallery-item"><img src="{{image_s}}" alt="{{title}}" /></a>'},function(e){SEMICOLON.initialize.lightbox()})})},instagramPhotos:function(t,a){var i=e(".instagram-photos");i.length>0&&(e.fn.spectragram.accessData={accessToken:t,clientID:a},i.each(function(){var t=e(this),a=t.attr("data-user"),i=t.attr("data-tag"),s=t.attr("data-count"),n=t.attr("data-type");s||(s=9),"tag"==n?t.spectragram("getRecentTagged",{query:i,max:Number(s),size:"medium",wrapEachWith:" "}):"user"==n?t.spectragram("getUserFeed",{query:a,max:Number(s),size:"medium",wrapEachWith:" "}):t.spectragram("getPopular",{max:Number(s),size:"medium",wrapEachWith:" "})}))},dribbbleShots:function(){var t=e(".dribbble-shots");t.length>0&&t.each(function(){var t=e(this),a=t.attr("data-user"),i=t.attr("data-count"),s=t.attr("data-list"),n=t.attr("data-type");i||(i=9),"follows"==n?e.jribbble.getShotsThatPlayerFollows(a,function(a){var i=[];e.each(a.shots,function(e,t){i.push('<a href="'+t.url+'" target="_blank">'),i.push('<img src="'+t.image_teaser_url+'" '),i.push('alt="'+t.title+'"></a>')}),t.html(i.join(""))},{page:1,per_page:Number(i)}):"user"==n?e.jribbble.getShotsByPlayerId(a,function(a){var i=[];e.each(a.shots,function(e,t){i.push('<a href="'+t.url+'" target="_blank">'),i.push('<img src="'+t.image_teaser_url+'" '),i.push('alt="'+t.title+'"></a>')}),t.html(i.join(""))},{page:1,per_page:Number(i)}):"list"==n&&e.jribbble.getShotsByList(s,function(a){var i=[];e.each(a.shots,function(e,t){i.push('<a href="'+t.url+'" target="_blank">'),i.push('<img src="'+t.image_teaser_url+'" '),i.push('alt="'+t.title+'"></a>')}),t.html(i.join(""))},{page:1,per_page:Number(i)})})},masonryThumbs:function(){var t=e(".masonry-thumbs");t.length>0&&t.each(function(){var t=e(this);SEMICOLON.widget.masonryThumbsArrange(t)})},masonryThumbsArrange:function(e){SEMICOLON.initialize.setFullColumnWidth(e),e.isotope("layout")},notifications:function(t){toastr.clear();var a=e(t),i=a.attr("data-notify-position"),s=a.attr("data-notify-type"),n=a.attr("data-notify-msg"),o=a.attr("data-notify-close");return i=i?"toast-"+a.attr("data-notify-position"):"toast-top-right",n||(n="Please set a message!"),o="true"==o?!0:!1,toastr.options.positionClass=i,toastr.options.closeButton=o,toastr.options.closeHtml='<button><i class="icon-remove"></i></button>',"warning"==s?toastr.warning(n):"error"==s?toastr.error(n):"success"==s?toastr.success(n):toastr.info(n),!1},textRotater:function(){B.length>0&&B.each(function(){var t=(e(this),e(this).attr("data-rotate")),a=e(this).attr("data-speed"),i=e(this).attr("data-separator");t||(t="fade"),a||(a=1200),i||(i=",");var s=e(this).find(".t-rotate");
s.Morphext({animation:t,separator:i,speed:Number(a)})})},linkScroll:function(){e("a[data-scrollto]").click(function(){var t=e(this).attr("data-scrollto"),a=SEMICOLON.initialize.topScrollOffset();return e("html,body").stop(!0).animate({scrollTop:e(t).offset().top-a},750,"easeOutQuad"),!1})},extras:function(){e('[data-toggle="tooltip"]').tooltip(),e("#primary-menu-trigger").click(function(){return e(this).toggleClass("open"),e("#primary-menu > ul, #primary-menu > div > ul, #primary-menu > div > article > ul").toggleClass("show"),!1}),e("#page-submenu-trigger").click(function(){return a.toggleClass("top-search-open",!1),g.toggleClass("pagemenu-active"),!1}),g.find("nav").click(function(e){a.toggleClass("top-search-open",!1),L.toggleClass("top-cart-open",!1)}),SEMICOLON.isMobile.any()&&a.addClass("device-touch")}},SEMICOLON.isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return SEMICOLON.isMobile.Android()||SEMICOLON.isMobile.BlackBerry()||SEMICOLON.isMobile.iOS()||SEMICOLON.isMobile.Opera()||SEMICOLON.isMobile.Windows()}},SEMICOLON.documentOnResize={init:function(){setTimeout(function(){SEMICOLON.header.topsocial(),SEMICOLON.header.fullWidthMenu(),SEMICOLON.initialize.fullScreen(),SEMICOLON.initialize.verticalMiddle(),SEMICOLON.initialize.maxHeight(),SEMICOLON.initialize.testimonialsGrid(),SEMICOLON.slider.captionPosition(),SEMICOLON.portfolio.arrange(),SEMICOLON.widget.html5Video(),SEMICOLON.widget.masonryThumbs(),SEMICOLON.initialize.dataStyles(),SEMICOLON.initialize.dataResponsiveHeights()},500)}},SEMICOLON.documentOnReady={init:function(){SEMICOLON.initialize.init(),SEMICOLON.header.init(),O.length>0&&SEMICOLON.slider.init(),C.length>0&&SEMICOLON.portfolio.init(),SEMICOLON.widget.init(),SEMICOLON.documentOnReady.windowscroll()},windowscroll:function(){var a=(s.offset().top,n.offset().top);t.scroll(function(){SEMICOLON.initialize.goToTopScroll(),e("body.open-header.close-header-on-scroll").removeClass("side-header-open"),SEMICOLON.header.stickyMenu(a),SEMICOLON.header.darkLogo(),SEMICOLON.slider.sliderParallax(),SEMICOLON.slider.sliderElementsFade()}),t.scrolled(function(){SEMICOLON.header.onepageScroller()})}},SEMICOLON.documentOnLoad={init:function(){SEMICOLON.slider.captionPosition(),SEMICOLON.slider.swiperSliderMenu(),SEMICOLON.slider.revolutionSliderMenu(),SEMICOLON.initialize.maxHeight(),SEMICOLON.initialize.testimonialsGrid(),SEMICOLON.initialize.verticalMiddle(),SEMICOLON.portfolio.portfolioDescMargin(),SEMICOLON.portfolio.arrange(),SEMICOLON.widget.loadFlexSlider(),SEMICOLON.widget.html5Video(),SEMICOLON.widget.masonryThumbs(),SEMICOLON.slider.owlCaptionInit()}};var t=e(window),a=e("body"),i=e("#wrapper"),s=e("#header"),n=e("#header-wrap"),o=s.attr("class"),r=n.attr("class"),l=s.attr("data-sticky-class"),d=e("#logo").find(".standard-logo"),c=e("#logo").find(".retina-logo"),h=d.find("img").attr("src"),u=c.find("img").attr("src"),f=d.attr("data-dark-logo"),p=c.attr("data-dark-logo"),g=e("#page-menu"),m=e(".one-page-menu"),C=e("#portfolio"),O=e("#slider"),v=e(".slider-parallax"),S=e("#page-title"),M=e(".portfolio-ajax").find(".portfolio-item"),y=e("#portfolio-ajax-wrap"),I=e("#portfolio-ajax-container"),x=e("#portfolio-ajax-loader"),N="",E=e("#top-search"),L=e("#top-cart"),b=e(".vertical-middle"),k=e("#top-social").find("li"),w=e(".si-sticky"),z=e(".dots-menu"),T=e("#gotoTop"),P=e(".full-screen"),j=e(".common-height"),_=e(".testimonials-grid"),H=e(".page-section"),F=e(".owl-carousel"),A=e(".parallax"),W=e(".yt-bg-player"),B=e(".text-rotater");e(document).ready(SEMICOLON.documentOnReady.init),t.load(SEMICOLON.documentOnLoad.init),t.on("resize",SEMICOLON.documentOnResize.init)}(jQuery);