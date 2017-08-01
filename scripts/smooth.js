/** Smooth Function - Makes transition smoother  **/
$(document).ready(function(){
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
});
