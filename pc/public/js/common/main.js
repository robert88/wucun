;
(function () {

	$(".J-more").click(function () {
		var $this = $(this);
		$this.parent().find("dl").toggle();
	});
	$(".J-slide-close").click(function () {
		$(".slideNav").css("left","-320px")
	});

	$(".J-menuBtn").click(function () {
		$(".slideNav").css("left","0px")
	});

})();



