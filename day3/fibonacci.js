function fibonaci(n) {
    let first = 0;
    let second = 1;

    for (let i = 1; i <= n; i++) {
        console.log(first); // Print the current Fibonacci number
        let sum = first + second; // Calculate the next Fibonacci number
        first = second; // Update 'first' to the next number
        second = sum; // Update 'second' to the new sum
    }
}

// Call the function to print the first 5 Fibonacci numbers
fibonaci(5);
