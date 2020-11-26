$(function(){
    
    
    var mySwiper = new Swiper('#visual .swiper-container', {
          // Optional parameters
//          direction: 'vertical',
          loop: true,

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
    
    var mySwiper = new Swiper('#best_item .swiper-container', {
          // Optional parameters
//          direction: 'vertical',
          loop: true,
        
          pagination: {
            el: '#best_item .swiper-pagination',
          },
        
          navigation: {
            nextEl: '#best_item .swiper-button-next',
            prevEl: '#best_item .swiper-button-prev',
          },
        
        //모바일 기본
            slidesPerView: 1,
            spaceBetween: 25,
            slidesPerGroup : 1,
        //반응형    
            breakpoints: {
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
          }

    });
    
        var mySwiper = new Swiper('#new_item .swiper-container', {
          // Optional parameters
//          direction: 'vertical',
          loop: true,
        
          pagination: {
            el: '#new_item .swiper-pagination',
          },
        
          navigation: {
            nextEl: '#new_item .swiper-button-next',
            prevEl: '#new_item .swiper-button-prev',
          },
        
        //모바일 기본
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup : 1,
            centeredSlides: true,
        //반응형    
//            breakpoints: {
//                640: {
//                  slidesPerView: 2,
//                  spaceBetween: 20,
//                },
//                768: {
//                  slidesPerView: 3,
//                  spaceBetween: 25,
//                },
//                1024: {
//                  slidesPerView: 4,
//                  spaceBetween: 25,
//                },
//          }

    });
    
    
    
    
    
    
    
});