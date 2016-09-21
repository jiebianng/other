/**
 * Created by Administrator on 2015/9/26 0026.
 */
$(function(){
    swiper();//轮播
    other();//其它
});
//轮播
function swiper(){
    var le = $('.swiper-container').length;
    if(le>0){
        //一般轮播效果1
        new Swiper('.swiper-style1', {
            autoplay : 3000,
            pagination: '.swiper-style1 .pagination',
            calculateHeight : true,
            grabCursor: true,
            paginationClickable: true,
            mousewheelControl : true
        });
        //一般轮播效果1
        var check = false;
        if($('.swiper-index').length>0){
            new Swiper('.swiper-index', {
                pagination: '.swiper-index .pagination',
                grabCursor: true,
                paginationClickable: true,
                mousewheelControl : true,
                mode: 'vertical',
                onFirstInit: function(){
                    var swiperIndex =$('.swiper-index');
                    var he = document.documentElement.clientHeight;
                    swiperIndex.css({
                        "height":he-130+"px"
                    });
                },
                onSlideChangeStart: function(swiper){
                    if(!(swiper.imagesLoaded==swiper.activeIndex+1)){
                        check=false;
                    }
                },
                onSlidePrev: function(){
                    check=false;
                },
                onSlideChangeEnd: function(swiper){
                    if(swiper.imagesLoaded==swiper.activeIndex+1){
                        check=true;
                    }else{
                        check=false;
                    }
                },
                onTouchEnd: function(swiper){
                    var top = $('.swiperIndexWh')[0].offsetTop-100;
                    if(check){
                        if(swiper.imagesLoaded==swiper.activeIndex+1){
                            $('body,html').stop(true).animate({scrollTop: top },600);
                            check=false;
                        }
                    }
                }
            });
            var toppos = 0;
            $('.clickGoTo').click(function(){
                var top = $('.swiperIndexWh')[0].offsetTop-100;
                $('body,html').stop(true).animate({scrollTop: top },600);
                check=false;
            });
            $(window).bind("mousewheel DOMMouseScroll", function (e) {
                var top = $('.swiperIndexWh')[0].offsetTop-100;
                var scrollTop = $(window).scrollTop();
                var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                    (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
                if (delta > 0) {
                    // 向上滚
                }else if (delta < 0) {
                    // 向下滚
                    if(check){
                        $('body,html').stop(true).animate({scrollTop: top },600);
                        check=false;
                    }
                }
            });
            $(window).scroll(function(){
                var scrollTop = $(window).scrollTop();
                var top = $('.swiperIndexWh')[0].offsetTop-100;
                if(scrollTop > toppos){
                    check=false;
                }else {
                    if(scrollTop < top+100){
                        $('body,html').stop(true).animate({scrollTop: 0 },100);
                        check=true;
                    }
                }
                toppos = scrollTop;
            });
        }
        //左右交换轮播效果1
        new Swiper('.swiper-style2',{
            scrollContainer: true
        });
        //左右交换轮播效果2
        var swi3 = new Swiper('.swiper-style3',{
            paginationClickable: true,
            slidesPerView: 'auto',
            calculateHeight : true,
            autoplay : 3000,
            spaceBetween: 70
        });
        $('.aboutUsPeo .prev').click(function(){
            swi3.swipePrev();
        });
        $('.aboutUsPeo .next').click(function(){
            swi3.swipeNext();
        });
        //左右交换轮播效果2
        new Swiper('.swiper-parent',{
            slidesPerView: 'auto',
            calculateHeight : true,
            autoplay : 3000
        })
    }
}
function other(){
    var toppos = 0;
    var scrollTop = $(window).scrollTop();
    if(scrollTop==0){
        $('.indexNav').stop(true).animate({
            top:"0"
        });
    }
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > toppos){
            $('.indexNav').stop(true).animate({
                top:"-6.6rem"
            });
        } else {
            $('.indexNav').stop(true).animate({
                top:"0"
            });
        }
        toppos = scrollTop;
    });
    $('.listControl').click(function(){
        var _this =$(this);
        var _has = _this.hasClass('active');
        if(!_has){
            _this.addClass('active');
            $('.linkUl').slideDown();
        }else{
            _this.removeClass('active');
            $('.linkUl').slideUp();
        }
    });
    var eject = $('.eject');
    $('.serve1Col').click(function(){
        eject.find('.theme-mask').show().height($(document).height());
        eject.find('.popover1').slideDown(200);
    });
    eject.find('.close,.theme-mask').click(function(){
        eject.find('.theme-mask').hide();
        eject.find('.popover1').slideUp(200);
    });
    $('.indexSystem li').hover(function(){
        var _this = $(this);
        _this.addClass('active').siblings().removeClass('active');
    })
}