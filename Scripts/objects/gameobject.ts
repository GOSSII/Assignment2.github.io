module objects {
    export abstract class GameObject extends createjs.Bitmap {
        
        
        
        
        protected _dx:number;
        protected _dy:number;

 
        
        // member variables
        public width:number;
        public height:number;
        public halfWidth:number;
        public halfHeight:number;
        public isColliding:boolean;

        // constructors
        constructor(imageString:string) {
            super(managers.Game.AssetManager.getResult(imageString));

            this.name = imageString;
            this._initialize();


        }

        // private methods


        private _initialize():void {
            this.width =  50; //this.getBounds().width;
            this.height = 50; //this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.isColliding = false;
           
        }

        // public methods
        public Start():void {

        }

        public Update():void {

        }

        public Reset():void {

        }
    }
}