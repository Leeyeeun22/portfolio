// 변수
var menu = $('#menu-btn');
var navbar = $('#header .flex .nav');
var mbbtn = $('.mb_menu_btn');
var mbnav = $('.mb_nav');
var widthSize = $(window).width();
var slideLeft = 0;

// TOP 버튼
$(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 250) {
        $('#topBtn').fadeIn();
      } else {
        $('#topBtn').fadeOut();
      }
    });
  
    $("#topBtn").click(function() {
      $('html, body').animate({
        scrollTop : 0
      }, 200);
      return false;
    });
  });


// 모바일 메인메뉴 클릭시 서브메뉴 보임
mbbtn.on('click',function(){
    $('.mb_subDown').toggleClass('active');
});

// 토글버튼 클릭 시 각 클래스 추가
menu.on('click',function(){
    menu.toggleClass('fa-times');
    mbnav.toggleClass('active');
});

// 서브메뉴 마우스 over, out
$('.mainmenu li').mouseover(function(){
    if(widthSize < 768){
        $('#header').stop();
    }else{
        $('#header').stop().animate({height:44+'rem'},500);
    }
});

$('.mainmenu li').mouseout(function(){
    if(widthSize < 768){
        $('#header').stop();
    }else{
        $('#header').stop().animate({height:10+'rem'},500);

    }
});

// 이미지 슬라이드 함수
function slide(){
    var currentimg = $('.slide_box').innerWidth();
    var widthSize = $(window).width();

    if(widthSize >= 1023){ // window창이 1023보다 크면
        $('.slide_wrap').stop().animate({
            left: currentimg-(currentimg+120)+'rem'
        },1300,function(){
            $('.slide_box').eq(0).appendTo('.slide_wrap');
            $('.slide_wrap').css({
                left:0
            });
        });
    } else if(widthSize < 1023 && widthSize >= 820){ // window창이 1023보다 작고 820보다 크면
        $('.slide_wrap').stop().animate({
            left: currentimg-(currentimg+80)+'rem'
        },1300,function(){
            $('.slide_box').eq(0).appendTo('.slide_wrap');
            $('.slide_wrap').css({
                left:0
            });
        });
    } else if(widthSize < 820 && widthSize >= 768){ // window창이 820보다 작으면
        $('.slide_wrap').stop().animate({              
            left: currentimg-(currentimg+70)+'rem'
        },1300,function(){
            $('.slide_box').eq(0).appendTo('.slide_wrap');
            $('.slide_wrap').css({
                left:0
            });
        });
    } else if(widthSize < 768 && widthSize >= 500){ 
        $('.slide_wrap').stop().animate({              
            left: currentimg-(currentimg+50)+'rem'
        },1300,function(){
            $('.slide_box').eq(0).appendTo('.slide_wrap');
            $('.slide_wrap').css({
                left:0
            });
        });
    } else if(widthSize <= 480){  // 모바일
        console.log("ddd");
        $('.slide_wrap').stop().animate({              
            left: currentimg-(currentimg+43)+'rem'
        },1300,function(){
            $('.slide_box').eq(0).appendTo('.slide_wrap');
            $('.slide_wrap').css({
                left:0
            });
        });
    }
}

// 3초마다 slide 함수 실행
$(window).on("load",function(){
    setInterval(slide,3000);
})

// BestMenu 버튼
$('.next').click(nextbtn);
$('.prev').click(prebtn);

// 다음 버튼 함수
function nextbtn(){
    slideLeft -= 20;
    $('.menulist').css({marginLeft:slideLeft+"rem"});
    if(slideLeft <= -150){
        slideLeft = -150;
    }
    $('.next').css({backgroundColor:"#ccc"});
    $('.prev').css({backgroundColor:"#eee"});
}

// 이전 버튼 함수
function prebtn(){
    slideLeft += 20;
    $('.menulist').css({marginLeft:slideLeft+"rem"});
    if(slideLeft >= 0){
        $('.menulist').css({marginLeft:0});
        slideLeft = 0;
    }
    $('.prev').css({backgroundColor:"#ccc"});
    $('.next').css({backgroundColor:"#eee"});
}