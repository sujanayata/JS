
// declaration of array in javascript 
// 1.Using array literals
// 2.using new keyword

// intializing array while declaring
// 1.using array literals
// var arr=["suppu",23,"female"]
// console.log(arr)

// var arr=[]
// arr[0]="shannu"
// arr[1]=23
// arr[2]="male"
// console.log(arr)

// accessing individual elements using index

// console.log(arr[0])
// console.log(arr[2])

// 2.using new keyword

// declaring and initializing array at the same time

// var arr=new Array(1233,"maggie","female")
// console.log(arr)

// declaring empty array and adding value

// var arr=new Array()
// arr[0]=123
// arr[1]="shannu"
// arr[2]="sujana"
// console.log(arr)

// array methods

// 1.push()-->adds the element at the last
var arr=["apple","banana","grapes","apple"]
// console.log(arr)
// arr.push("kivi")
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift("mango")
// console.log(arr)
// arr.shift()
// console.log(arr)
// console.log(arr.includes("grapes"))
// console.log(arr.lenght)
// console.log(arr.indexOf("grapes"))
// console.log(arr.lastIndexOf("apple"))

// console.log(arr.slice(1,3))

// arr.splice(1,0,"straberry")
// console.log(arr)

// var arr1=["paris","hyderabad","vizianagaram",]
// var arr2=["pune","chennai","bangloor"]
// console.log(arr1.concat(arr2))

// console.log(arr.toString())

// console.log(arr.join("-"))

var num=[1,4,3,2,5,9,7,8]
console.log(num.reverse())
console.log(num.sort())