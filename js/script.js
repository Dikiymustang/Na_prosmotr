

//Slider//
!function(a){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],a):"undefined"!=typeof jQuery&&a(jQuery)}(function(a){"use strict";function y(a){var c=a.originalEvent?a.originalEvent:a;return b&&void 0!==c.touches&&1==c.touches.length?c.touches[0].pageX:void 0!==a.pageX?a.pageX:void 0!==c.pageX?c.pageX:0}function z(a){var c=a.originalEvent?a.originalEvent:a;return b&&void 0!==c.touches&&1==c.touches.length?c.touches[0].pageY:void 0!==a.pageY?a.pageY:void 0!==c.pageY?c.pageY:0}var u,b="ontouchstart"in window,c=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled||!1,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled||!1,e=b||d,f=e?d?c?"MSPointerDown":"pointerdown":"touchstart":"mousedown",g=e?d?c?"MSPointerMove":"pointermove":"touchmove":"mousemove",h=e?d?c?"MSPointerUp":"pointerup":"touchend":"mouseup",i=e?null:"mouseenter",j=e?null:"mouseleave",k=e?d?c?"MSPointerCancel":"pointercancel":"touchcancel":null,l="transitionend webkitTransitionEnd oTransitionEnd msTransitionEnd",m=[],n=!1,o=!1,p=35,q=0,r=0,s=0,t=0,v=document.body||document.documentElement,w=v.style,x=!(void 0===w.transform&&void 0===w.WebkitTransform&&void 0===w.MozTransform&&void 0===w.MsTransform&&void 0===w.OTransform||void 0===w.transition&&void 0===w.WebkitTransition&&void 0===w.MozTransition&&void 0===w.MsTransition&&void 0===w.OTransition);a.fn.extend({setTransition:function(a){if(1==x){var b=0!==a?"cubic-bezier(0.39, 0.575, 0.565, 1)":"linear",c=a+"s",d=0!==a?"all":"none";this.css({"-webkit-transition-property":d,"-moz-transition-property":d,"-ms-transition-property":d,"-o-transition-property":d,"transition-property":d,"-webkit-transition-duration":c,"-moz-transition-duration":c,"-ms-transition-duration":c,"-o-transition-duration":c,"transition-duration":c,"-webkit-transition-timing-function":b,"-moz-transition-timing-function":b,"-ms-transition-timing-function":b,"-o-transition-timing-function":b,"transition-timing-function":b})}return this},translateX:function(a,b){var c="";return-1==a.toString().indexOf("px")&&(c="px"),1==x?(void 0!==b&&null!==b&&b===!0&&this.setTransition(0),this.css({"-webkit-transform":"translate3d("+a+c+", 0, 0)","-moz-transform":"translateX("+a+c+")","-ms-transform":"translateX("+a+c+")","-o-transform":"translateX("+a+c+")",transform:"translateX("+a+c+")"})):this.css({"margin-left":a}),this},animateX:function(b,c){return 1==x?(this.setTransition(c/1e3).translateX(b),this.hasClass("event-attached")||this.addClass("event-attached").on(l,function(b){var c=a(b.target);c.hasClass("slider-slides")&&(c.getSlider().slideComplete(),c.setTransition(0))})):this.stop(!0,!0).animate({"margin-left":b},c,function(){a(this).getSlider().slideComplete()}),this},animateFade:function(b){return 1==x?(this.setTransition(b/1e3).css({"-webkit-opacity":1,"-moz-opacity":1,"-ms-opacity":1,"-o-opacity":1,opacity:1}),this.hasClass("event-attached")||this.addClass("event-attached").on(l,function(b){-1!=b.originalEvent.propertyName.indexOf("opacity")&&0!=a(this).css("z-index")&&a(this).getSlider().slideComplete()})):this.stop(!0,!0).fadeTo(b,1,function(){a(this).getSlider().slideComplete()}),this}}),a.fn.extend({sliderInit:function(l){var v=this.children().length;if(!(1>=v||1==this.data("initialized"))){this.hasClass("jSlider")||this.addClass("jSlider");var w={navigation:"hover",indicator:"always",speed:600,delay:5e3,transition:"slide",loop:!1,group:1},A={navigation:this.data("navigation"),indicator:this.data("indicator"),speed:this.data("speed"),delay:this.data("delay"),transition:this.data("transition"),loop:this.data("loop"),group:this.data("group")},B=a.extend({},w,A,l);(isNaN(B.speed)||B.speed<0)&&(B.speed=w.speed),(isNaN(B.delay)||B.delay<0)&&(B.delay=w.delay),"slide"!=B.transition&&"fade"!=B.transition&&(B.transition=w.transition),"slide"!=B.transition&&(B.group=1),e&&("hover"==B.navigation&&(B.navigation="none"),"hover"==B.indicator&&(B.indicator="none")),v=Math.ceil(v/B.group),this.data("settings",B);var C=0,D="> div.selected";""!=window.location.hash&&(D=window.location.hash+","+D),0!=this.find(D).length&&(C=Math.ceil(this.find(D).index()/B.group),this.find("> div.selected").removeClass("selected"),this.find("> div:eq("+C+")").addClass("selected")),this.find("[class*=appear-]").each(function(){var b=a(this),c=parseInt(b.css("top"),10),d=parseInt(b.css("left"),10);b.data("top",c).data("left",d),b.hasClass("appear-top")&&b.css("top",c-15),b.hasClass("appear-bottom")&&b.css("top",c+15),b.hasClass("appear-left")&&b.css("left",c-15),b.hasClass("appear-right")&&b.css("left",d+15),b.css("opacity",0),x&&b.addClass("cssAnimation")}),this.data("total",v).data("current",C).data("cancel-play",!1).data("map-index",m.length).data("initialized",!0).wrapInner('<div class="slider-content"><div class="slider-content-wrapper"><div class="slider-slides"></div></div></div>'),this.find(".slider-slides").setTransition(0),m.push({slider:this,sliderInterval:null,showInterval:null}),1!=B.group?this.find(".slider-slides > div").css("width",100/B.group+"%"):this.find("img:eq(0)").clone().prependTo(this),(c||d)&&this.css({"-ms-scroll-chaining":"none","-ms-touch-action":"pan-y pinch-zoom","touch-action":"pan-y pinch-zoom"}),b&&this.addClass("webkit-slider"),"fade"!=B.transition||"none"==B.navigation&&"none"==B.indicator?"none"==B.navigation&&"none"==B.indicator&&this.addClass("background-transition"):this.addClass("fade-transition"),("none"!=B.navigation||"none"!=B.indicator)&&(this.find(".slider-content-wrapper").on(f,function(b){var c=a(this).getSlider(),d=c.find(".slider-slides");e||(b.preventDefault(),d.addClass("grabbing")),d.setTransition(0),n=!0,o=!1,q=y(b),r=z(b),c.sliderStop(),u=c}).on(g,function(b){var c=a(this).getSlider(),d=c.find(".slider-slides"),f=c.data("settings"),g=c.data("current"),h=c.width();if(1==n){if(e||b.preventDefault(),s=y(b)-q,t=z(b)-r,Math.abs(t)>Math.abs(s))return void(e&&c.sliderCancelTouch());o=!0,b.preventDefault(),"slide"==f.transition&&d.translateX(-g*h+s,!0)}}).on(h+" "+k,function(b){var c=a(this).getSlider(),d=c.find(".slider-slides"),e=c.data("settings"),f=c.data("current"),h=(c.width(),1);d.removeClass("grabbing"),Math.abs(s)>p?(h=s>0?-1:1,c.sliderGo(h)):"slide"==e.transition&&c.sliderUpdate(f),c.sliderCancelTouch(),u=null}),a(document).on({mouseup:function(a){null!=u&&u.find(".slider-content-wrapper").trigger(h)}}),null!=i&&null!=j&&this.on(i,function(){var b=a(this),c=b.data("settings");"hover"==c.navigation&&b.find(".navigator").fadeIn(),"hover"==c.indicator&&b.find(".indicator").fadeIn()}).on(j,function(){var b=a(this),c=b.data("settings");"hover"==c.navigation&&b.find(".navigator").fadeOut(),"hover"==c.indicator&&b.find(".indicator").fadeOut()}));var E=a("<div />",{"class":"controller",html:'<div class="navigator"><span class="prev" data-direction="-1">Previous</span><span class="next" data-direction="1">Next</span></div><div class="indicator"></div>'}).appendTo(this);-1!=navigator.userAgent.toLowerCase().indexOf("msie 8")&&E.addClass("msie8");var F=this.find(".navigator"),G=this.find(".indicator");"always"==B.navigation&&F.show(),this.find(".navigator span").on("click",function(b){b.preventDefault(),a(this).getSlider().sliderStop().sliderGo(a(this).data("direction"))}),"always"==B.indicator&&G.show();for(var H=0;v>H;H++)a("<span />",{"class":H==C?"selected":"",text:H,"data-slide":H}).appendTo(E.find(".indicator")).on("click",function(b){b.preventDefault();var c=a(this),d=c.getSlider(),e=d.data("current"),f=c.data("slide");(0>f||f>=d.data("total"))&&(f=e),d.sliderStop().sliderOptimize(e,f).sliderUpdate(f)});return this.trigger({type:"slideCreated"}),this.sliderResized().sliderUpdate(C).sliderOptimize().sliderPlay(),this}},sliderPlay:function(){var a=this.data("current"),b=this.data("map-index"),c=this.data("settings"),d=this.data("total"),e=this.data("cancel-play"),f=this.data("imageLoaded")==this.data("totalImages");if(a>=d-1)return void this.sliderStop();if(1!=e&&0!=c.delay){var g=this;m[b].sliderInterval=setInterval(function(){var a=g.data("cancel-play");return 1==a?void clearInterval(m[b].sliderInterval):void(f&&g.sliderGo(1))},c.delay)}},sliderStop:function(){var a=this.data("map-index");return clearInterval(m[a].sliderInterval),1==this.data("cancel-play")?this:this.data("cancel-play",!0).trigger("slideCancelAutoPlay")},slideComplete:function(){return this.sliderOptimize().trigger({type:"slideComplete",current:this.data("current")})},sliderOptimize:function(a,b){var c=this.data("settings"),d=this.data("current"),f=void 0!==b?b:d,g=this.find(".slider-slides > div");if("slide"==c.transition)return this.sliderShowItems();for(var h=0;h<g.length;h++)f!=h&&g.eq(h).css({"-webkit-transition-duration":0,"-moz-transition-duration":0,"-ms-transition-duration":0,"-o-transition-duration":0,"transition-duration":0,"-webkit-opacity":0,"-moz-opacity":0,"-ms-opacity":0,"-o-opacity":0,opacity:0,"z-index":0});return this.sliderShowItems()},sliderCancelTouch:function(){return q=0,r=0,s=0,t=0,n=!1,o=!1,this},sliderResized:function(){var a,b=this.data("settings"),c=this.data("total"),d=this.data("current"),e=this.width(),f=this.find(".slider-slides > div");for(a=0;a<f.length;a++)"slide"==b.transition?f.eq(a).css("left",e*a/b.group):"fade"==b.transition&&(f.eq(a).css("z-index",c-a),a==d&&f.eq(a).css("z-index",c));return"slide"==b.transition&&this.find(".slider-slides").translateX(-d*e,!0),this},sliderGo:function(a){var b=this.data("settings"),c=this.data("current"),d=this.data("total"),e=c+a;return(0>e||e>=d)&&(e=0==b.loop?c:0>e?d-1:0),this.sliderOptimize(c,e).sliderUpdate(e)},sliderUpdate:function(a){this.data("current")!=a&&this.trigger({type:"slideStart"});var b=this.width(),c=this.data("settings");return this.data("current",a),"slide"==c.transition?this.find(".slider-slides").animateX(-a*b,c.speed):"fade"==c.transition&&this.find(".slider-slides > div:eq("+a+")").css("z-index",this.data("total")).animateFade(c.speed),this.find(".navigator span").removeClass("disabled"),0==c.loop&&(0==a?this.find(".navigator .prev").addClass("disabled"):a==this.data("total")-1&&this.find(".navigator .next").addClass("disabled")),this.find(".indicator span.selected").removeClass("selected"),this.find(".indicator span:eq("+a+")").addClass("selected"),this},sliderShowItems:function(){var a=this,b=a.data("current"),c=a.data("map-index"),d=a.find(".slider-slides > div:eq("+b+") [class*=appear-]"),e=0;return a.sliderHideItems(),clearInterval(m[c].showInterval),d.length<=0?a:(m[c].showInterval=setInterval(function(){if(e>=d.length)return clearInterval(m[c].showInterval),a;var b=d.eq(e);x?b.css({top:b.data("top"),left:b.data("left"),opacity:1}):b.stop(!0,!0).animate({top:b.data("top"),left:b.data("left"),opacity:1},500),e++},200),a)},sliderHideItems:function(){var b=this.data("current"),c=this.data("map-index");return clearInterval(m[c].showInterval),this.find(".slider-slides > div:not(:eq("+b+")) [class*=appear-]").each(function(){var b=a(this),c=b.data("top"),d=b.data("left");b.hasClass("appear-top")&&b.css("top",c-15),b.hasClass("appear-bottom")&&b.css("top",c+15),b.hasClass("appear-left")&&b.css("left",c-15),b.hasClass("appear-right")&&b.css("left",d+15),b.css("opacity",0)}),this},getSlider:function(){return this.hasClass("jSlider")?this:this.parents(".jSlider")}}),a(document).ready(function(b){a("body .jSlider").each(function(){a(this).sliderInit()})}),a(window).resize(function(b){a("body .jSlider").each(function(){a(this).sliderResized()})})});


