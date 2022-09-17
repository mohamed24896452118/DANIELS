$(function (){
    'use strict';
    var winH  =  $(window).height(),
    upperH    = $(' .upper-bar').innerHeight(),
    navH     = $(' .navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - ( upperH  + navH ));


    //Featured Work Shuffle
$('.featured-work ul li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    // console.log($(this).data('class'));
    if(($(this).data('class')) === 'all'){
        $('.shuffle-imgs .col-md').css('opacity', 1);
    }
    else {
        $('.shuffle-imgs .col-md').css('opacity', '.08');
        $($(this).data('class')).css('opacity' , 1);
    }
}); 
});




// let upper  = document.querySelector('.upper-bar'),
//     nav    = document.querySelector('.navbar'),
//     slider = document.querySelector('.slider '),
//     winH   = window.innerHeight,
//     getH   = (winH-(upper.offsetHeight+nav.offsetHeight));
// slider.style.height =`${getH}px`