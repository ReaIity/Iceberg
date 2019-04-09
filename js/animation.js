$(document).ready(function(){
	var slides = $(".slides").children(".slide");
	var height = $(".slide").height(),
	i = slides.length,
	offset = i * height,
	ch = i-1;

	$(".wrapper .slides").css("height",offset);
	for(j = 0; j < i; j++){
		if(j == 0) {
			$(".wrapper .navigation").append("<div class='dot active'></div>");
		} else {
			$(".wrapper .navigation").append("<div class='dot'></div>");
		}
	}

	var dots = $(".wrapper .navigation").children(".dot");
	offset = 0;
	i = 0;

	$(".wrapper .navigation .dot").click(function(){
		$(".wrapper .navigation .active").removeClass("active");
		$(this).addClass("active");
		i = $(this).index();
		offset = i * height;
		$(".wrapper .slides").css("transform","translate3d(0px, -"+offset+"px, 0px)");
	});

	$("body .wrapper .next").click(function(){
		if(offset < height * ch) {
			offset += height;
			$(".wrapper .slides").css("transform","translate3d(0px, -"+offset+"px, 0px)");
			$(".wrapper .navigation .active").removeClass("active");
			$(dots[++i]).addClass("active");
		}
	});

	$("body .wrapper .prev").click(function(){
		if (offset > 0) {
			offset -= height;
			$(".wrapper .slides").css("transform","translate3d(0px, -"+offset+"px, 0px)");
			$(".wrapper .navigation .active").removeClass("active");
			$(dots[--i]).addClass("active");
		}
	});
});