//Catalog//

 $('.submenu_mover').click(function(){
        if ($(this).parent().hasClass('open')) {
            $('.catmenu_item.open').removeClass('open').find('.submenu').animate({
                height: 0
            }, 1000);
        } else {
            $('.catmenu_item.open').removeClass('open').find('.submenu').animate({
                height: 0
            }, 1000);
            $(this).parent().addClass('open').find('.submenu').animate({
                height: ($(this).parent().find('.submenu a').length * $('.submenu a').height())
            }, 1000);
        }
    });
	
//Gallery//

function seebigimage() {
    // получаем адрес большой картинки
    let imageurl = document.querySelector('.main-image img').src.split('_medium.jpg').join('_big.jpg');
    
    // вставляем в попап верстку и адрес для картинки, а также кнопку-крестик для уборки попапа
    document.querySelector('.popup-desk').innerHTML = '<div class="popup lightbox"><img src="' + imageurl + '"><div class="cross">+</div></div>';
    
    // получаем доступные размеры экрана и соотношение сторон картинки
    // -120 пикселей - потому что у нас по стилям отступы от края экрана до попапа по 30 пикселей и поля попапа тоже по 30 пикселей с каждой стороны
    let winsize = {
        w: document.documentElement.clientWidth - 120,
        h: document.documentElement.clientHeight - 120
    };
    let sides = document.querySelector('.main-image img').clientWidth / document.querySelector('.main-image img').clientHeight;
    
    // сравниваем реальные размеры попапа и размеры при правильном соотношении сторон у картинки. при необходимости вносим исправления
    if (winsize.w / sides > winsize.h) {
        let correction = (winsize.w - (winsize.h * sides)) / 2;
        document.querySelector('.popup').style = 'margin: 0 ' + correction + 'px';
        winsize.w = winsize.h * sides;
    } else {
        winsize.h = winsize.w / sides;
    }
    
    // прописываем размеры картинки
    document.querySelector('.lightbox img').style = 'width:' + winsize.w + 'px;height:' + winsize.h + 'px';
    
    // прописываем уборку попапа по клику на кнопку-крестик
    document.querySelector('.cross').addEventListener('click',function(){
        document.querySelector('.popup-desk').dispatchEvent(new Event("click"));
    });
    
    // проявляем попап
    document.querySelector('.popup-desk').classList.add('active');
}
function changeimage(event) { // аргументом будет событие клика
    // из объекта события мы берем указатель на место события - event.target
    // это место - наша картинка
    // из ее атрибута src вычисляем адрес картинки среднего размера
    let imageurl = event.target.src.split('_small').join('_medium');
    
    // всталяем этот адрес в атрибут src главной картинки
    document.querySelector('.main-image img').src = imageurl;
}	

