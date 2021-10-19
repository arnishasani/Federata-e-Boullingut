"use strict";
/*
 Theme Name: Bowling - Bootstrap HTML template
 Author: Jyostna
 Author URI: http://themeforest.net/user/jyostna
 Version: 1.0

 -------------------------------------------- */
/*
 TABLE OF CONTENT
 -------------------------------------------------
 1- Preloader Section
 2- BacktoTop Section
 2- Accordion Section
 3- Toggles Section
 4- Pricing Section
 5- Select2
 6- Icheck
 7- Blog Page
 8- Blog Gallery
 9- Blog Single
 10- Homepage
 11- AboutUs
 12- ClubRules
 13- Gallery Page
 14-Header
 15- Google Maps
 16- Revolution slider
 ---------------------------------------------------
 */
/*=================Preloader Section============*/
var windowWidth = $(window).width();
$(window).on('load', function () {
    $('.preloader').fadeOut();
    return false;

    //========equal height=================//


    $(".active1").click();
});

/*===================================*/
/*=================Backtotop Section===================*/
var back_top = $('.back-to-top');
$(window).on('scroll', function () {
    if ($(this).scrollTop() >= 50) {
        back_top.fadeIn(200);
    } else {
        back_top.fadeOut(200);
    }
});
$(document).ready(function () {

    back_top.on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });


// =========================toggles==========================//

    var panel3 = $(".panel3");
    panel3.find(".panel-body").show();
    panel3.find("i").removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
    $(document).on('click', '.panel-heading .clickable', function () {
        var $this = $(this);
        if (!$this.hasClass('panel-collapsed')) {
            $this.parents('.panel').find('.panel-body').slideUp();
            $this.addClass('panel-collapsed');
            $this.find('i').removeClass("fa-angle-up").addClass("fa-angle-down");
        } else {
            $this.parents('.panel').find('.panel-body').slideDown();
            $this.removeClass('panel-collapsed');
            $this.find('i').removeClass("fa-angle-up").addClass("fa-angle-down");
        }
    });
// ================================================================

//====================pricing section======================//

    var pricing = $('.pricing_bg');
    pricing.on('mouseenter', function () {
        $(this).addClass('pricing_change');
        $(this).find('h3, p').addClass('text-white');
        $(this).find('.pricing_color').addClass('text-default');
        $(this).find('half').addClass('bg-default');


    });

    pricing.on('mouseleave', function () {
        $(this).removeClass('pricing_change');
        $(this).find("h3, p").removeClass('text-white');

    });

//select2

    if ($.fn.select2 !== undefined) {
        $('.select1, .select2,.membership_select').select2({
            placeholder: "Select here"

        });
    }
//iCheck
    if ($.fn.iCheck !== undefined) {
        $('input[type="checkbox"], .radio1, .radio2').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-grey'
        });

        $('.radio3').iCheck({
            radioClass: 'iradio_minimal-blue'
        });

        $(".radio_style").iCheck({
            radioClass: 'iradio_flat-blue'
        });
    }
//=====================blog page==============================//


    $(".blog_hover ").each(function () {
        $(this).addClass("blog_hover ");
    });
    $("a").on("click ", function () {
        $(this).closest(".pagination ").find(".active ").each(function () {
            $(this).removeClass("active ");
        });
        $(this).addClass("active ");
    });
    new WOW().init();
//====================blog hover ======================//


    if (windowWidth > 1196) {
        $(".blog_link").on('mouseenter mouseleave', function () {
            $(this).closest(".media").find(".blog_text").toggleClass("displaytext");
        });

        $(".blog_img_hover").on('mouseenter mouseleave', function () {
            $(this).closest(".media").find('.blog_text').toggleClass("displaytext");
            $(this).closest(".media").find('.blog_link').toggleClass('clr');
        });
        $(".blog_text").on('mouseenter mouseleave', function () {
            $(this).toggleClass("displaytext");
            $(this).closest(".media").find('.blog_link').toggleClass('text_clr');
        });
    }
