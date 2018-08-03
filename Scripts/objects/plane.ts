namespace objects {
  export class Plane extends objects.GameObject {
    private _bulletSpawn: math.Vec2;
    private _bullets:objects.Bullet;
    /**
     * Creates an instance of Plane.
     * @memberof Plane
     */
    constructor() {
      super("plane");

      this.Start();
    }

    // private methods
    private _checkBounds():void {
        // check right boundary
        if(this.x > config.Screen.WIDTH - this.halfWidth ) {
            this.x = config.Screen.WIDTH - this.halfWidth;
        }

        // check left boundary
        if(this.x < this.halfWidth) {
            this.x = this.halfWidth;
        }
    }

    // public methods
    public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
        this.y = 430;
        this._bulletSpawn = new math.Vec2();
    }

    public Update(): void {
        this.x = managers.Game.Stage.mouseX;
        this._checkBounds();
        this.BulletFire();
        
    }

    public Reset(): void {}

    public BulletFire():void {
        // check if Plane is "alive"
        if(this.alpha = 1) {
          let ticker:number = createjs.Ticker.getTicks();
          if((ticker % 10 == 0) && (managers.Game.keyboardManager.fire) ) {
            this._bulletSpawn = new math.Vec2(this.x, this.y - this. halfHeight);
            let currentBullet = managers.Game.bulletManger.CurrentBullet;
            let bullet = managers.Game.bulletManger.Bullets[currentBullet];
            bullet.x = this._bulletSpawn.x;
            bullet.y = this._bulletSpawn.y;
            managers.Game.bulletManger.CurrentBullet++;
            if(managers.Game.bulletManger.CurrentBullet > 49) {
              managers.Game.bulletManger.CurrentBullet = 0;
            }
          }
        }
      }
  }
}
