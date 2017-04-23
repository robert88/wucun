// <div class="daterange-popup">
// 	<div class="daterange-popup-wrap">
// 	<div class="year">
// 	<span class="year-prev">&lt;</span>
// 	<span class="year-value">2017</span>
// 	<span class="year-next">&gt;</span>
// 	<i class="icon-close daterange-close"></i>
// 	</div>
// 	<div class="date-item-wrap">
// 	<div class="date-item">
// 	<div class="month">
// 	<span class="month-prev">&lt;</span>
// 	<span class="month-value">04</span>
// 	</div>
//
// 	<div class="week">
// 	<table>
// 	<thead>
// 	<tr>
// 	<th>日</th>
// 	<th>一</th>
// 	<th>二</th>
// 	<th>三</th>
// 	<th>四</th>
// 	<th>五</th>
// 	<th>六</th>
// 	</tr>
// 	</thead>
// 	</table>
// 	</div>
// 	<div class="day">
// 	<table>
// 	<tbody>
// 	<tr>
// 	<td class="disabled"><span class="value-wrap">1</span></td>
// 	<td class="active"><span class="value-wrap">1</span></td>
// 	<td class="selected"><span class="value-wrap">1</span></td>
// 	<td class="start-day selected"><span class="value-wrap">1</span></td>
// 	<td class="end-day selected"><span class="value-wrap">1</span></td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	</tr>
// 	<tr>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	</tr>
// 	<tr>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	</tr>
// 	<tr>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	</tr>
// 	<tr>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	</tr>
// 	</tbody>
// 	</table>
// 	</div>
// 	</div>
// 	<div class="date-item">
// 	<div class="month">
// 	<span class="month-value">05</span>
// 	<span class="month-next">&gt;</span>
// 	</div>
// 	<div class="week">
// 	<table>
// 	<thead>
// 	<tr>
// 	<th>日</th>
// 	<th>一</th>
// 	<th>二</th>
// 	<th>三</th>
// 	<th>四</th>
// 	<th>五</th>
// 	<th>六</th>
// 	</tr>
// 	</thead>
// 	</table>
// 	</div>
// 	<div class="day">
// 	<table>
// 	<tbody>
// 	<tr>
// 	<td class="disabled">1</td>
// 	<td class="active">1</td>
// 	<td class="selected">1</td>
// 	<td class="start-day selected">1</td>
// 	<td class="end-day selected">1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	</tr>
// 	<tr>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	</tr>
// 	<tr>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	</tr>
// 	<tr>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	</tr>
// 	<tr>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	<td>1</td>
// 	</tr>
// 	</tbody>
// 	</table>
// 	</div>
// 	</div>
// 	</div>
// 	</div>
// 	</div>
;(function () {

	if ($.fn.daterange) {
		console.warn("$.fn.daterange 存在");
		return;
	}


	var popupTempl = [
		'<div class="daterange-popup-wrap">',
		'<div class="year">',
		'<span class="year-prev">&lt;</span><span class="year-value">{0}</span><span class="year-next">&gt;</span>',
		'<i class="icon-close popup-close"></i>',
		'</div>',
		'<div class="date-item-wrap">',
		'<div class="date-item">',
		'<div class="month col"><span class="month-prev">&lt;</span><span class="month-value" style="float:right">{1}月</span></div>',
		'<div class="week"><table><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead></table></div>',
		'<div class="day"><table><tbody>{2}</tbody></table></div>',
		'</div>',
		'<div class="date-item">',
		'<div class="month col"><span class="month-value" style="float:left">{3}月</span><span class="month-next">&gt;</span></div>',
		'<div class="week"><table><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead></table></div>',
		'<div class="day"><table><tbody>{4}</tbody></table></div>',
		'</div>',
		'</div>',
		'</div>'].join("");

	var tdTempl = '<td data-date="{1}"><span class="value-wrap">{0}</span></td>';
	var tdDisabledTempl = '<td class="disabled" data-date="{1}"><span class="value-wrap">{0}</span></td>';
	var tdSelectedTempl = '<td class="selected" data-date="{1}"><span class="value-wrap">{0}</span></td>';
	var tdStartDayTempl = '<td class="selected start-day " data-date="{1}"><span class="value-wrap">{0}</span></td>';
	var tdEndDayTempl = '<td class="selected end-day " data-date="{1}"><span class="value-wrap">{0}</span></td>';

	function getTd2(curTime, curDate, startDate, endDate, j) {
		var isInRange = startDate && endDate && inRange(curDate, startDate, endDate);
		var str = "";
		if (isInRange) {
			if (isInRange == 1) {
				str = tdStartDayTempl.tpl(j, setDate(curTime, j).format("yy-MM-dd"));
			} else if (isInRange == 2) {
				str = tdEndDayTempl.tpl(j, setDate(curTime, j).format("yy-MM-dd"));
			} else {
				str = tdSelectedTempl.tpl(j, setDate(curTime, j).format("yy-MM-dd"));
			}
		} else {
			str = tdTempl.tpl(j, setDate(curTime, j).format("yy-MM-dd"));
		}
		return str
	}

	function setDate(curTime, day) {
		var newDate = new Date(curTime)
		newDate.setDate(day);
		return newDate;
	}

	function getTd(curDate, startDate, endDate, enableStartDate, enableEndDate) {

		var curTime = curDate.getTime();
		var nexMonth = new Date(curTime);
		nexMonth.setMonth(curDate.getMonth() + 1);
		var nextMonthTime = nexMonth.getTime();
		var firstWeek = setDate(curTime, 1).getDay();
		var lastDay = setDate(nextMonthTime, 0).getDate();
		var str = "";

		for (var i = 0, j = 1; i < 6; i++) {
			str += "<tr>";
			for (var k = 0; k < 7; k++) {
				if (k < firstWeek && i == 0 || j > lastDay) {
					str += tdDisabledTempl.tpl("&nbsp;", "");
				} else {
					if (enableStartDate) {
						if (inRange(setDate(curTime, j), enableStartDate, enableEndDate)) {
							var enableStartDay = (enableStartDate && enableStartDate.getMonth() == curDate.getMonth()) ? enableStartDate.getDate() : 1;
							var enableEndDay = (enableEndDate && enableEndDate.getMonth() == curDate.getMonth()) ? enableEndDate.getDate() : lastDay;
							if (j < enableStartDay || j > enableEndDay) {
								str += tdDisabledTempl.tpl(j, setDate(curTime, j).format("yy-MM-dd"));
							} else {
								str += getTd2(curTime, curDate, startDate, endDate, j);
							}
						} else {
							str += tdDisabledTempl.tpl(j, setDate(curTime, j).format("yy-MM-dd"));
						}
					} else {
						str += getTd2(curTime, curDate, startDate, endDate, j);
					}
					j++;
				}
			}
			str += "</tr>";
		}
		return str;
	}

	function inRange(curDate, startDate, endDate) {
		var oneDay = 1000 * 60 * 60 * 24
		var cur = Math.ceil(curDate.getTime() / oneDay);
		var prev = startDate ? Math.ceil(startDate.getTime() / oneDay) : 0;
		var next = endDate ? Math.ceil(endDate.getTime() / oneDay) : Infinity;
		return (cur >= prev && cur <= next) ? (cur == prev ? 1 : (cur == next ? 2 : 3)) : 0;
	}

	function initEvents($target, opt) {
		var $popup = $target.find(".daterange-popup")
		$popup.on("click", ".popup-close", function () {
			$popup.hide()
		});
		var double = 0;
		$popup.on("click", ".year-prev", function () {
			opt.curDate.setYear(opt.curDate.getFullYear()+1);
			$popup.html(initTable(opt.curDate, opt));
		});
		$popup.on("click", ".year-next", function () {
			opt.curDate.setYear(opt.curDate.getFullYear()-1);
			$popup.html(initTable(opt.curDate, opt));
		});
		$popup.on("click", ".month-prev", function () {
			opt.curDate.setMonth(opt.curDate.getMonth()-1);
			$popup.html(initTable(opt.curDate, opt));
		});
		$popup.on("click", ".month-next", function () {
			opt.curDate.setMonth(opt.curDate.getMonth()+1);
			$popup.html(initTable(opt.curDate, opt));
		});
		$popup.on("click", "td", function () {
			if ($(this).hasClass("disabled")) {
				return
			}
			double++;
			if (double == 2) {
				double = 0
			}

			var isVal = $target.find(".value").val;
			var date = $(this).data("date");

			if (opt.type == "singleDate") {
				$target.find("td").removeClass("selected").removeClass("active").removeClass("start-day").removeClass("end-day");
				$(this).addClass("selected active").data("date");
				$target.find(".value")[isVal ? "val" : "html"](date.toDate().format("yy-MM-dd"))
			} else {
				if ($target.find("td.active").length >= 2) {
					$target.find("td").removeClass("selected").removeClass("active").removeClass("start-day").removeClass("end-day");
				}
				$(this).addClass("selected active").data("date");

				if ($target.find("td.active").length == 2) {
					var firstActive = $target.find("td.active").eq(0);
					var secondActive = $target.find("td.active").eq(1);
					firstActive.addClass("start-day");
					secondActive.addClass("end-day");
					var firstIndex;
					var secondIndex = $target.find("td").length;
					$target.find(".value")[isVal ? "val" : "html"](firstActive.data("date").toDate().format("yy-MM-dd") + "~" + secondActive.data("date").toDate().format("yy-MM-dd"))
					$target.find("td").each(function (idx) {
						if ($(this).hasClass("active")) {
							if (typeof firstIndex == "undefined") {
								firstIndex = idx;
							} else {
								secondIndex = idx;
							}
						}
						if (idx >= firstIndex && idx <= secondIndex) {
							$(this).addClass("selected");
						}
					})
				} else {
					$target.find(".value")[isVal ? "val" : "html"](date.toDate().format("yy-MM-dd"))
				}
			}

		});
	}

	function initTable(curDate, opts) {
		opts.curDate = curDate;
		var curYear = curDate.getFullYear();
		var curMonth = curDate.getMonth() + 1;
		var curMonthDayTable = getTd(curDate, opts.startDate, opts.endDate, opts.enableStartDate, opts.enableEndDate);
		//变成下个月
		var nextDate = new Date(curDate.getTime());
		nextDate.setMonth(curMonth);
		var nextMonth = nextDate.getMonth() + 1;
		var nextMonthDayTable = getTd(nextDate, opts.startDate, opts.endDate, opts.enableStartDate, opts.enableEndDate);
		return popupTempl.tpl(curYear, curMonth, curMonthDayTable, nextMonth, nextMonthDayTable)
	}

	function DateRange($target, opts) {
		$target.on("click", ".trigger", function () {
			if ($target.find(".daterange-popup").length == 0) {
				$('<div class="daterange-popup"></div>').append(initTable(new Date(), opts)).appendTo($target);
				initEvents($target, opts)
			} else {
				$target.find(".daterange-popup").toggle();
			}
		});
	}

	$.fn.daterange = function (opts) {
		return this.each(function () {
			DateRange($(this), $.extend({}, opts))
		})
	}
})();

