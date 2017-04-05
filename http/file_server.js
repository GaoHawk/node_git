var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

//创建服务器
var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;

    var filepath = path.join(root,pathname);

    fs.stat(filepath,function(err,stats){
        if(!err && stats. isFile()){
            
            console.log('200',request.url);

            response.writeHead(200);
            //将文件流导向response;
            fs.createReadStream(filepath).pipe(response);
        }else{
            //出错了或者文件不存在
            console.log('404' + request.url);
            //发送404 响应
            response.writeHead('404');
            response.end('404 Not Found');
        }
    })
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/')