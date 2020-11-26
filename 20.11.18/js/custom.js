$(function(){
   
    $('.list>li>a').on('click',function(){
       $('#gnb').hide();
        $(this).next('#gnb').show();
    });
    
    
    $('#gnb>li>a').on('click',function(){
        $('.sub').stop().slideUp();
        $(this).next('.sub').stop().slideToggle();
    });
    
    
    
    
});