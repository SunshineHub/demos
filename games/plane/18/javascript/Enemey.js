/**
 * Created by Administrator on 2014/12/4.
 */
function Enemey(img, x, y, scale) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.speed = 1.2;
    this.scale = scale;
    this.degree = 0;
    this.isAlive = true;
}

Enemey.prototype.draw2 = function () {
    ctx.save();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    var imgCenterX = this.img.width / 2;
    var imgCenterY = this.img.height / 2;
    //  ctx.scale(this.scale, this.scale);
//    if (director.player.isColide(this.x, this.y, this.img.width, this.img.height)) {
//        isCrashed = true;
//    }
    ctx.translate(this.x + imgCenterX, this.y + imgCenterY);
//    if (director.player.isColide(-imgCenterX,-imgCenterY, this.img.width, this.img.height)) {
//        isCrashed = true;
//    }
    //ctx.clearRect(-imgCenterX - residualX, -imgCenterY - residualY, this.img.width + residualX, this.img.height + residualY);
    ctx.rotate(Math.PI * 2 / 360 * this.degree);
    ctx.drawImage(this.img, -imgCenterX, -imgCenterY,this.img.width * this.scale,this.img.height * this.scale);
    ctx.restore();

    if (this.degree == 360) {
        this.degree = 0;
    }
    this.y += this.speed;
    this.degree++;
}

Enemey.prototype.draw = function () {
    var isCrashed = false;
    ctx.save();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    //ctx.scale(this.scale, this.scale);
    ctx.drawImage(this.img, this.x, this.y);
    ctx.restore();
    return isCrashed;
}

Enemey.prototype.explode = function (director) {
    audios.enemyExplosionMusic.load();
    audios.enemyExplosionMusic.play();
    director.enemiesExplosions.push(new ExplosionEnemey(this.x, this.y, images.explosionEnemy,this.speed));
}
Enemey.prototype.isColide = function (x, y, width, height) {
    var isCrashed = false;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    //ctx.strokeRect(x, y, width, height);
    if (x >= this.x && y >= this.y && x <= this.x + this.img.width && y <= this.y + this.img.height) {
        isCrashed = true;
    }
    if (x + width >= this.x && y >= this.y && x + width <= this.x + this.img.width && y <= this.y + this.img.height) {
        isCrashed = true;
    }
    if (x >= this.x && y + height >= this.y && x <= this.x + this.img.width && y + height <= this.y + this.img.height) {
        isCrashed = true;
    }
    if (x + width >= this.x && y + height >= this.y && x + width <= this.x + this.img.width && y + height <= this.y + this.img.height) {
        isCrashed = true;
    }
    return isCrashed;
}