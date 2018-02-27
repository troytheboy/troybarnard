function pixar(id, animation) {
  $('#'+id).addClass('animated'+' '+animation);
  setTimeout(function(){ $('#'+id).removeClass('animated'+' '+animation)}, 1000)
}

function show(s) {
  $('html,body').animate({
        scrollTop: $("#"+s+'_info').offset().top},'slow')
}

function fadeHeader() {
  console.log('hide', $('.welcome'))
  $("div.welcome").hide()
}

fadeHeader()
