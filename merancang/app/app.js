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

total = 0

$('input').on('keyup', function(){
	total = 0

	// tambah baris baru

	if (parseInt($('.table tr:last-child td:nth-child(1) .form-control').val()) > 0){
		$(this).css({
			'color': 'green'
		})
		$(this).parent().parent().parent().append('<tr><td><input type="tel" class="form-control"></td><td><input type="tel" class="form-control"></td><td><input type="tel" class="form-control" disabled=""></td></tr>')
	}

	// 1 + 1 = 2

	$('.table tr').each(function(){
		satu = $(this).find('td:nth-child(1) .form-control').val()
		dua = $(this).find('td:nth-child(2) .form-control').val()
		tiga = parseInt(satu) * parseInt(dua)
		$(this).find('td:nth-child(3) .form-control').val(tiga)
		// $(this).find('td:nth-child(1)').css({
		// 	'background': 'green'
		// })
	})

	// jumlah semuanya

	$('.table tr td:nth-child(3) .form-control').each(function(){
		if (parseInt($(this).val()) >= 0){
			total += parseInt($(this).val())
		}
		// console.log(total)
	})
	$('.hasil').val(total)

	var cleave = new Cleave('.hasil', {
	    numeral: true,
	    numeralThousandsGroupStyle: 'thousand'
	});
})