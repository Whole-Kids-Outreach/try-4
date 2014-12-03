$(function()
{	//Accordion script starts here.
	$( "#content" ).accordion({fillspace: false, collapsible: true, active:false});
	
	$('.myMenu > li').bind('mouseover', openSubMenu);
		$('.myMenu > li').bind('mouseout', closeSubMenu);
		
		function openSubMenu() {
			$(this).find('ul').css('visibility', 'visible');	
		};
		
		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');	
		};
	// Accordion script ends here.
	
	//Image carousel script starts here.
	$('#play').click(function() { $('#slider').cycle('resume'); return false; });
		
		$('#pause').click(function() { $('#slider').cycle('pause'); return false; });

	$('#slider').cycle({
		
		fx:			'scrollHorz',
		next:		'#next',
		prev:		'#prev',
		pager:		'#pager',
		timeout:	5000,
		speed:		900
		
	});
	//Image carousel script ends here.
	//test men starts here


	//test men  ends
});


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
