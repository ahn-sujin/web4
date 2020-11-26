$(function(){

    var win_w = $(window).width();
    
    $(window).on('resize', function(){
        win_w = $(this).width();
        if(win_w>=768){
            $('.sub').removeAttr('style');
        }
    });
    
    $('#gnb').on('mouseenter', function(){
        
        if(win_w>=768){ //pc버전 동작
           $('.sub').stop(true,true).slideDown();
        } else{ // table 이하 동작
            $('#gnb>li>a').off('click');
            $('#gnb>li>a').on('click', function(){
                $('.sub').stop().slideUp();
                $(this).next('.sub').stop().slideToggle();
            });
        }
       
    });
    
    $('#gnb').on('mouseleave', function(){
        
        if(win_w>=768){
           $('.sub').stop(true,true).slideUp();
        }
       
    });
    
    
    
});