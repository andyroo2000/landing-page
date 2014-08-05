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


// Google Analytics Tracking Code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-5343133-1', 'auto');
ga('send', 'pageview');