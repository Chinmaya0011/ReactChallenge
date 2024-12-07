const str="chinmaya";
function count(str) {
    let ocr = {}; // Initialize an empty object to store character counts.
    for (let i in str) { // Iterate over each index in the string.
        if (ocr[str[i]]) { // Check if the character at index 'i' already exists in the object.
            ocr[str[i]]++; // If it exists, increment its count.
        } else {
            ocr[str[i]] = 1; // If it does not exist, set its count to 1.
        }
    }
    console.log(ocr); // Print the object containing the counts of each character.
}
