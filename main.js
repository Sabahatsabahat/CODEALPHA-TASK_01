"use strict";
function addTask() {
    const input = document.getElementById("taskInput");
    if (!input || input.value === "") {
        alert("Please enter a task!");
        return;
    }
    const ul = document.getElementById("taskList");
    if (!ul)
        return;
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
    // Add delete functionality
    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = function (event) {
        const div = event.target.parentElement;
        if (div)
            div.style.display = "none";
    };
}
