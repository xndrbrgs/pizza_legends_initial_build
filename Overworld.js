class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        console.log("Hello from the Overworld", this);

        // Background Map Images 
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image,0,0)
        }
        image.src = "/images/maps/DemoLower.png";

        // Place some game objects
    }
}