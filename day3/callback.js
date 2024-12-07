// console.log("Start");

// setTimeout(()=>console.log("Hey"),5000);
// console.log("end")

function chinu(callback,piza){
    console.log(piza);
    callback(piza);
}

function chinmaya(arg){
console.log("This is one type of ",arg)
}
chinu(chinmaya,"Amercain")