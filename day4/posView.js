const element = document.querySelector('.chinu'); // Replace with the appropriate selector

const rect = element.getBoundingClientRect();

console.log(`Element's position relative to the viewport:`);
console.log(`Top: ${rect.top}`);
console.log(`Left: ${rect.left}`);
console.log(`Bottom: ${rect.bottom}`);
console.log(`Right: ${rect.right}`);
console.log(`Width: ${rect.width}`);
console.log(`Height: ${rect.height}`);
