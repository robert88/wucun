
var vuer= new Vue({
	el:"#homeVue",
	data:{
		temperature:"",
		weather:""
	}
});


$.ajax({
	url: "http://api.map.baidu.com/telematics/v3/weather?location=桐乡&output=json&ak=H7W5CxI0BPzKtwGcBHmpGPAz50xP1Qjw",
	dataType: "jsonp",
	jsonpCallback: "admin_cross",
	success: function (data) {

		if(data && data.results && data.results[0].weather_data){
			var curweather = data.results[0].weather_data[0];
			vuer.weather =curweather.weather;
			var curtemperature = 0;
			curweather.date.replace(/\d+℃/,function (m,m1) {
				curtemperature=m;
			});
			vuer.temperature = curtemperature||curweather.temperature
		}
	}
});

require("/public/js/lib/daterangepicker.js");


var dateRange = new pickerDateRange('date_demo3', {
	aRecent7Days : 'aRecent7DaysDemo3', //最近7天
	isTodayValid : false,
	//startDate : '2013-04-14',
	//endDate : '2013-04-21',
	//needCompare : true,
	//isSingleDay : true,
	//shortOpr : true,
	defaultText : ' 至 ',
	inputTrigger : 'input_trigger_demo3',
	theme : 'ta',
	success : function(obj) {
		$("#dCon_demo3").html('开始时间 : ' + obj.startDate + '<br/>结束时间 : ' + obj.endDate);
	}
});



require("/public/js/lib/swiper.min.js");

new Swiper('.swiper-follow', {
	speed: 1000,
	// parallax: true,
	slidesPerView:3,
	// loop:true,
	spaceBetween:30,
	nextButton: '.arrow-right',
	prevButton: '.arrow-left',
	paginationClickable: true,
	pagination: ".swiper-pagination",
	onTransitionEnd: function () {
	}
});

new Swiper('.swiper-voice', {
	speed: 1000,
	// parallax: true,
	// slidesPerView:3,
	// loop:true,
	// spaceBetween:30,
	nextButton: '.arrow-right',
	prevButton: '.arrow-left',
	paginationClickable: true,
	pagination: ".swiper-pagination",
	onTransitionEnd: function () {
	}
});



// $(".arrow-left").click(function () {
// 	if(slideFlag){
// 		return false;
// 	}
// 	slideFlag = true;
// 	if(vSwiper.activeIndex<=0){
// 		vSwiper.slideTo(4);
// 	}else{
// 		vSwiper.slideTo(vSwiper.activeIndex-1);
// 	}
// 	return false;
// });
//
// $(".arrow-right").click(function () {
// 	if(slideFlag){
// 		return false;
// 	}
// 	slideFlag = true;
// 	if(vSwiper.activeIndex>=4){
// 		vSwiper.slideTo(0);
// 	}else{
// 		vSwiper.slideTo(vSwiper.activeIndex+1);
// 	}
// });

// $(".stopAutoPlay").hover(function(){
//
// },function(){
//
// });

require("/web/ZHome_map.js");
