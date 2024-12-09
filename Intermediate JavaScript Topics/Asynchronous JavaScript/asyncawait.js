const fetchData=async()=>{
    try{
const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
const data=await response.json();
if(!data){
    throw new Error("Data Not In Json")
}
console.log(data.body)
    }
    catch(err){
console.log(err)
    }
}
fetchData()