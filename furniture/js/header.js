// 변수
let header = document.getElementById('header');
let navbtn = document.getElementById('mb_menu-btn');
let navbar = document.querySelector('#header .flex .nav');
let navbar_txt = document.querySelector('#header .flex .nav ul');
let logo_txt = document.querySelector('#header .flex .logo a');
let mb_menu = document.querySelector('.mb_menu');

// 스크롤 다운 시 header 색상 변경 
window.onscroll = () => {
    let scrollState = window.scrollY || document.documentElement.scrollTop;
    if (scrollState > 1) {
        header.style.backgroundColor = "white";
        header.style.boxShadow = "var(--box-shadow)";
        navbar_txt.classList.add('active');
        logo_txt.style.color = "black";
        
    }
    else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        navbar_txt.classList.remove('active');
        logo_txt.style.color = "white";

        }
    
}

// 메뉴 버튼 클릭 시 navbar down 
function mb_btn_on(){
    mb_menu.classList.toggle('active');
}

// 버튼 클릭시 모바일 메뉴 창닫기
function mb_btn(){
    mb_menu.classList.remove('active');
}

