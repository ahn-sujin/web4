$(function () {
    
    var mySwiper = new Swiper('#md_pick .swiper-container', {

        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        
        pagination: {
            el: '#md_pick .swiper-pagination', 
        },
        
        navigation: {
            nextEl: '#md_pick .swiper-button-next', 
            prevEl: '#md_pick .swiper-button-prev', 
        }, 
    });
    
    var mySwiper = new Swiper('#top_seller .swiper-container', {

        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: false,
        
        pagination: {
            el: '#top_seller .swiper-pagination', 
        },
        
        navigation: {
            nextEl: '#top_seller .swiper-button-next', 
            prevEl: '#top_seller .swiper-button-prev', 
        }, 
    });
    
    var mySwiper = new Swiper('#best_item .swiper-container', {

        loop: true,
        pagination: {
            el: '#best_item .swiper-pagination', 
        },
        navigation: {
            nextEl: '#best_item .swiper-button-next', 
            prevEl: '#best_item .swiper-button-prev', 
        }, 
    });
    
    
});