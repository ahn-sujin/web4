$(function(){

    var win_w = $(window).width();
    $(window).on('resize',function(){
        win_w = $(this).width();
    });

    if(win_w>980){
        $('.sub_wrap').removeAttr('style');
        $('.sub_menu_depth').removeAttr('style');
    }

    $('#gnb>li').on('mouseenter',function(){
        if(win_w > 980){
            $(this).children('.sub_wrap').stop(true,true).slideDown();
        } else{
            $('#gnb>li>a').off('click');
            $('#gnb>li>a').on('click',function(){
                $('.sub_wrap').stop().slideUp();
                $(this).next('.sub_wrap').stop().slideToggle();
            });
            $('.sub_menu>li>a').off('click');
            $('.sub_menu>li>a').on('click',function(){
                $('.sub_menu_depth').stop().slideUp();
                $(this).next('.sub_menu_depth').stop().slideToggle();
            });
        }
    });

    $('#gnb>li').on('mouseleave',function(){
        if(win_w > 980){
            $(this).children('.sub_wrap').stop(true,true).slideUp();
        }    
    });



});