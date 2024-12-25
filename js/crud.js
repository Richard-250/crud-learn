// Initialize data from localStorage or use default data
let storedData = localStorage.getItem('object');
let data = storedData
    ? JSON.parse(storedData)
    : [
        { id: 1, name: "Cyubahiro", email: "cyubahiro@gmail.com" },
        { id: 2, name: "Fidele", email: "fidele@gmail.com" },
    ];

// Function to render table data
function readAll() {
    var tbdata = document.querySelector('.table_data');
    var elements = "";

    data.forEach(d => {
        elements += `<tr>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td> 
                <button onclick="edit(${d.id})" class="btnn">Update</button>
                <button onclick="delet(${d.id})">Delete</button>
            </td>
        </tr>`;
    });

    tbdata.innerHTML = elements;

    // Save updated data to localStorage
    localStorage.setItem('object', JSON.stringify(data));
}

// Show the create form
function createForm() {
    document.querySelector('.create_form').style.display = "block";
    document.querySelector('.addbtn').style.display = "none";
}

// Add a new record
function add() {
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;

    var newObj = { id: data.length + 1, name, email };
    data.push(newObj);

    // Hide the create form and reset visibility
    document.querySelector('.create_form').style.display = "none";
    document.querySelector('.addbtn').style.display = "block";

    readAll();
}

// Show the update form and populate it with existing data
function edit(id) {
    document.querySelector('.update_form').style.display = "block";
    document.querySelector('.addbtn').style.display = "none";

    var updateObj = data.find(f => f.id === id);

    document.querySelector('.update_id').value = updateObj.id;
    document.querySelector('.uname').value = updateObj.name;
    document.querySelector('.uemail').value = updateObj.email;
}

// Update an existing record
function update() {
    var id = Number(document.querySelector('.update_id').value);
    var name = document.querySelector('.uname').value;
    var email = document.querySelector('.uemail').value;

    var updateObj = { id, name, email };

    var index = data.findIndex(f => f.id === id);
    if (index !== -1) {
        data[index] = updateObj;
    }

    // Hide the update form and reset visibility
    document.querySelector('.update_form').style.display = "none";
    document.querySelector('.addbtn').style.display = "block";

    readAll();
}

// Delete a record
function delet(id) {
    data = data.filter(f => f.id !== id);

    readAll();
}

// Initial rendering
readAll();


