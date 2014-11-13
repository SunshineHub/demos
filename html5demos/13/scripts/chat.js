/**
 * Created by Administrator on 2014/11/11.
 */
var ws = require("websocket-server");
var server = ws.createServer();
//websocket连接事件.[添加事件]
server.addListener("connection",function(conn){
    console.log(conn.id + " connect...");
    conn.addListener("message",function(msg){
        console.log(msg);
        server.broadcast(msg);
    })
});
var port = 8899;
server.listen(port);
console.log("server is running on port "+port);