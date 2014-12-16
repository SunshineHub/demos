/**
 * Created by Administrator on 2014/12/16.
 */
var isReady = false;
var isOtherReady = false;
var isGameStart = false;
var hasToken = false;
var ctx = $('#chessboard')[0].getContext('2d');
var ws = null;
var images = {};
function initGame() {
    isReady = false;
    isGameStart = false;
    isOtherReady = false;
    $("#zb1").slideUp();
    $("#zb2").slideUp();
}

function initLayout() {
    $('#btnStart').hover(function () {
        if (!isReady)
            $('#btnStart')[0].style.background = "url(images/startBright.png) no-repeat";
    }, function () {
        if (!isReady)
            $('#btnStart')[0].style.background = "url(images/start.png) no-repeat";
    })
    $('#btnStart').click(clickStart)
    var img_cheessboard = new Image();
    img_cheessboard.src = "images/chessboard.jpg";
    img_cheessboard.onload = function () {
        ctx.drawImage(img_cheessboard, 0, 0);
    }
    var img_chess = new Image();
    images.chessboard = img_cheessboard;
    images.chess = img_chess;
}

function clickStart() {
    if (!isGameStart)
    {
        changeReadyState();
    }
}

function changeReadyState() {
    isReady = !isReady;
    onReadyStateChanged();
}

function changeOtherReadyState() {
    isOtherReady = !isOtherReady;
    onReadyStateChanged();
}
function onReadyStateChanged() {
    if (isReady) {
        $('#btnStart')[0].style.background = "url(images/startGray.png) no-repeat";
        $("#zb1").slideDown();
    }
    else {
        $('#btnStart')[0].style.background = "url(images/start.png) no-repeat";
        $("#zb1").slideUp();
    }
    if (isOtherReady) {
        $("#zb2").slideDown();
    } else {
        $("#zb2").slideUp();
    }
}
$(function () {
    initGame();
    initLayout();
    main();
})