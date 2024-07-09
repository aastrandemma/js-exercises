console.log(`3. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.`);
console.log(``);

function displayIfJanuaryFirstIsSunday() {
    for (let year = 2014; year <= 2050; year++) {
        const date = new Date(year, 0, 1);
        if (date.getDay() === 0) {
            console.log(`January 1st of year ${year} is a Sunday.`);
        }
    }
}

displayIfJanuaryFirstIsSunday();