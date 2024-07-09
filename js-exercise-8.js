console.log("8. Write a function that calculates the sum of all elements in an array.");
console.log("");

function sum(...numbers) {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
}

console.log(sum(20, 40, 60, 5, 5));