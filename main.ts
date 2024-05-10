function addTask(): void {
    const input: HTMLInputElement | null = document.getElementById("taskInput") as HTMLInputElement;
    if (!input || input.value === "") {
        alert("Please enter a task!");
        return;
    }
    const ul: HTMLElement | null = document.getElementById("taskList");
    if (!ul) return;

    const li: HTMLLIElement = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";

    // Add delete functionality
    const span: HTMLSpanElement = document.createElement("span");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function (event): void {
        const div: HTMLElement | null = (event.target as HTMLElement).parentElement;
        if (div) div.style.display = "none";
    };
}
