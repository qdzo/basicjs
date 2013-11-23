function goMad() {
	var interval = setInterval(sayHi, 2000);
}

function sayHi() {
	alert('Hi!');
}

//goMad();

timeout = setTimeout(function(){
	alert('Timeout');
},0);


timeout();