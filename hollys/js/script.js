let h3txt = document.querySelector('.txt-content h3');
let ptxt =document.querySelector('.txt-content p');
let bnimg = document.querySelector('imgslide img');
let menu = document.querySelector('#menu-btn');
let mbnav = document.querySelector('.mb_nav');
let mbbtn = document.querySelector('#mb_menu-btn');

$('.mb_nav li').on('click',function(){
    $(this).find('.mb_submenu').toggleClass('on');
});


menu.onclick = ()=>{
    mbnav.classList.toggle('on');
}

mbbtn.onclick = () => {
    mbnav.classList.toggle('on');
}


document.querySelectorAll('.coffee-container .box img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');

        document.querySelector('.coffeeimg img').src = src;
       
        txtchange(src);

    };
});

function txtchange(e){
    if(e =="img/best1.png"){
        h3txt.innerHTML = "아메리카노";
        ptxt.innerHTML = "진한 에스프레소의 맛과 향을 부드럽게<br/>즐길 수 있는 아메리칸 스타일의 커피";
    }

    if(e =="img/best2.png"){
        h3txt.innerHTML = "바닐라 딜라이트";
        ptxt.innerHTML = "듀얼브루 원액으로 만들어<br/> 더욱 부드럽고 편안해진 바닐라 딜라이트";
    }

    if(e =="img/best3.png"){
        h3txt.innerHTML = "콜드브루 라떼";
        ptxt.innerHTML = "콜드브루 커피의 풍부한 풍미와<br/>우유의 고소함이 더해진 라떼";
    }

    if(e =="img/best4.png"){
        h3txt.innerHTML = "복숭아 자두 스파클링";
        ptxt.innerHTML = "세계 3대 광천수 초정리 탄산수와 복숭아,<br/>자두가 상큼달콤하게 어우러진 스파클링 음료";
    }

    if(e =="img/best5.png"){
        h3txt.innerHTML = "생딸기 주스";
        ptxt.innerHTML = "생딸기를 듬뿍 담아 딸기의 새콤달콤한<br> 맛을 느낄 수 있는 생과일주스";
    }
}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 100,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });