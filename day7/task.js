
// 1.Greeting Function
/*function greet_user(name,times){
    if (times<1){
    console.log( "times must be at least 1")
    }
    else{
        for (let i=0;i<times;i++)
            console.log("Hello,"+name+'!')
}
}
greet_user("minnu",3)
*/

//2.Rectangle Area & Perimeter Function

/*function calcRectangle(width,height){
    
    let area=width*height
    let perimeter=2*(width+height)
    console.log("area:",area)
    console.log("perimeter:",perimeter)
    // console.log(width*height)
    // console.log(2*(width+height))
}
calcRectangle(4,5)*/

// 3.Flexible String Repeater Function
//  Define a named function repeatString(str, count, separator) that takes:
// str (a string) → the substring to repeat
// count (integer) → how many times to repeat
// separator (string) → what to place between the repeats
//  The function should build and return a string that repeats str exactly count times separated by separator.
//  Example: repeatString("ha", 3, "-") → "ha-ha-ha".
//  Bonus: If separator is omitted (or null), use a default separator of "" (empty string).

// function repeatstring(str,count,separator){ 
//     if (separator==null){
//         separator="";
//     }
//     // handle invalid repeat count
//     if (count<1){
//         return "error:count must be atleast one"
//     }
//     // build the reapeated string
//     let result= "";
//     for(let i=0; i<count; i++){
//         result+=str
//     //add separator bw parts but not after the last one
//         if (i<count-1){
//             result+=separator;
//         } 
//     }
//     return result;
// }
// console.log(repeatstring("sujana",3,"-"))


// 4.Parameterized Filter Function
//  Define a named function filterByLength(wordList, minLen, maxLen) that takes:
// wordList (an array/list of strings)
// minLen (integer)
// maxLen (integer)
//  The function should return a new array/list containing only those strings from wordList whose length is ≥ minLen and ≤ maxLen.
//  Bonus: If minLen > maxLen, swap them internally so the function still works.
function filterByLength(wordList, minLen, maxLen) {
  // if minLen is greater than maxLen, swap them
  if (minLen > maxLen) {
    let temp = minLen;
    minLen = maxLen;
    maxLen = temp;
  }
  // make an empty list to store results
  let result = [];
  // go through each word one by one
  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i]; // get each word
    let len = word.length;  // find its length
    // check if the length is between minLen and maxLen
    if (len >= minLen && len <= maxLen) {
      result.push(word); // add the word to result
    }
  }
  // return the new list
  return result;
}
// Example use:
let words = ["hi", "hello", "welcome", "sun", "code"];
console.log(filterByLength(words, 2, 6)); // ["hello", "sun", "code"]



// 5.Parameterized Calculator Function
//  Define a named function calculate(a, b, operation) that takes:
// a (number)
// b (number)
// operation (string) → one of "add", "subtract", "multiply", "divide"
//  The function should perform the requested operation on a and b and return the result.
//  Bonus: Handle cases for dividing by zero (returning an error or special value) and invalid operation strings (returning an error message).
// function calculate(a, b, operation) {
    // handle invalid input types
    // if (typeof a !== "number" || typeof b !== "number") {
    //     return "Error: both a and b must be numbers";
    // }

    // perform operation based on the given string
    // switch (operation) 
    // {
    //     case "add":
    //         return a + b;
    //     case "subtract":
    //         return a - b;
    //     case "multiply":
    //         return a * b;
    //     case "divide":
    //         if (b === 0) {
    //             return "Error: cannot divide by zero";
    //         }
    //         return a / b;
    //     default:
    //         return "Error: invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'";
    // }
// }

// // Example calls:
// console.log(calculate(10, 5, "add"));       // ➜ 15
// console.log(calculate(10, 5, "subtract"));  // ➜ 5
// console.log(calculate(10, 5, "multiply"));  // ➜ 50
// console.log(calculate(10, 0, "divide"));    // ➜ Error: cannot divide by zero
// console.log(calculate(10, 5, "modulus"));   // ➜ Error: invalid operation





