var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Instruction = /** @class */ (function (_super) {
        __extends(Instruction, _super);
        // constructors
        function Instruction() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instruction.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._gamewelcome = new objects.Label("Welcome to Space Craft!", "45px", "Consolas", "#FFFF00", 300, 80, true);
            this._gamemessage = new objects.Label("Learn Some Rules Before Play \n\n1) You have to collect SpaceCraft. \n\n2) You have to save your life from Giant Monsteres. \n\n3) You will get 5 Lives.  ", "20px", "Consolas", "#FFFF00", 300, 160, true);
            this._backButton = new objects.Button("BackButton", config.Screen.HALF_WIDTH, 360, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH + 170, 360, true);
            this.Main();
        };
        Instruction.prototype.Update = function () {
            this._ocean.Update();
        };
        Instruction.prototype.Reset = function () {
        };
        Instruction.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instruction.prototype.Main = function () {
            console.log("Starting - END SCENE");
            this.addChild(this._ocean);
            this.addChild(this._gamewelcome);
            this.addChild(this._gamemessage);
            //this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
            this.addChild(this._startButton);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction.js.map