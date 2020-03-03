var elem = document.documentElement;
var date = new Date();
var button

function startClocks() {
	button = document.getElementById("button")

	var options = {
		weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'

	}

	document.getElementById("date").innerHTML =
		date.toLocaleDateString('en-GB', options);


	updateClock();
}

function updateClock() {
	date = new Date();
	var hh = date.getHours();
	var mm = date.getMinutes();
	var ss = date.getSeconds();

	hh = appendZeroes(hh);
	mm = appendZeroes(mm);
	ss = appendZeroes(ss);

	document.getElementById("clock").innerHTML =
		hh + ":" + mm + ":" + ss;

	setTimeout(updateClock, 500)
}

function appendZeroes(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function fullscreen() {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	}
}

document.addEventListener('fullscreenchange', (event) => {
	button = document.getElementById("button")
	if (document.fullscreenElement) {
		button.style.display = 'none';
	} else {
		button.style.display = 'block';
	}
});
