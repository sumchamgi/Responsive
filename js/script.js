$('.app_btn').on({click:function(){
    $('.bar').toggleClass('add');
    
    $('.mobile_menu_list').stop().slideToggle(500);
}});

var swiper = new Swiper(".mySwiper2", {
    
    slidesPerGroup: 5,
    
    
    
    breakpoints: {
      // when window width is >= 320px
      980: {
              slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      
      
      
    },
    navigation: {
      
      nextEl: ".swiper-button-next",
      
      prevEl: ".swiper-button-prev",
    },
    navigation: {
      nextEl: ".feature_rolling_woman",
      
      prevEl: ".feature_rolling_man",
      
    },
  });