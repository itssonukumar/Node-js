const http= require("http");

const server=http.createServer((req,res)=>{

    if(req.url=='/')
    {
        res.end("hello sonu");
    }
    else if(req.url=='/home')
    {
        res.end("hello home");
    }
    else{
       res.statusCode=404;
       res.end("page not found");
    }
   
});
port=3000;
server.listen(3000,()=>{
    console.log("server runing sonu at http:3000");
});
