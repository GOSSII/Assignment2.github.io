module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _plane:objects.Plane;
        private _ocean:objects.Ocean;
        private _island:objects.Island;
        private _clouds:objects.Cloud[];
        private _enemy:objects.Cloud[];
        private _cloudNum:number;
        private _keyboardManager:managers.Keyboard;
        private _bulletClicked: objects.Bullet[];
        private _bulletManager: managers.Bullet;
        
        public engineSound:createjs.AbstractSoundInstance;
        //_enemy: objects.Cloud;


        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        
        private _buildClouds():void {
            for (let count = 0; count < this._cloudNum; count++) {
                this._clouds.push(new objects.Cloud());
                //this._clouds[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {

        
      
            this.engineSound = createjs.Sound.play("engine");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;


            this._plane = new objects.Plane();
            this._ocean = new objects.Ocean();
            this._island = new objects.Island();
           // this._bulletManager = new managers.Bullet();

            
        

             // make a reference to the bullet manager in the game manager
                this._bulletManager = new managers.Bullet();
                managers.Game.bulletManger = this._bulletManager;

           // create an enemy object
          //this._enemy = new objects.Cloud();

            

            // creates an empty array of type Cloud
            this._clouds = new Array<objects.Cloud>();
            this._cloudNum = 4;

            this._buildClouds();

            
           
            this.Main();
        }

        public Update():void {
            this._plane.Update();
            this._ocean.Update();
            this._island.Update();
            this._bulletManager.Update();
            

            managers.Collision.check(this._plane, this._island);

            // new code
            this._bulletManager.Bullets.forEach(bullets => {
                bullets.Update();
            });
            
            this._clouds.forEach(cloud => {
                cloud.Update();
                managers.Collision.check(this._plane, cloud);
                
            });



            this._clouds.forEach(cloud => {
                this._bulletManager.Bullets.forEach(bullets => {
                    managers.Collision.check(this._plane, cloud);
                });
                
            });



         // old code

   
        
        }

        public Reset():void {

        }

        public Destroy():void {
            this.engineSound.stop();
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the ocean to the scene
            this.addChild(this._ocean);

            // adding the island to the scene
            this.addChild(this._island);

            // adding the plane to the scene
            this.addChild(this._plane);

        


            // adding the cloud to the scene
            for (const cloud of this._clouds) {
                this.addChild(cloud);
            }

            this._bulletManager.Bullets.forEach(bullet => {  
                this.addChild(bullet);
            });
      // add the bullets to the scene
      this._bulletManager.Bullets.forEach(bullet => {
        this.addChild(bullet);
      });
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        }
    }
}