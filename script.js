const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 100;

const drawCircle = () => {
	if (x > 600) {
		x = 100;
	} else {
		x += 3;
	}

	ctx.beginPath();
	ctx.arc(x,450,40,0,2*Math.PI);
	ctx.stroke();
}

const oncePerFrame = () => {
	ctx.clearRect(0, 0, 1600, 900);
	drawCircle();
}

setInterval(oncePerFrame, 1000 / 60);
