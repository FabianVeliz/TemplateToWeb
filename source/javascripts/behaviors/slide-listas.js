$(document).on('ready',function(){

  $('section#categories ul li').click(function(){

    $(this).find('p').slideToggle();

  });

});
