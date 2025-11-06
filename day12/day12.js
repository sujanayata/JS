
// hoisting
// console.log(food)
// var food="mushroom biryani"
// console.log(food)

// var food;
// console.log(food)
// food="masroom biryani"

// console.log(name)
// let name="sundra"  //ReferenceError: Cannot access 'name' before initialization


// let name;  //TDZ temporal dead zone
// console.log(name)
// name="sundra";
// console.log(name)


// console.log(chocolate)
// const chocolate="diary milk"

// const chocolate;
// console.groupCollapsed(chocolate);
// chocolate="diary milk"

// function hoisting
// add(10,20)
// function add(a,b){
//     console.log(a+b)
// }

// meetup()
// var meetup=()=>{
//     console.log("sudra went to meet sundri in rain") 
//     //function expressions cannot be hoisted
// }


// a()
// var a=function(){
//     console.log("hii")
// }


// forIn()
// var person={
//     name:"johney",
//     age:23,
//     place:"warangal"
// }
// for(var per in person){
//     console.log(`${per}:${person[per]}`)
// }

// var colors=["blue","white","red","green","yellow","black"]
// for(var col of colors){
//     console.log(`the colors are ${col}`)
// }

// var colors=["blue","white","red","green","yellow","black"]
// for(var col in colors){
//      console.log(`the colors are ${col}`)
//  }


// var person={
//     name:"johney",
//     age:23,
//     place:"warangal"
// }
// for(var per of person){
//     console.log(`${per}:${person[per]}`)
// }
