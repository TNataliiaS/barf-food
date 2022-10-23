'use strict';
window.addEventListener('DOMContentLoaded', pageInteractive);
window.addEventListener('resize', pageInteractive);

function pageInteractive () {
    // Smooth scoll element
    // ****************
    const links = document.querySelectorAll('.site-nav__link');

    for(let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            event.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            const topOffset = document.querySelector('.header').offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    }


    // Menu Toggle
    // ****************
    const burgerToggle = document.getElementById('burger');
    const siteNavShow = document.getElementById('site-nav');
    const bodyDisableScroll = document.querySelector('body');

    burgerToggle.addEventListener('click', () => {
        burgerToggle.classList.toggle('burger--active');
        siteNavShow.classList.toggle('site-nav--show');
        bodyDisableScroll.classList.toggle('no-scroll');
    });

    document.querySelectorAll('.site-nav__link').forEach(e => e.addEventListener('click', () => {
        burgerToggle.classList.remove('burger--active');
        siteNavShow.classList.remove('site-nav--show');
        bodyDisableScroll.classList.remove('no-scroll');
    }));


    // Fixed header on scroll
    // ****************
    const firstEl = document.getElementById('intro');
    const header = document.getElementById('header');
    const headerHeight = header.offsetHeight;
    const firstElHeight = firstEl.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= firstElHeight - headerHeight) {
            header.classList.add('header--fixed');
        } else {
            header.classList.remove('header--fixed');
        }
    });


    // Info Slider (swiper js https://swiperjs.com/ )
    // ****************
    const infoSlider = new Swiper('.info-slider', {
        pagination: {
            el: '.info-slider__pagination',
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },

            768: {
                slidesPerView: 2,
            },
        },
        autoHeight: true,
        slidesPerView: 2,
    });


    // Sets/Rations Slider (swiper js https://swiperjs.com/ )
    // ****************
    const swiper = new Swiper('.swiper--primary', {
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoHeight: true,
        spaceBetween: 24,
        slidesPerView: 'auto',
    });


    // Norms Slider (swiper js https://swiperjs.com/ )
    // ****************
    const normsSlider = new Swiper('.norms__slider-swiper', {
        pagination: {
            el: '.norms__slider-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                pagination: {
                    el: '.norms__slider-pagination-mobile',
                    clickable: true,
                    renderBullet: function (index, className) {
                        let labels = ['Для взрослых', 'Для щенков'];
                        return '<div class="' + className + '">' + (labels[index]) + '</div>';
                    }
                },
            },

            376: {
                slidesPerView: 2,
                slidesPerColumn: 2,
            },

            576: {
                slidesPerView: 'auto',
            },
        },
        slidesPerView: 2,
    });


    // Accordion faq
    // ****************
    const accItems = document.querySelectorAll('.faq__item');

    accItems.forEach((acc) => acc.addEventListener('click',
        function toggleAcc() {
            accItems.forEach((item) => item != this ? item.classList.remove('faq__item--active') : null);

            if(this.classList != 'faq__item--active') {
                this.classList.toggle('faq__item--active');
            }
        }
    ));
}
