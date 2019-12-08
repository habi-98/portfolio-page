$(document).ready(function() {
	$("#link-bottom").click(function() {
		$("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
	})
})
