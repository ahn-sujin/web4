$(function(){
    
       var mySwiper = new Swiper('#visual .swiper-container', {
          
          // direction: 'vertical',  //세로방향 옵션
          loop: true, // 무한반복
          
          pagination: {
            el: '#visual .swiper-pagination',
          },

          navigation: {
            nextEl: '#visual .swiper-button-next',
            prevEl: '#visual .swiper-button-prev',
          },

    });
    
    var mySwiper = new Swiper('#best_item .swiper-container', {
          slidesPerView: 3,
          spaceBetween: 25,
          slidesPerGroup: 3,
          pagination: {
            el: '#best_item .swiper-pagination',
          },

          navigation: {
            nextEl: '#best_item .swiper-button-next',
            prevEl: '#best_item .swiper-button-prev',
          },

    });
    
});