//on click listener for side tabs, must have specific class
$('body').on('click', 'a.project-item', function() {
    clearActives();
    activate('#'+this.id);
    window.scrollTo(0, 0);
});


function clearActives()
{
  $('#project-collection').children('a').each(function () {
    $(this).removeClass("light-blue");
    $(this).removeClass("darken-3");
    $(this).removeClass("white-text");
    $(this).addClass("light-blue-text");
  });
}

function activate(name)
{
  $(name).addClass("light-blue");
  $(name).addClass("darken-3");
  $(name).addClass("white-text");

  //strip the # fom the id
  var fileName = '/projects/' + name.substr(1, name.length-1) + '.html';
  $('#project-display-container').load(fileName);
}