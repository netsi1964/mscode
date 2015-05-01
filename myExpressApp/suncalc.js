/*global $, localStorage, angular, alert, document, console, confirm, require */
/*jshint unused:false */
/*jshint plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */

// https://www.npmjs.com/package/suncalc
// https://www.npmjs.com/package/geolib
var SunCalc = require('suncalc');
var now = new Date();
var grenaavej793h = {
	"latitude": 56.2807040,
	"longitude": 10.3202970
};
var augustenborg = {
	"latitude": 54.9503800,
	"longitude": 9.8768710
};

var location = augustenborg;
var months = ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"];

var shortestDay = SunCalc.getTimes(new Date(now.getFullYear() - 1, 11, 21), location.latitude, location.longitude);

function getSecondsInADay(times) {
	var up = times.sunrise.getHours() * 60 * 60 + times.sunrise.getMinutes() * 60 + times.sunrise.getSeconds();
	var down = times.sunset.getHours() * 60 * 60 + times.sunset.getMinutes() * 60 + times.sunset.getSeconds();
	return down - up;
}

function hms(sec) {
	var hms = {};
	var hours = Math.floor(sec / 3600);
	sec -= hours * 3600;
	var minutes = Math.floor(sec / 60);
	sec -= minutes * 60;
	hms.hours = hours;
	hms.minutes = minutes;
	hms.seconds = sec;
	return hms;
}

function hmsFriendly(hms) {
	var s = "";
	var hours = (hms.hours > 0) ? hms.hours + " time" + ((hms.hours > 1) ? "r" : "") : "";
	var minutes = (hms.minutes > 0) ? ((s !== "") ? " og " : "") + hms.minutes + " minut" + ((hms.minutes > 1) ? "er" : "") : "";
	var seconds = (hms.seconds > 0) ? ((s !== "") ? " og " : "") + hms.seconds + " sekund" + ((hms.seconds > 1) ? "er" : "") : "";
	s = hours;
	s += (minutes !== "") ? ((s !== "") ? ((seconds !== "") ? ", " : " og ") : "") + minutes : "";
	s += ((seconds !== "") ? " og " + seconds : "");
	return s;
}

shortestDay.duration = getSecondsInADay(shortestDay);
now = new Date();
var sun = [];
var step = 7;
var fb = "| Dato        | Dagen er tiltaget  |\n|:------------- |:-------------|\n";
for (var d = 0; d < 31; d += step) {
	var today = SunCalc.getTimes(now, location.latitude, location.longitude);
	today.duration = getSecondsInADay(today);
	var diff = today.duration - shortestDay.duration;
	var day = {
		"day": now.getDate() + ". " + months[now.getMonth()],
		"diff": diff,
		"friendly": hmsFriendly(hms(Math.abs(diff)))
	};
	fb += "| "+day.day + " | " + day.friendly + " |\n";
	sun.push(day);
	now.setDate(now.getDate() + step);
}
console.log(fb);