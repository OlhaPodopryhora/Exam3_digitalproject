$(document).ready(function(){
	'use strict';
		

		$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    if (scroll >= 300) {
	        $(".nav").addClass("scrolling");
	    } else {
	        $(".nav").removeClass("scrolling");
	    }
	});

		$('.slider-works').slick({
	      dots: true,
	      arrows: true,
	      slidesToShow: 1,
	      autoplay: true,
	      swipeToSlide: true,
	      infinite: true,
	      speed: 500,
	      autoplaySpeed: 5000
	  });	

		$('.slider-team').slick({
	      arrows: true,
	      nextArrow: '<button class="slick-arrow--dark slick-prev--dark"></button>',
	      prevArrow: '<button class="slick-arrow--dark slick-next--dark"></button>', 
	      slidesToShow: 3,
	      adaptiveHeight: true,
	      autoplay: true,
	      swipeToSlide: true,
	      infinite: true,
	      speed: 500,
	      autoplaySpeed: 6000,
	      responsive: [
	      {
	        breakpoint: 1024,
	        settings: {
	          slidesToShow: 2
	        }
	      },
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 1
	        }
	      }
	    ]
	  });
});


function initMap() {
	  let geo = {
	    lat: -7.963919,
	    lng: 112.589311
	  }
	  let markerPosition = {
	    lat: -7.9407512,
	    lng: 112.6055576
	  }

	  let map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 12,
	    center: geo,
	  });

	  let marker = new google.maps.Marker({
	    position: markerPosition,
	    map: map,
	    icon: 'img/marker.png',
	    title: 'Ikan Piranha Atas 220C  Malang - East Java Indonesia'
	});


  	$(".form__input--name").unbind().blur(function() {
        if ($(".form__input--name").val().length !== 0) {
          	$(".form__label--name").addClass("hide");
        } else {
         	$(".form__label--name").removeClass("hide");
        }
	});
	$(".form__input--email").unbind().blur(function() {
	  	if ($(".form__input--email").val().length !== 0) {
        	$(".form__label--email").addClass("hide");
      	} else {
        	$(".form__label--email").removeClass("hide");
    	}
	});
	$(".form__textarea").unbind().blur(function() {
	    if ($(".form__textarea").val().length !== 0) {
	        $(".form__label--textarea").addClass("hide");
	    } else {
	        $(".form__label--textarea").removeClass("hide");
	    }
	});  


	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    if (scroll >= 200) {
	        $(".nav").addClass("scrolling");
	    } else {
	        $(".nav").removeClass("scrolling");
	    }
	});
}