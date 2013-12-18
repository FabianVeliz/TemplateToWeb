(function($) {
  var ttw = window.ttw || {}

  ttw.behaviors.swiper = {
    settings: {
      pagination:'.pagination',
      paginationClickable: true,
      loop: true
    },
    next: $('#next'),
    prev: $('#prev'),

    init: function() {
      this.startSlider();
      this.bindClicks();
    },

    startSlider: function() {
      this.mySwiper = new Swiper('.swiper-container',
        this.settings)
    },

    bindClicks: function() {
      this.prev.click(function(e) {
        e.preventDefault();
        ttw.behaviors.swiper.mySwiper.swipePrev();
      });

      this.next.click(function(e) {
        e.preventDefault();
        ttw.behaviors.swiper.mySwiper.swipeNext();
      })
    }
  }
})(jQuery)


  // new Swiper('.swiper-container,.swiper-contain',{
  //     pagination:'.pagination',
  //     paginationClickable: true,
  //     loop: true
  //   });
    // $('#next,adelante').on('click',function(e){
    //   e.preventDefault();
    //   mySwiper.swipeNext();
    // });

    //   e.preventDefault();
    //   mySwiper.swipePrev();
    // $('#prev,antes').on('click',function(e){
    // });


