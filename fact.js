const fact=(num)=>{
    if(num<=0){
        return 1;
    }
    return fact(num-1)*num;
}
console.log(fact(5))
