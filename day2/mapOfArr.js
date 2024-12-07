let str=["John 25", "Alice 30", "Bob 22"];

let result=[];
// for(let i=0;i<str.length;i++){
//     let spilt=str[i].split(" ");
//     let name=spilt[0];
//     let age=spilt[1];
//     result.push({name,age})
// }
// console.log(result)
str.map(item=>{
    let[name,age]=item.split(" ");
    result.push({name,age:parseInt(age)});
})
console.log(result)