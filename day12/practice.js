
// hoisting is the behaviour of calling variables,functions before declaration

// variable hosting
// console.log(name);
// var name="sujana" ; //output:undefined


// var x;     // Declaration is hoisted
// console.log(x); // undefined
// x = 5;     // Initialization stays here


// function hoisting

//Function declarations are fully hoisted, so you can call them before they appear in code
// greet()
// function greet(){
//     console.log("hello!")
// }

// console.log(a)
// let a=10          //reference error

//let and const are also hoisted but 
// placed in a “Temporal Dead Zone (TDZ)” —
// you can’t access them before their declaration.

// a()
// var a=function(){
//     console.log("sujana")  //type error
// }



// forin-->it is used with objects
// var person={
//     name:"sujana",
//     age:23,
//     place:"hyderabad"
// }
// for(let p in person){
//     console.log(`${p}:${person[p]}`)
// }

// forof

var frds=["suppu","chitti","maggie","shannu","navee"]
for(let f of frds){
    console.log(`Bonded for life:${f}`)
}


var frds=["suppu","chitti","maggie","shannu","navee"]
for(let f in frds){
    console.log(`Bonded for life:${f}`)
}


    
    
