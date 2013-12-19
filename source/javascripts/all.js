//= require vendor/jquery-1.10.1.min
//= require vendor/idangerous.swiper-2.0.min
//= require application.js
//= require behaviors/swiper
//= require behaviors/menu-responsive
//= require behaviors/jquery.flexslider


  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: 'slide',
      controlsContainer: '.flex-container'
    });
  });
