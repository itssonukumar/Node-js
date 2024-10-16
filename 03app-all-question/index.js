// console.log("hello");
// console.log(global);

// const os=require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());


// console.log(__dirname);
// console.log(__filename);


// const path=require('path');
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));


const http=require('http')
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    if(req.url==='/')
        {
            res.end('hello my server at 3000');
        }
        else if(req.url==='/home')
        {
            res.end("we are about in home paage");
        }
        else{
            res.statusCode=404;
            res.end("page not find");
        }
        
});



server.listen(3000,()=>{
    console.log("server running at port:");
});

