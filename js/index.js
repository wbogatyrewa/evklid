
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

  document.querySelectorAll('.tabs__button').forEach(function(tabsButton) {
    tabsButton.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    })
  })

  //Аккордион
  $(function () {
    $("#accordion").accordion({
      collapsible:true,
      active: false,
      heightStyle: "content"
    });

  });
});