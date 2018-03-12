jQuery(function ($) {

    'use strict';



    //easeScroll
    $("html").easeScroll({
        animationTime: 1200,
        stepSize: 150,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });



    //home page hero slider
    $('.hero-slider-carousel').owlCarousel({
        items:1,
        loop:true,
        dots: true,
        margin:20,
        autoplay:true,
        autoplayTimeout:5500,
        autoplayStopOnLast: false
    });


    //departments slider
    $('.departments-slider').owlCarousel({
        responsiveClass:true,
        margin:30,
        dots: false,
        autoWidth:false,
        nav:true,
        navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1200:{
                items:4
            }

        }

    });


    //our team section
    $('.our-doctors-slider').owlCarousel({
        responsiveClass:true,
        margin:30,
        dots: false,
        autoWidth:false,
        nav:true,
        navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1200:{
                items:4
            }

        }

    });



    //our testimonial
    $('.client-testimonial-slider').owlCarousel({
        items:1,
        loop:true,
        dots: true,
        margin:20,
        autoplay:true,
        autoplayTimeout:5500,
        autoplayStopOnLast: false
    });


    /* ---------------------------------------------- /*
     * Preloader
     /* ---------------------------------------------- */

    $(window).ready(function() {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');

    });



    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------

    (function(){

        $('body').append('<div id="toTop"><span><i class="fa fa-angle-down"></i></span></div>');

        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());


    //nav menu active color
    $(function() {
        $("li").click(function() {
            // remove classes from all
            $("li").removeClass("active");
            // add class to the one we clicked
            $(this).addClass("active");
        });
    });





}); // JQuery end
