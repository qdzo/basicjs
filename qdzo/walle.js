/*function Robot(name) {
	var x = 0, 
		y = 1,
		color;
	this.walkRight = function() {
		x++;
	}

	this.walkDown = function() {
		y++;
	}

	this.getX = function() {
		return x;
	}
	this.getY = function() {
		return y;
	}

	this.name = name;
	this.color = "grey";
	return this;
}

var wally = new Robot('wall-e'),
	eve = new Robot('Eve');

	wally.walkRight();
	wally.walkRight();
	wally.walkRight();
	wally.walkDown();

	alert(wally.color);
	alert(eve.color);
	*/

var current = new Date();
alert(current.getHours()+":"+current.getMinutes()+" "+current.getDay()+"."+current.getMonth()+"."+current.getFullYear()+" года");
