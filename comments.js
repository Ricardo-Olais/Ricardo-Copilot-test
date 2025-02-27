//create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];
var server = http.createServer(function(req, res){
    //parse the url
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if(pathname === '/'){
        fs.readFile('./index.html', function(err, data){
            if(err){
                console.log(err);
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }else if(pathname === '/comment'){
        //get the query string
        var query = urlObj.query;
        comments.push(query.comment);
        res.end(JSON.stringify(comments));
    }else{
        fs.readFile('.' + pathname, function(err, data){
            if(err){
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<h1>404 Not Found</h1>');
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
});
server.listen(3000, '