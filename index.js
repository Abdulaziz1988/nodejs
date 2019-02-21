 const http = require('http');
 const url = require('url');


 var server = http.createServer(function(req,res){
     var parsedURL = url.parse(req.url,true);
     var path = parsedURL.pathname;
     var trimedPath = path.replace(/^\/+|\/+$/g,'');
     var method = req.method;
     var queryStrPara = parsedURL.query;
     var reqHeader = req.headers;

    res.end('hello world\n');
    console.log('Request header is ',reqHeader +' and query string parameters is: ',queryStrPara);
});


 server.listen(3000,function(){
     console.log('server connect on port 3000')
 });
