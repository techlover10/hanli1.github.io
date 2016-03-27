$( document ).ready(function() {
  $(".button-collapse").sideNav();
  loadSideBarDynamically();
  loadAboutMe();
});
// $('#aboutme-anchor').scrollfire({
//     // Offsets
//     offset: 50,
//     topOffset: 50,
//     bottomOffset: 50,
//     // Fires once when element completely comes into view from the top
//     onTopIn: function( elm, distance_scrolled ){
//       console.log("ab comes in from top");
//       removeActives(); loadAboutMe();
//     },
//     // Fires once when element completely comes into view from the bottom
//     onBottomVisible: function( elm ) {
//       console.log("ab comes in from bottom");
//       removeActives(); loadAboutMe();
//     }
// });
// $('#education-anchor').scrollfire({

//     // Offsets
//     offset: 50,
//     topOffset: 50,
//     bottomOffset: 50,
//     // Fires once when element completely comes into view from the top
//     onTopIn: function( elm, distance_scrolled ){
//       console.log("education comes in from top");
//       removeActives(); loadEducation();
//     },
//     // Fires once when element completely comes into view from the bottom
//     onBottomIn: function( elm, distance_scrolled ) {
//       console.log("education comes in from bottom");
//       removeActives(); loadEducation();
//     }
// });
// $('#experience-anchor').scrollfire({

//     // Offsets
//     offset: 50,
//     topOffset: 50,
//     bottomOffset: 50,
//     // Fires once when element completely comes into view from the top
//     onTopIn: function( elm, distance_scrolled ){
//       console.log("experience comes in from top");
//       removeActives(); loadExperience()
//     },
//     // Fires once when element completely comes into view from the bottom
//     onBottomVisible: function( elm ) {
//       console.log("experience comes in from bottom");
//       removeActives(); loadExperience();
//     }
// });
// $('#contactme-anchor').scrollfire({

//     // Offsets
//     offset: 50,
//     topOffset: 50,
//     bottomOffset: 50,
//     // Fires once when element completely comes into view from the top
//     onTopIn: function( elm, distance_scrolled ){
//       console.log("contactme comes in from top");
//       removeActives(); loadContactMe();
//     },
//     // Fires once when element completely comes into view from the bottom
//     onBottomVisible: function( elm ){
//       console.log("contactme comes in from bottom");
//       removeActives(); loadContactMe();
//     }
// });
//On click listeners for tabs
$('#about_me_tab').click(function(){
  loadAboutMe();
});
$('#education_tab').click(function(){
  loadEducation();
});
$('#experience_tab').click(function(){
  loadExperience();
});
$('#contact_me_tab').click(function(){
  loadContactMe();
});

/*
  Handle sidebar clicks, instead of individual ones, it simply gets the id of the tab button
  from the sidebar item class, then sends a click to the button
  */
  $('#sidebar').on('click','li',function(e){

    $('#'+ $(this).clone().removeClass("active").attr('class')).click();
    e.preventDefault();
  });
/*generates the sidebar based on the elements in the top tabs
  removes the wave effect as sidebar has it built in
  adds a class with the id in order to keep highlighting consistant
  */
  function loadSideBarDynamically()
  {
    $('#tabs').children('li').each(function () {
      $('#sidebar').append($(this).clone().removeClass("waves-effect").addClass($(this).attr('id')));
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
  // $("#main_container").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
}
function loadAboutMe()
{
  removeActives();
  $('.about_me_tab').addClass("active");
  $('#main_container').load('about.html');
  window.scrollTo(0, 0);
}
function loadEducation()
{
  removeActives();
  $('.education_tab').addClass("active");
  $('#main_container').load('education.html');
  window.scrollTo(0, 0);
}
function loadExperience()
{
  removeActives();
  $('.experience_tab').addClass("active");
  $('#main_container').load('experience.html');
  window.scrollTo(0, 0);
}
function loadContactMe()
{
  removeActives();
  $('.contact_me_tab').addClass("active");
  $('#main_container').load('contact.html');
  window.scrollTo(0, 0);
}