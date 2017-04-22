$(document).ready(function(){
	$(".section02 .nav li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		var index = $(this).index();
		$(".section02 .list").eq(index).show().siblings(".list").hide();
	})
})
