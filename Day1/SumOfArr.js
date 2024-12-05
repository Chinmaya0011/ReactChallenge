const sumOfArr=(arr)=>{
    let sum=0;
    for(let i in arr){
        sum=+arr[i];
    }
    return sum;
}
console.log(sumOfArr([1,2,3,4,5,6,7]))