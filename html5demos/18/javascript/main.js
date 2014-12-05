/**
 * Created by Administrator on 2014/12/2.
 */
function main() {
    var director = new Director(ctx);
    director.background = new Background(ctx);
    director.backAudio = $("#backMusic")[0];
    director.play();
}

