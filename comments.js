//create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
 
var comments = [];
 
http.createServer(function(request, response) {
    var urlParsed = url.parse(request.url, true);
    console.log(urlParsed);
 
    if (urlParsed.pathname == '/echo' && urlParsed.query.text) {
        response.setHeader('Cache-control', 'no-cache');
        response.end(urlParsed.query.text);
    } else if (urlParsed.pathname == '/comments') {
        if (urlParsed.query.comment) {
            comments.push(urlParsed.query.comment);
        }
        response.setHeader('Cache-control', 'no-cache');
        response.end(JSON.stringify(comments));
    } else {
        response.statusCode = 404;
        response.end('Page not found');
    }
}).listen(1337);