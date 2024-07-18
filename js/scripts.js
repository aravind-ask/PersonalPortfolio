/* Description: Custom JS file */

  // const form = document.getElementById("myForm");
  // const emailInput = document.getElementById("email");
  // const submitBtn = document.getElementById("submitBtn");

  // form.addEventListener("submit", function(event) {
  //   if (!emailInput.checkValidity()) {
  //     // If email is invalid, prevent form submission
  //     event.preventDefault();
  //     alert("Invalid email address. Please enter a valid email.");
  //   } else {
  //     // Email is valid; form will be submitted
  //     alert("Email is valid. Form submitted!");
  //   }
  // });

  var form = document.getElementById("contactForm")
  

  form.addEventListener("submit", function(event) {
    var email = document.getElementById("cemail").value;
    var phone = document.getElementById("cphone").value;
    
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneregex = /^\d{10}$/;
    if(!validRegex.test(email)){
      event.preventDefault();
      alert("Email not valid!!");
    }else if(!phoneregex.test(phone)){
      event.preventDefault();
      alert("Phone number should contain only 10 digits");
    }else{
      alert("Message Sent!!");
    }
    form.classList.add('was-validated')
  });


// function phoneValidate() {
//   var email = document.getElementById("cemail").value;
//   var phone = document.getElementById("cphone").value;
  
//   var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   var phoneregex = /^\d{10}$/;

//   if(!validRegex.test(email)){
//     alert("Email not vlaid!!");
//     return false;
//   }else if(!phone.match(phoneregex)){
//     alert("Phone number should contain only 10 digits");
//     return false;
//   }else{
//     alert("Message Sent!!");
//     return true;
//   }
// }

(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);