//Gorod//
$(function(){
    $('#yourcity').click(function(){
         $('.popup-desk').addClass('active').html('<div class="popup gorod"><p>Ваш город: Москва</p><p>Выберите город:</p><button class="moscow" type="button">Москва</button><button class="speterburg"  type="button">Санкт-Петербург</button><button class="novosib" type="button">Новосибирск</button><button class="sochi" type="button">Сочи</button></div>');
        $('.gorod button').click(function(){
            if ($(this).hasClass('moscow')) {
                $('#yourcity').html('<p>Ваш город: Москва</p>');
            } else if ($(this).hasClass('speterburg')) {
                $('#yourcity').html('<p>Ваш город: Санкт-Петербург</p>');
            } else if ($(this).hasClass('novosib')) {
                $('#yourcity').html('<p>Ваш город: Новосибирск</p>');
            } else if ($(this).hasClass('sochi')) {
                $('#yourcity').html('<p>Ваш город: Сочи</p>');
            }
            $('.popup-desk').click();
        })
    });

    $('.submenu_mover').click(function(){
        if ($(this).parent().hasClass('open')) {
            $('.catmenu_item.open').removeClass('open').find('.submenu').animate({
                height: 0
            }, 1000);
        } else {
            $('.catmenu_item.open').removeClass('open').find('.submenu').animate({
                height: 0
            }, 1000);
            $(this).parent().addClass('open').find('.submenu').animate({
                height: ($(this).parent().find('.submenu a').length * $('.submenu a').height())
            }, 1000);
        }
    });
    
    $('button.basket').click(function(){
        $('.popup-desk').addClass('active');
        $('.popup-desk').html('<div class="popup"></div>');
        $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
        $('.basket').html(6);
    });
    
    $('.popup-desk').click(function(e){
        if (e.target == this) {
            $(this).removeClass('active');
            $('.popup-desk').empty();
            $('.basket').html(5);
        }
    });
    
    $(document).on('click', '.register', function(e){
        e.preventDefault();
        if ($('.basket').html()==6) {
            $('.popup').html('<p class="popup-header">Личный кабинет закрыт на ремонт.<br>Регистрации не будет до 1 января.</p><a href="https://yandex.ru/" class="register">Войти</a>');
            $('.basket').html(5);
        } else {
            $('.popup').html('<p class="popup-header">Личный кабинет</p><input type="text" name="fullname" placeholder="Логин"><input type="password" name="password" placeholder="Пароль"><button type="submit">Войти</button><a href="https://yandex.ru/" class="register">Зарегистрироваться</a>');
            $('.basket').html(6);
        }
    });
    
    $(document).on('click', '.order .del > div', function(){
        tovarDelete(this);
    });
    
    $(document).on('input', '.order .num > input', function(){
        tovarChange(this);
    });
    
    if ($('#date').length) {
        $('#date').click(function(){
            if ($('#date').val()) {
                selected_day = makeSelectedDate($('#date').val());
                makePopup(selected_day.getFullYear(),selected_day.getMonth());
            } else {
                makePopup(TODAY.getFullYear(),TODAY.getMonth());
            }
        });
    
        $('#date').mask('00-00-0000');
    }
    
    
    $('#orderdata').on('submit', function(e){
        e.preventDefault();
        orderAction();
    })
        if ($('.product').length) {
        $('.main-image').on('click', 'img', seebigimage);
        $('.small-image').on('click', 'img', changeimage);
    }
});



