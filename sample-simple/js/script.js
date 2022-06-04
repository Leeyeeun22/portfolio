// 변수
let header = document.getElementById('header');
let navbtn = document.getElementById('nav-btn');
let navbar = document.querySelector('#header .flex .navbar');

// 스크롤 다운 시 header 색상 변경 
window.onscroll = () => {
    let scrollState = window.scrollY || document.documentElement.scrollTop;
    if (scrollState > 1) {
        header.style.backgroundColor = "white";
        header.style.boxShadow = "var(--box-shadow)";
    }
    else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }

    navbtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// 메뉴 버튼 클릭 시 navbar down 
navbtn.onclick = () => {
    navbtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


