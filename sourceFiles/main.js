$(document).ready(function() {
  $('section[data-type="background"]').each(function() {
    var bgobj = $(this);

    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      // Put together our final background position
      var coords = '50% ' + yPos + 'px';

      // Move the background
      $bgobj.css({backgroundPosition: coords});
    });
  });

});

// Create HTML5 elements for IE
document.createElement("article");
document.createElement("section");
