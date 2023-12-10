class Clock {
    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.context = this.canvas.getContext('2d');

    }

    draw() {
        this.context.fillStyle = 'red';
        this.context.fillRect(0, 0, 100, 10);
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