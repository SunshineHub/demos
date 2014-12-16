/**
 * Created by Administrator on 2014/12/16.
 */
function main() {
    if (window.WebSocket) {
        //连接WebSocket服务器
        ws = new WebSocket("ws://127.0.0.1:8899");
        ws.onopen = function () {
            //     var json = JSON.parse("{\"oldX\": \"216\", \"oldY\": \"168\", \"x\": \"219\", \"y\": \"172\"}");
        };
        ws.onclose = function () {
            alert('连接关闭');
        };
        ws.onmessage = function (e) {
            var message = e.data;
            var json = JSON.parse(message);
            console.log(message);
            switch (json.type) {
                //如果是聊天消息
                case dataType.chatMessage:
                    break;
                //如果是绘图消息
                case dataType.drawMessage:
                    break;
                //如果是令牌消息
                case dataType.tokenMessage:
                    readyToDraw();
                    drawToken = true;
                    break;
            }
            drawLine(json.oldX, json.oldY, json.x, json.y);//解析错误是因为...服务器代码写错..无语
        };
        ws.onerror = function () {
        }
        $canvas = $('#drawing-pad');
        ctx = $canvas[0].getContext("2d");
    }
}