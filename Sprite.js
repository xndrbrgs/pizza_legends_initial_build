class Sprite {
  constructor(config) {
    //Set up the images
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    //Shadows
    this.shadow = new Image();
    this.useShadow = true;
    if (this.useShadow) {
        this.shadow.src = "/images/characters/shadow.png";
    };
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };

    // Configure Animation and Initial State
    this.animations = config.animations || {
      "idle-down": [[0, 0]],
      "idle-right": [[0, 1]],
      "idle-up": [[0, 2]],
      "idle-left": [[0, 3]],
      "walk-down": [ [1, 0],[0, 0],[3, 0],[0, 0] ],
      "walk-right": [ [1, 1],[0, 1],[3, 1],[0, 1] ],
      "walk-up": [ [1, 2],[0, 2],[3, 2],[0, 2] ],
      "walk-left": [ [1, 3],[0, 3],[3, 3],[0, 3] ]
    };

    this.currentAnimation = "idle-up"  //config.currentAnimation || "idle-down";
    this.currentAnimationFrame = 0;

    // How many game loop frames will show specific sprite position
    this.animationFrameLimit = config.animationFrameLimit || 16;
    this.animationFrameProgress =  this.animationFrameLimit;

    // Reference the game object
    this.gameObject = config.gameObject;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  updateAnimationProgress() {
    // Downtick frame progress
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    // Reset the counter
    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  draw(ctx) {
    const x = this.gameObject.x - 8;
    const y = this.gameObject.y - 18;

    this.isShadowLoaded && ctx.drawImage(
        this.shadow,
        x,y
    )

    const [frameX, frameY] = this.frame;

    this.isLoaded && ctx.drawImage(
      this.image,
      frameX * 32, //left cut
      frameY * 32, //top cut
      32, //width of cut
      32, //height of cut
      x,
      y,
      32,
      32
    );
    this.updateAnimationProgress();
  }
}
