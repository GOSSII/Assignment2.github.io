var managers;
(function (managers) {
    var Bullet = /** @class */ (function () {
        function Bullet() {
            this.Start();
        }
        Bullet.prototype._buildBulletPool = function () {
            for (var count = 0; count < this._bulletCounts; count++) {
                this.Bullets[count] = new objects.Bullet();
            }
        };
        Bullet.prototype.Start = function () {
            this._bulletCounts = 400;
            this.Bullets = new Array();
            this._buildBulletPool();
            this.CurrentBullet = 0;
        };
        Bullet.prototype.Update = function () {
            this.Bullets.forEach(function (bullet) {
                bullet.Update();
            });
        };
        return Bullet;
    }());
    managers.Bullet = Bullet;
})(managers || (managers = {}));
//# sourceMappingURL=bullet.js.map