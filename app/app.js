var express = require('express');
var app = express();
var port = 10000;

var pID = "PID@" + new Date()*1; // 페이지 구분을 위한 고유 키 설정

var server = app.listen(port, function() {
    console.log("Server Satrt " + port);
});

app.get('/', function (req, res) {
    res.send("Web Page: " + pID);
});