 
// Array basics
//  1. Create an array of 5 colors and print the second and last color.
/*var colors=["red","green","yellow","blue"]
console.log(colors)
console.log(colors[1])
console.log(colors[3])*/
// 2. Create an array of numbers and replace the first element with 100.
// var num=[1,4,5,4]
// num[0]=100
// console.log(num)
// 3. Create an array with mixed data types (string, number, boolean). Print the type of each element using a loop.

// var arr=["suppu",23,true]
// for i in arr:


//  4. Create a nested array and print the inner array’s second element.
// var arr=[[1,6,3],[4,5,6],[7,8,9]]
// console.log(arr[0][1])

//  5. Create an array using the Array constructor and display its length.

// var arr=new Array("apple","banana","mango")
// console.log(arr)
// console.log(arr.length)

//  push(), pop(), shift(), unshift()
// 6. Create an array of fruits and add one fruit at the end using push().
// var arr=["apple","mango","grapes"]
// console.log(arr)
// arr.push("kivi")
// console.log(arr)
// 7. Remove the last element from the array using pop() and display the updated array.
// arr.pop()
// console.log(arr)

// 8. Add two new fruits at the beginning using unshift().
// arr.unshift("orange")
// console.log(arr)

// 9. Remove the first element using shift() and print the new array.
// arr.shift()
// console.log(arr)
// 10. Use a combination of push() and pop() to keep only 3 elements in your array.

// var arr=["red","black","blue"]
// arr.push("yellow")
// console.log(arr)
// arr.pop()
// console.log(arr)


// 3. slice() and splice()
// 11. Create an array [10, 20, 30, 40, 50] and use slice() to extract [20, 30].
// var arr=[10, 20, 30, 40, 50]
// console.log(arr)
// console.log(arr.slice(1,3))

// 12. Using the same array, use splice() to replace 30 with 35.
// console.log(arr.splice(2,0,35))
// console.log(arr)

// 13. Insert 25 before 30 using splice().
// console.log(arr.splice(3,0,25))
// console.log(arr)
// 14. Remove the last two elements using splice().
// console.log(arr.splice())
// 15. Use slice() to copy the first three elements into a new array
// var arr=[1,2,3,4,5]
// console.log(arr.slice(1,4))


// 4. concat(), join(), toString()
// 16. Create two arrays [1,2,3] and [4,5,6] and merge them using concat().
 
// var arr1=[1,2,3]
// var arr2=[4,5,6]
// console.log(arr1.concat(arr2))


// 17. Convert an array of names into a string separated by commas using join().
// var arr=["suppu","shannu","chitti","maggie"]
// console.log(arr.join())
// 18. Use toString() on an array and display the output.
// let arr = [10, 20, 30];
// console.log(arr.toString()); 

// 19. Merge three arrays using concat() and find the length of the new array.
// var arr1=[1,2]
// var arr2=[3,4]
// var arr3=[5,6]
// console.log(arr1.concat(arr2,arr3))

// 20. Create an array of city names and join them using ' - ' as a separator.
// var arr=["hyd","chennai","bangloor"]
// console.log(arr.join())

// 5. Search Methods (indexOf, lastIndexOf, includes)
//21. Create an array ['apple', 'banana', 'orange', 'banana', 'grape'] and find the first index of 'banana'.
// var arr=["apple","banana","orange","banana","grape"]
// console.log(arr.indexOf("banana"))
//22. Find the last index of 'banana' using lastIndexOf().
// console.log(arr.lastIndexOf("banana"))
//23. Check if 'mango' exists in the array using includes().
// console.log(arr.includes("mango"))
//24. Write code to check if a specific number exists in an array, if not, push it.
// let num=[10,20,30,40]
// let numtocheck=35 
// if  (!num.includes(numtocheck)){
//      num.push(numtocheck)
// }
// console.log(num)

//25. Use includes() to verify if 'kiwi' is present in your fruit array and print a message accordingly.
// let fruits=["apple","banana","orange","kiwi"]
// if (fruits.includes("kivi")){
//     console.log('kiwi is present in the array.');
// }
// else{
//     console.log('kiwi is not present in the array')
// }



// 6. find() and findIndex()
//26. Create an array [5, 12, 8, 130, 44] and find the first number greater than 10.
// let numbers = [5, 12, 8, 130, 44];
// let result = numbers.find(num => num > 10);
// console.log(result); 

//27. Use findIndex() to locate the position of the first element greater than 50.
// let numbers = [5, 12, 8, 130, 44];
// let index = numbers.findIndex(num => num > 50);
// console.log(index); 

//28. Find the first even number in an array using find().
// let arr = [7, 11, 14, 21, 25];
// let even = arr.find(num => num % 2 === 0);
// console.log(even); 

//29. Find the index of the first odd number in an array using findIndex().
// let arr = [2, 4, 6, 9, 10];
// let oddIndex = arr.findIndex(num => num % 2 !== 0);
// console.log(oddIndex); 


//30. Use find() to search for a string longer than 5 characters in an array of words.
// let words = ["cat", "elephant", "dog", "rabbit"];
// let longWord = words.find(word => word.length > 5);
// console.log(longWord); 




// 7. sort(), reverse(), copyWithin(), flat()
// 31. Sort an array [5,3,8,1,2] in ascending order.
// var arr=[5,3,8,1,2]
// console.log(arr.sort())
// 32. Reverse the sorted array and print it.
// console.log(arr.reverse())
// 33. Use copyWithin() to copy first two elements to the end of an array [10,20,30,40,50].
// arr.copyWithin(3, 0, 2);
// console.log(arr); 
// 34. Flatten a nested array ['a','b',['c','d'],['e',['f']]] using flat().
// var arr=['a','b',['c','d'],['e',['f']]]
// console.log(arr.flat())
// 35. Use flat() with depth 2 to flatten ['x',['y',['z',['w']]]]].
// let arr2 = ['x', ['y', ['z', ['w']]]];
// console.log(arr2.flat(2));
// console.log(arr2)


// 8. length, Destructuring & Misc
// 36. Create an array of 10 numbers and print its length.
// let nums = [1,2,3,4,5,6,7,8,9,10];
// console.log(nums.length); 

// 37. Remove the last element using pop() and print the new length.
// let nums = [1,2,3,4,5,6,7,8,9,10];
// nums.pop();
// console.log(nums.length); 
// 38. Use array destructuring to extract first three elements into variables.
// let arr = [10, 20, 30, 40, 50];
// let [a, b, c] = arr;
// console.log(a, b, c); 


// 39. Create a constant array and modify one element (to show arrays are mutable).
// const fruits = ["apple", "banana", "mango"];
// fruits[1] = "kiwi"; 
// console.log(fruits); 


// 40. Combine multiple array methods (push, splice, sort, reverse) to manipulate data dynamically.

let numbers = [5, 2, 9];
numbers.push(7);         // [5, 2, 9, 7]
numbers.splice(1, 1);    // remove index 1 → [5, 9, 7]
numbers.reverse();       // [9, 7, 5]
console.log(numbers);    // Output: [9, 7, 5]
