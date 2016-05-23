$( document ).ready(function() {
  $(".button-collapse").sideNav();
  loadSideBarDynamically();
  $('#about')[0].click();
  //$('#projects')[0].click();
});


// tab onclick listeners
$('ul#tabs li').click(function() 
  { 
    removeActives();
    setAsActive('#'+this.id);
    window.scrollTo(0, 0);
  });

/*
  Handle sidebar clicks, instead of individual ones, it simply gets the id of the tab button
  from the sidebar item class, then sends a click to the button
  */
$('#sidebar').on('click','li',function(e){
  id = $(this).attr('id');
  $('#'+ id.substr(0, id.length - 8)).click();
  e.preventDefault();
  $('.button-collapse').sideNav('hide');
});
/*generates the sidebar based on the elements in the top tabs
removes the wave effect as sidebar has it built in
adds a class with the id in order to keep highlighting consistant
*/
function loadSideBarDynamically()
{
  $('#tabs').children('li').each(function () {
    sidebarItem = $(this).clone().removeClass("waves-effect").attr('id', $(this).attr('id') + '_sidebar');
    $('#sidebar').append(sidebarItem);
  });

}

function removeActives()
{
  $('#tabs').children('li').each(function () {
    $(this).removeClass("active");
  });
  $('#sidebar').children('li').each(function () {
    $(this).removeClass("active");
  });
}

function setAsActive(id)
{
  $(id).addClass("active");
  $(id + '_sidebar').addClass("active");
  //strip the # fom the id
  var fileName = id.substr(1, id.length-1) + '.html';
  if(fileName === 'projects.html')
  {
    $('#main_container').hide().load(fileName, function() {
      $('#doorlock')[0].click();
    }).fadeIn('200');
  }  
  else
  {
    $('#main_container').hide().load(fileName).fadeIn('200');
  }
    
}