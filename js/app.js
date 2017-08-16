function pixar(id, animation) {
  $('#'+id).addClass('animated'+' '+animation);
  setTimeout(function(){ $('#'+id).removeClass('animated'+' '+animation)}, 1000);
}

function show(s) {
  $('html,body').animate({
        scrollTop: $("#"+s+'_info').offset().top},'slow');
  $('#'+s+'_title').addClass('animated tada');
  setTimeout(function(){ $('#'+s+'_title').removeClass('animated tada')}, 1000);
}
