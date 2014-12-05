/**
 * Created by Administrator on 2014/12/4.
 */
function Bullet(img, x, y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.isAlive = false;
}
Bullet.prototype.draw = function () {
    ctx.drawImage(this.img, this.x, this.y);
    this.y -= 2;
}

