 jQuery(document).ready(function($){
 	$(".fancybox").fancybox();
 	$(".wpcf7-tel").mask("+7 (999) 999-9999",{placeholder:" "});

 	$("form").submit(function() { //Change
 		var th = $(this);
 		$.ajax({
 			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваше сообщение успешно отправлено!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

 	$('.menu').onePageNav({
 		currentClass: 'current',
 		changeHash: false,
 		scrollSpeed: 750,
 		scrollThreshold: 0.5,
 		filter: '',
 		easing: 'swing',
 		scrollOffset: 70,
 	});

 });