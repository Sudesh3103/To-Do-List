document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);
      taskInput.value = "";

      taskItem.addEventListener("click", function() {
        taskItem.classList.toggle("completed");
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", function() {
        taskItem.remove();
      });
      taskItem.appendChild(deleteBtn);
    }
  });

  // Functionality to mark task as completed
  taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("completed");
    }
  });
});
