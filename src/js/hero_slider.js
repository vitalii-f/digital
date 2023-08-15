const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function(number){
        if (number < 10) {
            return `0${number}`
        }
        return number
      },
      formatFractionTotal: function(number){
        if (number < 10) {
            return `0${number}`
        }
        return number
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });