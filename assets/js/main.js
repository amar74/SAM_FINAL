$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navigation-area").removeClass("sticky");
        } else{
            $(".navigation-area").addClass("sticky");
        }
    });
    
    
    //===== Mobile Menu
    
    if (matchMedia('only screen and (max-width: 991px)').matches) {
        $('.header-nav').addClass('mobile-menu')
    }
        
    /*Variables*/
    var $offCanvasNav = $('.mobile-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.closest('li').siblings('li').removeClass('active');
                $this.siblings('ul').slideDown();
            }
        }
    });
    
    
    $('.mobile-toggle a').on('click', function(event) {
        $('.header-nav').addClass('open');
    });
    
    $('.mobile-close a').on('click', function(event) {
        $('.header-nav').removeClass('open');
    });
        
    
    //====== Magnific Popup
    
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });    
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    //===== slick Client
    
    $('.client-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        slidesToShow: 7,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 7,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    });
    
    
    //===== slick Client
    
    $('.delivery-active').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    
    
    //===== slick Client
    
    $('.pricing-active').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                  slidesToScroll: 1,
              }
            }
        ]
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top, .back-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //===== 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});