function debounce(func,delay){
let timer;

return function(...args){
    setTimeout(timer);
    timer=setTimeout(()=>func(...args),delay)
}
}


const letsPrint=(e)=>{
    console.log("Lets Print",e.target.value)
}

const debounced=debounce(letsPrint,4000)
