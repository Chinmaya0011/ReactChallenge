const mergeArr=(arr1,arr2)=>{
const result=new Set([...arr1,...arr2]);
console.log(result);
}
console.log(mergeArr([1,2,3,4],[2,3,4,5,6]))