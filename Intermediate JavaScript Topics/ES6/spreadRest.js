// Spread operator used to copy an array and add more elements
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

// Rest operator used to collect function arguments into an array
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
