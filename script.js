var input = document.getElementById("input_box")
var show_task = document.getElementById("list_task_container")
var buttonClick = document.getElementById("onclick")

function validate() {
    if(input.value === '') {
        alert("You must type somthing")
    } else {
        let li = document.createElement("li")
        li.innerHTML = input.value;
        show_task.appendChild(li)
        let i = document.createElement("i")
        i.classList.add("ti-close")
        li.appendChild(i)
    }
    input.value = "";
    saveData()
}

buttonClick.addEventListener("click", function() {
    validate()
})

input.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        validate()
    }
})

show_task.addEventListener("click", function(e) {
    if(e.target.tagName == "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName == "I") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", show_task.innerHTML);
}

function showData() {
    show_task.innerHTML = localStorage.getItem("data");
}

showData()