//=====================blog gallery=========================//


    var swiper1 = new Swiper('.gallery_swiper', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2000,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    $.jribbble.setToken('8cd64145242bedb4b45c11a4d3949d76c48e5138e123010bb81a79929f0b1472');

    $.jribbble.shots('debuts', {
        'per_page': 6,
        'timeframe': 'month',
        'sort': 'views'
    }).then(function (res) {
        var html = [];
        res.forEach(function (shot) {
            html.push('<li class="shots--shot">');
            html.push('<a href="' + shot.html_url + '" target="_blank">');
            html.push('<img src="' + shot.images.normal + '">');
            html.push('</a></li>');
        });

        $('.shots').html(html.join(''));
    });


//=================blog single page======================//

    var swiper2 = new Swiper('.blogsingle_swipercontainer', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2000,
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetweenSlides: 20
            },
            600: {
                slidesPerView: 1,
                spaceBetweenSlides: 20
            }

        }
    });


//==============homepage==============================//
    var swiper4 = new Swiper('.home_swiper', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        autoplay: 2000,
        nextButton: '.home_swiper_next',
        prevButton: '.home_swiper_prev',
        breakpoints: {
            600: {
                slidesPerView: 1

            },
            800: {
                slidesPerView: 2
            },
            1023: {
                slidesPerView: 3
            },
            1300: {
                slidesPerView: 4
            }

        }
    });
    $(".home_swiperbtn").on('mouseenter mouseleave', function () {
        $(this).toggleClass("swiper-button-white swiper-button-black");
    });


    var swiper20 = new Swiper('.home1_swiper', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2000,
        nextButton: '.home_rightarrow',
        prevButton: '.home_leftarrow'
    });


    $.jribbble.setToken('8cd64145242bedb4b45c11a4d3949d76c48e5138e123010bb81a79929f0b1472');
    $.jribbble.shots('debuts', {
        'per_page': 6,
        'timeframe': 'month',
        'sort': 'views'
    }).then(function (res) {
        var html = [];
        res.forEach(function (shot) {
            html.push('<li class="shots1--shot1">');
            html.push('<a href="' + shot.html_url + '" target="_blank">');
            html.push('<img src="' + shot.images.normal + '">');
            html.push('</a></li>');
        });

        $('.shots1').html(html.join(''));
    });

    $('#subscribe').on('submit', function () {
        if (!valid_email_address($("#email").val())) {
            swal({
                type: 'error',
                html: 'Please Enter Valid Email Address'
            })
        }
        else {
            $.ajax({
                url: 'subscribe.php',
                data: $('#email').serialize(),
                type: 'POST',
                success: function (msg) {
                    swal({
                        type: 'success',
                        html: 'You have Successfully Subscribed'
                    });
                }
            });
        }

        return false;
    });

    function valid_email_address(email) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(email);
    }

//================== About Us page ====================== //

    var swiper6 = new Swiper('.aboutus_swiper', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
        $(this).parent(".panel").find(".panel-heading").css('color', '#3E50B4');
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
        $(this).parent(".panel").find(".panel-heading").css('color', '#393838');
    });

//================= Club Rules Page ======================= //

    var swiper8 = new Swiper('.club_swiper', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    var swiper7 = new Swiper('.swiper-testimonial', {
        nextButton: '.test_next_button',
        prevButton: '.test_prev_button'
    });

    $('.test_revert_button,.test_forward_button').on('click', function () {
        $(this).attr('disabled', 'true');
    });

//====================== gallery page ======================//

    if ($.fn.isotope !== undefined) {
        var $container = $('#posts').isotope({
            itemSelector: '.item',
            isFitWidth: true
        });

        $container.isotope({
            filter: '*'
        });
        $('#filters').on('click', '.filter', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
        });
    }
    var iso_extra = $('.iso_extra');
    iso_extra.on('mouseenter', function () {
        $(this).find(".gallery_hover").css("display", "block");

    });


    iso_extra.on('mouseleave', function () {
        $(this).find('.gallery_hover').css("display", "none");

    });

    if (typeof lightbox == 'function') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        });
    }

