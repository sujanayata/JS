let data = [];
let editIndex = -1;

function createData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let location = document.getElementById('location').value;
    let dob = document.getElementById('dob').value;
    let skills = document.getElementById('skills').value;

    if (editIndex === -1) {
        // Create new record
        data.push({ name, email, phone, location, dob, skills });
    } else {
        // Update existing record
        data[editIndex] = { name, email, phone, location, dob, skills };
        editIndex = -1;
    }

    clearForm();
    Displaydata();
}

function Displaydata() {
    let table = "";

    data.forEach((item, index) => {
        table += `
        <tr>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>${item.location}</td>
            <td>${item.dob}</td>
            <td>${item.skills}</td>

            <td><button class="edit-btn" onclick="editbutton(${index})">Edit</button></td>
            <td><button class="delete-btn" onclick="deletebutton(${index})">Delete</button></td>
        </tr>`;
    });

    document.getElementById('tbody').innerHTML = table;
}

function deletebutton(i) {
    data.splice(i, 1);
    Displaydata();
}

function editbutton(i) {
    let item = data[i];

    document.getElementById('name').value = item.name;
    document.getElementById('email').value = item.email;
    document.getElementById('phone').value = item.phone;
    document.getElementById('location').value = item.location;
    document.getElementById('dob').value = item.dob;
    document.getElementById('skills').value = item.skills;

    editIndex = i;
}

function clearForm() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('location').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('skills').value = "";
}
