//json in node js
const fs=require('fs')
const biodata={
    name:'sonu',
    class:'2',
    age:23,
    adno:22424,

}
const abc=JSON.stringify(biodata);
fs.writeFile("data.js",abc,(err,res)=>{
    console.log("done")
})

const abc1=JSON.parse(abc);
console.log(abc1);


fs.readFile("data.js","utf8",(err,res)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(res)
    }
})

