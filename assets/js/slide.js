$(document).on('ready', function() {
  $(".autoplay").slick({
    autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 2,
    dots: true
  });
});