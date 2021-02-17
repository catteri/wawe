$(function () {

    $(".menu a, .logo__link").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.slider__inner').slick({
        dots: true,
        arrows:false,
    });

    $('.menu__btn').on('click', function () {
       $('.header__inner').toggleClass('header__inner--active');
    });

     var mixer = mixitup('.portfolio__content');
    
});