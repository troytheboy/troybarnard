console.log("sup");
function shake(s) {
  console.log('#' + s);
  $('#'+s).addClass('animated pulse');
  setTimeout(function(){ $('#'+s).removeClass('animated pulse')}, 1000);
  ;
}

function show(s) {
  console.log(s);
  $('.info_section').hide();
  $('#'+s).show();
  $('html,body').animate({
        scrollTop: $("#"+s).offset().top},
        'slow');
}
