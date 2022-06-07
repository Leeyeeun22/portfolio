// 변수
let header = document.getElementById('header');
let navbtn = document.getElementById('nav-btn');
let navbar = document.querySelector('#header .flex .nav');
let navbar_txt = document.querySelector('#header .flex .nav ul');
let logo_txt = document.querySelector('#header .flex .logo a');


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
    

    // navbtn.classList.remove('fa-times');
    // navbar.classList.remove('active');
}

// 메뉴 버튼 클릭 시 navbar down 
// navbtn.onclick = () => {
//     navbtn.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }


