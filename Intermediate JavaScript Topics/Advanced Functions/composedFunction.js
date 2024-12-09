const add=x=>x+5;
const multi=x=>x*5;

const composedFunction=x=>add(multi(x));
console.log(composedFunction(2))