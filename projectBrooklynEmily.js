
$(document).ready(function() {

//**************************************************************************************************************
// Part 1 ::  Change the product image paths from their current version to an alternate version.
//**************************************************************************************************************


// update src and srcset attributes
  $(function(){
    $('.zoom-wrapper img').each(function(){

    	// set variables 
    	var $src = $(this).attr('src'); 
      var $set = $(this).attr('srcset');
      var $newSrc = $src.replace(/_background/g, '_silo');
      var $newSet = $set.replace(/_background/g, '_silo');

      // check to see if the img src has _background in it.
      if ($src.indexOf("_background") >= 0) {
	      // replace exisiting sources 
		    $(this).prop('src', $newSrc);
		    $(this).prop('srcset', $newSet);
		  } else {
		  	console.log("the image is already the background version")
		  }
    })
  })




//**************************************************************************************************************
// Part 2 ::  Add 60px of top margin to each image when the viewport is wider than 768px.
//**************************************************************************************************************


	// set the media query in a variable
	var mediaQuery768 = window.matchMedia('(min-width: 768px)');

	  // Add an event listener
	  mediaQuery768.addListener(changeMargin);

	  // Function to change margin-top based on media query
	  function changeMargin(mediaQuery768) {    
	    if (mediaQuery768.matches) {
	      $('.zoom-wrapper img').css({'margin-top' : '60px'});
	    } else {
	      $('.zoom-wrapper img').css({'margin-top' : '0px'});
	    }
	  }

	changeMargin(mediaQuery768);


});