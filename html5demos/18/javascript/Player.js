/**
 * Created by Administrator on 2014/12/4.
 */
function Player(ctx)
{
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    this.image.src = "images/Player.png";
}

Player.prototype.draw = function(){
    this.ctx.drawImage(this.image,0,0);
}