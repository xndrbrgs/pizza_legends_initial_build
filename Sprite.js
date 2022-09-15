class Sprite {
  constructor(config) {
    //Set up the images
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    // Configure Animation and Initial State
    this.animations = config.animations || {
      idleDown: [[0, 0]],
    };

    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;

    // Reference the game object
    this.gameObject = config.gameObject;
  }

  draw(ctx) {
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 8;

    ctx.drawImage(
      this.image,
      0, //left cut
      0, //top cut
      32, //width of cut
      32, //height of cut
      x,
      y,
      32,
      32
    );
  }
}
