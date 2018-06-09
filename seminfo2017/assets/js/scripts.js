jQuery(document).ready(function($) { 
   $('a[href^="#"]').on('click',function (e) {
		e.preventDefault (); var target = this.hash,
		$target = $(target); $('html, body').stop().animate ({
			'scrollTop': $target.offset().top
		}, 1000, 'swing', function () {
			window.location.hash = target;
		});
	});
   // $(".scroll").click(function(event){        
   //      event.preventDefault();
   //      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
   // });

   $(document).ready(function(){
      $('.parallax').parallax();
   });

   $('.carousel.carousel-slider').carousel({
   		fullWidth: true,
   		duration: 200,
   		indicators: true

   });
   
  
   
    

   $(".button-collapse").sideNav();
   $('.collapsible').collapsible('open', 0);

    // start up after 2sec no matter what
    window.setTimeout(function(){
        $('body').removeClass("loading").addClass('loaded');
    }, 2000);

    
});
 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    
  });
