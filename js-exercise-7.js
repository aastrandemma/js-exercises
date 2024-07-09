console.log("7. Write a JavaScript program to reverse a given string.");
console.log("");

const reverseString = (stringToReverse) => {
    return stringToReverse.split("").reverse().join("");
};

console.log(reverseString("turn this around please"));