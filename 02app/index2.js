
const fs=require('fs');
const sbc={
    name:"sonu",
    age:34,
    grade:"A",
}
const abc1=JSON.stringify(sbc);
fs.writeFile("student.js",abc1,(err)=>{
    console.log("done");
});

fs.readFile("student.js","utf8",(res,error)=>{
    console.log(res);
});
const abc2=JSON.parse(abc1);
console.log(abc2);

// now update;



const newage=46;
abc2.age=Number(newage);

const update=JSON.stringify(abc2);

fs.writeFile("student.js",update,(err)=>{
    console.log("new age is her in student");
});

// if('age' in student)
// {

// }
delete student.age;
console.log("update file",abc2);

fs.writeFile("student.js",JSON.stringify(abc2),(err)=>{
    console.log("deleted:")
});


