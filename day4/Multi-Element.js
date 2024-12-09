const buttons=document.querySelectorAll(".chinu");

buttons.forEach(button=>
    button.addEventListener('click',()=>{
        console.log(button.textContent)
    })
)