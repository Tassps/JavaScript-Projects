// Variable named kelvin with a constant value of 293 kelvin
const kelvin = 293
// By substracting 273 from the kelvin variable we can find the value of the celsius variable
const celsius = kelvin - 273
// We will use the equation bellow to calculate the new variable fahrenhiet
let fahrenheit = celsius * (9/5) + 32 
//Using the floor method above, of the object Math, we can round down the result of the Fahrenheit variable
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius *(33/100);
//Using the floor method above, of the object Math, we can round down the result of the newton variable
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
console.log(`The temperature is ${celsius} degrees Celsius.`)