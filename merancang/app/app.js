$(".navbar-brand").click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 700)
})

$(".navbar-nav a").click(function(){
	$('.navbar-toggle').click()
})

$('.input tr td:nth-child(1)').css({
	'background': 'green'
})