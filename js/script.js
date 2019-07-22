$(document).ready(function(){
	$('.feedback-slider').slick({
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  infinite: true,
	  dots: true,
	  prevArrow: '<i class="fa feedback-slider-arrows arrow-left fa-chevron-left"></i>',
	  nextArrow: '<i class="fa feedback-slider-arrows arrow-right fa-chevron-right"></i>',
      responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
	});
	$('.photo').mouseenter(function(){
        $('.skills').show();
    });

	var $nav = $('.main-nav-bar');
	$nav.click(function(){
		$('.overlay-nav').show();
	})

	$('.close-nav').click(function(){
		('.overlay-nav').hide();
	})

	$('.submit-form').click(function(){
		if($('#username').val() !== '') {
			$('#main-form-ajax').submit(function() {
				$.ajax({
					type: "POST",
					url: "smart.php",
					data: $(this).serialize()
				}).done(function() {
					$(this).find("input").val("");
					$("#modal-thanks").modal('show');
					$("#main-form-ajax").trigger("reset");
				});
				return false;
			});
		} 
		else {
			alert('Вы не заполнили ИМЯ');
		}
	})
});
