$(function() {
//scroll-slide
const $animation_elements = $('.animation-element');
const $window = $(window);

function check_if_in_view() {
  const window_height = $window.height();
  const window_top_position = $window.scrollTop();
  const window_bottom_position = (window_top_position + window_height);
  $.each($animation_elements, function() {
    const $element = $(this);
    const element_height = $element.outerHeight();
    const element_top_position = $element.offset().top;
    const element_bottom_position = (element_top_position + element_height);
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

//Close side-menu on click
$(document).keydown( function(evt) {
  if (evt.keyCode === 27) {
    $('#burger-btn').prop( "checked", false );
  }
});
  




//Gallery

$(".gallery").lightGallery({
  actualSize: false,
  download: false
}); 

//Menu
$('.nav-menu__item').click(function(){
  $('#burger-btn').prop( "checked", false );
});

//Smooth-scroll
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    } 
  });
});


})

