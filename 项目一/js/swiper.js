
    var swiper = new Swiper('.swiper-container', {
    direction : 'horizontal', 
    effect : 'slide',
    loop : true,
    speed:1000,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className){
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });

