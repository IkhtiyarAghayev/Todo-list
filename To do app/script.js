const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("button");
const completedlist = document.getElementById("completedlist-container");
const deleteBtn = document.getElementById("delete-btn");


document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
});

function addTask() {
    if (inputBox.value === '') {
        alert("Task cannot be empty!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        // e.target.classList.toggle("checked");
        let li = document.createElement("li");
        li.innerHTML = e.target.innerHTML;
        completedlist.appendChild(li);
        li.classList.add("checked");
        e.target.remove();
        CompletedTaskData();
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    if (completedlist.children.length > 0) {
        deleteBtn.classList.remove("disabled");
    }

}), false;

completedlist.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        let li = document.createElement("li");
        li.innerHTML = e.target.innerHTML;
        listContainer.appendChild(li);
        e.target.remove();
        CompletedTaskData();
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        CompletedTaskData();
    }
    if (completedlist.children.length === 0) {
        deleteBtn.classList.add("disabled");
    }
})
deleteBtn.addEventListener("click", () => {
    completedlist.innerHTML = "";
    deleteBtn.classList.add("disabled");
    CompletedTaskData();
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function CompletedTaskData() {
    localStorage.setItem("data2", completedlist.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    completedlist.innerHTML = localStorage.getItem("data2");

    if (completedlist.children.length > 0) {
        deleteBtn.classList.remove("disabled");
    }
    console.log(completedlist);
}
showTask();