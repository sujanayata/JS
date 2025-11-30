
// template literals

// var place="hyderabad"
// console.log(`ram is from ${place}`)

// var place="hyderabad"
// var food="biryani"
// console.log(`ajay is from ${place} and he likes ${food}`)

// console.log(`in hyderabad ,"charminar" is famous`)

// console.log(`twinkle twinkle
//     little star`)


// if

// sundra=17
// if (sundra>18){
//     console.log("elgible to marry with sudri")
// }

// if else
// sundra=18
// if (sundra>18){
//     console.log("elgible to marry with sudri")
// }
// else{
//     console.log("sundri wait for 12 months")
// }

//1.Print your name 5 times

// for(let i=1; i<=5; i++ ){
//     console.log("sujana")
// }

//2. Sum of two numbers

// let a=10
// let b=20
// console.log("sum =",a+b)

// 3. Check if a number is even or odd
// let num=8
// if (num%2==0){
//     console.log("Even number")
// }
// else{
//     console.log("Odd number")
// }

// 4. Find the largest of two numbers

// let num1=10
// let num2=20
// if (num1>num2){
//     console.log(`the largest num is ${num1}`)
// }
// else{
//     console.log(`the biggest num is ${num2}`)
// }

//5. Check if a number is positive, negative, or zero

// function fn(num){
// if (num>0){
//     console.log("positive number")
// }
// else if(num<0){
//     console.log("negative number")
// }
// else{
//     console.log("zero")
// }
// }
// fn(-10)

// 6. Print numbers from 1 to 10

// for (let i=1; i<=10; i++){
//     console.log(i)
// }

//7. Find sum of first N natural numbers
// let n=5
// sum=0
// for(let i=1;i<=n;i++){
//     sum+=i
// }
// console.log(sum)

let a=0
let b=1
for(let i=2;i<=5;i++){
    let temp=a+b
    let a=b
    let b=temp
    console.log(temp)
}
