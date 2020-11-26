$(function(){
    
       var mySwiper = new Swiper('#visual .swiper-container', {
          // Optional parameters
          // direction: 'vertical',  //세로방향 옵션
          loop: true, // 무한반복

          // If we need pagination
          pagination: {
            el: '#visual .swiper-pagination',
          },

          // Navigation arrows
          navigation: {
            nextEl: '#visual .swiper-button-next',
            prevEl: '#visual .swiper-button-prev',
          },

    });
    
});