const maxElem=(arr)=>{
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
return max;
}
console.log(maxElem([22,3,45,6,3,23,324,22345,323,34,4345]))