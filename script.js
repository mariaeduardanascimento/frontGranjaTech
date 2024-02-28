$(document).ready(function(){

    $('.bg-grey').click(function(){
      $(this).next('.sub-menu').toggleClass('sub-menu-visible');
      $(this).find('.dropdown').toggleClass('rotate');
      
    });



});
