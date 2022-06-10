// 변수
var menu = $('#menu-btn');
var navbar = $('#header .flex .nav');
var mbbtn = $('.mb_menu_btn');
var mbnav = $('.mb_nav');
var widthSize = $(window).width();
var slideLeft = 0;

// TOP 버튼
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 200);
        return false;
    });
});


// 모바일 메인메뉴 클릭시 서브메뉴 보임
mbbtn.on('click', function () {
    $('.mb_subDown').toggleClass('active');
});

// 토글버튼 클릭 시 각 클래스 추가
menu.on('click', function () {
    menu.toggleClass('fa-times');
    mbnav.toggleClass('active');
});

// 서브메뉴 마우스 over, out
$('.mainmenu li').mouseover(function () {
    if (widthSize < 768) {
        $('#header').stop();
    } else {
        $('#header').stop().animate({ height: 44 + 'rem' }, 500);
    }
});

$('.mainmenu li').mouseout(function () {
    if (widthSize < 768) {
        $('#header').stop();
    } else {
        $('#header').stop().animate({ height: 10 + 'rem' }, 500);

    }
});

// swiper 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// BestMenu 버튼
$('.next').click(nextbtn);
$('.prev').click(prebtn);

// 다음 버튼 함수
function nextbtn() {
    slideLeft -= 20;
    $('.menulist').css({ marginLeft: slideLeft + "rem" });
    if (slideLeft <= -150) {
        slideLeft = -150;
    }
    $('.next').css({ backgroundColor: "#ccc" });
    $('.prev').css({ backgroundColor: "#eee" });
}

// 이전 버튼 함수
function prebtn() {
    slideLeft += 20;
    $('.menulist').css({ marginLeft: slideLeft + "rem" });
    if (slideLeft >= 0) {
        $('.menulist').css({ marginLeft: 0 });
        slideLeft = 0;
    }
    $('.prev').css({ backgroundColor: "#ccc" });
    $('.next').css({ backgroundColor: "#eee" });
}