//===============header=========================//

    if (windowWidth > 768) {

        $(".dropdown-toggle").on('mouseenter', function () {
            $(this).click();
        });
        $(".header_li").on('mouseenter', function () {
            $(".dropdown").removeClass("open");
        });
        $("header").on('mouseleave', function () {
            $(".dropdown").removeClass("open");
        });
        var dropdownSelectors = $('.dropdown, .dropup');


        dropdownSelectors.on({
            "show.bs.dropdown": function () {
                // On show, start in effect
                var dropdown = dropdownEffectData(this);
                dropdownEffectStart(dropdown, dropdown.effectIn);
            },
            "shown.bs.dropdown": function () {
                // On shown, remove in effect once complete
                var dropdown = dropdownEffectData(this);
                if (dropdown.effectIn && dropdown.effectOut) {
                    dropdownEffectEnd(dropdown, function () {
                    });
                }
            },
            "hide.bs.dropdown": function (e) {
                // On hide, start out effect
                var dropdown = dropdownEffectData(this);
                if (dropdown.effectOut) {
                    e.preventDefault();
                    dropdownEffectStart(dropdown, dropdown.effectOut);
                    dropdownEffectEnd(dropdown, function () {
                        dropdown.dropdown.removeClass('open');
                    });
                }
            }
        });

        $('.dropdown').on('click', function () {
            $('.new_menu').toggle(100);
        });
    }
    function dropdownEffectData(target) {

        var effectInDefault = null,
            effectOutDefault = null;
        var dropdown = $(target),
            dropdownMenu = $('.dropdown-menu', target);
        var parentUl = dropdown.parents('ul.nav');
        if (parentUl.size() > 0) {
            effectInDefault = parentUl.data('dropdown-in') || null;
            effectOutDefault = parentUl.data('dropdown-out') || null;
        }

        return {
            target: target,
            dropdown: dropdown,
            dropdownMenu: dropdownMenu,
            effectIn: dropdownMenu.data('dropdown-in') || effectInDefault,
            effectOut: dropdownMenu.data('dropdown-out') || effectOutDefault
        };
    }

    function dropdownEffectStart(data, effectToStart) {
        if (effectToStart) {
            data.dropdown.addClass('dropdown-animating');
            data.dropdownMenu.addClass('animated');
            data.dropdownMenu.addClass(effectToStart);
        }
    }

    function dropdownEffectEnd(data, callbackFunc) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        data.dropdown.one(animationEnd, function () {
            data.dropdown.removeClass('dropdown-animating');
            data.dropdownMenu.removeClass('animated');
            data.dropdownMenu.removeClass(data.effectIn);
            data.dropdownMenu.removeClass(data.effectOut);

            if (typeof callbackFunc == 'function') {
                callbackFunc();
            }
        });
    }

    /*==================Google Maps Section=============================*/
    if ($.fn.gmap3 !== undefined) {
        $("#test").gmap3({
            map: {
                options: {
                    center: [40.3140, -74.5089],
                    zoom: 6
                }
            },
            marker: {
                values: [{
                    address: "Spring Haven Trail,New Jersey",
                    options: {
                        icon: "images/location-pin.png"
                    }
                }]
            }
        });
    }
    if ($.fn.gmap3 !== undefined) {
        $("#test1").gmap3({
            map: {
                options: {
                    center: [40.3140, -74.5089],
                    zoom: 6
                }
            },
            marker: {
                values: [{
                    address: "Spring Haven Trail,New Jersey",
                    options: {
                        icon: "images/location-pin.png"
                    }
                }]
            }
        });
    }

    /*=====================Revolution Slider======================*/

    if (typeof revslider_showDoubleJqueryError == 'function') {
        $(".tp-banner-slider").revolution({
            dottedOverlay: "none",
            delay: 4000,
            startwidth: 1170,
            startheight: 550,
            hideThumbs: 200,
            hideTimerBar: "on",
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,

            navigationType: "bullet",
            navigationArrows: "none",
            navigationStyle: "preview2",

            touchenabled: "on",
            onHoverStop: "on",

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,

            parallax: "mouse",
            parallaxBgFreeze: "on",
            parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

            keyboardNavigation: "on",

            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,

            shadow: 0,
            fullWidth: "off",
            fullScreen: "off",

            spinner: "spinner4",

            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,

            shuffle: "on",

            autoHeight: "on",
            forceFullWidth: "on",


            hideThumbsOnMobile: "off",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "off",
            hideArrowsOnMobile: "off",
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            fullScreenOffsetContainer: ".header"
        });
    }

});
$(window).on('load', function () {
    if (windowWidth > 1199) {

        $('.equal-height').each(function () {


            var highestBox = 0;

            $('.column', this).each(function () {

                if ($(this).height() > highestBox) {
                    highestBox = $(this).height();
                }

            });
            $('.column', this).height(highestBox);

        });
    }
});