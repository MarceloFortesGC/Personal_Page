/******************************************
    Version: 1.0
/****************************************** */

(function($) {
    "use strict";

	
	
	  $('a.js-scroll-trigger1').click(function() {
      $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
	  });
	
	
	  $('a.js-scroll-trigger2').click(function() {
      $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
	  });
	
	
	  $('a.js-scroll-trigger3').click(function() {
      $('html,body').animate({
        scrollTop: $("#services").offset().top},
        'slow');
	  });
	
	
	  $('a.js-scroll-trigger4').click(function() {
      $('html,body').animate({
        scrollTop: $("#blog").offset().top},
        'slow');
	  });
	
	  $('a.js-scroll-trigger5').click(function() {
      $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
	  });
	
    // Closes responsive menu when a scroll trigger link is clicked
	  $('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	  });

	// Activate scrollspy to add active class to navbar items on scroll
	  $('body').scrollspy({
		target: '#mainNav',
		offset: 56
	  });

	// Collapse Navbar
	  var navbarCollapse = function() {
		if ($("#mainNav").offset().top > 100) {
		  $("#mainNav").addClass("navbar-shrink");
		} else {
		  $("#mainNav").removeClass("navbar-shrink");
		}
	  };
	// Collapse now if page is not at top
	  navbarCollapse();
	  // Collapse the navbar when page is scrolled
	  $(window).scroll(navbarCollapse);

	// Hide navbar when modals trigger
	  $('.portfolio-modal').on('show.bs.modal', function(e) {
		$(".navbar").addClass("d-none");
	  })
	  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
		$(".navbar").removeClass("d-none");
	  })

    // Scroll to top  		
	if ($('#scroll-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#scroll-to-top').addClass('show');
				} else {
					$('#scroll-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#scroll-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
	
	// Banner 
	
    $('.heading').height( $(window).height() );
	$('.parallaxie').parallaxie();
	
    // LOADER
    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

	// Gallery Filter
        var Container = $('.container');
        Container.imagesLoaded(function () {
            var portfolio = $('.gallery-menu');
            portfolio.on('click', 'button', function () {
                $(this).addClass('active').siblings().removeClass('active');
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.gallery-list').isotope({
                itemSelector: '.gallery-grid'
            });

        });
	
    // FUN FACTS   

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 50; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 30);
        }
    }
    $(".stat_count, .stat_count_download").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    // CONTACT
    jQuery(document).ready(function() {
        $('#contactform').submit(function() {
            var action = $(this).attr('action');
            $("#message").slideUp(750, function() {
                $('#message').hide();
                $('#submit')
                    .after('<img src="images/ajax-loader.gif" class="loader" />')
                    .attr('disabled', 'disabled');
                $.post(action, {
                        first_name: $('#first_name').val(),
                        last_name: $('#last_name').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        select_service: $('#select_service').val(),
                        select_price: $('#select_price').val(),
                        comments: $('#comments').val(),
                        verify: $('#verify').val()
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#contactform img.loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#contactform').slideUp('slow');
                    }
                );
            });
            return false;
        });
    });

})(jQuery);