$(document).on("click",".listpage .lookmore",function(){
	$(this).parent(".li").parent("li").addClass("active");
})
$(document).on("click",".listpage .shouqi",function(){
	$(this).parent(".xiala").parents("li").removeClass("active");
})


