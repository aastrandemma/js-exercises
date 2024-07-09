let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array: " + numbers);
console.log("");

console.log("9. Write a function that finds the largest element in an array.");
const findLargestElement = (numbers) => {
    let largestNumber = numbers[0];
    numbers.forEach(number => {
        if (number > largestNumber) {
            largestNumber = number;
        }
    });
    return largestNumber;
};
console.log(findLargestElement(numbers));
console.log("");
  
console.log("10. Write a function that filters out even numbers from an array.");
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);
console.log("");

console.log("11. Write a function that filters out odd numbers from an array.");

let oddNumbers = numbers.filter((number) => number % 2 === 1);
console.log(oddNumbers);
console.log("");

console.log("12. Use the map function to square each element of an array.");
const squareEachElement = (numbers) => {
    return numbers.map(number => number * number);
}
console.log(squareElements(numbers));