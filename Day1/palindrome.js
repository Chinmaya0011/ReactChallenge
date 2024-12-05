const pal=(str)=>{
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i];
    }
    if(rev===str){
        return true;
    }
    return false;
}
console.log(pal("cac"))

//another way
const pal1=str=>str===str.split("").reverse().join("");
console.log(pal1("cacd"))