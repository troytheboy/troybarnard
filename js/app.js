console.log("sup");
function shake(s) {
  $('#'+s).addClass('animated pulse');
  setTimeout(function(){ $('#'+s).removeClass('animated pulse')}, 1000);
  ;
}

function show(s) {
  console.log("#"+s+'_info');
  $('html,body').animate({
        scrollTop: $("#"+s+'_info').offset().top},'slow');
  $('#'+s+'_title').addClass('animated tada');
  setTimeout(function(){ $('#'+s+'_title').removeClass('animated tada')}, 1000);
}
