$(window).on('load', function(){

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var elementoTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':elementoTop});

		return false;
	})
})