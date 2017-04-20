
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

$('#reservation').daterangepicker(null, function(start, end, label) {
	console.log(start.toISOString(), end.toISOString(), label);
});