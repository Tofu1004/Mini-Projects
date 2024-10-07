//Today's forecast where kelvin will stay constant
const kelvin = 0;
console.log(kelvin);
//Converting kelvin to celcius
var celcius = kelvin - 273;
console.log(celcius);
//Conversion from celcius to fahrenheit
var fahrenheit = celcius * (9/5) + 32;
console.log(fahrenheit);
//Rounding down decimals
fahrenheit = Math.floor(celcius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
