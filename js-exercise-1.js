console.log(`1. Write a JavaScript program to display the current day and time in the following format: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy.`);
console.log(``);

function displayCurrentDateInDifferentFormats() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const mm_dd_yyyy = `${month}-${day}-${year}`;
    const mm_dd_yyyy_slash = `${month}/${day}/${year}`;
    const dd_mm_yyyy = `${day}-${month}-${year}`;
    const dd_mm_yyyy_slash = `${day}/${month}/${year}`;

    console.log(`Current Date`);
    console.log(`Format mm-dd-yyyy: ${mm_dd_yyyy}`);
    console.log(`Format mm/dd/yyyy: ${mm_dd_yyyy_slash}`);
    console.log(`Format dd-mm-yyyy: ${dd_mm_yyyy}`);
    console.log(`Format dd/mm/yyyy: ${dd_mm_yyyy_slash}`);
}

displayCurrentDateInDifferentFormats();