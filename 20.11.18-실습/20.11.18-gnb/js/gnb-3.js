$(function(){
    
    $('.list>li>a').on('click', function(){
        $('.gnb').hide();
        $('.sub').hide();
        $(this).next('.gnb').show();
        $(this).parent().addClass('on').siblings().removeClass('on');
        
    });
    
    $('.gnb>li>a').on('click', function(){
        $('.sub').stop().slideUp();
        $(this).next('.sub').stop().slideToggle();
    });
    
    $('.list>li>a').first().trigger('click');
  
});