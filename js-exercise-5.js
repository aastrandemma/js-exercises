console.log(
  "5. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit." +
    " [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]" +
    " Expected Output : 60°C is 140 °F 45°F is 7.222222222222222°C"
);
console.log("");

const convertCelsiusToFahrenheit = (celsius) => {
  const fahrenheit = (celsius * 9 / 5) + 32;
  console.log(`${celsius}°C is ${fahrenheit}°F`);
};

const convertFahrenheitToCelsius = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit}°F is ${celsius}°C`);
};

console.log("Convert Celsius to Fahrenheit");
convertCelsiusToFahrenheit(60);
console.log("");

console.log("Convert Fahrenheit to Celsius");
convertFahrenheitToCelsius(45);