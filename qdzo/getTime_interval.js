function getTime() {
	var current = new Date(),
		h = current.getHours(),
		m = current.getMinutes(),
		s = current.getSeconds();

	alert(h+":"+m+":"+s);
}

function show() {
	interval = setInterval(getTime, 10000);
}

show();