// $('.galpao01').click(function(){
//     $('.wrapper .menu .itensGalpao01').toggleClass('mostra');
//     $('.wrapper .menu ol li .expand-more').toggleClass('mudar');
// });

// $('galpao01').click(function(){
//     $('.wrapper .menu ol li .expand-lass').toggleClass('.mostra')
// });

// $('.galpao02').click(function(){
//     $('.wrapper .menu .itensGalpao02').toggleClass('mostra');
// });

// $('.graficos').click(function(){
//     $('.wrapper .menu .itensGraficos').toggleClass('mostra');

// });

// $('.temperaturas').click(function(){
//     $('.wrapper .menu .itensTemperaturas').toggleClass('mostra');

// });

// $('.vacinas').click(function(){
//     $('.wrapper .menu .itensVacinas').toggleClass('mostra');

// });

// $( document ).ready(function() {
//     $('li').click(function() {
//         $(this).addClass('mostra');
//     });
// });



// $(document).ready(function(){

//     $('.sub-bnt').click(function(){
//     $(this).next('.sub-menu').slideToggle();
//     $(this).find('.dropdown').toggleClass('rotate');
//     })
// });

$(document).ready(function(){

    $('.bg-grey').click(function(){
      $(this).next('.sub-menu').toggleClass('sub-menu-visible');
      $(this).find('.dropdown').toggleClass('rotate');
      
    });



});
