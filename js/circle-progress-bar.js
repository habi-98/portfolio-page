$(document).ready(function() {
	$('.circle1').circleProgress({
			value: 0.80,
			size: 130,
			fill: {
			gradient: ["#3aeabb", "#3aeabb"]
		}
	}).on('circle-animation-progress', function(event, progress) {
			$(this).find('span').html(Math.round(80 * progress) + '<i>%</i>');
	});

	 $('.circle2').circleProgress({
			value: 0.75,
			size: 130,
			fill: {
			gradient: ["#3aeabb", "#3aeabb"]
		}
	}).on('circle-animation-progress', function(event, progress) {
			$(this).find('span').html(Math.round(75 * progress) + '<i>%</i>');
	});

	$('.circle3').circleProgress({
			value: 0.60,
			size: 130,
			fill: {
			gradient: ["#3aeabb", "#3aeabb"]
		}
	}).on('circle-animation-progress', function(event, progress) {
			$(this).find('span').html(Math.round(60 * progress) + '<i>%</i>');
	});
	$('.circle4').circleProgress({
			value: 0.50,
			size: 130,
			fill: {
			gradient: ["#3aeabb", "#3aeabb"]
		}
	}).on('circle-animation-progress', function(event, progress) {
			$(this).find('span').html(Math.round(50 * progress) + '<i>%</i>');
	});
	$('.circle5').circleProgress({
			value: 0.50,
			size: 130,
			fill: {
			gradient: ["#3aeabb", "#3aeabb"]
		}
	}).on('circle-animation-progress', function(event, progress) {
			$(this).find('span').html(Math.round(50 * progress) + '<i>%</i>');
	});
})