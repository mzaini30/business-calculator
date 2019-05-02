$(".navbar-brand").click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 700)
})

$(".navbar-nav a").click(function(){
	$('.navbar-toggle').click()
})

// $('.table-bordered tr td:nth-child(1)').css({
// 	'background': 'green'
// })

total = 0
// jumlah_baris = 1

if (localStorage.getItem('kalkulator')){
	$('.table-bordered').html(localStorage.getItem('kalkulator'))
}

simpan = function(){
	localStorage.setItem('kalkulator', $('.table-bordered').html())
}

// simpan_baris = function(){
// 	localStorage.setItem('baris kalkulator', jumlah_baris)
// }

$('.banyaknya').on('keyup', function(){
	jumlah_baris = $('.table-bordered tr').length
	if (parseInt($(this).val()) > jumlah_baris){
		tambah_baris = parseInt($(this).val()) - jumlah_baris
		for (x = 1; x <= tambah_baris; x++){
			$('.table-bordered').append('<tr><td><input type="tel" class="form-control"></td><td><input type="tel" class="form-control"></td><td><input type="tel" class="form-control" disabled=""></td></tr>')
		}
	}
	simpan()
	// if (jumlah_baris != parseInt(localStorage.getItem('baris kalkulator'))){
	// 	location.reload()
	// 	simpan_baris()
	// }
	// location.reload()
})

$('.table-bordered input').on('keyup', function(){
	total = 0

	// tambah baris baru

	// if ($('.terakhir').val() != ''){
	// 	$(this).removeClass('terakhir')
	// 	$(this).parent().parent().parent().append('<tr><td><input type="tel" class="form-control terakhir"></td><td><input type="tel" class="form-control"></td><td><input type="tel" class="form-control" disabled=""></td></tr>')
	// 	$('.terakhir').css({
	// 		'color': 'red'
	// 	})
	// 	// jumlah_baris++
	// 	// console.log(jumlah_baris)
	// }

	// 1 + 1 = 2

	$('.table-bordered tr').each(function(){
		satu = $(this).find('td:nth-child(1) .form-control').val()
		dua = $(this).find('td:nth-child(2) .form-control').val()
		tiga = parseInt(satu) * parseInt(dua)
		$(this).find('td:nth-child(3) .form-control').val(tiga)
		// $(this).find('td:nth-child(1)').css({
		// 	'background': 'green'
		// })
	})

	// jumlah semuanya

	$('.table-bordered tr td:nth-child(3) .form-control').each(function(){
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
	simpan()
})