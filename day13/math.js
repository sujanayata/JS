
// math methods
//1.Math.abs()-->Returns the absolute (positive) value of a number.
var num=-30
console.log(Math.abs(num))
//2.Math.ceil()-->Rounds a number up to the nearest integer.
console.log(Math.ceil(4.2))
//3.Math.floor()-->Rounds a number down to the nearest integer.
console.log(Math.floor(4.9))
//4.Math.round()-->Rounds a number to the nearest integer.
console.log(Math.round(4.5))
console.log(Math.round(4.4))
//5. Math.trunc()-->Removes the fractional part, returning the integer part.
console.log(Math.trunc(4567.9806))
//6. Math.max() & Math.min()-->Finds the largest/smallest number among arguments.
console.log(Math.max(1,22,34,99,65,87))
console.log(Math.min(12,34,67,11,56,78,90))
//7.Math.pow()-->Calculates exponentiation (base^exponent).
console.log(Math.pow(2,4))
//8.Math.sqrt()-->Calculates square root.
console.log(Math.sqrt(36))
//9.Math.random()-->Generates a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random())
console.log(Math.floor(Math.random()*100)+1)
// Explanation: Useful for games, random selections,
// or probabilistic simulations.
// Number Methods
// 1. toFixed()-->toFixed() converts a number into a string, keeping a specified number of decimals.
// It is mainly used for rounding numbers to a certain precision.
let num=123.45678
    console.log(num.toFixed(2))
    console.log(num.toFixed(3))
    console.log(num.toFixed(0))
    console.log(num.toFixed(8))
// Explanation: It ensures uniform decimal formatting, useful in financial calculations.
// 2.parseInt()-->parseInt() converts a string to an integer, 
// ignoring any trailing non-numeric characters.
let num="123abc"
console.log(parseInt(num))
console.log(parseInt("  456   "))
console.log(parseInt(3.24))
// Explanation: Useful for extracting numeric values from strings.
// 3.parseFloat()-->parseFloat() converts a string into a floating-point number, preserving decimals.
console.log(parseFloat("345.45asd"))
console.log(parseFloat("1e4"))
// 4. isNaN()-->checks if a value is Not-a-Number.
console.log(isNaN("hello"))
console.log(isNaN("123"))
console.log(isNaN(57))
// Explanation: Helps validate numeric input.
// 5. Number()-->Converts different data types to a numeric value.
console.log(Number("123"))
console.log(Number(true))
console.log(Number(false))
console.log(Number("123abc"))
// Explanation: Allows reliable conversion to numbers from strings, booleans, and null values.
// 5.isfinite()-->Number.isFinite() checks whether a value is a finite number (not Infinity, -Infinity, or NaN).
var num=123
console.log(isFinite(num))
// 6.isinteger-->Number.isInteger() checks whether a given value is an integer.
console.log(Number.isInteger(234))
//7.toprecision()-->toPrecision(n) returns a string representing the number with n significant digits.
let num=34.567
console.log(num.toPrecision(3))
console.log(num.toPrecision(4))
console.log(num.toPrecision(7))
