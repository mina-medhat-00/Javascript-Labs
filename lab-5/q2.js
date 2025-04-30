const $form = document.querySelector("#student-form");
const $name = document.querySelector("#name");
const $grade = document.querySelector("#grade");
const $nameError = document.querySelector("#name-error");
const $gradeError = document.querySelector("#grade-error");
const $departmentError = document.querySelector("#department-error");
const $table = document.getElementsByTagName("table")[0].tBodies[0];
const $sort = document.querySelector("#sort");
const $filter = document.querySelector("#filter");

const records = [];

// Event Listeners
$sort.onchange = () => {
  const sortOption = $sort.options.selectedIndex;
  if (sortOption === 0) {
    records.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    renderTable(records);
  } else if (sortOption === 1) {
    records.sort((a, b) => {
      if (a.grade > b.grade) return 1;
      if (a.grade < b.grade) return -1;
      return 0;
    });
    renderTable(records);
  }
};

$filter.onchange = () => {
  const filterOption = $filter.options.selectedIndex;
  if (filterOption === 0) {
    renderTable(records);
  } else if (filterOption === 1) {
    const filteredTable = records.filter((student) => student.grade > 60);
    renderTable(filteredTable);
  } else if (filterOption === 2) {
    const filteredTable = records.filter((student) => student.grade < 60);
    renderTable(filteredTable);
  }
};

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const $department = document.querySelector(
    'input[name="department"]:checked'
  );
  $nameError.textContent = "";
  $gradeError.textContent = "";
  $departmentError.textContent = "";

  if (
    validateName($name.value) &&
    validateGrade($grade.value) &&
    validateDepartment($department)
  ) {
    records.push({
      name: pascalCase($name.value),
      grade: Number($grade.value),
      department: $department.value,
    });
    renderTable(records);
  }
  $form.reset();
});

// Functions
function pascalCase(name) {
  return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
}

function renderTable(data) {
  // reset table content
  while ($table.firstChild) {
    $table.removeChild($table.firstChild);
  }
  // iterate over all records from scratch, adding them to table
  data.forEach((student, index) => {
    const tr = document.createElement("tr");
    for (let key in student) {
      // add each student attribute to row
      const td = document.createElement("td");
      td.innerText = student[key];
      tr.appendChild(td);
    }
    // create delete button and append to records
    const td = document.createElement("td");
    const button = document.createElement("button");
    button.innerText = "X";
    button.onclick = () => {
      removeRecord(index);
    };
    td.appendChild(button);
    tr.appendChild(td);
    // add row to table
    $table.appendChild(tr);
  });
}

function removeRecord(index) {
  records.splice(index, 1);
  renderTable(records);
}

// Validators
function validateName(name) {
  name = name.trim();
  if (name.length === 0) {
    $nameError.textContent = "student name cannot be empty";
    return false;
  }
  if (records.some((student) => student.name === pascalCase(name))) {
    $nameError.textContent = "student name already exists";
    return false;
  }
  return true;
}

function validateGrade(grade) {
  grade = grade.trim();
  if (grade.length === 0) {
    $gradeError.textContent = "student grade cannot be empty";
    return false;
  }
  if (isNaN(grade)) {
    $gradeError.textContent = "student grade must be a number";
    return false;
  }
  if (grade < 0 || grade > 100) {
    $gradeError.textContent = "student grade must be between 0 and 100";
    return false;
  }
  return true;
}

function validateDepartment(department) {
  if (!department) {
    $departmentError.textContent = "no department selected";
    return false;
  }
  return true;
}
