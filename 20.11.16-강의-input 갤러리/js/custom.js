$(function(){

    $('.list >li').each(function(){
        
        var img_tag = ''; 
        var img_src = $(this).children('label').children('img').attr('src');
        var label_for =  $(this).children('input').attr('id');
        
        
        img_src = img_src.replace('thum','detail');
        
        img_tag = '<div class="full_img"><label for=" '+ label_for +' "><img src=" '+ img_src +' " alt=""></label></div>'
        
        $(this).append(img_tag);
        
        
        
        
    });
    
    
});



