/**
 * Created by Administrator on 2014/12/1.
 */
/*star
 *loading模块
 *实现图片的预加载，并显示进度条
 *参数：图片数组对象，加载完成的回调函数
 */


function stokeProgress(clearWidth, clearHeight, step, totalStep) {
    ctx.clearRect(0, 0, clearWidth, clearHeight);
    ctx.fillText('Loading:' + step + '/' + totalStep, (scr_width - bar_len) / 2, (scr_height - ctx.lineWidth) / 2 - 20);// 200 280
    ctx.save();
    ctx.strokeStyle = '#555';
    ctx.beginPath();
    ctx.moveTo((scr_width - bar_len) / 2, (scr_height - ctx.lineWidth) / 2); //200 300
    ctx.lineTo((scr_width - bar_len) / 2 + bar_len, (scr_height - ctx.lineWidth) / 2);// 600 300
    ctx.stroke();
    ctx.beginPath();
    ctx.restore();
    ctx.moveTo((scr_width - bar_len) / 2, (scr_height - ctx.lineWidth) / 2);//200 300
    ctx.lineTo(step / totalStep * 400 + (scr_width - bar_len) / 2, (scr_height - ctx.lineWidth) / 2);//
    ctx.stroke();
}

function loadImages(sources, callback) {
    var loadedImages = 0;
    var numImages = 0;
    ctx.font = '14px bold';
    ctx.lineWidth = 5;
    var clearWidth = canvas.width;
    var clearHeight = canvas.height;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        //当一张图片加载完成时执行
        images[src].onload = function () {
            $('#pretxt').remove();
            //重绘一个进度条
            stokeProgress(clearWidth, clearHeight, loadedImages, numImages + audios_len);
            //当所有图片加载完成时，执行回调函数callback
            if (++loadedImages >= numImages) {
                callback();
            }
        };
        //把sources中的图片信息导入images数组
        images[src].src = sources[src];
    }
}

//定义预加载图片数组对象，执行loading模块
window.onload = function () {
    var sources = {
        i1:"images/01.gif",
        i2:"images/02.gif",
        i3:"images/03.gif",
        i4:"images/04.gif",
        i5:"images/05.gif",
        i6:"images/06.gif",
        i7:"images/07.gif",
        i8:"images/08.gif",
        i9:"images/09.gif",
        i10:"images/10.gif",
        i11:"images/11.gif",
        i12:"images/12.gif",
        Five:"image/Five.png",
        youlose:"images/you lose.png",
        youwin:"images/you win.png",
        xiazi:"images/underapawn.png",
        cursor:"images/cursor.png"
    };
    initCanvas();
    //执行图片预加载，加载完成后执行main
    loadImages(sources, main);
};
/*end*/