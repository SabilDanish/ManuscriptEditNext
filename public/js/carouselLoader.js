console.log(window);
$(".brand_list").owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 4000,
      autoplayTimeout: 1500,
      dots: true,
      nav: false,
      navText: [
        "<i class='fa fa-long-arrow-left''></i>",
        "<i class='fa fa-long-arrow-right''></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 5,
        },
        1000: {
          items: 5,
        },
        1920: {
          items: 5,
        },
      },
    });