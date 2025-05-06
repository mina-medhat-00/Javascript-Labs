const $taskForm = document.querySelector("#task-form");
const $taskInput = document.querySelector("#task");
const $table = document.querySelector("#task-table").tBodies[0];

$taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask($taskInput.value);
  $taskForm.reset();
  $taskInput.focus();
});

function addTask(task) {
  task = task.trim();
  if (task.length !== 0) {
    const tr = document.createElement("tr");
    const checkedCell = document.createElement("td");
    const taskCell = document.createElement("td");
    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("i");
    const checkedInput = document.createElement("input");

    taskCell.textContent = task;
    checkedInput.setAttribute("type", "checkbox");
    deleteBtn.classList.add("fa-solid", "fa-trash");
    checkedInput.onclick = () => {
      if (checkedInput.checked) {
        taskCell.style.textDecoration = "line-through";
      } else {
        taskCell.style.textDecoration = "none";
      }
    };
    deleteBtn.onclick = () => {
      tr.remove();
    };

    checkedCell.appendChild(checkedInput);
    deleteCell.appendChild(deleteBtn);
    tr.append(checkedCell, taskCell, deleteCell);
    $table.appendChild(tr);
  }
}
