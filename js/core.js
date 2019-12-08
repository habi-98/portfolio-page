$(document).ready(function() {
	$('#nav-btn').click(function(){
		$('.main-nav').slideToggle(700);
		if ($(this).hasClass('not-active')) {
			$(this).addClass('is-active').removeClass('not-active');
		}else{
			$('.is-active').addClass('not-active').removeClass('is-active');
		}
	});
});
