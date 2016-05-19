$( document ).ready(function() {
  $('#doorlock')[0].click();
});

function showImage(img)
{
  $("#" + img.id).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
}

$('#project-collection').click(function(){
  window.scrollTo(0, 0);
});
//On click listeners for project items
$('#doorlock').click(function(){
  removeActives();
  setAsActive('#doorlock');
});
$('#mips').click(function(){
  removeActives();
  setAsActive('#mips');
});
$('#shazam').click(function(){
  removeActives();
  setAsActive('#shazam');
});
$('#colorlens').click(function(){
  removeActives();
  setAsActive('#colorlens');
});
$('#yourpisd').click(function(){
  removeActives();
  setAsActive('#yourpisd');
})

function removeActives()
{
  $('#project-collection').children('a').each(function () {
    $(this).removeClass("light-blue");
    $(this).removeClass("darken-3");
    $(this).removeClass("white-text");
    $(this).addClass("light-blue-text");
  });
}

function setAsActive(name)
{
  $(name).addClass("light-blue");
  $(name).addClass("darken-3");
  $(name).addClass("white-text");

  //strip the # fom the id
  var fileName = name.substr(1, name.length-1) + '.html';
  //$('#project-display-container').load('test.html');
}