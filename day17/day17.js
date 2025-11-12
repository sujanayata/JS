
// Q1. Find the first non-repeated character

// str="aaabbkbb"
//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         count++;
//       }
//     }
//     if (count === 1) {
//       console.log(str[i]);
//     }
//   }
 
// Q2. Convert temperature series from Celsius to Fahrenheit

// let celsius = [0, 25, 100];
// let fahrenheit = [];
// for (let i = 0; i < celsius.length; i++) {
//   let f = (celsius[i] * 9 / 5) + 32;
//   fahrenheit.push(f);
// }
// console.log(fahrenheit); 




// Q3. Reverse words in a sentence (preserve spacing)
// Question:
//  Write a function reverseWords(str) that takes a sentence str and returns a new sentence where each word is reversed, but the word order and spacing remain the same.
//  Example: reverseWords("Hello world!") → "olleH !dlrow"






// Q4. Sum digits until single digit
// Question:
//  Write a function digitalRoot(n) that takes a non-negative integer n and repeatedly sums its digits until the result is a single digit, then returns that digit.
//  Example: digitalRoot(49) → 4 + 9 = 13 → 1 + 3 = 4 → returns 4.


// Q5. Check if object is empty
// Question:
//  Write a function isEmptyObject(obj) that returns true if obj has no own properties (keys) and false otherwise.

// function iEb(obj) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       return false; 
//     }
//   }
//   return true; 
// }
// console.log(iEb({}));       
// console.log(iEb({a: 1}));   


// Q6. Generate Range of Numbers
// Question:
// Write a function range(start, end, step = 1) that generates an array of numbers from start to end inclusive, stepping by step. If step is negative, the range goes backwards.




// Q7. Count Character Occurrences in a String
// Question:
// Write a function charCount(str) that returns an object where keys are each character in str, and values are how many times each character appears (case-sensitive).




// Q8. Generate first N Fibonacci numbers
// Question:
//  Write a function firstNFib(n) that returns an array of the first n Fibonacci numbers (starting with 0, 1). Example: firstNFib(5) → [0,1,1,2,3].
// function fib(){
//      let a=0
//      let b=1
//      console.log(a)
//      console.log(b)
//      for(i=0;i<5;i++){
//         let temp=a+b
//         a=b
//         b=temp
//         console.log(temp)
//      }
// }
// fib()


// Q9. Remove falsy values from array
// Question:
// Write a function removeFalsy(arr) that returns a new array containing only truthy values (i.e., removes false, 0, "", null, undefined, NaN).



// Q10. Swap two variables without a temp (using destructuring)

// let a = 5, b = 10;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b); 


// Q11. Count vowels in string
// Question:
//  Write a function countVowels(str) that returns how many vowels (a, e, i, o, u — case-insensitive) are in the string str.
// function fun(str) {
//   let v = "aeiou";
//   let c = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (v.includes(str[i])){
//       c += 1;
//     }
//   }
//   return c;
// }
// console.log(fun("sujana"));

// Q12. Sum of two smallest positive numbers
// Question:
//  Write a function sumTwoSmallestPositives(arr) that takes an array of numbers (which may include negatives or zeros) and returns the sum of the two smallest positive numbers. If less than two positives exist, return null. Example: sumTwoSmallestPositives([5, 1, -2, 3, 1]) → 2 (1 + 1).

