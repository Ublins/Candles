const menuBtn =document.querySelector('.menu__btn');
const menuMobile =document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=>{
    menuMobile.classList.toggle('menu--open')
})

const swiperOne = new Swiper('.feedback__slider', {

    loop: false,
    pagination: {
        el: '.swiper-pagination',
    },  
});

const swiperTwo = new Swiper('.sertificate__slider', {

    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },  
});