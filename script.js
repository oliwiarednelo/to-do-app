let form = document.getElementById("form");
let input = document.getElementById("input");

let tasks = document.getElementById("tasks");
let card = document.getElementById("card");
let nameInput = document.getElementById("nameInput")

form.addEventListener("submit", (e) => {
e.preventDefault();
console.log("button-clicked");
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        console.log("failure");
    } else {
        acceptData();
    }
};

let data = {};

let acceptData = () => {
data["text"] = input.value;
data["name"] = nameInput.value
console.log(data);
addTask();
};

let addTask = () => {
tasks.innerHTML +=
`
<div>
<div id="card">
<div id="options">
<i onClick="editTask(this)"class="fa-solid fa-pen-to-square"></i>
<i  onClick="deleteTask(this)" class="fa-solid fa-trash"></i>
</div>

<div class="title">${data.name}</div>

<p class="body-text">${data.text}</p>


</div>
</div>
`;
input.value = "";
nameInput.value = "";
};

let editTask = (e) => {
   let selectedTask = e.parentElement.parentElement;
   nameInput.value = selectedTask.children[1].innerText;
   input.value = selectedTask.children[2].innerText;
   e.parentElement.parentElement.remove();
}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
}

