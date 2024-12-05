let arr=[[1,2],[3,4],[5,6],[7,8],[9,0,1]];

const flatArr=(arr)=>{
    let result=[];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            result.push(arr[i][j])
        }
    }
    return result;
}
console.log(flatArr(arr))