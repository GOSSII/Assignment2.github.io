module scenes {
    export class Instruction extends objects.Scene {
        // member variables
        private _gamewelcome: objects.Label;
        private _gamemessage: objects.Label;
        private _backButton: objects.Button;
        private _startButton: objects.Button;
        private _ocean: objects.Ocean;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._ocean = new objects.Ocean();

            this._gamewelcome = new objects.Label("Welcome to Space Craft!", "45px", "Consolas", "#FFFF00", 300, 80, true);
            this._gamemessage = new objects.Label("Learn Some Rules Before Play \n\n1) You have to collect SpaceCraft. \n\n2) You have to save your life from Giant Monsteres. \n\n3) You will get 5 Lives.  ", "20px", "Consolas", "#FFFF00", 300, 160, true);
            this._backButton = new objects.Button("BackButton", config.Screen.HALF_WIDTH, 360, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH+170, 360, true);

            this.Main();
        }

        public Update():void {
            this._ocean.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - END SCENE`);

            this.addChild(this._ocean);

            this.addChild(this._gamewelcome);
            this.addChild(this._gamemessage);

            //this.addChild(managers.Game.ScoreBoard.HighScoreLabel);

            this.addChild(this._startButton);
            this.addChild(this._backButton);

            this._backButton.on("click", function(){
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);

        }
    }
}