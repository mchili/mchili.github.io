/** typeIt - JQuery Animated Typing Plugin **/
$(document).ready(function(){
$('#ghost').typeIt({
     strings: ["websites", "email templates", "website manuals", "style guides", "wireframes", "logos"],
     speed: 250,
     breakLines: false,
     autoStart: false,
     loop: true,
     loopDelay: 500,
     deleteDelay: 4500,
});
});
