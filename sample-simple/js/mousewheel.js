let pfImg = document.querySelector('.PFimg');
let pfGroup = document.querySelector('.PFSlideGroup');
let marginlt = 400;

// 향수 가로 마우스 휠

pfGroup.addEventListener('mousewheel', function (e) {

    if (window.innerWidth >= 1023) { // window 창 크기가 992보다 크면 실행
        if (e.wheelDelta > 0 && marginlt < 750) {
            marginlt += 20;
            pfImg.style.marginLeft = marginlt + 'px';
        }
        else if (e.wheelDelta < 0 && marginlt > -10) {
            marginlt -= 20;
            pfImg.style.marginLeft = marginlt + 'px';
        }
        e.preventDefault(); // 스크롤 제한
    }
    else if (window.innerWidth <= 1023) { // 창 크기가 992보다 작으면 margin 0
        pfImg.style.marginLeft = "0px";
    }

});


// 창 크기 바뀌면 원래 위치 고정
window.onresize = () => {
    if (window.innerWidth <= 1023) {
        pfImg.style.marginLeft = "0px";
    } else {
        marginlt = 400; // 초기화
        pfImg.style.marginLeft = marginlt + 'px';
    }
}