$('.dropdown-toggle').dropdown()

$('#recipeCarousel').carousel({
 		 interval: 2000
		})
		$('.carousel .carousel-item').each(function(){
	    var minPerSlide = 3;
	    var next = $(this).next();
	    if (!next.length) {
	    next = $(this).siblings(':first');
	    }
	    next.children(':first-child').clone().appendTo($(this));
	    
	    for (var i=0;i<minPerSlide;i++) {
	        next=next.next();
	        if (!next.length) {
	        	next = $(this).siblings(':first');
	      	}
	        
	        next.children(':first-child').clone().appendTo($(this));
	      }
	});		


//Input fields in contact form
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const message = document.getElementById('description');
//form

const form = document.getElementById('myform')

//Validation colors
const green = '#4caf50';
const red = '#f44336';
