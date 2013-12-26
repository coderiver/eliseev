$(document).ready(function() {

	// $(function() {
	// 	var footerHeight = $(".footer").height();
	// 	$(".out").css("margin-bottom", -footerHeight);
	// 	$(".push").css("height", footerHeight);
	// });

	// $(window).resize(function() {
	// 	var footerHeight = $(".footer").height();
	// 	$(".out").css("margin-bottom", -footerHeight);
	// 	$(".push").css("height", footerHeight);
	// });

});
function choose() {
	var number = $(".js-choose");
	number.each(function(){
		var max_number = +($(this).attr("data-max-number"));
		var input = $(this).find("input");
		var plus = $(this).find(".js-plus");
		var minus = $(this).find(".js-minus");
		plus.bind("click", function(){
			var val = +(input.val());
			if (val >= max_number) {
				return false
			}
			else {
				val += 1;
				input.val(val);
					}
				});
			minus.bind("click", function(){
			var val = +(input.val());
				if (val > 1) {
					val -= 1;
					input.val(val);
					}
				else {
					return false;
			}
		});
	});
}
choose(); 