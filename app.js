class Clock {
	constructor(canvasElement) {
		this.canvas = canvasElement;
		this.context = this.canvas.getContext('2d');
		this.width = this.canvas.width;

		this.delta = [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 1, 0, 0]];
	}

	drawElem(pos, index) {

		let width = this.width / 10;
		let height = this.width / 60;
		let x = pos * width + height * pos;
		let y = (this.delta[index][1]) * height;
		this.context.fillRect(x, y, width, height);

		console.log(width, height, x, y, this.delta[1][1])
	}

	draw() {
		for (let i = 0; i < 4; i++) {
			this.drawElem(i, i);
		}
	}
}

class App {
	constructor() {
		this.canvas = document.querySelector('.canvas');
		this.clock = new Clock(this.canvas);
	}

	draw() {
		this.clock.draw();
	}

	render() {

	}
}

window.onload = () => {
	let app = new App();
	app.render();
	app.draw();
}