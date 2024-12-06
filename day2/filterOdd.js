const filterOddNum=(arr)=>{
    const result=[];
    for(let i in arr){
        if(arr[i]%2!==0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(filterOddNum([1,2,3,4,5,6,7,8,9]))