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
            const slides = document.querySelectorAll('#newMain .mainBanner .swiper-slide');            
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

$('#newMain .policyWrap .checkItem .areaMore').click(function(){
    $('#newMain .policyWrap .checkItem .checkList.area').toggleClass('on');
    $(this).css('display', 'none');
});

function handleTabClick($btn, $items, tabAttr) {
    $btn.click(function() {
    var tab = $(this).attr(tabAttr);
    $btn.removeClass('active');
    $(this).addClass('active');
    $items.removeClass('active');
    $items.filter('[data-tab="' + tab + '"]').addClass('active');
    });
}
handleTabClick($('.tipWrap .tabList li'), $('.tipWrap .tabItem'), 'data-tab');
handleTabClick($('.publicWrap .tabList li'), $('.publicWrap .tabItem'), 'data-tab');
handleTabClick($('.enterWrap .tabList li'), $('.enterWrap .tabItem'), 'data-tab');
handleTabClick($('.indWrap .tabList li'), $('.indWrap .tabItem'), 'data-tab');

var tipSlide = $('#newMain .tipWrap .tabItem');
tipSlide.find('.swiper-container').each(function(i){
    var $this = $(this);
    $this.siblings().addClass("type" + i);
    var policySwiper = new Swiper($(this), {
        slidesPerView: 1.5,
        spaceBetween: 8,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            860: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,

            },
            460: {
                slidesPerView: 2.5,
                spaceBetween: 8,
            },
        },
    });
});

var policySlide = new Swiper("#newMain .policySlide .swiper-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row", 
    observer: true,
    watchOverflow: true,
    observeParents: true,
    pagination: {
        el: '#newMain .policySlide .swiper-pagination',
        type: 'bullets'
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerColumn: 2,
            slidesPerGroup: 4,
        },
        860: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerColumn: 2,
            slidesPerGroup: 3,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerColumn: 1,
            slidesPerGroup: 2,
        },
    },
}); 

var issueSlide = new Swiper("#newMain .issueSlide .swiper-container", {
    slidesPerView: 1,
    observer: true,
    watchOverflow: true,
    observeParents: true,
    pagination: {
        el: '#newMain .issueSlide .swiper-pagination',
        type: 'bullets'
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        860: {
        },
        640: {
        },
    },
}); 

var orderSlide = new Swiper("#newMain .orderSlide .swiper-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row", 
    observer: true,
    watchOverflow: true,
    observeParents: true,
    // pagination: {
    //     el: '#newMain .policySlide .swiper-pagination',
    //     type: 'bullets'
    // },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerColumn: 2,
            slidesPerGroup: 4,
        },
        860: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerColumn: 2,
            slidesPerGroup: 3,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerColumn: 1,
            slidesPerGroup: 2,
        },
    },
}); 

var publicSlide = $('#newMain .publicWrap .tabItem');
publicSlide.find('.swiper-container').each(function(i){
    var $this = $(this);
    $this.siblings().addClass("type" + i);
    var policySwiper = new Swiper($(this), {
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 2,
        slidesPerColumnFill: "row", 
        observer: true,
        watchOverflow: true,
        observeParents: true,
        // pagination: {
        //     el: '#newMain .policySlide .swiper-pagination',
        //     type: 'bullets'
        // },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerGroup: 4,
            },
            860: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerGroup: 3,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerColumn: 1,
                slidesPerGroup: 2,
            },
        },
    });
});
var enterSlide = $('#newMain .enterWrap .tabItem');
enterSlide.find('.swiper-container').each(function(i){
    var $this = $(this);
    $this.siblings().addClass("type" + i);
    var policySwiper = new Swiper($(this), {
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 2,
        slidesPerColumnFill: "row", 
        observer: true,
        watchOverflow: true,
        observeParents: true,
        // pagination: {
        //     el: '#newMain .policySlide .swiper-pagination',
        //     type: 'bullets'
        // },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerGroup: 4,
            },
            860: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerGroup: 3,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerColumn: 1,
                slidesPerGroup: 2,
            },
        },
    });
});
var indSlide = $('#newMain .indWrap .tabItem');
indSlide.find('.swiper-container').each(function(i){
    var $this = $(this);
    $this.siblings().addClass("type" + i);
    var policySwiper = new Swiper($(this), {
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 2,
        slidesPerColumnFill: "row", 
        observer: true,
        watchOverflow: true,
        observeParents: true,
        // pagination: {
        //     el: '#newMain .policySlide .swiper-pagination',
        //     type: 'bullets'
        // },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerGroup: 4,
            },
            860: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerColumn: 2,
                slidesPerGroup: 3,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerColumn: 1,
                slidesPerGroup: 2,
            },
        },
    });
});
var recruitSlide = new Swiper("#newMain .recruitSlide .swiper-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row", 
    observer: true,
    watchOverflow: true,
    observeParents: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerColumn: 2,
            slidesPerGroup: 3,
        },
        860: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerColumn: 2,
            slidesPerGroup: 3,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerColumn: 1,
            slidesPerGroup: 2,
        },
    },
}); 

$('#newMain .scrollbar-outer').scrollbar();