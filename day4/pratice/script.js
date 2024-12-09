// const buttons=document.querySelectorAll(".chinu");
// buttons.forEach(button=>
//     button.addEventListener("click",()=>alert("Your Click on this button "+button.textContent))
// )

// const button=document.querySelector(".chinu");
// button.addEventListener("click",()=>{
//     button.textContent=parseInt(button.textContent||0)+1;
// })

// const button=document.getElementById("chinu");


// button.addEventListener("click",()=>{
//     button.style.backgroundColor="red";
//     setTimeout(()=>{
//         button.style.backgroundColor="";
//     },100)
// })

// let hai=document.querySelector("h1");
// hai.addEventListener("click",()=>{
//     hai.innerText="Chaldf"
// })

// const bulb=document.querySelector("#bulb");
// const swtch=document.querySelector("#switch");
// let flag=0;
// swtch.addEventListener("click",()=>{
//   if(flag===0){
//     bulb.style.backgroundColor="yellow";
//     flag=1;
//     swtch.innerHTML="On"
//   }
//   else{
//     bulb.style.backgroundColor="white";
//     flag=0;
// swtch.innerHTML="Off"
//   }
// })

// const chin=document.querySelectorAll("h1");
// chin.forEach(function(e){
//     console.log(e.textContent)
// })

const data=document.getElementById("name1");
 
let inputData;
const printData=(event)=>{
   inputData=event.target.value;
}  

const submit=()=>{
  data.innerText=inputData;
}
