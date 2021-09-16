"use strict";
$(document).ready(function () {


    /*------------ Start site menu  ------------*/

    // Start sticky header
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 150) {
            $('#sticky-header').addClass('sticky-menu');
        } else {
            $('#sticky-header').removeClass('sticky-menu');
        }
    });

    // slicknav
    $('ul#navigation').slicknav({
        prependTo: ".responsive-menu-wrap"
    });


    $('.topbar-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        center: true
    });


    $('.hero-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
    });




    $('.feedback-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });


    var fixOwl = function () {
        var $stage = $('.owl-stage'),
            stageW = $stage.width(),
            $el = $('.owl-item'),
            elW = 0;
        $el.each(function () {
            elW += $(this).width() + +($(this).css("margin-right").slice(0, -2))
        });
        if (elW > stageW) {
            $stage.width(elW);
        };
    }

    $('.product-carousel').owlCarousel({
        // items: 4,
        margin: 30,
        nav: true,
        dots: false,
        autoWidth: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        onInitialized: fixOwl,
        onRefreshed: fixOwl,
    });

    $('.single-product-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return `<a><img class="img-fluid" src=${thumb} /></a>`;
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.is_megamenu').on('mouseenter', function () {
        $('.mega-menu').addClass('mega-menu-show');
    });

    $(".is_megamenu").click(function () {
        $('.mega-menu').toggleClass('mega-menu-show');
    });
    $(document).click(function () {
        $('.mega-menu').removeClass('mega-menu-show');
    });




    function getVariantFromOptions() {

        let variantArr = []
        console.log('hit', variantArr);
        $(".product-category select").map(function (i, el) {
            let variant = { value: $(el).val(), index: $(el).data('index') };
            variantArr.push(variant);
        });
        return variantArr;
    }

    function updateHistoryState(variant) {

        if (!history.replaceState || !variant) {
            return;
        }
        var newurl = window.location.protocol +
            '//' +
            window.location.host +
            window.location.pathname +
            '?variant=' +
            variant.id;

        window.history.replaceState({ path: newurl }, '', newurl);
    }
    $('.product-category select').on('change', function () {

        var selectedValues = getVariantFromOptions();
        var variants = window.product.variants;

        var found = _.find(variants, function (variant) {
            return selectedValues.every(function (values) {
                return _.isEqual(variant[values.index], values.value);
            });
        });
        updateHistoryState(found)
        $('#variant-id').val(found.id)
    });


    $(".card-header").click(function () {
        var id = this.id;
        $(".card-header").removeClass("activestate");
        $("#" + id).addClass("activestate");

    });

    $('#main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        arrows: true
    });
    
    var video = $('#main-slider .slick-active').find('iframe').get(0).play();
  
    $('#main-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('#main-slider .slick-slide').find('video').get(0).pause();
      var video = $('#main-slider .slick-active').find('video').get(0).play();
  });


});
