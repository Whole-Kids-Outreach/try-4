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
