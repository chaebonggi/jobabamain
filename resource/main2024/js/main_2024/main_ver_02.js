//mainBanner
var bannerSwiper = new Swiper(".m_slider", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    preventClicks:true,
    observer: true,
    observeParents: true,
    loop:true,
    autoplay:{
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        init: function () {
            $('.m_slider .swiper-slide').addClass('changed');
        },
        slideChangeTransitionStart : function() {
            $('.m_slider .swiper-slide').addClass('changing');
            $('.m_slider .swiper-slide').removeClass('changed');
        },
        slideChangeTransitionEnd : function() {
            $('.m_slider .swiper-slide').removeClass('changing');
            $('.m_slider .swiper-slide').addClass('changed');
        }
    },
    breakpoints: {
        1300: {
            centeredSlides: false,
            slidesPerView: 'auto',
            spaceBetween: 0,
        },
        859: {
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 0,
        },
        640: {
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});

const RESIZE_DELAY = 300;
let resizeTimer = null;

function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 860) {
            const slides = document.querySelectorAll('#renewMain .mainBanner .swiper-slide');            
            slides.forEach((slide) => {
                slide.style.width = '330px';
                bannerSwiper.update();
            });            
            itemSwiper();
        } else {
            itemSwiper();
        }
    }, RESIZE_DELAY);
}

window.addEventListener('resize', handleResize);

// policy main menu btn
var menuSwiper = undefined;
function itemSwiper() {
    if (window.innerWidth  < 641 && menuSwiper == undefined) {
            menuSwiper = new Swiper(".itemSwiper", {
            slidesPerView: 'auto',
            spaceBetween: 16,
            simulateTouch: true,
        });
    } else if (window.innerWidth >= 641 && menuSwiper != undefined) {
        menuSwiper.destroy();
        menuSwiper = undefined;
    }
}
itemSwiper();
