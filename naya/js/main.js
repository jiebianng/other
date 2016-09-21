$(function(){
    choosePage();//选择跳转内页
});
//选择跳转内页
function choosePage(){
    var chPa =  $(".chUl,.ul"),SideNav = $(".SideNav"),logo = $(".logo"),choosePageControl = $('.choosePageControl'),allPageControl = $('.allPageControl'),choosePageId = sessionStorage.choosePageId;
    chPa.siblings("a").click(function(){
        sessionStorage.removeItem('choosePageId');
    });
    SideNav.find("a").click(function(){
        sessionStorage.removeItem('choosePageId');
    });
    logo.click(function(){
        sessionStorage.removeItem('choosePageId');
    });
    chPa.find("li").click(function(i){
        var _this = $(this);
        sessionStorage.choosePageId=_this.index();
    });
    choosePageControl.children('li').click(function(){
        var _this = $(this);
        var _has = _this.hasClass('active');
        if(!_has){
            _this.addClass('active');
        }else{
            _this.removeClass('active');
        }
    });
    allPageControl.children('li').each(function(){
        var _this = $(this);
        _this.addClass('active');
    });
    if(choosePageId){
        choosePageId = parseInt(choosePageId);
        choosePageControl.children('li').eq(choosePageId).addClass('active').siblings().removeClass('active');
    }else{
        choosePageControl.children('li').eq(0).addClass('active').siblings().removeClass('active');
    }
}