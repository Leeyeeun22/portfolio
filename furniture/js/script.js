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
    
function prev_btn(){
    $('.new_container').css({marginLeft:0}); 
}

function next_btn(){
 
    $('.new_container').css({marginLeft:con_wt+"px"});

}