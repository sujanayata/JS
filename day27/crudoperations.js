
let data=[]
let editIndex=-1;  //it will be in creation mode
function createData(){
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    if(editIndex===-1){
        data.push({name,email}) //creating mode

    }
    else{
        data[editIndex].name=name //updating mode
        data[editIndex].email=email
        editIndex=-1
    }
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    Displaydata();

}

function Displaydata(){
    let table="";
    data.forEach((item,index)=>{
        table+=`<tr>
               <td>${item.name}</td>
               <td>${item.email}</td>
               <td><button onclick="deletebutton(${index})">Delete</button></td>
               <td><button onclick="editbutton(${index})">Edit</button></td> 
               </tr>
    `
})
    document.getElementById('tbody').innerHTML=table
}

function deletebutton(i){
    data.splice(i,1)
    Displaydata();
}
function editbutton(i){
    document.getElementById('name').value=data[i].name
    document.getElementById('email').value=data[i].email
    editIndex=i
}

