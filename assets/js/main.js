jQuery(document).ready(function ($) {
  $(".team-slider").owlCarousel({
    items: 4,
    slideMove: 1,
    margin: 25,
    dots: false,
    nav: true,
    loop: true,
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1, // Mobile
      },
      576: {
        items: 2, // Tablet
      },
      992: {
        items: 4, // Laptop
      },
    },
  });

  $(".portfolio-sliders").owlCarousel({
    items: 6,
    slideMove: 1,
    dots: false,
    nav: true,
    loop: true,
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      992: {
        items: 6,
      },
      768: {
        items: 2,
      },
      0: {
        items: 1,
      },
    },
  });

  $("a.menu-trigger").on("click", function (event) {
    $(".mobile-menu").addClass("active");
    event.stopPropagation(); // Prevents the event from bubbling up to the document
    return false;
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".mobile-menu, .menu-trigger").length) {
      $(".mobile-menu").removeClass("active");
    }
  });

  $(".mobile-menu").on("click", function (event) {
    event.stopPropagation(); // Prevents the event from bubbling up to the document
  });

  $("a.scroll-down").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });

  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});
