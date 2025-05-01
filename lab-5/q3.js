const $taskForm = document.querySelector("#task-form");
const $taskInput = document.querySelector("#task");
const $table = document.querySelector("#task-table").tBodies[0];

$taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = $taskInput.value;
  addTask(task);
  $taskForm.reset();
  $taskInput.focus();
});

function addTask(task) {
  const tr = document.createElement("tr");
  const checkedCell = document.createElement("td");
  const taskCell = document.createElement("td");
  const deleteCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  const checked = document.createElement("input");

  checked.setAttribute("type", "checkbox");
  checked.onclick = () => {
    taskCell.style.textDecoration = "line-through";
    checked.disabled = true;
  };
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    tr.remove();
  };

  taskCell.textContent = task;

  checkedCell.appendChild(checked);
  deleteCell.appendChild(deleteBtn);
  tr.append(checkedCell, taskCell, deleteCell);
  $table.appendChild(tr);
}
