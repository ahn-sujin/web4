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
          
          // direction: 'vertical',  //세로방향 옵션
          loop: true, // 무한반복
          
          pagination: {
            el: '#best_item .swiper-pagination',
          },

          navigation: {
            nextEl: '#best_item .swiper-button-next',
            prevEl: '#best_item .swiper-button-prev',
          },
        
        slidePerView:1  ,
        spaceBetween:25 ,
        slidePerGroup:1 ,
        
        breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidePerGroup:2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
          slidePerGroup:3,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25,
          slidePerGroup:4, 
        },
        }

    });
    
    
    
});