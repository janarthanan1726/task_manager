const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const totalTasksCount = document.getElementById("totalTasks");
const completedTasksCount = document.getElementById("completedTasks");

let totalTasks = 0;
let completedTasks = 0;


function updateTaskCount() {
  totalTasksCount.textContent = totalTasks;
  completedTasksCount.textContent = completedTasks;
}
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
      <input type="checkbox" class="task-checkbox form-check-input">
      <span>${taskText}</span>
      <button type="button" class="delete-btn btn btn-dark my-2">Delete</button>
      
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
    totalTasks++;
    updateTaskCount();

   
    taskItem.style.animation = "fade-in 0.3s ease-in forwards";
  }
}

function deleteTask(event) {
  if (event.target.classList.contains("delete-btn")) {
    const taskItem = event.target.parentElement;
    taskItem.style.animation = "fade-out 0.3s ease-in forwards";

  
    setTimeout(() => {
      taskList.removeChild(taskItem);
    }, 300);

    totalTasks--;
    updateTaskCount();
  }
}
function completeTask(event) {
  if (event.target.classList.contains("task-checkbox")) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle("completed");
    if (taskItem.classList.contains("completed")) {
      completedTasks++;
    } else {
      completedTasks--;
    }
    updateTaskCount();
  }
}


taskInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {

    addTask();
  }
});

taskList.addEventListener("click", function (event) {
  deleteTask(event);
  completeTask(event);
});
