$(function(){
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
      $('.tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();
});


var con_wt = -1 * $('.new_container').width();
var widthSize = $(window).width();

function prev_btn(){
    con_wt = 0;
    $('.new_container').css({marginLeft:con_wt+"px"}); 
}

function next_btn(){

    if(widthSize < 768 || widthSize <= 480){
        if(con_wt > -1010){
            con_wt += -130;
         }
        else if(con_wt == 0){
            con_wt += -130;
        }
    }else{
        con_wt = -1100;
    }

}