
		$(document).ready(function () {
		    $('.accordion-toggle').on('click', function(event){
		    	event.preventDefault();
		    	// create accordion variables
		    	var accordion = $(this);
		    	var accordionContent = accordion.next('.accordion-content');
		    	// toggle accordion content
		    	accordionContent.slideToggle(250);
		    });

		    $('.accordion-toggle').click(function() {
		    	$('div.left_bottom').toggleClass('shift');
		    });
		// });
		//  $(function() {
		    // $( "#dialog" ).dialog({
		    //   autoOpen: false,
		    //   show: {
		    //     effect: "blind",
		    //     duration: 1000
		    //   },
		    //   hide: {
		    //     effect: "explode",
		    //     duration: 1000
		    //   }
		    // });
		 
		    // $( "#show" ).click(function() {
		    //   $( "#dialog" ).dialog( "open" );
		    // });
		  });
