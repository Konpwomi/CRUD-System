let selectedrow = null;


function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}


function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#phone").value = "";
}



//Add Data Function
document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const phone = document.querySelector("#phone").value;

    if(firstName == "" || lastName == "" || phone == ""){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selectedrow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${phone}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedrow = null;
            showAlert("student Added", "success");
        }
        else{
            selectedrow.children[0].textContent = firstName;
            selectedrow.children[1].textContent = lastName;
            selectedrow.children[2].textContent = phone;
            selectedrow = null;
            showAlert("Student Into Edited","info");
        }
        clearFields();
    }
});



//Edit Data Function
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedrow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedrow.children[0].textContent;
        document.querySelector("#lastName").value = selectedrow.children[1].textContent;
        document.querySelector("#phone").value = selectedrow.children[2].textContent;
    }
});


//Delete Data Function

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
});