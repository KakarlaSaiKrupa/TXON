document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(text) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${text}</span>
            <button class="delete">Delete</button>
            <button class="complete">Complete</button>
        `;
        taskList.appendChild(taskItem);

        taskItem.querySelector(".complete").addEventListener("click", function () {
            taskItem.classList.toggle("completed");
        });

        taskItem.querySelector(".delete").addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });
    }

    // Add filtering logic (you can implement this part)
    const allTasksButton = document.getElementById("all-tasks");
    const completedTasksButton = document.getElementById("completed-tasks");
    const uncompletedTasksButton = document.getElementById("uncompleted-tasks");

    // Implement filter logic here
});

