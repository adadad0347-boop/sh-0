$(window).on('load', function () {
  var $products = $('.all-products').isotope({
    itemSelector: '.product',
    layoutMode: 'fitRows',
    originLeft: false
  });
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $products.isotope({ filter: filterValue });
    $(this).addClass('active').siblings().removeClass('active');
  });
  if ($('.swiper').length > 0) {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 6, spaceBetween: 15 },
      },
    });
  }
});

const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});
