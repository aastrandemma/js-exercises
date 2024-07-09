console.log(`2. Write a JavaScript program to determine whether a given year is a leap year.`);
console.log(``);

console.log(`Leap Year`);
const isLeapYear = (year) => (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
function displayLeapYearMsg(year) {
    if (isLeapYear(year)) {
        console.log(`Year of `+ year + ` is a leap year.`);
    } else {
        console.log(`Year of `+ year + ` is NOT a leap year.`);
    }
}

displayLeapYearMsg(2024);
displayLeapYearMsg(2002);
displayLeapYearMsg(2084);
displayLeapYearMsg(1997);