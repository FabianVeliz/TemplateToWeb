var mySwiper = new Swiper('.swiper-container',{
    pagination:'.pagination',
    paginationClickable: true,
    loop: true
  });

  $('#next').on('click',function(e){
    e.preventDefault();
    mySwiper.swipeNext();
  });

  $('#prev').on('click',function(e){
    e.preventDefault();
    mySwiper.swipePrev();
  });
