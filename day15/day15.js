// scopes-->
// scope is an availability of the variable in the javascript

// different types of scopes
// --------------------------
// 1.Global scope--> the variable which are accesible throughout the function

var a=86
function fun_name(){
    console.log(a)  //value is accessed inside the function
    if(true){
        console.log(a) //value accesed inside the block
    }
}
console.log(a)  // value can be accessed outside the function also
fun_name()

// 2.local scope/ functional scope
// -->the variable which is accessed within the function itself 

function add(){
    var name="suppu"
    console.log(`The girl name is: ${name}`) //variable accessed inside the function
    }
if(20==20){
        console.log(`The girl name is:${name}`) //we cant access outside the function
    }
    console.log(name) //we cant access outside the function
add()



// 3.blocked scope -->the variable can be accessed within the block itself
// but ,the variable associated with var keyword, can be accessed with in that function also

function num(){
    if(true){
        let name ="dora"
        console.log(name+"likes biryani")
    }
    console.log(name+"likes biryani")
}
num()

// 4.lexical scope -->calling / accessing the parent variable in the child function
// but, the variable from the child function cannot be accessed inside the parent function

function parent(){
    var a=96
    function child(){
        var b=24
        var c=a+b
        console.log(c)
    }
    child()
}
parent()


// 1 given 3 int values A,B,C returns their sum
// c1-->if any one value of A,B,C is 13 then it should not return their sum
// c2-->if A value is 13 then return 0 as sum
// c3-->if B is 13, then return A value

function sum(a,b,c){
    if(a==13){
        return 0
    }
    else if(b==13){
        return a
    }
    else if (a==13|| b==13 || c==13){
        return "nothing"
}
}
console.log(sum(3,13,3))


// clousers
// ----------------------
// its accessing the variable from the outer function inside the inner function
// even after the completion of the outerfunction execution , it will be holding the variable data

function outer(){
    var a=10
    function inner(){
        console.log(a)
    }
    return inner()
}
var result = outer()
result




 
