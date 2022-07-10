window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#header__burger').addEventListener('click', function() {
      document.querySelector('#header__nav_mobile').classList.add('is-active');
  });

  document.querySelector('#header__burger-close').addEventListener('click', function() {
    document.querySelector('#header__nav_mobile').classList.remove('is-active');
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
    
    autoplay: {
      delay: 5000,
    }
  });
});