(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //------------ Hero slider -------------

        $('.slider_inner').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
            dot: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })

        //------------ Hero slider -------------

        $('.partner_slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,

            dot: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 4
                }
            }
        })

        var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: false,       // trigger animations on mobile devices (default is true)
				live: true,       // act on asynchronously loaded content (default is true)
				callback: function (box) {
					// the callback is fired every time an animation is started
					// the argument that is passed in is the DOM node being animated
				},
				scrollContainer: null,    // optional scroll container selector, otherwise use window,
				resetAnimation: true,     // reset animation on end (default is true)
			}
		);
		wow.init();

        //---owl dots number-----

        $('.menu-open').click(function () {

            $('body').addClass('active');

        });
        $('.menu-close, .overlay').click(function () {

            $('body').removeClass('active');

        });


        $('.slick.marquee.box_group1').slick({
            speed: 4900,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            buttons: true
          });

          $('.box_group1').hover(function(){
            $('.slick.marquee.box_group1').slick('slickPause');;
          });


          $('.slick.marquee.box_group2').slick({
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 500,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            pauseOnHover: true,
            buttons: true
          });




    }); //---document-ready-----





}(jQuery));
