let menu = document.querySelector('#menu-btn');
let mbnav = document.querySelector('.mb_nav');
let mbbtn = document.querySelector('#mb_menu-btn');

menu.onclick = ()=>{
    // menu.classList.toggle('fa-times');
    mbnav.classList.toggle('on');
}

mbbtn.onclick = () => {
    mbnav.classList.toggle('on');
}
