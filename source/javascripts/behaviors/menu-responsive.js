$(document).on('ready',function(){

  var ocult = $('header nav');

  $('header span a').click(function(){
    ocult.slideToggle();
  });

});

$(window).resize(function() {

  if($('nav').css('display')=='block'){
    $ ('nav').css('display','inline-block');
  }



});
