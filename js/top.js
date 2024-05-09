jQuery(document).ready(function ($) {
  // slider top
  $(".data__sliders").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
  });

  $("#testimonials .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplayHoverPause: false,
    smartSpeed: 200,
  });

  // gallery
  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options for a specific gallery
  });
});
