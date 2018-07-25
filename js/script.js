
$(function() {
    $(window).on("load resize scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".navbar").addClass("bg");
        } else {
           $(".navbar").removeClass("bg");
        }
    });
});
 /*
	 $(document).ready(function(){
     var checkScrollBar = function(){
       $('.bg').css({
         backgroundColor: $(this).scrollTop() > 1 ?
           'rgb(21, 75, 169)' : 'transparent'
       })
     }
     $(window).on('load resize scroll', checkScrollBar)
     });
*/





// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything

  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  })