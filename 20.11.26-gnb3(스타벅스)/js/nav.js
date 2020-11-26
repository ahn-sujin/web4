$(function(){
    
    var win_w = $(window).width();
    $(window).on('resize',function(){
       win_w = $(this).width(); 
    });
    
    if(win_w > 980){
        $('.sub_wrap').removeAttr('style');
        $('.sub_depth_2').removeAttr('style');
    }
    
    $('#gnb>li').on('mouseenter',function(){
       if(win_w> 980){
           $(this).children('.sub_wrap').stop(true,true).slideDown();
       } else{
           $('#gnb>li>a').off('click');
           $('#gnb>li>a').on('click',function(){
                $('.sub_wrap').stop().slideUp();
                $(this).next('.sub_wrap').stop().slideToggle();
           });
           $('.sub_depth_1>li>a').off('click');
           $('.sub_depth_1>li>a').on('click',function(){
                $('.sub_depth_2').stop().slideUp();
                $(this).next('.sub_depth_2').stop().slideToggle();
           });
       }
    });
    
    $('#gnb>li').on('mouseleave',function(){
       if(win_w > 980){
           $(this).children('.sub_wrap').stop(true,true).slideUp();
       } 
    });
 
    
});

