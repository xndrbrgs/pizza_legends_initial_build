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

        // Character Shadow 
        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow, 
                0, //left cut 
                0, //top cut
                32, //width of cut
                32, //height of cut
                x * 16 - 8,
                y * 16 - 18,
                32,
                32
            );
        }
        shadow.src = '/images/characters/shadow.png'


        // Main character image 
        const hero = new Image();

        // X and Y will change depending on position of the controlled hero
        const x = 5;
        const y = 6;
        hero.onload = () => {
            this.ctx.drawImage(
                hero, 
                0, //left cut 
                0, //top cut
                32, //width of cut
                32, //height of cut
                x * 16 - 8,
                y * 16 - 18,
                32,
                32
                );
        }
        hero.src = "/images/characters/people/hero.png"
    }
}