// synchronus
// console.log("step 1 is done")
// console.log("step 2 is done")
// console.log("step 3 is done")


// asynchronus

// console.log("step 1 done")
// setTimeout(()=>{
//     console.log("step 2 done")
// },2000)
// console.log("step 3 is done")


// callback

// function HomeWork(subject,callback){
//     setTimeout(()=>console.log(subject + "homework finished"),2000)
//     callback()
// }
// function finished(){
//        console.log("homework finished compleately")
// }
// HomeWork("maths",finished)


// setTimeout(()=>{ 
//     console.log("step 1 done")
//     setTimeout(()=>{
//         console.log("step 2 done")
//         setTimeout(()=>{
    
//             console.log("step 3 done")
//             setTimeout(()=>{
//                 console.log("set 4 done")
//             },2000)
//         },2000)
//     },2000)
// },2000)


function BoilWater(callback){
    setTimeout(()=>{
        console.log("Boiling the water")
        callback()
    },5000)
}
function AddNoodles(callback){
    setTimeout(()=>{
        console.log("adding noodles")
        callback()
    },2000)
}
function AddMasala(callback){
    setTimeout(()=>{
        console.log("masala added")
    },2000)
}
function serve(){
    setTimeout(()=>{
        console.log("maggie served")
    })
}
BoilWater(()=>{
    AddNoodles(()=>{
      AddMasala(()=>{
        serve()

      })
    })
})