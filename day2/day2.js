

// console.log("sujana")

// var student_name="sujana"
// console.log("student name:",student_name)
// var total_marks=50
// console.log("total marks:",total_marks)
// is_passed=total_marks>40
// console.log("is_passed:",is_passed)


console.log(typeof(null)); //object
//null is primitive value no value or empty
//In the C implementation of JavaScript, null was represented as 
//a null pointer — basically, a memory address with all bits set to 0 (00000000).
//When the typeof operator checked its first bits (which started with 0), it mistakenly
//identified it as an “object”, because objects also started with a binary 0.


console.log(typeof(NaN)); //number

//typeof NaN gives "number" because in JavaScript, NaN (Not-a-Number) is still stored as a numeric 
//value—it represents a special “invalid number” result (like 0/0 or parseInt("abc")), so its type remains "number".

console.log(typeof[1,2,3]) //object
//typeof cannot tell the difference between plain objects and arrays.
//Arrays in JavaScript are a special kind of object (with numeric keys and extra features).

console.log(typeof{a:1}) //object
//{a:1} is a regular object literal.
//typeof correctly identifies it as "object".

console.log(typeof(() => {}))  //function
//() => {} is an arrow function.
//Functions in JavaScript are callable objects, but JavaScript gives them their own type label "function" for convenience.
//Technically, all functions are objects, but typeof distinguishes them specially.



arr=Array.isArray([1,2,3]); 
console.log(arr)