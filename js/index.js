fadeWindowValue = 500;

$(document).ready(function() {
	$(".button-collapse").sideNav();
	loadSideBarDynamically();
	//$('#about')[0].click();
	$('#projects')[0].click();
});

//makes all elements including picture on main page load at once
// $(window).on('load', function() {
//     $("#main_container").attr("visibility", "visible");
// });

$(window).on('load', function() {
	$("#cover").fadeOut(1000);
});


// tab onclick listeners
$('ul#tabs li').click(function() 
{ 
	removeActives();
	setAsActive('#'+this.id);
	window.scrollTo(0, 0);
});

/* Handle sidebar clicks, instead of individual ones, it simply gets the id of the tab button
    from the sidebar item class, then sends a click to the button */
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

	//keep main container height before executing
	//$("#main_container").css("height",$("#main_container").height);

	//method 2
	$('#main_container').css('opacity', '0');
	$("#main_container").load(fileName, function(){
		$("#main_container").animate({ opacity: 1 }, 200);
		// $("#main_container").css("height","auto");
		// //if it is the project tab, click first to load it
		if(fileName === 'projects.html')
		{
			$('#doorlock')[0].click();
		}
	});

	//method 1
	// $('#main_container').fadeOut('fast', function(){
	// 	//when done fading out, load new html
	// 	$('#main_container').load(fileName, function(){
	// 		//when done with loading, fade it in
	// 		$('#main_container').fadeIn('main_container');
	// 		//let the size readjust
	// 		$("#main_container").css("height","auto");
	// 		//if it is the project tab, click first to load it
	// 		if(fileName === 'projects.html')
	// 		{
	// 			$('#doorlock')[0].click();
	// 		}
	// 	});
	// });
}