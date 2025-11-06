// function is a reusable block of code that performs a specific task
// we should invoke a function
// creating a function /declare
// syntax:
// function function_name(){
    //block of code 
// }
// function_name()
// named function
function add(){
    var a=3
    var b=4
    var c=a+b
    console.log(c)
    document.write(c)
}
add()
// parameterized function
function mul(a,b){
    console.log(a*b)
    document.write(a*b)
}
mul(2,3)