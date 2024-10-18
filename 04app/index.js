// middleware in express-js:
//middleware is a function that  runs every time when you make 
// a request to the server and before the server gave the response.

const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("a request as at:");
    next();
});

app.get('/',(req,res)=>{
    res.send("hello to the main page");
    console.log("main page")
    next();
});

app.get('/about',(req,res)=>{
    res.send("hello to the about page");
    console.log("about page");
});

app.listen(3000,()=>{
    console.log("your server is running at http:");
});