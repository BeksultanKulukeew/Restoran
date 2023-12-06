const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl:'.arrow-next',
        prevEl: '.arrow-prev',
    },
});