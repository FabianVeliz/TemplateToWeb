ttw.behaviors.swiper = {
  var mySwiper = new Swiper('.swiper-container,.swiper-contain',{
      pagination:'.pagination',
      paginationClickable: true,
      loop: true
    });

    $('#next,adelante').on('click',function(e){
      e.preventDefault();
      mySwiper.swipeNext();
    });

    $('#prev,antes').on('click',function(e){
      e.preventDefault();
      mySwiper.swipePrev();
    });
}

