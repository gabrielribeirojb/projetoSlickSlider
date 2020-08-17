$(window).on('load',function(){

	$('.mosaico .center .mosaico-wraper').slick({
		arrows:false,
		centerMode:true,
		slidesToShow:6,
		responsive:[

		{
			breakpoint:768,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:3
			}
		},

		{
			breakpoint:580,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:2
			}
		},

		{
			breakpoint:480,
			settings:{
				centerMode:true,
				arrows:false,
				slidesToShow:1
			}
		}

		]
	});

	$('.tratamentos .center').slick({
		arrows:false,
		centerMode:false,
		slidesToShow:3,
		infinite:false,
		responsive:[

		{
			breakpoint:768,
			settings:{
				arrows:false,
				infinite:false,
				centerMode:false,
				dots:true,
				slidesToShow:2
			}
		},

		{
			breakpoint:480,
			settings:{
				arrows:false,
				centerMode:false,
				infinite:false,
				dots:true,
				slidesToShow:1
			}
		}

		]
	});


	$('.depoimentos .center').slick({
		slidesToShow:1,
		centerMode:false,
		arrows:false,
		dots:true,
		infinite:false
	})
})