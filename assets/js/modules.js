---
layout: # Removing front matter in order for js to work properly
---
// This js file is responsible for hamburger menu, 
// scroll navigation, top scroll button and history back button

var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

// Open Menu
menu.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
})

// Close Menu
exit.addEventListener('click', function(e) {
    nav.classList.add('hide-mobile');
    e.preventDefault();
})


// Navigation Smooth Scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      
      nav.classList.toggle('hide-mobile');
      event.preventDefault(); // Prevent default anchor click behavior

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Back to top Button
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#top-scroll').fadeIn();
        }else{
            $('#top-scroll').fadeOut();
        }
    });
    $('#top-scroll').click(function(){
        $("html, body").animate({
            scrollTop: 0 
        }, 600, function() {

        // Remove hashes from the url bar
        window.history.pushState({}, document.title, "{{ site.baseurl }}/");
    });
        return false;
    });
});

// History back button
function goBack() {
  window.history.back();
}