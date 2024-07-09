console.log("6. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.");
console.log("");

const removeCharAtIndexInString = (charIndex, unmodifiedString) => {
    if (charIndex < 0 || charIndex >= unmodifiedString.length || isNaN(charIndex)) {
        return unmodifiedString;
    }
    return unmodifiedString.slice(0, charIndex-1) + unmodifiedString.slice(charIndex, unmodifiedString.length);
};

console.log(removeCharAtIndexInString(4, "Unmodified string to test on."));