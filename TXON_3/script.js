const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";

        // Add delete functionality
        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });
    }
}
