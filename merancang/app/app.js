$(".navbar-brand").click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 700)
})

$(".navbar-nav a").click(function(){
	$('.navbar-toggle').click()
})

// $('.table tr td:nth-child(1)').css({
// 	'background': 'green'
// })

$('input').on('keyup', function(){
	$('.table tr').each(function(){
		satu = $(this).find('td:nth-child(1) .form-control').val()
		dua = $(this).find('td:nth-child(2) .form-control').val()
		tiga = parseInt(satu) * parseInt(dua)
		$(this).find('td:nth-child(3) .form-control').val(tiga)
		// $(this).find('td:nth-child(1)').css({
		// 	'background': 'green'
		// })
	})
})