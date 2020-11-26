$(function(){
    
    var win_w = $(window).width();
    
    $(window).on('resize', function(){
        
        win_w = $(this).width();
    });
    
    $('#gnb>li').on('mouseenter', function(){
        
        if(win_w > 1024){
            
            $(this).children('div').stop().slideDown();
//            $(this).children('div').addClass('on');
        }
    });
    
    $('#gnb>li').on('mouseleave', function(){
        if(win_w > 1024){
            $(this).children('div').stop().hide();
//            $(this).children('div').removeClass('on');
        }
    });
    
    
});