
(function($){
	$(function(){

        // Phone nav click function
        $('.phone-nav').click(function () {
            $('body').toggleClass('navShown')
            setTimeout(function(){
                $('body').toggleClass('bodyScrollStop')
            },500)
        });
        
        $('.header-top-close').click(function () {
            $(".header-top").slideUp()
            $('body').addClass('header-top-hide')
        });

        //  venue carousel function 
        if($('.product-overview-slider-wrap').length){
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 3,
                spaceBetween: 25,
                loop: true,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                },
            });
        }
        //  venue-carousel function 
        if ($('.instafeed-slider-wrap').length) {
            $('.instafeed-slider-wrap').slick({
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
                infinite: true,
                navigation: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
        },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
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
        }
        
        $('.cart-trigger').click(function(e){
            e.preventDefault();
          $('body').addClass('cartShown')
        })
        $('.back-cart-btn, .cart-wrap').click(function(){
          $('body').removeClass('cartShown')
        })
        $('.main-cart-wrap').click(function(e){
          e.stopPropagation();
        })
        
                var cartTopHeight = $('.cart-top').outerHeight(),
                    windowHeight = $(window).outerHeight(),
                    windowNeedHeight = windowHeight - cartTopHeight,
                    bottomPadding = $('.cart-bottom').outerHeight();
                $('.cart-main').css({
                    'height': windowNeedHeight,
                    'padding-bottom': bottomPadding
                })
            $(window).on('resize', function () {
                var cartTopHeight = $('.cart-top').outerHeight(),
                    windowHeight = $(window).outerHeight(),
                    windowNeedHeight = windowHeight - cartTopHeight,
                    bottomPadding = $('.cart-bottom').outerHeight();
                $('.cart-main').css({
                    'height': windowNeedHeight,
                    'padding-bottom': bottomPadding
                })
            })

        
        
        if($('.newsletter-modal-wrap').length){
            setTimeout(function(){
               $('.newsletter-modal-wrap').fadeIn(); 
            }, 2500)
            $('.newsletter-modal-wrap').click(function(){
                $('.newsletter-modal-wrap').fadeOut();
            })
            $('.newsletter-main-modal').click(function(e){
                e.stopPropagation();
            })
        }
        
	})// End ready function.

})(jQuery)

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}